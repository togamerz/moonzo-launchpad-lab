import { createFileRoute } from "@tanstack/react-router";
import { Section, Reveal, GlassCard } from "@/components/Section";
import { CHAIN_DOCS_URL, CHAIN_URL } from "@/lib/content";

export const Route = createFileRoute("/chain")({
  head: () => ({
    meta: [
      { title: "Robinhood Chain — The Network Behind MOONZO" },
      {
        name: "description",
        content:
          "Robinhood Chain is a permissionless, Ethereum-compatible Layer-2 built on Arbitrum technology, live since July 1, 2026, using ETH for gas.",
      },
      { property: "og:title", content: "Robinhood Chain — The Network Behind MOONZO" },
      {
        property: "og:description",
        content: "An EVM Layer-2 settling to Ethereum, designed for tokenized real-world assets and on-chain finance.",
      },
    ],
  }),
  component: ChainPage,
});

const cards = [
  {
    title: "Ethereum-Compatible",
    body: "Fully EVM-compatible; standard Ethereum tooling works out of the box.",
  },
  {
    title: "Layer 2 (Arbitrum Orbit)",
    body: "Built on Arbitrum's Orbit framework, settling to Ethereum L1.",
  },
  {
    title: "Open & Permissionless",
    body: "Anyone can build applications and smart contracts on the network.",
  },
  {
    title: "Real-World Assets",
    body: "Originally designed to support tokenized real-world assets and finance.",
  },
  { title: "ETH Gas", body: "ETH is the native gas token; the chain itself has no native coin." },
];

function ChainPage() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Robinhood Chain"
        title="THE CHAIN BEHIND THE MISSION"
        subtitle="Robinhood Chain is a permissionless, Ethereum-compatible Layer-2 blockchain built on Arbitrum's technology, live on mainnet since July 1, 2026. It settles transaction data back to Ethereum for security, uses ETH as its native gas token, and was designed to support tokenized real-world assets and everyday on-chain financial activity — with a fast-growing community and meme-coin scene alongside that original focus."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <GlassCard className="h-full">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={CHAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
          >
            Explore Robinhood Chain
          </a>
          <a
            href={CHAIN_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-7 py-3.5 font-display text-sm tracking-widest uppercase hover:border-primary hover:text-primary"
          >
            Developer Docs
          </a>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Robinhood does not endorse MOONZO. MOONZO is an independent community project.
        </p>
      </Section>
    </div>
  );
}
