const fs = require("fs/promises");
const path = require("path");

const termsDir = path.join(process.cwd(), "src/content/blog/social-media-terms");
const outDir = path.join(process.cwd(), "public/assets/blog/social-media-terms");

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toTitleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function wrapText(text, maxLen) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxLen && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines.slice(0, 2);
}

function generateSvg({ slug, title }) {
  const seed = hashString(slug);
  const h1 = seed % 360;
  const h2 = (h1 + 45) % 360;
  const h3 = (h1 + 95) % 360;
  const hc1 = (h1 + 190) % 360;
  const hc2 = (h1 + 245) % 360;

  const displayTitle = escapeXml(title);
  const titleLines = wrapText(title, 20).map(escapeXml);
  const titleLineHeight = 86;
  const titleStartY = 315 - ((titleLines.length - 1) * titleLineHeight) / 2;

  const titleSvg = titleLines
    .map(
      (line, index) =>
        `<text x="600" y="${titleStartY + (index * titleLineHeight)}" text-anchor="middle" font-size="72" font-weight="800" letter-spacing="0.2">${line}</text>`
    )
    .join("\n    ");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc" preserveAspectRatio="xMidYMid slice">
  <title id="title">${displayTitle} - Social Media Term</title>
  <desc id="desc">Vibrant branded cover for ${displayTitle}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${h1}, 78%, 46%)" />
      <stop offset="45%" stop-color="hsl(${h2}, 74%, 42%)" />
      <stop offset="100%" stop-color="hsl(${h3}, 72%, 38%)" />
    </linearGradient>
    <linearGradient id="titleHighlight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hc1}, 95%, 94%)" />
      <stop offset="100%" stop-color="hsl(${hc2}, 95%, 82%)" />
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18" />
    </filter>
    <filter id="titlePop" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.45)" />
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="rgba(0,0,0,0.28)" />
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />

  <g opacity="0.45" filter="url(#blur)">
    <circle cx="130" cy="110" r="120" fill="rgba(255,255,255,0.5)" />
    <circle cx="1110" cy="90" r="140" fill="rgba(255,255,255,0.22)" />
    <circle cx="1060" cy="560" r="180" fill="rgba(0,0,0,0.18)" />
  </g>

  <g opacity="0.35">
    <circle cx="600" cy="315" r="205" fill="rgba(255,255,255,0.12)" />
    <circle cx="600" cy="315" r="255" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
  </g>

  <g font-family="Poppins, Montserrat, Arial, sans-serif" fill="#0f172a">
    <g fill="url(#titleHighlight)" filter="url(#titlePop)" stroke="rgba(3,7,18,0.45)" stroke-width="1.3" paint-order="stroke fill">
      ${titleSvg}
    </g>
  </g>

  <g fill="none" stroke="rgba(15,23,42,0.24)" stroke-width="3">
    <path d="M770 190 C890 140, 1020 220, 1080 170" />
    <path d="M790 250 C900 200, 980 290, 1080 260" />
    <path d="M780 312 C900 280, 1010 360, 1090 330" />
  </g>
</svg>
`;
}

function updateImageBlocks(content, slug) {
  const imagePath = `/assets/blog/social-media-terms/${slug}.svg`;

  let updated = content.replace(
    /image:\s*\{\s*src:\s*"[^"]*",\s*alt:\s*"([^"]*)"\s*\}/m,
    (match, alt) => `image: {\n  src: \"${imagePath}\",\n  alt: \"${alt}\"\n}`
  );

  updated = updated.replace(
    /bigImg:\s*\{\s*src:\s*"[^"]*",\s*alt:\s*"([^"]*)"\s*\}/m,
    (match, alt) => `bigImg: {\n  src: \"${imagePath}\",\n  alt: \"${alt}\"\n}`
  );

  return updated;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const fileNames = (await fs.readdir(termsDir)).filter((name) => name.endsWith(".md"));

  for (const fileName of fileNames) {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(termsDir, fileName);
    const raw = await fs.readFile(filePath, "utf8");

    const titleMatch = raw.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : toTitleFromSlug(slug);
    const svg = generateSvg({ slug, title });
    const svgPath = path.join(outDir, `${slug}.svg`);
    await fs.writeFile(svgPath, svg, "utf8");

    const updated = updateImageBlocks(raw, slug);
    await fs.writeFile(filePath, updated, "utf8");
  }

  console.log(`Generated and linked SVG images for ${fileNames.length} social-media-terms posts.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
