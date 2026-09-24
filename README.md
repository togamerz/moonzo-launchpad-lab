# Moonzo Launchpad

I want to make a website designer idea also for my meme Coin Moonzo built on phera network on Robinhood chain in that website, there should be only information about my Coin me Coin Manju and about its change which it's on build, build it on, and also please put information according to you about you. Think it right to put in a website because a meme coin is nothing but a coin which is built on a chain to test the network or to upscale the network and please design the website in such a 3-D style in such a futuristic by so that people think it is really to the moon meme and a good potential so that it looks authentic and great to the users which are interacting to the website or using my or buying my Coin. Also, please put 23 types of games also and Memes type games so that people can interact with my website and also get som enjoyment on the website. Structure of the website. Should be like that that the person enters to the website and it C and the person see the pop-up message of the logo of my side so that it attracts the user more on it, and then they can explore what Robin Hood chain is doing and what phera network is doing or also 2-3 games on the website about a sect a copyright section which is of moon coin and you can add more tricks and details or other designs by yourself, also what you feel can be right fit in the website, so can you please create the full powerful prompt so that I can make the website ready to use please, Lovable also, please do deep research on the chain and the network which I have discussed in this conversation so that in the website, there can be a brief overview for the users about them and people can understand that what they are doing and what they are making, please Lovable
# MOONZO — Final Build Prompt for Lovable

> Paste this whole document into Lovable as your first prompt. Sections are ordered the way Lovable
> parses best: stack → design system → pages → components → content rules. If Lovable trims your
> first prompt, paste in this order across 2–3 follow-up messages rather than all at once.

---

## 0. PROJECT SUMMARY

Build **MOONZO** — a premium, futuristic, meme-culture Web3 website for a community meme coin
called MOONZO (ticker: `[INSERT TICKER]`), launched through **PHERA** (a real launchpad + CLMM DEX)
on **Robinhood Chain** (a real Ethereum Layer‑2). Brand mascot: a Shiba Inu astronaut. Tone: cinematic
space-mission meets meme culture — not a generic crypto template.

**Non-negotiable rule across the entire site:** never invent price, market cap, supply, holders,
liquidity, volume, audits, partnerships, or endorsements. Every number that isn't manually verified
gets a clearly labeled placeholder (see Section 9). This is what makes the project look legitimate
instead of scammy — treat it as a feature, not a limitation.

---

## 1. TECH STACK (for Lovable to use)

- React + Vite + TypeScript, Tailwind CSS, shadcn/ui for base components
- Framer Motion for scroll-triggered and micro animations
- React Three Fiber + drei for the 3D moon / rocket / particle scenes (lazy-loaded, code-split from the main bundle)
- Zustand or React Context for lightweight global state (mute toggle, reduced-motion flag, wallet-connect state if added later)
- React Router for page routing (or hash-based sections if kept single-page)
- All 3D/heavy assets lazy-loaded behind an intersection observer so first paint stays fast

---

## 2. DESIGN SYSTEM

**Color tokens**
```
--bg-primary: #050712
--bg-secondary: #080B18
--gold-1: #F5B82E
--gold-2: #FFD86A
--blue-1: #0B5CFF
--blue-2: #27A8FF
--purple-1: #5B3CC4
--white-lunar: #F4F6FF
```

**Typography:** a geometric/futuristic display font for headings (e.g. Space Grotesk, Orbitron, or similar), a highly readable sans-serif for body copy (e.g. Inter).

**Visual language:** glassmorphism nav/cards, metallic gradient text on headings, soft neon glow on interactive elements, parallax star/particle backgrounds, scroll-triggered reveals, 3D moon and rocket models, floating holographic UI panels, animated orbital rings, subtle depth-of-field on hero.

**Avoid:** stock crypto-template graphics, fake exchange logos, fake audit badges, fake testimonials, fake stats, over-animated clutter that hurts readability.

**Accessibility / performance requirements:**
- Full `prefers-reduced-motion` support — swap heavy 3D/parallax for static gradients when triggered
- Mobile-first, touch-friendly hit targets, sticky compact nav on scroll
- Lazy-load all games and 3D scenes; compress all textures/images
- Target smooth performance on mid-range phones, not just desktop

---

## 3. LOADING / INTRO SEQUENCE

