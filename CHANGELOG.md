# Changelog

All notable changes to the Tapiti Digital landing page are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning follows [SemVer](https://semver.org/).

## [1.0.2] - 2026-09-28

### Changed
- Hero chat card is now an animated demo instead of a static mock: the client message fades in, a typing-dots indicator plays, then the AI reply is typed out character-by-character with a blinking cursor. Plays once on load (no loop); respects `prefers-reduced-motion` by rendering both messages statically.
- Refactored the hero chat script into a scenario-driven system: bubbles are created dynamically in a `chat__log` container and a `chatScenarios` array of `{sender, text}` sequences drives the render loop (`playMessage`), so any message order/length works and the animation rule applies globally — AI messages always type themselves out, client messages always pop in statically.

### Added
- Six additional hero chat scenarios (7 total) covering different verticals: pediatria/urgência, lembrete de exame, barbearia, advocacia, dentista, restaurante/eventos and oficina mecânica. One is picked at random on each page load.

## [1.0.1] - 2026-09-24

### Changed
- "O custo oculto" section redesigned per `design_handoff_custo_oculto`:
  - Desktop (≥861px): interactive diagnostic with three problem tabs and a detail panel (stat, copy, two comparison bars).
  - Mobile (≤860px): stat-led layout with three large numbers, titles and copy; no cards or icons.
- Section now uses the shared `.section` / `.shell` / `.eyebrow` / `.h2` primitives, so spacing and intro style match the other sections (eyebrow kept red).
- Loss percentages (78%, 53%, 40%) use a stronger alert red with a subtle glow to emphasise lost revenue.
- Both layouts share a single eyebrow, `<h2>` and intro (no duplicated heading in the DOM); section is labelled via `aria-labelledby`.
- Section content fades in on scroll via the existing `.reveal` mechanism.

### Added
- Design tokens `--red-accent`, `--red-loss`, `--red-text` and `--grey-bar`.
- Tab logic for the diagnostic (`problems` data + `selectProblem`) in the page's main script; bar colors driven by CSS classes.

### Removed
- Old three-card layout and its red icons in the problem section.
- Mobile bridge line ("Os três vazamentos têm a mesma causa…") and its "Ver a solução" link; the bridge remains on desktop only.

## [1.0.0] - 2026-09-21

### Added
- Initial pt-BR landing page (hero, social proof, metrics, problem, solution, pillars, process, comparison, team, guarantee, final CTA, footer) and UI/UX improvements (PR #1).
