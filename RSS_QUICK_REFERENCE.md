# RSS Feed Quick Reference

## What was implemented

✅ **Automatic RSS feed generation** for blog posts that runs during every build

## File locations

- **Script**: [scripts/generate-rss.cjs](scripts/generate-rss.cjs)
- **Output**: `public/rss.xml` (auto-generated)
- **Documentation**: [RSS_IMPLEMENTATION.md](RSS_IMPLEMENTATION.md)

## How it works

1. **Automatic on build**: `npm run build` generates `rss.xml` automatically
2. **Scans blog posts** from `src/content/blog/`
3. **Includes all non-draft posts** (excludes posts with `draft: true`)
4. **Generates valid RSS 2.0** XML feed
5. **Feed accessible at**: `https://yourdomain.com/rss.xml`

## For developers

### Adding a new blog post

Just create a markdown file in `src/content/blog/` with proper frontmatter:

```yaml
---
draft: false
title: "Your Post Title"
snippet: "Brief description"
publishDate: "2025-12-31 10:00"
author: "Your Name"
category: "Category"
tags: [Tag1, Tag2]
image:
  src: "/assets/blog/image.jpg"
  alt: "Description"
---
```

The RSS feed will automatically include it on the next build!

### Testing the RSS feed

```bash
# Generate RSS manually
node scripts/generate-rss.cjs

# Build the project (generates RSS + runs Astro build)
npm run build

# View the generated feed
cat public/rss.xml
```

### Customizing the feed

Edit [scripts/generate-rss.cjs](scripts/generate-rss.cjs) to change:
- Feed title, description, language
- Logo/image URL
- Any other metadata

### Environment variables

Set `SITE_URL` before building to customize the base URL:

```bash
SITE_URL="https://yourdomain.com" npm run build
```

Default: `https://palportals.com`

## Integration points

- **Build pipeline**: Runs before `astro build` in the build script
- **HTML head**: Added RSS link to [src/layouts/Layout.astro](src/layouts/Layout.astro)
- **Package.json**: Added `gray-matter` dependency for parsing frontmatter

## RSS feed features

- 📰 Post titles, descriptions, and links
- 👤 Author information
- 🏷️ Category and tags
- 📅 Publication dates (RFC 2822 format)
- 🖼️ Featured images
- 🔗 Proper permalinks
- ✅ XML escaping for special characters
- 📝 Latest posts first

## Troubleshooting

**Posts not in feed?**
- Check `draft: false` in frontmatter
- Ensure file is in `src/content/blog/`
- Verify file extension is `.md`

**Feed validation issues?**
- Validate at https://www.xmlvalidation.com/
- Check YAML frontmatter syntax
- Ensure dates are in format: `YYYY-MM-DD HH:MM`

**Questions?**
- See [RSS_IMPLEMENTATION.md](RSS_IMPLEMENTATION.md) for full documentation
