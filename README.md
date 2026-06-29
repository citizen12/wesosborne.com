# wesosborne.com

Personal blog of Wes Osborne, built as a static site with
[Eleventy (11ty)](https://www.11ty.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer

## Getting started

```sh
npm install      # install dependencies
npm run serve    # local dev server with live reload at http://localhost:8080
npm run build    # build the production site into _site/
```

## Project structure

```
.
├── eleventy.config.js     # Eleventy configuration
├── src/
│   ├── _data/site.json    # global site metadata (title, url, author, …)
│   ├── _includes/         # layout templates (base.njk, post.njk)
│   ├── css/style.css      # styles
│   ├── static/            # files copied verbatim to the site root (robots.txt, …)
│   ├── posts/             # blog posts, one Markdown file each
│   ├── index.njk          # home page (lists posts)
│   └── about.md           # about page
└── _site/                 # build output (generated, git-ignored)
```

## Writing a post

Create a Markdown file in `src/posts/` named `YYYY-MM-DD-slug.md`:

```markdown
---
title: My Great Post
date: 2026-07-01
description: A short summary for search engines and the RSS feed.
---

Your content in **Markdown**.
```

New posts appear automatically on the home page and in the Atom feed at
`/feed.xml`.

## Deploying

`npm run build` produces a fully static site in `_site/`. Point any static
host at that directory. Common options:

- **Netlify / Cloudflare Pages / Vercel**: build command `npm run build`,
  publish directory `_site`.
- **GitHub Pages**: build in CI and publish the `_site` directory.

Update the site URL in `src/_data/site.json` and the feed `base` in
`eleventy.config.js` if the domain changes.