Full-screen black space canvas. Stars fade in → a glowing gold moon rises → the MOONZO logo animates in with a subtle 3D rotation → the Shiba astronaut mascot appears.

Sequential text beats (each ~1–1.5s, skippable at any point):
1. "MISSION CONTROL INITIALIZING…"
2. "WELCOME TO MOONZO"
3. "TO THE MOON TOGETHER 🚀"

End with a single CTA: **ENTER THE MOONZO UNIVERSE**. Add a persistent small "Skip" link from the first frame — don't make users wait to find it. Store a flag (session storage substitute: in-memory state) so the intro doesn't replay on every internal navigation, only on a fresh load.

---

## 4. NAVIGATION

Sticky glassmorphism bar.

- **Left:** MOONZO logo (wordmark + mascot icon)
- **Center/links:** Home · About · MOONZO · PHERA · Robinhood Chain · Roadmap · Arcade · Memes · Community · FAQ
- **Right:** Explore MOONZO (secondary) · Buy / Trade (primary gold button) · Join Community

Mobile: animated hamburger → full-screen glass overlay menu, large tap targets, staggered link-entry animation.

---

## 5. HERO SECTION

Full-viewport 3D space scene: stars, nebula haze, large gold moon, Earth horizon sliver, floating particles, thin gold orbital rings, the Shiba astronaut as hero figure.

- **H1 (3D metallic gold typography):** MOONZO
- **Subhead:** Meme Energy. Community Power. Future Legacy.
- **Body:** A community-driven meme project launched through PHERA on Robinhood Chain — built around memes, creativity, experimentation, and the journey to the moon.
- **CTAs:** [Explore MOONZO] · [View on PHERA] · [Join the Community]
- Subtle animated rocket launch loop behind the CTA row; ambient drifting particles.
- No live-looking stat counters unless wired to a real, verified data source (see Section 9).

---

## 6. WHAT IS MOONZO?

Section title: **WHAT IS MOONZO?**

Copy:
> MOONZO is a community-driven meme project created to bring together meme culture, on-chain
> experimentation, and an interactive Web3 experience. Built through PHERA on Robinhood Chain,
> MOONZO is designed around a simple idea: have fun, build together, explore on-chain, aim for the moon.

Four 3D tilt-on-hover cards:
- **MEMES** — Culture, creativity, and internet energy.
- **COMMUNITY** — MOONZO grows with the people who participate.
- **ON-CHAIN** — Created and traded on-chain through the PHERA ecosystem.
- **FUTURE** — An evolving ecosystem of games, community experiences, and future experiments.

---

## 7. WHY A MEME COIN? (transparency section)

Title: **WHY BUILD A MEME COIN?**

> Meme projects are one of crypto's most community-driven forms of experimentation. They can bring
> people together, create cultural moments, encourage on-chain activity, and give builders a creative
> way to explore blockchain ecosystems.
>
> MOONZO does not claim that a meme coin is required to test or scale Robinhood Chain. Instead,
> MOONZO aims to participate in the ecosystem through community activity, experimentation, and an
> entertaining on-chain experience.

Keep this wording close to verbatim — it's the honesty anchor for the whole site.

---

## 8. POWERED BY PHERA

Title: **POWERED BY PHERA**

> PHERA is a token launchpad and native concentrated-liquidity DEX on Robinhood Chain. Every token
> launches on a bonding curve with immutable economics, then automatically graduates into its own
> PHERA concentrated-liquidity pool — with that graduation liquidity locked permanently. MOONZO was
> launched through the PHERA ecosystem.

Button: **[Explore PHERA]** → `https://phera.pro/`

Disclaimer (small, always visible, not hidden in fine print):
> MOONZO is an independent community project and is not presented as an official PHERA or Robinhood
> product unless explicitly stated by those organizations.

---

## 9. THE CHAIN BEHIND THE MISSION

Title: **THE CHAIN BEHIND THE MISSION** — subtitle **Robinhood Chain**

> Robinhood Chain is a permissionless, Ethereum-compatible Layer‑2 blockchain built on Arbitrum's
> technology, live on mainnet since July 1, 2026. It settles transaction data back to Ethereum for
> security, uses ETH as its native gas token, and was designed to support tokenized real-world assets
> and everyday on-chain financial activity — with a fast-growing community and meme-coin scene
> alongside that original focus.

