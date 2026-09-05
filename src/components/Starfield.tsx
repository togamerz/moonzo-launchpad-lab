import { useEffect, useRef } from "react";
import { useSiteState } from "@/lib/site-state";

export function Starfield({ density = 1 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const { lowPower } = useSiteState();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: { x: number; y: number; z: number; r: number }[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 9000) * density;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 0.8 + 0.2,
        r: Math.random() * 1.3 + 0.2,
      }));
    };

    const draw = (drift: boolean) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        if (drift) {
          s.y += s.z * 0.15;
          if (s.y > canvas.height) s.y = 0;
        }
        ctx.globalAlpha = 0.25 + s.z * 0.7;
        ctx.fillStyle = s.z > 0.75 ? "#FFD86A" : "#F4F6FF";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      draw(true);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || lowPower) draw(false);
    else loop();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density, lowPower]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
