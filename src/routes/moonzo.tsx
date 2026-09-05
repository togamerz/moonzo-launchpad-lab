import { createFileRoute } from "@tanstack/react-router";
import { Check, CircleAlert, Info, Copy } from "lucide-react";
import { useState } from "react";
import { Section, Reveal, GlassCard } from "@/components/Section";
import {
  PHERA_URL,
  CHAIN_URL,
  PLACEHOLDER,
  tokenFields,
  transparencyChecklist,
} from "@/lib/content";

export const Route = createFileRoute("/moonzo")({
  head: () => ({
    meta: [
      { title: "MOONZO Token — Contract, Supply & Transparency" },
      {
        name: "description",
        content:
          "MOONZO token details on Robinhood Chain: network, launch platform, contract and supply. Unverified values stay blank on purpose.",
      },
      { property: "og:title", content: "MOONZO Token — Contract, Supply & Transparency" },
      {
        property: "og:description",
        content: "Verified-only token information for the MOONZO meme project on Robinhood Chain.",
      },
    ],
  }),
  component: MoonzoPage,
});

function MoonzoPage() {
  const [copied, setCopied] = useState(false);
  const contract = tokenFields.find((f) => f.label === "Contract Address")!.value;

  return (
    <div className="pt-24">
      <Section
        eyebrow="Token Dashboard"
        title="MEET MOONZO"
        subtitle="Every field below is either verified or clearly marked as pending. Nothing here is estimated, guessed, or auto-generated."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tokenFields.map((f, i) => (
            <Reveal key={f.label} delay={i * 60}>
              <GlassCard className="h-full">
                <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">
                  {f.label}
                </p>
                <p className="mt-3 font-display text-lg break-all">{f.value}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {f.verified ? "Verified" : "Pending verification"}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              if (contract === PLACEHOLDER) return;
              navigator.clipboard?.writeText(contract);
              setCopied(true);
              setTimeout(() => setCopied(false), 1800);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:border-primary hover:text-primary"
          >
            <Copy className="h-4 w-4" /> {copied ? "Copied" : "Copy Contract"}
          </button>
          <a
            href={CHAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm hover:border-primary hover:text-primary"
          >
            View on Explorer
          </a>
          <a
            href={PHERA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            View on PHERA
          </a>
        </div>
      </Section>

      <Section
        eyebrow="Do your own research"
        title="KNOW WHAT YOU'RE BUYING"
        subtitle="A plain checklist — no seals, no badges, no claims we can't back up."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {transparencyChecklist.map((c, i) => (
            <Reveal key={c.item} delay={i * 50}>
              <div className="glass flex items-start gap-3 rounded-2xl p-4">
                {c.status === "verified" ? (
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                ) : c.status === "note" ? (
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                ) : (
                  <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                )}
                <div>
                  <p className="text-sm">{c.item}</p>
                  <p className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
                    {c.status === "verified"
                      ? "Verified"
                      : c.status === "note"
                        ? "Disclosure"
                        : "Unverified"}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trade"
        title="READY FOR LIFTOFF?"
        subtitle="Explore. Trade at your own risk. Do your own research."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={PHERA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
          >
            Trade on PHERA
          </a>
          <a
            href={CHAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-7 py-3.5 font-display text-sm tracking-widest uppercase hover:border-primary hover:text-primary"
          >
            View Explorer
          </a>
        </div>
      </Section>
    </div>
  );
}