Five visual cards:
- **Ethereum-Compatible** — Fully EVM-compatible; standard Ethereum tooling works out of the box.
- **Layer 2 (Arbitrum Orbit)** — Built on Arbitrum's Orbit framework, settling to Ethereum L1.
- **Open & Permissionless** — Anyone can build applications and smart contracts on the network.
- **Real-World Assets** — Originally designed to support tokenized real-world assets and finance.
- **ETH Gas** — ETH is the native gas token; the chain itself has no native coin.

Buttons: **[Explore Robinhood Chain]** → `https://robinhood.com/chain` · **[Developer Docs]** → `https://docs.robinhood.com/chain/`

Never imply Robinhood endorses MOONZO.

---

## 10. MOONZO TOKEN DASHBOARD

Holographic-style card grid, title **MEET MOONZO**.

Fields (all placeholder until you fill in verified values):
- Symbol: `[INSERT TICKER]`
- Network: Robinhood Chain
- Launch Platform: PHERA
- Contract Address: `[INSERT VERIFIED CONTRACT ADDRESS]`
- Total Supply: `[INSERT VERIFIED VALUE]`
- Liquidity: `[INSERT VERIFIED VALUE]`

Buttons: **[Copy Contract]** · **[View on Explorer]** · **[View on PHERA]**

**Hard rule:** never auto-generate or guess any of these six fields. If a field has no confirmed value yet, render literally: "DATA WILL APPEAR AFTER VERIFICATION."

---

## 11. KNOW WHAT YOU'RE BUYING (transparency panel)

Checklist-style UI with a **Verified / Unverified** badge system (plain text/icon states — no fake "audited" seals):

- Contract address — link to explorer
- Network — Robinhood Chain
- Launch platform — PHERA
- Token supply
- Liquidity info + lock status if known
- Ownership/renounce status if verifiable
- Contract verification status on the block explorer
- Explicit line: **"NO INDEPENDENT SECURITY AUDIT CLAIMED"** if true — say this plainly, it builds trust rather than hurting it.

---

## 12. ROADMAP — MISSION PHASES

Cinematic horizontal or vertical timeline.

- **PHASE 01 — LIFTOFF:** Launch MOONZO · brand identity · social presence · initial community · website
- **PHASE 02 — ORBIT:** Community growth · meme campaigns · competitions · first arcade games · meme gallery · community events
- **PHASE 03 — MOON:** Expand the MOONZO universe · more games · more community features · partnerships where appropriate · further Web3 experiments
- **PHASE 04 — BEYOND:** Future utilities · new interactive experiences · ecosystem expansion · community-driven experiments

Footnote: *Roadmap items represent goals and may change. They are not guarantees.*

---

## 13. MOONZO ARCADE (build in phases — see note)

Title: **MOONZO ARCADE** — subtitle: **"23 Ways To Have Fun Before We Reach The Moon"**

**Important build note for Lovable:** don't try to generate all 23 full games in one shot — that
produces shallow, broken results. Structure the Arcade page to show all 23 as a grid of cards
("Live", "Coming in Phase 02", etc.), but only fully build **3 games at launch**:

1. **MOONZO RUN** — endless runner, tap/space to jump over obstacles, difficulty ramps with distance
2. **MOON LANDER** — thrust-and-land physics game, land within a target zone without crashing
3. **MOONZO CLICKER** — casual incremental clicker (idle-game style, no wallet needed)

The remaining 20 concepts (Rocket Rush, Meme Catcher, Shiba Jump, Moon Miner, Asteroid Smash,
MOONZO Match, Rocket Dodge, Moon Quiz, Meme Memory, Space Defender, MOONZO Puzzle, Gravity Flip,
Shiba Space Race, Moonshot, Crypto Reaction, Orbit, Meme Battle, Rocket Builder, Moon Escape, To The
Moon) stay as "coming soon" cards tied to Phase 02/03 of the roadmap. Add each fully in later prompts
once the first 3 are solid.

**Game rules (all of them, always):**
- Entertainment only — never gamble money, never promise crypto rewards, never claim gameplay generates token profits
- No wallet connection required to play
- Never collect wallet addresses or private keys through a game

---

## 14. MOONZO MEME LAB

Title: **MOONZO MEME LAB** — simple in-browser meme generator:
- Pick a MOONZO/space background from a small preset gallery
- Pick a Shiba-astronaut pose overlay
- Add draggable/resizable text (top/bottom classic meme layout, plus free text)
- Add sticker overlays (moon, rocket, flames)
- Export as PNG (canvas-based, client-side)
- Native share-sheet / copy-image button, plus a direct "share to X" link

