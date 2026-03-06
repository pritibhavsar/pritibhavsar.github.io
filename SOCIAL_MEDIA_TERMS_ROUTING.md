# Social Media Terms: Parent, Child Pages, and Routing

## Purpose
This document explains how the glossary is structured in the project, including:
- the parent glossary page
- all child term pages
- Astro routing behavior for flat vs nested blog slugs
- render component flow

## Content Structure

### Parent Glossary Page
- Content file: `src/content/blog/social-media-terms.md`
- URL: `/blog/social-media-terms`
- Role:
  - glossary index page
  - contains A-Z term links and short descriptions
  - links to each child term page

### Child Glossary Pages
- Content directory: `src/content/blog/social-media-terms/`
- URL pattern: `/blog/social-media-terms/<term-slug>`
- Total child pages: `102`
- Slug mapping rule:
  - file `src/content/blog/social-media-terms/engagement-rate.md`
  - renders at `/blog/social-media-terms/engagement-rate`

## Routing Architecture

### Flat Blog Slugs
- Route file: `src/pages/blog/[slug].astro`
- Static paths include only entries where slug does not contain `/`.
- Filter used:

```ts
.filter((entry: any) => !entry.slug.includes('/'))
```

### Nested Blog Slugs
- Route file: `src/pages/blog/[...slug].astro`
- Static paths include only entries where slug contains `/`.
- Filter used:

```ts
.filter((entry: any) => entry.slug.includes('/'))
```

### Why This Split Matters
- Prevents routing conflicts between flat and nested blog pages.
- Ensures glossary child pages under `social-media-terms/*` are built and served correctly.
- Keeps behavior deterministic for future nested sections.

## Render Flow

Both route files use the same rendering decision logic:
- if `entry.data.postDetails` is missing: render `PostMarkdown`
- else if `template === "standard"`: render `PostStandard`
- else if `template === "other"`: render `PostOther`
- otherwise: render `PostDefault`

Files:
- `src/pages/blog/[slug].astro`
- `src/pages/blog/[...slug].astro`

### Glossary-Specific UI
- Component: `src/components/blog/PostMarkdown.astro`
- Logic: glossary card styling is only applied when:

```ts
const isGlossaryIndexPage = entry.slug === 'social-media-terms';
```

- This keeps the card-style list layout scoped to the parent glossary page only.

## Child Page Inventory (102)

`affiliate-marketing`, `algospeak`, `analytics`, `batching`, `bereal`, `bio`, `bluesky`, `boomerang`, `boosted-post`, `brand-awareness`, `cac`, `campaign`, `caption`, `carousel-post`, `cfbr`, `character-counter`, `clickbait`, `community-manager`, `content-pillars`, `creator-economy`, `cross-posting`, `crowdsourcing`, `decentralized`, `demure`, `dm`, `emoji`, `engagement-rate`, `evergreen-content`, `fediverse`, `feed`, `finsta`, `follower-growth`, `fyp`, `gen-z`, `gif`, `google-business-profile`, `grwm`, `hashtag`, `impressions`, `influencer`, `instagram-broadcast-channel`, `instagram-close-friends`, `instagram-highlights`, `instagram-insights`, `instagram-notes`, `instagram-reels`, `instagram-threads`, `instagrammable`, `jpeg`, `keyword`, `kol`, `kpi`, `link-in-bio`, `linkedin-articles`, `linkedin-company-page`, `linkedin-creator-mode`, `linkedin-newsletter`, `linkedin-showcase-page`, `long-form-video`, `main-character-energy`, `marketing-funnel`, `meme`, `meta-business-suite`, `meta-verified`, `nps`, `ootd`, `organic-marketing`, `pfp`, `photo-dump`, `pov`, `quality-control`, `quiet-mode`, `reach`, `reddit`, `roi`, `sentiment-analysis`, `shadow-banned`, `short-form-video`, `smart-goals`, `social-algorithm`, `social-media`, `sponsored-post`, `stickers`, `thought-leader`, `tiktok-challenge`, `tiktok-duet`, `tiktok-shop`, `tiktok-stitch`, `touch-grass`, `trending`, `twitter-advanced-search`, `twitter-threads`, `ugc`, `url-shortener`, `ux`, `vanish-mode`, `viral`, `vlog`, `watermark`, `x-app`, `youtube-studio`, `zapier`

## Maintenance Notes
- To add a new glossary term:
  1. add markdown file under `src/content/blog/social-media-terms/<new-term>.md`
  2. add link entry in `src/content/blog/social-media-terms.md`
  3. run build to confirm route generation
- No route file changes are required for new terms as long as the slug remains nested under `social-media-terms/`.
