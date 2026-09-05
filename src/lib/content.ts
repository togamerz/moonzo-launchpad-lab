export const TICKER = "[INSERT TICKER]";
export const PLACEHOLDER = "DATA WILL APPEAR AFTER VERIFICATION.";

export const PHERA_URL = "https://phera.pro/";
export const CHAIN_URL = "https://robinhood.com/chain";
export const CHAIN_DOCS_URL = "https://docs.robinhood.com/chain/";
export const X_URL = "https://x.com/Moonzo_Coin";

export const tokenFields = [
  { label: "Symbol", value: TICKER, verified: false },
  { label: "Network", value: "Robinhood Chain", verified: true },
  { label: "Launch Platform", value: "PHERA", verified: true },
  { label: "Contract Address", value: PLACEHOLDER, verified: false },
  { label: "Total Supply", value: PLACEHOLDER, verified: false },
  { label: "Liquidity", value: PLACEHOLDER, verified: false },
];

export const transparencyChecklist = [
  { item: "Contract address published + linked to explorer", status: "unverified" },
  { item: "Network — Robinhood Chain", status: "verified" },
  { item: "Launch platform — PHERA", status: "verified" },
  { item: "Token supply confirmed on-chain", status: "unverified" },
  { item: "Liquidity details and lock status", status: "unverified" },
  { item: "Ownership / renounce status", status: "unverified" },
  { item: "Contract verified on the block explorer", status: "unverified" },
  { item: "NO INDEPENDENT SECURITY AUDIT CLAIMED", status: "note" },
] as const;

export const roadmap = [
  {
    phase: "PHASE 01",
    name: "LIFTOFF",
    items: [
      "Launch MOONZO",
      "Brand identity",
      "Social presence",
      "Initial community",
      "Website",
    ],
  },
  {
    phase: "PHASE 02",
    name: "ORBIT",
    items: [
      "Community growth",
      "Meme campaigns",
      "Competitions",
      "First arcade games",
      "Meme gallery",
      "Community events",
    ],
  },
  {
    phase: "PHASE 03",
    name: "MOON",
    items: [
      "Expand the MOONZO universe",
      "More games",
      "More community features",
      "Partnerships where appropriate",
      "Further Web3 experiments",
    ],
  },
  {
    phase: "PHASE 04",
    name: "BEYOND",
    items: [
      "Future utilities",
      "New interactive experiences",
      "Ecosystem expansion",
      "Community-driven experiments",
    ],
  },
];

export const missionLog = [
  { date: "2026", title: "Website mission control online", body: "MOONZO's public site goes live with transparency-first token info." },
  { date: "2026", title: "Arcade phase 01", body: "Three playable games ship: MOONZO Run, Moon Lander, MOONZO Clicker." },
  { date: "2026", title: "Meme Lab opens", body: "Community meme generator released — export and share instantly." },
];

export const liveGames = [
  { slug: "run", name: "MOONZO RUN", desc: "Endless runner — jump the obstacles, the moon gets closer the longer you last." },
  { slug: "lander", name: "MOON LANDER", desc: "Thrust-and-land physics — touch down softly inside the target zone." },
  { slug: "clicker", name: "MOONZO CLICKER", desc: "Idle incremental clicker — build your lunar mining empire, no wallet needed." },
];

export const comingSoonGames = [
  "Rocket Rush",
  "Meme Catcher",
  "Shiba Jump",
  "Moon Miner",
  "Asteroid Smash",
  "MOONZO Match",
  "Rocket Dodge",
  "Moon Quiz",
  "Meme Memory",
  "Space Defender",
  "MOONZO Puzzle",
  "Gravity Flip",
  "Shiba Space Race",
  "Moonshot",
  "Crypto Reaction",
  "Orbit",
  "Meme Battle",
  "Rocket Builder",
  "Moon Escape",
  "To The Moon",
];

export const affiliationAnswer =
  "MOONZO is an independent community project. Unless explicitly stated, MOONZO should not be interpreted as an official Robinhood or PHERA product.";

export const faqs = [
  {
    q: "What is MOONZO?",
    a: "MOONZO is a community-driven meme project built around meme culture, on-chain experimentation, and an interactive Web3 experience.",
  },
  {
    q: "Where was MOONZO launched?",
    a: "MOONZO was launched through the PHERA ecosystem on Robinhood Chain.",
  },
  {
    q: "What is PHERA?",
    a: "PHERA is a token launchpad and native concentrated-liquidity DEX on Robinhood Chain. Tokens launch on a bonding curve with immutable economics and graduate into their own concentrated-liquidity pool, with graduation liquidity locked permanently.",
  },
  {
    q: "What is Robinhood Chain?",
    a: "Robinhood Chain is a permissionless, Ethereum-compatible Layer-2 network built on Arbitrum's technology, live on mainnet since July 1, 2026. It settles data to Ethereum, uses ETH for gas, and was designed to support tokenized real-world assets and everyday on-chain finance.",
  },
  {
    q: "What blockchain does MOONZO use?",
    a: "Robinhood Chain — an Ethereum Layer-2. Gas is paid in ETH.",
  },
  {
    q: "Where can I view the contract?",
    a: "The contract address and explorer link are published in the MOONZO token panel as soon as they are verified. Until then the field shows a placeholder rather than a guessed value.",
  },
  { q: "Is MOONZO affiliated with Robinhood?", a: affiliationAnswer },
  { q: "Is MOONZO affiliated with PHERA?", a: affiliationAnswer },
  {
    q: "Is MOONZO an investment?",
    a: "No. MOONZO is a meme-oriented community project. Nothing on this site is financial, investment, legal, or tax advice.",
  },
  {
    q: "What are the risks?",
    a: "Digital assets are highly volatile and may lose significant or all of their value. Trade at your own risk and never commit more than you can afford to lose.",
  },
  {
    q: "How can I join the community?",
    a: "Follow the project on X and watch for community links published on this site. Only links published here should be treated as official.",
  },
];
