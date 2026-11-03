# PAL Portals Website

PAL Portals is a static, content-driven business website built with Astro. It presents the company's AI, marketing, and technology services, publishes articles and a social-media terminology glossary, and includes a newsletter subscription integration.

## Contents

- [Technology](#technology)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Build and release](#build-and-release)
- [Markdown content](#markdown-content)
- [Routes and content rendering](#routes-and-content-rendering)
- [Design system](#design-system)
- [Newsletter API](#newsletter-api)
- [Generated assets and SEO files](#generated-assets-and-seo-files)
- [References and project documentation](#references-and-project-documentation)
- [Maintenance notes](#maintenance-notes)

## Technology

- **Astro 5** generates the website as static HTML. Pages and reusable UI are primarily `.astro` components; no React dependency or client-hydrated React islands are configured in the website package.
- **Tailwind CSS 3** provides utility classes and the configured breakpoints in `tailwind.config.cjs`.
- **Content Collections** validate Markdown blog frontmatter using the schema in `src/content/config.js`.
- **Partytown** runs the configured Google Tag Manager scripts off the main thread.
- **astro-compress** compresses generated site assets during production builds.
- **Azure Functions (Node.js)** provides newsletter API endpoints in a separate application under `azure-functions/email-subscription-api/`.

The primary website package requires Node.js and npm. The Azure Functions app declares Node.js `>=20` and requires Azure Functions Core Tools to run locally.

## Project structure

```text
.
├── azure-functions/
│   └── email-subscription-api/  # Separate Azure Functions app
├── data/                        # Site version and version history
├── public/                      # Static assets and generated SEO files
├── scripts/                     # Version, sitemap, RSS, and glossary image scripts
├── src/
│   ├── components/              # Page sections and shared UI
│   │   ├── blog/                 # Blog listing and post renderers
│   │   └── layout/               # Header, footer, breadcrumb, and shared layout UI
│   ├── content/
│   │   └── blog/                 # Markdown articles and glossary entries
│   ├── layouts/                  # Shared page shell and document metadata
│   ├── pages/                    # File-based routes
│   ├── scripts/                  # Browser-side interactions
│   ├── styles/                   # Tokens, themes, base styles, components, motion
│   └── utils/                    # Shared utilities
├── astro.config.mjs
├── package.json
└── tailwind.config.cjs
```

Main routes are created from `src/pages/`. The home, company, pricing, contact, and legal pages are Astro files. Blog listing and article routes are also Astro pages; Markdown entries under `src/content/blog/` supply article content.

## Local development

Install the root project dependencies and start the Astro development server:

```sh
npm install
npm run dev
```

Astro prints the local URL when the server starts (normally `http://localhost:4321`). The `start` script is an alias for `dev`.

The Astro development server proxies requests under `/api` to the configured email-subscription Function App in `astro.config.mjs`. The local Function App listens on port `7071`; see [Newsletter API](#newsletter-api) before testing subscriptions locally.

## Build and release

For a compile/build check that does not run the repository's preparation scripts:

```sh
npx astro build
```

This generates the static site in `dist/`. To serve a completed build locally:

```sh
npm run preview
```

The package's `build` command performs more than an Astro build:

```text
node scripts/increment-version.cjs
node scripts/generate-sitemap.cjs
node scripts/generate-rss.cjs
astro build
```

**Review before running `npm run build`:** `increment-version.cjs` increments the patch version and updates `data/version.json`, `data/version_history.md`, and `package.json`. Unless `SKIP_GIT=1` is set, it also attempts to stage and commit those three files. The sitemap and RSS scripts overwrite generated files in `public/`. Use `npx astro build` for routine local verification when you do not intend those side effects.

Set `SITE_URL` when generating sitemap and RSS URLs for a non-default host. The scripts default to `https://palportals.com`.

```sh
SITE_URL="https://palportals.com" npm run build
```

`VERSION_MESSAGE` can override the version-history message. To suppress the version script's Git staging/commit attempt:

```sh
SKIP_GIT=1 npm run build
```

## Markdown content

Blog and glossary entries are authored as Markdown in `src/content/blog/`. Each entry must satisfy the `blog` collection schema in `src/content/config.js`; in particular, `draft`, `title`, `snippet`, `publishDate`, and `category` are required. The `publishDate` value is parsed into a JavaScript `Date`.

Example frontmatter:

```yaml
---
draft: false
title: "A clear, descriptive article title"
snippet: "A concise summary for listings and feeds."
publishDate: "2026-01-15 09:00"
category: "Insights"
author: "PAL Portals"
tags:
  - AI
  - Marketing
image:
  src: "/assets/blog/article-cover.jpg"
  alt: "Describe the image for readers who cannot see it"
template: "default"
---
## Start with the reader's question

Write the article body in Markdown. Use descriptive headings, useful links, and image alt text.
```

Optional frontmatter includes `bigImg`, `authorImg`, `comments`, `views`, `blogContentCollection`, `postDetails`, and `quotes`. The render route selects the Markdown renderer when `postDetails` is absent; entries with `postDetails` may use the legacy `default`, `standard`, or `other` templates. For new articles, prefer meaningful Markdown body content and the `default` template unless a particular legacy layout is needed.

Content checks:

- Use a unique filename/slug. A flat file such as `src/content/blog/automation-guide.md` becomes `/blog/automation-guide`.
- Nested entries such as `src/content/blog/social-media-terms/engagement-rate.md` become `/blog/social-media-terms/engagement-rate`.
- The blog listing filters out drafts and entries whose publication date is in the future.
- Do not add empty Markdown files: Astro validates every entry against the collection schema during build.
- Keep image files in `public/` when referring to them with root-relative paths such as `/assets/blog/article-cover.jpg`.

### Social media terminology glossary

The glossary index is `src/content/blog/social-media-terms.md`; its term entries live in `src/content/blog/social-media-terms/`. Add a glossary term by creating a non-empty Markdown file in that directory and adding its link/summary to the index. Nested blog routing builds the term page without requiring a new route file.

The optional `scripts/generate-social-term-svgs.cjs` script generates SVG covers under `public/assets/blog/social-media-terms/` and also rewrites image frontmatter in the term Markdown files. Review its changes before committing; it is not part of the standard `npm run build` pipeline.

## Routes and content rendering

- `src/pages/blog.astro` lists published entries, newest first, with nine entries per page.
- `src/pages/blog/[slug].astro` generates flat article routes for collection slugs without `/`.
- `src/pages/blog/[...slug].astro` generates nested article routes for collection slugs containing `/`.
- Both article routes select a renderer based on the entry's structured frontmatter and whether it has `postDetails`.
- `src/layouts/Layout.astro` supplies the shared header, footer, global styles, page metadata, theme setup, analytics integration, and site-wide browser scripts.

Keep the flat/nested slug filters separate: they avoid route conflicts and are required for glossary child pages.

## Design system

The active global style entry is `src/styles/global.css`, which imports tokens, theme variables, base rules, animations, and reusable components in that order. The site defaults to dark theme and supports light mode through the shared theme switcher.

Use semantic CSS variables from `src/styles/variables.css` for colors and surfaces, and existing primitives from `src/styles/components.css` where appropriate. Fonts are loaded by `src/layouts/Layout.astro`: Space Grotesk for headings and Inter Variable for body text. Tailwind breakpoints are customized in `tailwind.config.cjs` (`sm` 540px, `md` 720px, `lg` 960px, `xl` 1140px, `2xl` 1320px); check the actual project config rather than assuming Tailwind defaults.

## Newsletter API

The newsletter frontend is `src/components/Newsletterbox.astro`. It currently posts to `/api/public` (development targets `http://localhost:7071`; production targets the configured Azure Function host). The separately implemented Sender-backed endpoint is `POST /api/subscribe` in `azure-functions/email-subscription-api/src/functions/subscribe.js`; it expects JSON containing an email and requires Sender configuration. These are different routes, so do not assume the website's current `/api/public` request is connected to the Sender-backed subscription handler.

To run the Function App locally:

```sh
cd azure-functions/email-subscription-api
npm install
```

Create the ignored `local.settings.json` from `local.settings.example.json`, provide valid values for `SENDER_API_TOKEN`, `SENDER_LIST_ID`, and `ALLOWED_ORIGINS`, then start Azure Functions Core Tools:

```sh
npm start
```

`SENDER_API_URL` and `SENDER_API_SUBSCRIBE_PATH` configure the Sender API destination. Do not commit credentials or production settings. The Function App declares `hello`, `subscribe`, and `subscribev1`; check their implementations and CORS policy before integrating a client. The Function package has no configured automated tests yet.

## Generated assets and SEO files

- `scripts/generate-sitemap.cjs` writes `public/sitemap.xml`, `public/sitemap.json`, and updates the sitemap/host lines in `public/robots.txt`. It collects static page routes and Markdown blog routes, and uses Git commit dates when available.
- `scripts/generate-rss.cjs` reads non-draft Markdown entries and writes `public/rss.xml`, sorted by publication date. Its current implementation scans top-level `.md` files, so nested glossary entries are not included in the feed.
- `scripts/increment-version.cjs` updates project version metadata and may stage/commit the version files, as described in [Build and release](#build-and-release).
- `public/sitemap.xml`, `public/sitemap.json`, `public/rss.xml`, and `public/robots.txt` are generated or modified by scripts; inspect the diff before committing generated changes.

## References and project documentation

### Project documentation

- [RSS architecture](RSS_ARCHITECTURE.md)
- [RSS implementation details](RSS_IMPLEMENTATION.md)
- [RSS quick reference](RSS_QUICK_REFERENCE.md)
- [RSS setup notes](RSS_SETUP_COMPLETE.md)
- [Social media terms routing](SOCIAL_MEDIA_TERMS_ROUTING.md)
- [Theme documentation](THEME_DOCUMENTATION.md)
- [Font implementation notes](FONT_IMPLEMENTATION.md)
- [Email subscription Function App](azure-functions/email-subscription-api/README.md)

Some historical implementation documents describe earlier behavior. For current commands, collection fields, endpoint wiring, and script side effects, use the code referenced in this README as the source of truth.

### Design and content inspirations

These are references used for ideation, not runtime dependencies:

- [TailGrids Astro starter/demo](https://play-astro.tailgrids.com/)
- [TailGrids Astro documentation](https://tailgrids.com/astro)
- [Google Tag Manager and cookie consent article](https://webreaper.dev/posts/google-tag-manager-cookie-consent/)
- [Hero Patterns](https://heropatterns.com/)
- [Surfer SEO writing tools](https://surferseo.com/writing-tools/blog-title-generator/)
- [Haikei design tool](https://app.haikei.com/)

## Maintenance notes

- Keep article frontmatter consistent with the collection schema and avoid empty Markdown entries.
- Verify flat and nested article routes when changing content routing.
- Review generated SEO files and version metadata after running the full release build.
- Keep secrets in local or deployment configuration, never in tracked Markdown or source files.
- There is no root-level automated test script currently configured; use the Astro build as the main site validation command.
