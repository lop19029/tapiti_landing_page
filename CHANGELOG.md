# Changelog

All notable changes to the Tapiti Digital landing page are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning follows [SemVer](https://semver.org/).

## [1.0.5] - 2026-11-10

### Changed
- "O Padrão Enterprise" (`#engenharia`) redesigned per `design_handoff_pilares_tapiti` into "Os 4 pilares Tapiti / Por que a Tapiti salta à frente.", a scroll-pinned sequence through Confiável → Segura → Ágil → Inteligente with new copy and proof chips:
  - Desktop (≥861px): horizontal dashed track with four dots and a progress fill; the tapiti rabbit (`assets/logo-3.png`) hops from dot to dot and faces the way it travels. Below it sit the labels and a detail panel with a large gradient word, headline, body and chips.
  - Mobile (≤860px): vertical dashed timeline; the active pillar opens in place and the rabbit drops onto it.
- The stage stays pinned under the header for 70vh of scroll per pillar (`--step`). Scroll position alone sets the active pillar; clicking a label, dot or row smooth-scrolls to that pillar's band. It runs on the page's existing rAF scroll loop.
- The mobile sticky CTA now hides while the pillars stage is pinned, so the tallest state fits on short phones (375×667).
- Under `prefers-reduced-motion`, the hop, drop and rise animations and the rabbit/fill transitions are off; only the instant state changes remain.

### Removed
- Old four-card bento grid and its `.pillars` / `.pillar` styles.

## [1.0.4] - 2026-11-09

### Changed
- "A solução Tapiti" (`#solucoes`) redesigned per `design_handoff_showroom_produtos` into a showroom of five products under the heading "Nosso Ecossistema de Soluções":
  - Desktop (≥861px): 6-column bento grid (Websites Otimizados, Atendimento com IA as the tall hero tile, Chat Bot Humanizado, Dashboard Administrativo Inteligente, ARM/CRM "Em breve" full width) with a cursor-following spotlight on each tile's fill and border.
  - Mobile (≤860px): single-column stack; tiles enter in a staggered cascade and their icons draw themselves when the stack scrolls into view; the AI tile is a solid cyan→green block and the CRM tile a dashed "Em breve" card.
- One tile tree serves both layouts (restyled by media queries), sharing the section's single `<h2>` and the `.section` / `.shell` / `.eyebrow` / `.h2` primitives.
- The cascade is triggered by the page's existing scroll sweep instead of an `IntersectionObserver`, so jump-scrolls can't leave tiles hidden; it is skipped entirely under `prefers-reduced-motion`.

- Client marquee now shows the ten real client logos (`assets/company-logos/logo-1.png` … `logo-10.png`) instead of the "LOGO CLIENTE" placeholders, with tighter spacing to compensate for the padding built into the square PNGs.
- The marquee no longer pauses on hover.
- "Implementação" steps now play an entrance sequence when scrolled into view: each numbered circle pops in with a pulse ring, its title and copy rise in, then the connector draws toward the next step (vertical on mobile, horizontal on desktop). Replaces the generic `.reveal` fade on those steps; skipped under `prefers-reduced-motion`.
- The scroll sweep now plays a list of armed entrance sequences (showroom cascade and steps) instead of a single hard-coded element.

### Removed
- `.logo-slot` placeholder styles.
- Old two-row zig-zag layout ("Presença de Alta Autoridade" / "Agentes de IA Omnichannel") with its Core Web Vitals and channels mock panels, and their `.zig`, `.panel`, `.bar-row`, `.bar` and `.chan` styles.

## [1.0.3] - 2026-09-28

### Changed
- Replaced the "Quem somos" placeholder photos with real portraits for two of the three founders (Estratégia de Negócios and Engenharia de Plataforma); the Arquitetura & IA slot keeps its placeholder for now.
- `.founder__photo` now also styles an `<img>` (added `assets/founder-1.jpg`, `assets/founder-2.jpg`), filling the same square frame via `object-fit:cover` so the layout is unchanged.

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
