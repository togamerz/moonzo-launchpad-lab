import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { Section, Reveal } from "@/components/Section";
import { faqs } from "@/lib/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "MOONZO FAQ — Token, PHERA and Robinhood Chain" },
      {
        name: "description",
        content:
          "Answers about MOONZO, the PHERA launchpad, Robinhood Chain, contract details, risks and affiliation.",
      },
      { property: "og:title", content: "MOONZO FAQ" },
      {
        property: "og:description",
        content: "Straight answers on MOONZO, PHERA, Robinhood Chain and the risks involved.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative">
      <Starfield density={0.7} />
      <Section
        eyebrow="Mission Briefing"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="If something is not confirmed on-chain yet, it is marked as unverified rather than guessed."
      >
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <div className="glass rounded-2xl">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-sm font-semibold sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
