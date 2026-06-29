---
title: Hello, World
date: 2026-06-29
description: The first post on the new blog.
---

Welcome to the new site! This blog is built with
[Eleventy](https://www.11ty.dev/), a simple static site generator.

## Writing a new post

Add a Markdown file to `src/posts/`. The filename convention is
`YYYY-MM-DD-slug.md`, and each post starts with a bit of front matter:

```markdown
---
title: My Great Post
date: 2026-07-01
description: A short summary for search engines and the RSS feed.
---

Your content goes here, written in **Markdown**.
```

That's it — the post will automatically show up on the home page and in
the RSS feed.

## Running locally

```sh
npm install
npm run serve
```

Then open <http://localhost:8080>. Edits rebuild and reload the page
automatically.
