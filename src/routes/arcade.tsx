import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Gamepad2, Lock } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { Section, Reveal, GlassCard } from "@/components/Section";
import { liveGames, comingSoonGames } from "@/lib/content";
import { Clicker } from "@/components/games/Clicker";
import { Runner } from "@/components/games/Runner";
import { Lander } from "@/components/games/Lander";

export const Route = createFileRoute("/arcade")({
  head: () => ({
    meta: [
      { title: "MOONZO Arcade — Play Free Space Mini-Games" },
      {
        name: "description",
        content:
          "Play MOONZO Run, Moon Lander and MOONZO Clicker free in your browser. No wallet, no sign-up — just meme-powered space games.",
      },
      { property: "og:title", content: "MOONZO Arcade" },
      {
        property: "og:description",
        content: "Three playable browser games and 20 more in the hangar.",
      },
    ],
  }),
  component: ArcadePage,
});

function ArcadePage() {
  const [active, setActive] = useState<string>("run");

  return (
    <div className="relative">
      <Starfield density={1} />

      <Section
        eyebrow="Hangar Bay"
        title="MOONZO ARCADE"
        subtitle="Free browser games. No wallet, no sign-up, no scores worth money — pure entertainment for the crew."
      >
        <div className="flex flex-wrap gap-3">
          {liveGames.map((g) => (
            <button
              key={g.slug}
              onClick={() => setActive(g.slug)}
              className={`rounded-full px-5 py-3 font-display text-xs font-bold tracking-widest uppercase transition-colors ${
                active === g.slug
                  ? "bg-[image:var(--gradient-gold)] text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Reveal>
            <p className="mb-4 text-sm text-muted-foreground">
              {liveGames.find((g) => g.slug === active)?.desc}
            </p>
            {active === "run" && <Runner />}
            {active === "lander" && <Lander />}
            {active === "clicker" && <Clicker />}
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="In The Hangar"
        title="COMING SOON"
        subtitle="Twenty more MOONZO games in the build queue. Community votes decide which ones get built first."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {comingSoonGames.map((name, i) => (
            <Reveal key={name} delay={i * 25}>
              <GlassCard className="flex h-full items-center gap-3 opacity-80">
                <Lock className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-display text-sm">{name}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
            <Gamepad2 className="h-4 w-4 text-primary" />
            Arcade scores are local to your browser and have no monetary value.
          </p>
        </Reveal>
      </Section>
    </div>
  );
}
