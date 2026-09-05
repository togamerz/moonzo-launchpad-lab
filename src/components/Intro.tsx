import { useEffect, useState } from "react";
import logo from "@/assets/moonzo-logo.png";
import shiba from "@/assets/shiba-astronaut.png";
import { Starfield } from "@/components/Starfield";
import { useSiteState } from "@/lib/site-state";

const beats = ["MISSION CONTROL INITIALIZING…", "WELCOME TO MOONZO", "TO THE MOON TOGETHER 🚀"];

export function Intro() {
  const { introSeen, setIntroSeen } = useSiteState();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (introSeen) return;
    if (step >= beats.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), 1300);
    return () => clearTimeout(t);
  }, [step, introSeen]);

  if (introSeen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <Starfield density={1.4} />
      <div
        aria-hidden
        className="animate-pulse-glow absolute -bottom-40 h-[520px] w-[520px] rounded-full bg-[image:var(--gradient-gold)] blur-[80px] opacity-40"
      />

      <button
        onClick={() => setIntroSeen(true)}
        className="absolute top-6 right-6 z-10 rounded-full border border-border px-4 py-2 text-xs tracking-widest text-muted-foreground uppercase hover:text-primary"
      >
        Skip
      </button>

      <div className="relative z-10 flex flex-col items-center">
        <img
          src={logo}
          alt="MOONZO logo"
          width={120}
          height={120}
          className="animate-float h-28 w-28"
        />
        <h1 className="mt-6 font-display text-5xl font-bold tracking-[0.2em] gold-text sm:text-7xl">
          MOONZO
        </h1>
        <p className="mt-6 min-h-8 font-display text-sm tracking-[0.3em] text-foreground/80 uppercase sm:text-base">
          {beats[Math.min(step, beats.length - 1)]}
        </p>

        <img
          src={shiba}
          alt="Shiba astronaut mascot"
          width={220}
          height={220}
          className="animate-float mt-6 h-40 w-40 sm:h-52 sm:w-52"
        />

        {step >= beats.length && (
          <button
            onClick={() => setIntroSeen(true)}
            style={{ animation: "rise-in .5s ease both" }}
            className="glow mt-8 rounded-full bg-[image:var(--gradient-gold)] px-8 py-4 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
          >
            Enter the MOONZO Universe
          </button>
        )}
      </div>
    </div>
  );
}
