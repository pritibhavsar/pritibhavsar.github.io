const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = process.env.SITE_URL || 'https://palportals.com';
const outPath = path.join(process.cwd(), 'public', 'rss.xml');

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDate(dateString) {
  // Convert "2023-11-08 11:39" or Date to RFC 2822 format
  let date;
  if (typeof dateString === 'string') {
    date = new Date(dateString);
  } else if (dateString instanceof Date) {
    date = dateString;
  } else {
    date = new Date();
  }
  
  return date.toUTCString();
}

function getBlogPosts() {
  const candidateDirs = [
    path.join(process.cwd(), 'content', 'blog'),
    path.join(process.cwd(), 'src', 'content', 'blog'),
  ];

  const posts = [];

  for (const blogDir of candidateDirs) {
    if (!fs.existsSync(blogDir)) continue;

    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith('.md')) continue;

      const filePath = path.join(blogDir, entry.name);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      try {
        const { data, content } = matter(fileContent);
        
        // Skip draft posts
        if (data.draft === true) continue;

        // Extract slug from filename
        const slug = entry.name.replace(/\.md$/, '');

        // Get first 200 characters of content as description
        const description = content
          .replace(/[#*`\-\[\]()]/g, '')
          .substring(0, 200)
          .trim() + '...';

        posts.push({
          title: escapeXml(data.title || 'Untitled'),
          slug: slug,
          description: escapeXml(data.snippet || description),
          publishDate: data.publishDate || new Date(),
          author: escapeXml(data.author || 'Pimjolabs'),
          category: escapeXml(data.category || 'Blog'),
          tags: Array.isArray(data.tags) ? data.tags : [],
          image: data.image?.src || null,
        });
      } catch (err) {
        console.warn(`Warning: Could not parse ${filePath}:`, err.message);
      }
    }

    break; // Only process the first existing blog directory
  }

  // Sort by publish date, newest first
  posts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return posts;
}

function generateRssFeed(posts) {
  const buildDate = new Date().toUTCString();
  const lastBuildDate = posts.length > 0 ? formatDate(posts[0].publishDate) : buildDate;

  let itemsXml = '';

  for (const post of posts) {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const pubDate = formatDate(post.publishDate);

    itemsXml += `  <item>
    <title>${post.title}</title>
    <link>${postUrl}</link>
    <guid isPermaLink="true">${postUrl}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${post.description}</description>
    <author>${post.author}</author>
    <category>${post.category}</category>`;

    if (post.tags.length > 0) {
      for (const tag of post.tags) {
        itemsXml += `\n    <tag>${escapeXml(tag)}</tag>`;
      }
    }

    if (post.image) {
      itemsXml += `\n    <image>
      <url>${SITE_URL}${post.image}</url>
      <title>${post.title}</title>
      <link>${postUrl}</link>
    </image>`;
    }

    itemsXml += `\n  </item>\n`;
  }

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>PAL Portals - Blog</title>
    <link>${SITE_URL}</link>
    <description>Stay updated with the latest insights on AI, automation, and digital transformation</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <image>
      <url>${SITE_URL}/logo.png</url>
      <title>PAL Portals - Blog</title>
      <link>${SITE_URL}</link>
    </image>
${itemsXml}  </channel>
</rss>`;

  return rssContent;
}

function ensurePublicDir() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
}

function main() {
  console.log('📡 Generating RSS feed...');

  try {
    ensurePublicDir();
    const posts = getBlogPosts();
    const rssFeed = generateRssFeed(posts);

    fs.writeFileSync(outPath, rssFeed, 'utf-8');
    console.log(`✅ RSS feed generated successfully: ${outPath}`);
    console.log(`   Total posts in feed: ${posts.length}`);
  } catch (err) {
    console.error('❌ Error generating RSS feed:', err.message);
    process.exit(1);
  }
}

main();
