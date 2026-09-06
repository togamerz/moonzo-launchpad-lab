import { createFileRoute } from "@tanstack/react-router";
import { Users, Megaphone, ShieldAlert, Trophy } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { Section, Reveal, GlassCard } from "@/components/Section";
import { X_URL } from "@/lib/content";
import shiba from "@/assets/shiba-astronaut.png";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "The MOONZO Crew — Community & Official Links" },
      {
        name: "description",
        content:
          "Join the MOONZO crew: official links, community rules, meme competitions and how we protect members from scams.",
      },
      { property: "og:title", content: "The MOONZO Crew" },
      {
        property: "og:description",
        content: "Official MOONZO links, community values and meme competitions.",
      },
    ],
  }),
  component: CommunityPage,
});

const values = [
  { icon: Users, title: "PEOPLE FIRST", body: "MOONZO only works if the crew shows up. Every member is part of the mission." },
  { icon: Megaphone, title: "OPEN COMMS", body: "Updates get posted publicly. No private promises, no insider signals." },
  { icon: Trophy, title: "CREATE & COMPETE", body: "Meme competitions, arcade high scores, and community shout-outs." },
  { icon: ShieldAlert, title: "STAY SAFE", body: "Only links published on this website are official. Nobody will DM you first." },
];

function CommunityPage() {
  return (
    <div className="relative">
      <Starfield density={0.9} />

      <Section
        eyebrow="Crew Manifest"
        title="THE MOONZO CREW"
        subtitle="MOONZO is a community project. The memes, the games and the momentum come from the people flying with it."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <GlassCard className="h-full">
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Official Channels"
        title="WHERE TO FIND US"
        subtitle="This list is the single source of truth. If a channel is not listed here, treat it as unofficial."
      >
        <Reveal>
          <GlassCard className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-bold">MOONZO on X</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Announcements, memes and mission updates.
              </p>
            </div>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
            >
              Follow
            </a>
          </GlassCard>
        </Reveal>

        <Reveal delay={80}>
          <GlassCard className="mt-6">
            <h3 className="font-display text-sm tracking-widest text-primary uppercase">
              Scam warning
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              MOONZO team members will never message you first, never ask for your seed phrase, and
              never run private sales or giveaways in DMs. Verify every link against this page.
            </p>
          </GlassCard>
        </Reveal>
      </Section>

      <Section
        eyebrow="Meme Competitions"
        title="EARN YOUR STRIPES"
        subtitle="Regular community meme contests. Build it in the Meme Lab, post it with the MOONZO tag, and the crew votes."
      >
        <Reveal>
          <div className="glass flex flex-col items-center gap-6 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
            <img
              src={shiba}
              alt="MOONZO Shiba astronaut mascot"
              width={160}
              height={160}
              loading="lazy"
              className="animate-float h-32 w-32"
            />
            <p className="text-sm text-muted-foreground">
              Winning memes get featured across the MOONZO channels and pinned in the community
              gallery. No entry fee, no wallet connection — just make something funny.
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
