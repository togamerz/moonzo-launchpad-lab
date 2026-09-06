import { useEffect, useRef, useState } from "react";
import shiba from "@/assets/shiba-astronaut.png";

const upgrades = [
  { id: "pickaxe", name: "Moon Pickaxe", baseCost: 25, cps: 1 },
  { id: "rover", name: "Lunar Rover", baseCost: 150, cps: 6 },
  { id: "rig", name: "Crater Mining Rig", baseCost: 900, cps: 30 },
  { id: "colony", name: "Shiba Colony", baseCost: 5000, cps: 140 },
];

const KEY = "moonzo-clicker-v1";

export function Clicker() {
  const [dust, setDust] = useState(0);
  const [owned, setOwned] = useState<Record<string, number>>({});
  const [pops, setPops] = useState<{ id: number; x: number; y: number }[]>([]);
  const popId = useRef(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        setDust(p.dust ?? 0);
        setOwned(p.owned ?? {});
      }
    } catch {
      /* ignore */
    }
  }, []);

  const cps = upgrades.reduce((s, u) => s + (owned[u.id] ?? 0) * u.cps, 0);

  useEffect(() => {
    const t = setInterval(() => setDust((d) => d + cps / 10), 100);
    return () => clearInterval(t);
  }, [cps]);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(KEY, JSON.stringify({ dust, owned }));
      } catch {
        /* ignore */
      }
    }, 400);
    return () => clearTimeout(t);
  }, [dust, owned]);

  const costOf = (u: (typeof upgrades)[number]) =>
    Math.round(u.baseCost * Math.pow(1.18, owned[u.id] ?? 0));

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="glass relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-8">
        <p className="font-display text-4xl font-bold gold-text">{Math.floor(dust)}</p>
        <p className="text-xs tracking-widest text-muted-foreground uppercase">Moon Dust</p>
        <p className="mt-1 text-xs text-muted-foreground">{cps.toFixed(1)} / sec</p>
        <button
          onClick={(e) => {
            setDust((d) => d + 1);
            const r = (e.target as HTMLElement).getBoundingClientRect();
            const id = popId.current++;
            setPops((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
            setTimeout(() => setPops((p) => p.filter((q) => q.id !== id)), 700);
          }}
          className="relative mt-6 transition-transform active:scale-90"
          aria-label="Mine moon dust"
        >
          <img src={shiba} alt="" width={180} height={180} className="h-40 w-40" />
          {pops.map((p) => (
            <span
              key={p.id}
              style={{ left: p.x, top: p.y, animation: "rise-in .7s ease both" }}
              className="pointer-events-none absolute text-sm font-bold text-primary"
            >
              +1
            </span>
          ))}
        </button>
        <p className="mt-4 text-xs text-muted-foreground">Tap the astronaut to mine.</p>
      </div>

      <div className="space-y-3">
        {upgrades.map((u) => {
          const cost = costOf(u);
          const can = dust >= cost;
          return (
            <button
              key={u.id}
              disabled={!can}
              onClick={() => {
                setDust((d) => d - cost);
                setOwned((o) => ({ ...o, [u.id]: (o[u.id] ?? 0) + 1 }));
              }}
              className={`glass flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-opacity ${
                can ? "hover:scale-[1.01]" : "opacity-50"
              }`}
            >
              <span>
                <span className="font-display block text-sm font-bold">{u.name}</span>
                <span className="text-xs text-muted-foreground">
                  +{u.cps}/sec · owned {owned[u.id] ?? 0}
                </span>
              </span>
              <span className="font-display text-sm text-primary">{cost}</span>
            </button>
          );
        })}
        <button
          onClick={() => {
            setDust(0);
            setOwned({});
          }}
          className="w-full rounded-2xl border border-border px-5 py-3 text-xs tracking-widest text-muted-foreground uppercase hover:text-primary"
        >
          Reset progress
        </button>
      </div>
    </div>
  );
}
