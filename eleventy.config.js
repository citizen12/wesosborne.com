import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrite root-relative URLs in HTML output to respect `pathPrefix`
  // (so the site works under a subpath like /wesosborne.com/ on GitHub Pages).
  // Registered exactly once — the eleventy-plugin-rss convenience feed plugin
  // adds this internally too, which double-applied the prefix, so the Atom feed
  // is hand-written below instead.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Copy static assets straight through to the output.
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/static": "." });

  // Rebuild when CSS changes during `serve`.
  eleventyConfig.addWatchTarget("src/css/");

  // A human-friendly date filter, e.g. "June 29, 2026".
  eleventyConfig.addFilter("readableDate", (value) => {
    const date = value instanceof Date ? value : new Date(value);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // ISO date for <time datetime="..."> and the feed.
  eleventyConfig.addFilter("isoDate", (value) => {
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString();
  });

  // Collection of all posts, newest first.
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  return {
    // Serve under a subpath on GitHub Pages project sites (e.g. /wesosborne.com/).
    // Defaults to "/" for local dev and custom-domain (root) deploys.
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
