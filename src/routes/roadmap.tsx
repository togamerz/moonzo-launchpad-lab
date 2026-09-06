import { createFileRoute } from "@tanstack/react-router";
import { Starfield } from "@/components/Starfield";
import { Section, Reveal, GlassCard } from "@/components/Section";
import { roadmap, missionLog } from "@/lib/content";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "MOONZO Roadmap — Liftoff to Beyond" },
      {
        name: "description",
        content:
          "The MOONZO flight plan: Liftoff, Orbit, Moon and Beyond — plus the mission log of what has shipped so far.",
      },
      { property: "og:title", content: "MOONZO Roadmap — Liftoff to Beyond" },
      {
        property: "og:description",
        content: "Four mission phases and the MOONZO mission log.",
      },
    ],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  return (
    <div className="relative">
      <Starfield density={0.8} />
      <Section
        eyebrow="Flight Plan"
        title="THE MOONZO ROADMAP"
        subtitle="Directional, not a promise. Timelines move with the community and with what is genuinely useful to build."
      >
        <div className="relative grid gap-6 md:grid-cols-2">
          {roadmap.map((phase, i) => (
            <Reveal key={phase.phase} delay={i * 80}>
              <GlassCard className="h-full">
                <p className="font-display text-xs tracking-[0.35em] text-primary uppercase">
                  {phase.phase}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">{phase.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {phase.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-primary">▹</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Mission Log"
        title="WHAT HAS SHIPPED"
        subtitle="A running log of milestones. Entries are added only once they are actually live."
      >
        <div className="space-y-4">
          {missionLog.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 70}>
              <GlassCard className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
                <span className="font-display text-sm tracking-widest text-primary">
                  {entry.date}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{entry.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{entry.body}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
