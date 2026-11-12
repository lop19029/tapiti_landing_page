# Handoff: Impacto section — "A Matemática de uma Operação Inteligente" (desktop 1b + mobile 2a)

## Overview
Redesign of the `O impacto` section of the Tapiti landing page (repo `lop19029/tapiti_landing_page`, file `index.html`, `<section class="section" aria-labelledby="impacto-h">` and the `.compare` / `.cmp-row` styles). The old two-card before/after layout is replaced by a **toggle comparison**. A segmented switch flips the section between "Operação Tapiti" (the default) and "Operação Amadora", and four metric tiles cross-fade their numbers in a cascade.

- Desktop (≥861px): option **1b**
- Mobile (≤860px): option **2a**

## About the Design Files
`Impacto Redesign.dc.html` is an options canvas created in HTML. It is a design reference showing the intended look and behavior, not production code. **Implement only `#1b` (desktop) and `#2a` (mobile)** and ignore 1a, 1c and 2b. Recreate them inside `index.html` using the page's existing conventions: plain HTML + a `<style>` block with BEM-ish classes, the CSS custom properties in `:root`, `.shell`, `.section`, `.eyebrow`, `.h2`, and vanilla JS at the bottom of the file. Delete the old `.compare*` / `.cmp-row*` CSS and markup once replaced.

## Fidelity
**High-fidelity.** Final colors, type, spacing, copy and motion. Recreate pixel-accurately.

## Copy (verbatim — pt-BR)
- Eyebrow: `O impacto` (use `.eyebrow.is-muted`, color `--teal-text #1fa5b8`)
- H2 (`id="impacto-h"`): `A Matemática de uma Operação Inteligente`
- Switch: desktop `Operação Amadora` / `Operação Tapiti`; mobile `Amadora` / `Tapiti` (the Tapiti button includes the app icon)

| Label | Tapiti value · unit | Tapiti note | Amadora value · unit | Amadora note |
|---|---|---|---|---|
| `DISPONIBILIDADE` | `24h` · `por dia, 7 dias` | `Agente de IA ativo à noite, nos fins de semana e feriados.` | `8h` · `por dia` | `Horário comercial. Fora dele, o cliente espera ou procura o concorrente.` |
| `CAPACIDADE` | `∞` · `em paralelo` | `Conversas simultâneas no WhatsApp, redes e telefone, sem fila.` | `1` · `cliente por vez` | `Cada atendente conversa com uma pessoa. O resto entra na fila.` |
| `PRESENÇA DIGITAL` | `Top 3` · `no Google local` | `Site rápido e SEO técnico para disputar as primeiras posições.` | `Pág. 3+` · `no Google` | `Quem busca pelo seu serviço não encontra a sua empresa.` |
| `CUSTO POR ATENDIMENTO*` | `R$ 0,45` · `por conversa` | `O custo cai à medida que o volume cresce.` | `R$ 9` · `por conversa` | `Salário, encargos e horas ociosas divididos pelo volume real.` |

- Summary line: Tapiti `Atende 24h, sem fila, na 1ª página, a uma fração do custo.` / Amadora `Fecha às 18h, atende um por vez e não aparece no Google.`
- Footnote: `* Custo estimado: atendente CLT (~R$ 4.500/mês com encargos, ~500 atendimentos) vs. consumo médio do agente de IA.` (desktop 1b drops the trailing "Varia por operação." to fit; keep it identical to this string)
- Notes appear on desktop only. Mobile tiles show label + value + unit.
- **Owner to confirm** the cost and ranking figures before launch.

## Layout — Desktop (1b, ≥861px)
Section: `.section` padding (`--sp-sec`), background `radial-gradient(90% 70% at 15% 0%, #04245a 0%, #00133b 45%, #00082b 100%)`. Content inside `.shell` (max 1160px).

