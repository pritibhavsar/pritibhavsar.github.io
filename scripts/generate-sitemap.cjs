const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Load environment variables from project .env (if dotenv is installed)
try {
  require('dotenv').config({ path: path.join(process.cwd(), '.env') });
} catch (e) {
  // dotenv not installed — script will fallback to process.env
}

const SITE_URL = process.env.SITE_URL || 'https://palportals.com';
const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');

function isoDate(ms) {
  return new Date(ms).toISOString().split('T')[0];
}

function gitLastMod(fullPath) {
  try {
    const rel = path.relative(process.cwd(), fullPath).replace(/\\/g, '/');
    const out = execSync(`git log -1 --format=%cI -- "${rel}"`, { encoding: 'utf8' }).trim();
    if (out) return out.split('T')[0];
  } catch (e) {
    // not a git repo or file not committed
  }
  try {
    const stat = fs.statSync(fullPath);
    return isoDate(stat.mtimeMs);
  } catch (e) {
    return isoDate(Date.now());
  }
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function collectPages() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const items = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name.startsWith('_')) continue;
        walk(full);
      } else {
        // include .astro, .md, .html
        if (!/\.(astro|md|html)$/i.test(e.name)) continue;
        if (e.name === '404.astro' || e.name === '404.md') continue;

        // produce route
        const rel = path.relative(pagesDir, full);
        let route = '/' + rel.replace(/\\\\/g, '/');
        route = route.replace(/\.(astro|md|html)$/i, '');

        // handle index
        route = route.replace(/index$/i, '');
        if (!route.startsWith('/')) route = '/' + route;
        if (route.endsWith('/') && route !== '/') route = route.slice(0, -1) || '/';

        // skip dynamic routes like [slug].astro because those are covered by content/blog
        if (/\[.*\]/.test(route)) continue;

        const lastmod = gitLastMod(full);
        items.push({ loc: route === '' ? '/' : route, lastmod });
      }
    }
  }

  walk(pagesDir);
  return items;
}

function collectBlogPosts() {
  const candidateDirs = [
    path.join(process.cwd(), 'content', 'blog'),
    path.join(process.cwd(), 'src', 'content', 'blog'),
  ];

  const items = [];

  for (const blogDir of candidateDirs) {
    if (!fs.existsSync(blogDir)) continue;

    function walk(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
          walk(full);
          continue;
        }
        if (!/\.md$/i.test(e.name)) continue;

        const rel = path.relative(blogDir, full).replace(/\\/g, '/');
        let slugPath = rel.replace(/\.md$/i, '');
        // handle index.md inside subfolders -> /blog/subfolder
        slugPath = slugPath.replace(/\/index$/i, '');

        let loc = `/blog/${slugPath}`;
        // normalize trailing slash
        loc = loc.replace(/\/+$|\/$/, '/').replace(/\/+/g, '/');
        if (loc.endsWith('/') && loc !== '/blog/') loc = loc.slice(0, -1);
        if (loc === '/blog/') loc = '/blog';

        // prefer frontmatter `slug` if present
        let fmSlug = null;
        try {
          const content = fs.readFileSync(full, 'utf8');
          const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
          if (fmMatch) {
            const fm = fmMatch[1];
            const slugMatch = fm.match(/\n?slug\s*:\s*(?:"|')?([^\n"']+)(?:"|')?/i);
            if (slugMatch) fmSlug = slugMatch[1].trim();
          }
        } catch (e) {}

        if (fmSlug) {
          let s = fmSlug;
          if (!s.startsWith('/')) s = '/' + s;
          // ensure path begins with /blog if not absolute
          if (!s.startsWith('/blog')) s = `/blog${s}`;
          loc = s.replace(/\/+$|\/$/, '');
        }

        const lastmod = gitLastMod(full);
        items.push({ loc, lastmod });
      }
    }

    walk(blogDir);
  }

  return items;
}

function buildSitemap(entries) {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const footer = '</urlset>\n';
  const xml = [header];
  for (const e of entries) {
    const loc = escapeXml(`${SITE_URL}${e.loc}`);
    const lastmod = e.lastmod || isoDate(Date.now());
    const changefreq = e.changefreq || 'weekly';
    const priority = (e.priority !== undefined) ? e.priority : (e.loc === '/' ? '1.00' : '0.70');

    xml.push('  <url>\n');
    xml.push(`    <loc>${loc}</loc>\n`);
    xml.push(`    <lastmod>${lastmod}</lastmod>\n`);
    xml.push(`    <changefreq>${changefreq}</changefreq>\n`);
    xml.push(`    <priority>${priority}</priority>\n`);
    xml.push('  </url>\n');
  }
  xml.push(footer);
  return xml.join('');
}

function main() {
  const pages = collectPages();
  const posts = collectBlogPosts();

  // Merge and dedupe by loc
  const map = new Map();
  for (const p of pages.concat(posts)) {
    map.set(p.loc, p);
  }
  // Ensure homepage present
  if (!map.has('/')) {
    map.set('/', { loc: '/', lastmod: isoDate(Date.now()) });
  }

  const entries = Array.from(map.values()).sort((a, b) => a.loc.localeCompare(b.loc));
  const xml = buildSitemap(entries);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, xml, 'utf8');
  // also emit a machine-readable JSON sitemap
  try {
    const jsonOut = path.join(process.cwd(), 'public', 'sitemap.json');
    const jsonEntries = entries.map(e => ({
      loc: `${SITE_URL.replace(/\/$/, '')}${e.loc}`,
      lastmod: e.lastmod,
      changefreq: e.changefreq || 'weekly',
      priority: e.priority !== undefined ? e.priority : (e.loc === '/' ? '1.00' : '0.70')
    }));
    fs.writeFileSync(jsonOut, JSON.stringify({ urls: jsonEntries }, null, 2), 'utf8');
    console.log(`JSON sitemap written to ${jsonOut}`);
  } catch (e) {
    console.warn('Failed to write sitemap.json:', e.message);
  }
  console.log(`Sitemap written to ${outPath} (${entries.length} URLs).`);
  console.log('If you have a custom site URL, set the SITE_URL environment variable when building:');
  console.log('  SITE_URL="https://palportals.com" npm run build');
}

main();

// Ensure robots.txt references sitemap
function updateRobots() {
  try {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    let content = '';
    if (fs.existsSync(robotsPath)) content = fs.readFileSync(robotsPath, 'utf8');

    const sitemapLine = `Sitemap: ${SITE_URL.replace(/\/$/, '')}/sitemap.xml`;
    if (!/Sitemap:/i.test(content)) {
      if (content && !content.endsWith('\n')) content += '\n';
      content += `${sitemapLine}\n`;
    } else {
      // replace existing sitemap line
      content = content.replace(/Sitemap:\s*.*\r?\n?/i, sitemapLine + '\n');
    }

    // ensure Host present for some crawlers
    if (!/Host:/i.test(content)) {
      content += `Host: ${SITE_URL.replace(/https?:\/\//, '')}\n`;
    }

    fs.mkdirSync(path.dirname(robotsPath), { recursive: true });
    fs.writeFileSync(robotsPath, content, 'utf8');
    console.log(`robots.txt updated at ${robotsPath}`);
  } catch (e) {
    console.warn('Could not update robots.txt:', e.message);
  }
}

updateRobots();
