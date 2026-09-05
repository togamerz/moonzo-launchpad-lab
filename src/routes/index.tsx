import { createFileRoute, Link } from "@tanstack/react-router";
import { Rocket, Users, Link2, Sparkles, ArrowRight } from "lucide-react";
import heroMoon from "@/assets/moon-hero.jpg";
import shiba from "@/assets/shiba-astronaut.png";
import moonSurface from "@/assets/moon-surface.jpg";
import { Starfield } from "@/components/Starfield";
import { Section, Reveal, GlassCard } from "@/components/Section";
import { CHAIN_URL, PHERA_URL, roadmap } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOONZO — Meme Energy on Robinhood Chain" },
      {
        name: "description",
        content:
          "MOONZO is a community-driven meme project launched through PHERA on Robinhood Chain. Explore the mission, the arcade, and the meme lab.",
      },
      { property: "og:title", content: "MOONZO — Meme Energy on Robinhood Chain" },
      {
        property: "og:description",
        content:
          "A community meme project launched through PHERA on Robinhood Chain. Games, memes, and transparent token info.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Sparkles, title: "MEMES", body: "Culture, creativity, and internet energy." },
  { icon: Users, title: "COMMUNITY", body: "MOONZO grows with the people who participate." },
  { icon: Link2, title: "ON-CHAIN", body: "Created and traded on-chain through the PHERA ecosystem." },
  {
    icon: Rocket,
    title: "FUTURE",
    body: "An evolving ecosystem of games, community experiences, and future experiments.",
  },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-20">
        <img
          src={heroMoon}
          alt="Golden moon with orbital rings in deep space"
          width={1536}
          height={1024}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-cosmic)] opacity-60" />
        <Starfield />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-primary uppercase">
              Launched via PHERA · Robinhood Chain
            </p>
            <h1 className="mt-4 font-display text-6xl font-bold tracking-tight sm:text-8xl">
              <span className="gold-text drop-shadow-[0_0_30px_rgba(245,184,46,0.35)]">MOONZO</span>
            </h1>
            <p className="mt-4 font-display text-lg text-foreground/90 sm:text-2xl">
              Meme Energy. Community Power. Future Legacy.
            </p>
            <p className="mt-5 max-w-xl text-muted-foreground">
              A community-driven meme project launched through PHERA on Robinhood Chain — built
              around memes, creativity, experimentation, and the journey to the moon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/moonzo"
                className="glow rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
              >
                Explore MOONZO
              </Link>
              <a
                href={PHERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-7 py-3.5 font-display text-sm tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
              >
                View on PHERA
              </a>
              <Link
                to="/community"
                className="rounded-full border border-border px-7 py-3.5 font-display text-sm tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
              >
                Join the Community
              </Link>
            </div>
          </Reveal>

          <div className="relative flex justify-center">
            <div
              aria-hidden
              className="animate-orbit absolute h-[380px] w-[380px] rounded-full border border-primary/25"
            />
            <div
              aria-hidden
              className="animate-orbit absolute h-[300px] w-[300px] rotate-45 rounded-full border border-accent/20"
            />
            <img
              src={shiba}
              alt="MOONZO Shiba astronaut mascot"
              width={420}
              height={420}
              className="animate-float relative h-64 w-64 sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS MOONZO */}
      <Section
        eyebrow="Mission Briefing"
        title="WHAT IS MOONZO?"
        subtitle="MOONZO is a community-driven meme project created to bring together meme culture, on-chain experimentation, and an interactive Web3 experience. Built through PHERA on Robinhood Chain, MOONZO is designed around a simple idea: have fun, build together, explore on-chain, aim for the moon."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <GlassCard className="h-full">
                <p.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-xl tracking-widest">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY A MEME COIN */}
      <Section eyebrow="Transparency" title="WHY BUILD A MEME COIN?">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard>
              <p className="text-muted-foreground">
                Meme projects are one of crypto's most community-driven forms of experimentation.
                They can bring people together, create cultural moments, encourage on-chain
                activity, and give builders a creative way to explore blockchain ecosystems.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={100}>
            <GlassCard>
              <p className="text-muted-foreground">
                MOONZO does not claim that a meme coin is required to test or scale Robinhood Chain.
                Instead, MOONZO aims to participate in the ecosystem through community activity,
                experimentation, and an entertaining on-chain experience.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* ECOSYSTEM LINKS */}
      <Section eyebrow="Ecosystem" title="THE TECH BEHIND THE MISSION">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full">
              <h3 className="font-display text-2xl">POWERED BY PHERA</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                PHERA is a token launchpad and native concentrated-liquidity DEX on Robinhood Chain.
                Every token launches on a bonding curve with immutable economics, then automatically
                graduates into its own PHERA concentrated-liquidity pool — with that graduation
                liquidity locked permanently.
              </p>
              <Link
                to="/phera"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore PHERA <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          </Reveal>
          <Reveal delay={100}>
            <GlassCard className="h-full">
              <h3 className="font-display text-2xl">ROBINHOOD CHAIN</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                A permissionless, Ethereum-compatible Layer-2 built on Arbitrum's technology, live on
                mainnet since July 1, 2026. It settles data back to Ethereum for security and uses
                ETH as its native gas token.
              </p>
              <Link
                to="/chain"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore the chain <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          </Reveal>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          MOONZO is an independent community project and is not presented as an official PHERA or
          Robinhood product unless explicitly stated by those organizations.
        </p>
      </Section>

      {/* ROADMAP PREVIEW */}
      <Section eyebrow="Mission Phases" title="ROADMAP">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((p, i) => (
            <Reveal key={p.phase} delay={i * 80}>
              <GlassCard className="h-full">
                <p className="font-display text-xs tracking-[0.3em] text-primary">{p.phase}</p>
                <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {p.items.map((it) => (
                    <li key={it}>· {it}</li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground italic">
          Roadmap items represent goals and may change. They are not guarantees.
        </p>
      </Section>

      {/* PLAY */}
      <Section
        eyebrow="Have fun on the way"
        title="ARCADE & MEME LAB"
        subtitle="23 ways to have fun before we reach the moon — plus a browser meme generator. Entertainment only: no wallet needed, no rewards, no gambling."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/arcade"
            className="rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
          >
            Enter the Arcade
          </Link>
          <Link
            to="/memes"
            className="rounded-full border border-border px-7 py-3.5 font-display text-sm tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Create your MOONZO meme 🚀
          </Link>
        </div>
      </Section>

      {/* CLOSING SCENE */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 text-center">
        <img
          src={moonSurface}
          alt="Shiba astronaut on the golden moon with a rocket launching behind"
          width={1536}
          height={1024}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-background/55" />
        <Reveal className="relative">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">
            <span className="gold-text">TO THE MOON TOGETHER</span>
          </h2>
          <p className="mt-4 font-display tracking-[0.25em] text-foreground/80 uppercase">
            Meme Energy. Community Power. Future Legacy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="glow rounded-full bg-[image:var(--gradient-gold)] px-8 py-4 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
            >
              Enter the MOONZO Universe
            </button>
            <a
              href={CHAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-8 py-4 font-display text-sm tracking-widest uppercase hover:border-primary hover:text-primary"
            >
              Robinhood Chain
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