1. **Header row**: flex, `justify-content:space-between; align-items:flex-end; gap:40px; margin-bottom:40px`.
   - Left: eyebrow + H2 (`.h2`, but `margin:0`, max-width 22ch).
   - Right: **switch** (flex:none).
2. **Switch**: `position:relative; display:flex; padding:4px; border-radius:999px; background:#000d30; border:1px solid rgba(255,255,255,.14)`.
   - Two buttons, each `width:200px; min-height:48px`, transparent, no border, Montserrat 14px (Amadora 700, Tapiti 800). The Tapiti button has a 20×20 app icon (radius 6) with a gap of 8px.
   - Knob: `position:absolute; top:4px; bottom:4px; width:calc(50% - 4px); border-radius:999px`, `left:4px` (Amadora) or `left:50%` (Tapiti).
     - Tapiti: bg `linear-gradient(135deg,#16d7da,#2ecc86)`, shadow `0 8px 24px -8px rgba(22,215,218,.7)`.
     - Amadora: bg `rgba(255,59,65,.18)`, shadow `inset 0 0 0 1px rgba(255,107,111,.5)`.
   - Button text colors: active Tapiti `#00082b`, active Amadora `#ff8a8d`, inactive `#8792a6`.
3. **Tile grid**: `display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1px; background:rgba(255,255,255,.10)` (hairline dividers), `border-radius:22px; overflow:hidden`.
   - Border 1px: Tapiti `rgba(22,215,218,.40)`, Amadora `rgba(255,107,111,.30)`.
   - Shadow: Tapiti `0 30px 80px -30px rgba(22,215,218,.40)`, Amadora `0 30px 70px rgba(0,0,0,.35)`.
4. **Tile**: `position:relative; background:#00113a; padding:30px 28px 32px; display:flex; flex-direction:column; gap:18px; min-height:300px`.
   - Tint overlay (absolute inset 0, pointer-events none): Tapiti `linear-gradient(180deg,rgba(22,215,218,.10),transparent 60%)`, Amadora `linear-gradient(180deg,rgba(255,59,65,.08),transparent 60%)`.
   - Top row: label (JetBrains Mono 600 11px, letter-spacing .12em, `#9fb0cb`) + 8px status dot on the right (`#2ecc86` / `#ff6b6f`, `box-shadow:0 0 10px <same>`).
   - Value box: `position:relative; height:96px`. It holds two **stacked layers** (absolute, left/right/bottom 0, flex column, gap 6):
     - Tapiti: number Montserrat 900 64px/1, letter-spacing −.04em, gradient text (`linear-gradient(135deg,#16d7da,#2ecc86)` + `background-clip:text`), nowrap. Unit Inter 600 14px `#e4ebf3`.
     - Amadora: number same size, color `#ff3b41`, `text-shadow:0 0 44px rgba(255,59,65,.35)`. Unit Inter 600 14px `#ff8a8d`.
   - Divider: 1px `rgba(255,255,255,.10)`.
   - Note box: `position:relative; min-height:66px`. Two stacked `<p>` (absolute inset 0), Inter 400 14.5px/1.6. Tapiti `#b9c6db`, Amadora `#9fb0cb`.
5. **Bottom row**: flex space-between, gap 32, mt 22px. Summary Montserrat 700 17px (Tapiti `#fff`, Amadora `#ff8a8d`). Footnote JetBrains Mono 500 11px/1.6 `#7e8da8`, max-width 62ch, right-aligned.

