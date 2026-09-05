import { createFileRoute } from "@tanstack/react-router";
import { Section, Reveal, GlassCard } from "@/components/Section";
import { PHERA_URL } from "@/lib/content";

export const Route = createFileRoute("/phera")({
  head: () => ({
    meta: [
      { title: "PHERA — The Launchpad Behind MOONZO" },
      {
        name: "description",
        content:
          "PHERA is a token launchpad and native concentrated-liquidity DEX on Robinhood Chain. Learn how MOONZO launched through it.",
      },
      { property: "og:title", content: "PHERA — The Launchpad Behind MOONZO" },
      {
        property: "og:description",
        content: "Bonding-curve launches, immutable economics, and permanently locked graduation liquidity.",
      },
    ],
  }),
  component: PheraPage,
});

const facts = [
  {
    title: "Bonding-curve launch",
    body: "Every token starts on a bonding curve with immutable economics — the rules are fixed at launch and cannot be rewritten later.",
  },
  {
    title: "Automatic graduation",
    body: "Once a launch completes its curve, the token graduates automatically into its own PHERA concentrated-liquidity pool.",
  },
  {
    title: "Locked graduation liquidity",
    body: "The liquidity created at graduation is locked permanently, so it cannot be pulled from the pool afterwards.",
  },
  {
    title: "Native CLMM DEX",
    body: "PHERA is not only a launchpad — it is a concentrated-liquidity market maker DEX native to Robinhood Chain, so trading happens in the same ecosystem.",
  },
];

function PheraPage() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Launch Platform"
        title="POWERED BY PHERA"
        subtitle="PHERA is a token launchpad and native concentrated-liquidity DEX on Robinhood Chain. Every token launches on a bonding curve with immutable economics, then automatically graduates into its own PHERA concentrated-liquidity pool — with that graduation liquidity locked permanently. MOONZO was launched through the PHERA ecosystem."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {facts.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <GlassCard className="h-full">
                <h3 className="font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <a
          href={PHERA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glow mt-8 inline-block rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
        >
          Explore PHERA
        </a>

        <p className="mt-6 text-xs text-muted-foreground">
          MOONZO is an independent community project and is not presented as an official PHERA or
          Robinhood product unless explicitly stated by those organizations.
        </p>
      </Section>
    </div>
  );
}
