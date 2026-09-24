# Changelog

All notable changes to the Tapiti Digital landing page are documented here.

## [0.1.2] - 2026-09-23 — Structure, SEO & performance refactor

### Changed
- Extracted inline `<style>` and `<script>` blocks from `index.html` into `assets/css/styles.css` and `assets/js/main.js`.
- Moved images into `assets/images/` and updated all paths (including `Tapiti Landing Page.dc.html`).
- Footer headings "Legal" and "Contato" changed from `<h3>` to `<h2>` to fix the heading hierarchy (one `<h1>`, then `<h2>`, then `<h3>`); the CSS selector was renamed to match, so the look is unchanged.
- `<title>` shortened to 56 characters and `<meta name="description">` set to 153 characters; `og:title` now matches the title.
- Clearer HTML comment dividers between major sections.

### Performance
- Added `loading="lazy"` to below-the-fold images (comparison icon, footer logo).
- Script is loaded from `<head>` with `defer`.

### Removed
- Unused images: `appicon-paper`, `icon-navy`, `logo-2`, `logo-3`, `logo-4`, `logo-5`, `logo-7`.

### Notes
- No visual, copy or functional changes to the page.
- `og:image` is still a relative path; use an absolute URL once the domain is known.

## [0.1.1] - UX/UI revision

- UX/UI improvements to the landing page (PR #1, `feature/ui-ux-imporvement`).

## [0.1.0] - Initial Schema

- Initial pt-BR landing page built from the `utils/website sections.md` schema (13 sections, mobile-first).
- Brand identity applied: Montserrat / Inter / JetBrains Mono, navy `#00082B`, cyan `#16D7DA`, green `#2ECC86`.