## Layout — Mobile (2a, ≤860px)
Section padding `56px 20px 48px` (use `.shell` gutters), background `radial-gradient(120% 60% at 20% 0%, #04245a 0%, #00133b 50%, #00082b 100%)`.
1. Eyebrow (11px, mb 12) → H2 Montserrat 800 28px/1.14, −.024em, mb 24px.
2. **Switch**: full width, same styles as desktop. Buttons `flex:1; min-height:48px`, Montserrat 13.5px. Tapiti icon is 18×18 (radius 5), gap 7. mb 16px.
3. **Tile grid**: `grid-template-columns:repeat(2,minmax(0,1fr))`, gap 1px hairlines, radius 20px. The border follows the desktop rules. Shadows: Tapiti `0 24px 60px -24px rgba(22,215,218,.40)`, Amadora `0 24px 50px rgba(0,0,0,.35)`.
4. **Tile**: padding `18px 16px 20px`, flex column, gap 12.
   - Top row: label (mono 600 10px/1.4, .1em, `#9fb0cb`, may wrap to 2 lines; row min-height 28px) + 7px dot (mt 3px, glow 8px).
   - Value box height 58px with the same two stacked layers: number Montserrat 900 **34px**, unit Inter 600 12.5px. Amadora text-shadow `0 0 30px rgba(255,59,65,.35)`.
   - No notes on mobile.
5. Summary: Montserrat 700 15px/1.4, mt 18px, in a container with `min-height:52px` so the switch doesn't cause layout shift.
6. Footnote: mono 500 10px/1.6 `#7e8da8`, mt 14px.

## Interactions & Behavior
- **State**: `mode ∈ {'tapiti','amadora'}`, default `'tapiti'`. Set it as a `data-mode` attribute on the section and drive every visual difference with CSS selectors (`[data-mode="amadora"] …`), the same pattern `.proc[data-step]` already uses.
- **Click** a switch button → set mode. Clicking the active button does nothing.
- **Keyboard / a11y**: wrapper `role="tablist"`, buttons `role="tab"` + `aria-selected`. Left/Right arrows move between the two. Tiles area `aria-live="polite"` (or announce the summary line) so the change is read out. Both value layers stay in the DOM; set `aria-hidden="true"` on the inactive layer.
- **Cross-fade** per tile (both layers):
  - Opacity `.45s`. Transform `.55s cubic-bezier(.2,.7,.2,1)`.
  - Tapiti layer: visible `translateY(0)`; hidden `translateY(-18px)` desktop / `-14px` mobile.
  - Amadora layer: visible `translateY(0)`; hidden `translateY(18px)` / `14px`. The two move in opposite directions.
  - **Cascade**: `transition-delay: i × 80ms` (i = 0..3) on layers, notes, tint (`background .6s`) and dot (`background/box-shadow .4s`).
- Knob: `left .45s cubic-bezier(.5,0,.2,1)`, background and box-shadow .45s. Button color .3s. Panel border-color/box-shadow .5s. Summary color .4s.
- Section entrance: reuse `.reveal`.
- **Reduced motion**: the existing global rule already zeroes transitions, so state changes are instant. No other work needed.
- No auto-flip and no persistence.

## Design Tokens
- Navy: `#00082b`, `#000d30` (switch), `#00113a` (tiles), `#00133b`, `#04245a`
- Gradient: `linear-gradient(135deg,#16d7da,#2ecc86)` (`--grad`)
- Green dot `#2ecc86`. Red: `#ff3b41` (`--red-loss`), `#ff6b6f` (`--red-accent`), `#ff8a8d` (`--red-text`)
- Text: `#fff`, `#e4ebf3`, `#b9c6db`, `#9fb0cb`, `#8792a6`, `#7e8da8`
- Hairlines: `rgba(255,255,255,.10)` / `.14`
- Radii: 22px panel (desktop) / 20px (mobile), 999 switch
- Fonts (already loaded): Montserrat 700/800/900, Inter 400/600, JetBrains Mono 500/600

## Assets
- `assets/appicon-cyan.png` (already in the repo) for the Tapiti switch button.

## Files
- `Impacto Redesign.dc.html` — options canvas. **Reference `#1b` (desktop) and `#2a` (mobile) only.** The logic class at the bottom has the `rows` data and the per-mode values (`tilesB` for desktop, `m` for mobile).
- `support.js` — runtime, only needed to open the HTML locally.
- `assets/appicon-cyan.png`