CTA: **"CREATE YOUR MOONZO MEME 🚀"**

---

## 15. THE MOONZO CREW (community)

Title: **THE MOONZO CREW** — role cards: Meme Makers · Builders · Traders · Degens · Creators · Moon Believers.

Leave a placeholder embed slot for a future live X/community feed. Do not fabricate member counts,
online-now numbers, or engagement stats anywhere on this page.

**Added idea:** a simple referral-link generator — user pastes their X handle, gets a shareable
`moonzo.xyz/?ref=handle`-style link to post. No leaderboard numbers unless you wire it to a real
backend later; skip the leaderboard entirely for now rather than faking it.

---

## 16. LIVE ON-CHAIN DASHBOARD (optional, conditional)

Only build this panel if you have a real data source (PHERA API, a block explorer API, or a
DEX aggregator). It should show: price, market cap, liquidity, 24h volume, holders, transactions,
supply — with real charts.

**If no live API is connected: hide this section entirely.** Do not render it with placeholder or
fake numbers — that's worse than not having it.

---

## 17. BUY / TRADE

Title: **READY FOR LIFTOFF?**

Buttons: **[Trade on PHERA]** · **[View Contract]** · **[View Explorer]**

Approved language: "Explore," "Trade at your own risk," "Do your own research."
**Never use:** "guaranteed moon," "guaranteed profits," "100x guaranteed," "risk-free," "safe investment."

---

## 18. FAQ

- What is MOONZO?
- Where was MOONZO launched?
- What is PHERA?
- What is Robinhood Chain?
- What blockchain does MOONZO use?
- Where can I view the contract?
- Is MOONZO affiliated with Robinhood?
- Is MOONZO affiliated with PHERA?
- Is MOONZO an investment?
- What are the risks?
- How can I join the community?

Affiliation answer (use for both Robinhood and PHERA questions):
> MOONZO is an independent community project. Unless explicitly stated, MOONZO should not be
> interpreted as an official Robinhood or PHERA product.

---

## 19. RISK DISCLOSURE + FOOTER

**CRYPTO ASSET RISK**
> MOONZO is a meme-oriented crypto project. Digital assets are highly volatile and may lose
> significant or all of their value. Nothing on this website constitutes financial, investment, legal,
> or tax advice. Do your own research and never commit more than you can afford to lose.

Footer links: Terms · Privacy · Risk Disclosure

Copyright block:
> © 2026 MOONZO. All rights reserved. MOONZO and its original artwork, branding, and creative
> materials are part of the MOONZO project. PHERA and Robinhood Chain are referenced as
> ecosystem/network technologies and are not claimed as MOONZO trademarks or endorsements.

---

## 20. SOCIAL / FINAL CTA

**JOIN THE MOONZO MISSION** — "The moon is more fun when we go together."

Buttons (only include real links; omit any you don't have yet):
- 𝕏 @Moonzo_Coin
- Telegram `[INSERT LINK]`
- Discord `[INSERT LINK]`
- PHERA `[INSERT LINK]`

Full-screen closing scene: large gold moon, Shiba astronaut standing on the surface, rocket launching
behind him. Text: "TO THE MOON TOGETHER" / "MEME ENERGY. COMMUNITY POWER. FUTURE LEGACY." Button:
**"ENTER THE MOONZO UNIVERSE"** (scrolls back to top / re-opens intro).

---

## 21. EXTRA TOUCHES (my additions — optional but recommended)

- **Mission Log:** a small changelog/timeline module ("Mission Log") on the About or Roadmap page
  where you post real dated updates as the project actually progresses — turns the roadmap from a
  static promise into a living, trust-building feed.
- **Ambient sound toggle:** a subtle looping space-ambient track with a mute/unmute control in the nav — off by default, never autoplay with sound.
- **Low-power / reduced-motion mode:** one toggle that switches all 3D scenes to static gradient art, for older phones and for the accessibility setting.
- **Easter egg:** a hidden click on the Shiba mascot in the footer triggers a small confetti/rocket animation — cheap to build, adds personality.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://moonzo-launchpad-lab.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f31c0f25-ef2a-497a-a8ea-c2486b60fe1a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
