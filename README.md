# Academic website

Grayscale personal academic site built with [Eleventy](https://www.11ty.dev/). All content lives in JSON files under `src/_data/` — pages are generated from them at build time, so links/publications/talks are plain HTML (crawlable, no JS required). Links and buttons are grayscale by default and reveal one of two accent colors on hover/focus.

## Structure

```
src/
  _data/
    profile.json       # name, bio, photo, top-level links
    publications.json
    projects.json
    talks.json
    teaching.json
  _includes/
    layouts/base.njk   # shared page shell (header/nav/footer)
    partials/links.njk # renders a list of {label, url, type} links
  assets/
    css/style.css
    img/photo.svg       # placeholder — replace with your photo
  index.njk, publications.njk, projects.njk, teaching.njk, contact.njk
```

### Editing content

Edit the JSON files in `src/_data/`. Each entry's `links` array items take a `type` of `"primary"` or `"external"`, which controls which accent color appears on hover (`--accent-primary` / `--accent-external` in `src/assets/css/style.css`).

Replace `src/assets/img/photo.svg` with your own photo (update the `photo` path in `profile.json` if you change the filename), and add your CV/papers/slides under `src/assets/`.

## Local development

```bash
npm install
npm start
```

Serves at `http://localhost:8080` with live reload.

## Build

```bash
npm run build
```

Outputs static HTML to `_site/`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. In the repo settings, set **Settings → Pages → Source** to "GitHub Actions". The workflow auto-detects whether this is a user/org page (`<username>.github.io`) or a project page and sets the base path accordingly.
