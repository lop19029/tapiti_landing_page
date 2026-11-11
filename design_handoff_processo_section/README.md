# Handoff: Processo section — "Como Escalamos Seu Negócio" (option 2b)

## Overview
Redesign of the Processo section of the Tapiti landing page (repo `lop19029/tapiti_landing_page`, file `Tapiti Landing Page.dc.html`). Replace the current 3-step section with **option 2b**: a single panel whose header is a 1 → 2 → 3 "pipeline" of numbered nodes. On first scroll into view, a glowing signal travels 1 → 2 → 3 (0.75 s per step) and the column under each node lights up. After step 3 everything stays lit and the three nodes keep a soft, staggered pulse. A CTA bar sits in the panel footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to paste in. Recreate option **2b** inside the existing landing page using its established patterns (the page is itself a Design Component file with inline styles; follow its conventions, section padding, fonts and colors).

`Processo Redesign.dc.html` is an options canvas with several directions. **Only implement `#2b`** (desktop card + 390px mobile card). Ignore 1a/1b/1c/2a.

## Fidelity
**High-fidelity.** Final colors, type, spacing, copy and motion. Recreate pixel-accurately.

## Copy (verbatim — Portuguese)
- Eyebrow: `Implementação`
- H2: `Como Escalamos Seu Negócio`
- Node labels: `DIAGNÓSTICO`, `ADAPTAÇÃO`, `LANÇAMENTO`
- Step 1 — H3 `Diagnóstico` · body `Mapeamento rápido e estruturado direto via WhatsApp.`
- Step 2 — H3 `Adaptação Plug-and-Play` · body `Integramos a IA e a nova arquitetura diretamente na sua operação atual.`
- Step 3 — H3 `Lançamento Seguro` · body `Testes rigorosos garantem a captação de clientes sem falhas logo no primeiro dia.`
- CTA: `Agendar Consultoria Gratuita via WhatsApp` (reuse the page's existing WhatsApp link/handler)
- Trust row: `SEM COMPROMISSO` · `RESPOSTA IMEDIATA` · `GARANTIA 30 DIAS` (mobile shows first + last only)
- Step visuals micro-copy (placeholder — confirm with owner): see `ProcessVisual.dc.html`.

## Layout — Desktop (designed at 1160px content card)
Section background: `radial-gradient(90% 70% at 85% 0%, #04245a 0%, #00133b 45%, #00082B 100%)`. Padding `88px 64px 80px`.

1. **Eyebrow row**: flex, gap 12px, mb 16px. 28×1px line `#16D7DA` + label JetBrains Mono 600 12px, letter-spacing .14em, uppercase, `#16D7DA`.
2. **H2**: Montserrat 800 42px / 1.14, letter-spacing −.022em, mb 48px, white.
3. **Panel**: border 1px `rgba(255,255,255,.12)`, radius 22px, bg `rgba(255,255,255,.03)`, overflow hidden, shadow `0 30px 70px rgba(0,0,0,.35)`.
   - **Pipeline header**: bg `#000d30`, border-bottom 1px `rgba(255,255,255,.10)`, padding `34px 0 26px`. 3-column grid, each column centers a node (72×72 circle) above a label (gap 14px).
     - Track: absolute, from 16.667% to 83.333% (column centers), top 69px (node center), 2px, `rgba(255,255,255,.10)`.
     - Fill: same origin, width 0 → 33.333% → 66.667% of panel, gradient `90deg #16D7DA→#2ECC86`, glow `0 0 12px rgba(22,215,218,.8)`.
     - Signal dot: 12px white circle centered on the fill's leading edge, shadow `0 0 0 4px rgba(22,215,218,.35), 0 0 22px 6px rgba(22,215,218,.8)`. Hidden before start and after completion.
     - Node numeral: Montserrat 900 28px.
     - Label: JetBrains Mono 600 11px, letter-spacing .12em.
   - **Step columns**: 3-col grid, gap 1px on bg `rgba(255,255,255,.10)` (hairline dividers). Each column bg `#00113a`, padding `28px 28px 32px`. Content: step visual (≈190px tall) → H3 (Montserrat 700 20px, mt 28 mb 10) → body (Inter 400 15px/1.62, `#9FB0CB`).
     - Highlight overlay per column (absolute inset 0): `linear-gradient(180deg, <stepColor>@.14, transparent 60%)`.
   - **Footer bar**: flex, gap 24, padding `22px 28px`, border-top 1px `rgba(255,255,255,.10)`, bg `rgba(0,8,43,.6)`. Left: trust row (JetBrains Mono 500 12px, `#7E8DA8`, gap 24). Right: CTA button — gradient `135deg #16D7DA→#2ECC86`, text `#00082B` Montserrat 800 15px, padding `16px 22px`, radius 13px, min-height 52px, 18px chat-bubble icon gap 10. Hover: `filter: brightness(1.08)`.

Step colors: 1 `#16D7DA`, 2 `#1ED1B8`, 3 `#2ECC86`.

## Layout — Mobile (390px)
Padding `56px 16px`. Eyebrow (11px) and H2 (Montserrat 800 28px) with 4px side inset; H2 mb 28px.
Single panel (radius 20px, bg `#00113a`) laid out as a **vertical pipeline**:
- Rows: grid `52px | 1fr`, gap 14px, row padding-bottom 28px (last 20px). Container padding `24px 18px 8px`.
- Node: 52px circle, numeral 20px.
- Vertical track: absolute, left 43px, top 52px, bottom 60px, 2px; fill grows in height 0 → 50% → 100%, gradient `180deg`.
- Content: H3 Montserrat 700 18px (mt 14 mb 8), body Inter 14.5px/1.6, visual below (mt 16).
- Footer: bg `rgba(0,8,43,.95)`, padding 20, full-width CTA (14px text, min-height 54px, radius 13px), trust row centered 10.5px.

## Step visuals (`ProcessVisual.dc.html`, prop `step` 1|2|3)
Shared card: bg `rgba(255,255,255,.045)`, border 1px `rgba(255,255,255,.10)`, radius 16px, padding 16px.
1. **Chat**: header (app icon 24px r7 + "Agente Tapiti" Montserrat 700 12.5px + "● WHATSAPP" mono 10px `#2ECC86`), user bubble right (`rgba(255,255,255,.08)`, radius `12 12 4 12`), agent bubble left (gradient cyan/green @.18/.12, border `rgba(22,215,218,.26)`, radius `12 12 12 4`), 3 quick-reply chips (mono 10.5px pill; first one cyan).
2. **Integration diagram**: channels column (WhatsApp, Redes sociais, Ligações, Site — chips bg `rgba(0,27,77,.6)` r8) → bracket connector (cyan) → "Agente IA" card (cyan border, gradient bg, mono list QUALIFICA / AGENDA / REGISTRA).
3. **Checklist**: 3 rows with green check icon + label + "OK" (mono `#2ECC86`), then a "Captação ativa / NO AR" status row (green tint bg `rgba(46,204,134,.10)`, border `.35`, blinking 8px dot — `blink` 2.4s infinite).

## Interactions & Behavior
**State**: `step` ∈ {−1 (not started), 0, 1, 2, 3 (done)}.

- **Start**: when the section is ≥ ~35% in viewport (IntersectionObserver, once), set `step = 0`.
- **Advance**: every **750 ms** (`STEP_MS = 750`) go 0 → 1 → 2 → 3, then stop. **Never loops.**
- **Click a node / step row**: jump to that step and continue the sequence from there at the same pace.
- Per-node visuals by state (k = node index):
  - reached (`step ≥ k` or done): bg gradient `135deg #16D7DA→#2ECC86`, numeral `#00082B`, no border, label in step color.
  - not reached: bg `#00113a`, numeral `#7E8DA8`, border 1.5px `rgba(255,255,255,.18)`, label `#7E8DA8`.
  - glow `0 0 28px <stepColor>88` when active or done.
  - Transitions: background/color/border/shadow **.25s**.
- Columns: content opacity 1 when active or done, .6 when passed, .4 when upcoming; active column lifts `translateY(-4px)`; highlight overlay opacity 1 active / .5 when done / 0 otherwise. Transitions **.6s**.
- Track fill (width desktop / height mobile) and signal dot (`left`): **.35s cubic-bezier(.5,0,.2,1)**.
- **Pulse ring** (one per node, absolutely positioned at inset −4px, 2px border in step color):
  ```css
  @keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.55); opacity: 0 } }
  ```
  - While a node is active: `ring 1.6s ease-out infinite`, wrapper opacity 1.
  - After completion (step 3): all three rings at wrapper opacity .4 with `ring 3.6s ease-out infinite`, staggered delays 0s / .6s / 1.2s → soft rolling 1-2-3 pulse that runs indefinitely.
- Section entrance (optional, matches rest of page): eyebrow/H2/panel fade up 16px, .7s opacity / .9s `cubic-bezier(.2,.7,.2,1)`, staggered 0/60/120ms.
- **Reduced motion**: if `prefers-reduced-motion: reduce`, skip the sequence (render `step = 3`) and disable the ring animation.

## Design Tokens
- Navy: `#00082B` (base), `#00113a` (panel cells), `#000d30` (pipeline header), `#00133b`, `#04245a` (gradient)
- Cyan `#16D7DA`, Teal (mid) `#1ED1B8`, Green `#2ECC86`
- Text: white, body `#9FB0CB`, muted `#7E8DA8`, bubble text `#E6EDF7`
- Hairlines: `rgba(255,255,255,.08 / .10 / .12 / .18)`
- Radii: 22 (panel desktop), 20 (panel mobile), 16 (visual cards), 13–14 (CTA), 12 (bubbles), 999 (pills)
- Fonts: Montserrat (500–900), Inter (400–600), JetBrains Mono (500–600) — already loaded on the landing page.

## Assets
- `assets/appicon-cyan.png` — from the repo (already exists there).
- Icons: inline SVG (Feather-style chat bubble, check). No new assets.

## Files
- `Processo Redesign.dc.html` — options canvas; **section `#2b`** is the spec. Its logic class (bottom of file) has the exact step/ring state logic (`B` object in `renderVals`).
- `ProcessVisual.dc.html` — the three step visuals.
- `support.js` — runtime needed only to open the HTML files locally for reference.
- `assets/appicon-cyan.png`
