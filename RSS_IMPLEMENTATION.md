# RSS Feed Generation

## Overview

The project now automatically generates an RSS feed (`rss.xml`) every time the project is built. This feed includes all published blog posts and is updated automatically during compile, build, and release cycles.

## How It Works

### Script: `scripts/generate-rss.cjs`

The RSS generation script:

1. **Scans blog posts** in `src/content/blog/` directory
2. **Parses YAML frontmatter** from each markdown file using `gray-matter`
3. **Filters draft posts** (posts with `draft: true` are excluded)
4. **Extracts metadata** including:
   - Title
   - Publication date
   - Author
   - Category
   - Tags
   - Description/snippet
   - Image (if available)

5. **Generates valid RSS 2.0 XML** with:
   - Proper XML escaping for special characters
   - RFC 2822 date format for publication dates
   - Post links pointing to `/blog/{slug}`
   - Tag support
   - Featured image support

6. **Outputs** to `public/rss.xml`

### Build Integration

The RSS generation is integrated into the build pipeline:

```json
"build": "node scripts/increment-version.cjs && node scripts/generate-sitemap.cjs && node scripts/generate-rss.cjs && astro build"
```

This ensures:
- **Dev environment**: Run `npm run dev` (optional, RSS is already in public/)
- **Production build**: `npm run build` automatically regenerates `rss.xml` with all latest posts
- **Preview**: `npm run preview` serves the generated feed

## Configuration

### Environment Variable

Set the `SITE_URL` environment variable to customize the base URL in the RSS feed:

```bash
export SITE_URL=https://yourdomain.com
```

Default: `https://palportals.com`

### Customizing Feed Content

Edit `scripts/generate-rss.cjs` to customize:

- **Channel title**: Line with `<title>PAL Portals - Blog</title>`
- **Description**: Line with `<description>Stay updated with the latest insights...</description>`
- **Language**: `<language>en-us</language>`
- **Logo URL**: `<url>${SITE_URL}/logo.png</url>`

## Post Requirements

For posts to appear in the RSS feed, they must have:

```yaml
---
draft: false  # Must not be marked as draft
title: "Your Post Title"
snippet: "Brief description"
publishDate: "2025-12-31 10:00"
author: "Author Name"
category: "Category"
---
```

## Output Format

The generated `public/rss.xml` includes:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>PAL Portals - Blog</title>
    <link>https://palportals.com</link>
    <description>...</description>
    <item>
      <title>Post Title</title>
      <link>https://palportals.com/blog/post-slug</link>
      <guid>...</guid>
      <pubDate>Fri, 26 Dec 2025 07:09:00 GMT</pubDate>
      <description>...</description>
      <author>Author Name</author>
      <category>Category</category>
      <tag>Tag1</tag>
      <tag>Tag2</tag>
      <image>...</image>
    </item>
  </channel>
</rss>
```

## Dependencies

The script requires the `gray-matter` package (v4.0.3+), which is now included in `package.json`.

## Testing the RSS Feed

After building, verify the feed:

1. **Validate XML**: Use an XML validator (https://www.xmlvalidation.com/)
2. **Test subscription**: Import the URL into an RSS reader
3. **Check structure**: View the raw XML in a browser at `https://yourdomain.com/rss.xml`

## Automation

The RSS feed is automatically regenerated in these scenarios:

- ✅ Running `npm run build` (production build)
- ✅ Deploying to production
- ✅ Releasing a new version
- ✅ Adding/updating any blog post
- ✅ Any commit that triggers the build pipeline

## Troubleshooting

### RSS file not generated

1. Ensure `gray-matter` is installed: `npm install`
2. Check that `src/content/blog/` directory exists with `.md` files
3. Verify posts don't have `draft: true`

### Feed validation errors

1. Check `scripts/generate-rss.cjs` for XML escaping issues
2. Ensure all blog post frontmatter is valid YAML
3. Verify publish dates are in correct format: `YYYY-MM-DD HH:MM`

### Posts not appearing

- Ensure `draft: false` in frontmatter
- Verify file is in `src/content/blog/` directory
- Check that filename is `.md` extension
- Run `node scripts/generate-rss.cjs` manually to debug
