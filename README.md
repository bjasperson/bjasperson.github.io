# Benjamin A. Jasperson Website

This is a static GitHub Pages site. It does not use Jekyll, Ruby gems, npm packages, or build-time plugins.

## Editing Text

Most page text is edited in Markdown:

- `content/home-intro.md`
- `content/about.md`
- `content/news.md`
- `content/research/*.md`

The HTML files provide layout and load those Markdown files in the browser with `assets/js/content.js`.

## Research Page

Research sections are listed in `content/research/index.json`.

Each research Markdown file has front matter at the top:

```md
---
title: Section Title
order: 10
image: assets/img/example.png
alt: Accessible image description
caption: Short image caption.
tags:
  - Tag one
  - Tag two
---
```

To reorder sections, change `order`. To add a section, create a new Markdown file in `content/research/` and add its path to `content/research/index.json`.

## Publications

`publications.html` is set up to render a Zotero group library through BibBase.

Use BibBase's JavaScript embed when possible. Paste the `src` URL from the BibBase script into `data-bibbase-src`:

```html
data-bibbase-src="https://bibbase.org/show?bib=...&amp;jsonp=1"
```

The helper script also tolerates the full BibBase `<script src="..."></script>` snippet if it is pasted there by mistake.

GitHub Pages does not run PHP. The iframe option can be used by pasting the iframe URL into `data-bibbase-iframe-src`, but the JavaScript embed is preferred.

## Local Preview

Run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.
