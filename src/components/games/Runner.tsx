import { useEffect, useRef, useState } from "react";

const KEY = "moonzo-run-best";

export function Runner() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setBest(Number(raw) || 0);
  }, []);

  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const ground = H - 40;
    let y = ground;
    let vy = 0;
    let obstacles: { x: number; w: number; h: number }[] = [];
    let frame = 0;
    let localScore = 0;
    let speed = 5;
    let alive = true;
    let raf = 0;

    const jump = () => {
      if (y >= ground - 1) vy = -13;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", onKey);
    canvas.addEventListener("pointerdown", jump);

    const loop = () => {
      frame++;
      vy += 0.7;
      y = Math.min(ground, y + vy);
      speed = 5 + localScore / 400;

      if (frame % Math.max(45, 90 - Math.floor(localScore / 40)) === 0) {
        obstacles.push({ x: W, w: 16 + Math.random() * 18, h: 24 + Math.random() * 32 });
      }
      obstacles.forEach((o) => (o.x -= speed));
      obstacles = obstacles.filter((o) => o.x + o.w > -10);

      ctx.fillStyle = "#0b0a1d";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      for (let i = 0; i < 40; i++) {
        const sx = (i * 97 - frame * 0.6) % W;
        ctx.fillRect(sx < 0 ? sx + W : sx, (i * 53) % (H - 60), 2, 2);
      }
      ctx.strokeStyle = "#e6b74a";
      ctx.beginPath();
      ctx.moveTo(0, ground + 12);
      ctx.lineTo(W, ground + 12);
      ctx.stroke();

      ctx.fillStyle = "#f2d68a";
      ctx.beginPath();
      ctx.arc(60, y - 2, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#8b7bd8";
      obstacles.forEach((o) => {
        ctx.fillRect(o.x, ground + 12 - o.h, o.w, o.h);
        if (o.x < 60 + 14 && o.x + o.w > 60 - 14 && y + 14 > ground + 12 - o.h) alive = false;
      });

      localScore += 1;
      ctx.fillStyle = "#f2d68a";
      ctx.font = "16px monospace";
      ctx.fillText(`SCORE ${localScore}`, 12, 26);

      if (!alive) {
        setScore(localScore);
        setBest((b) => {
          const nb = Math.max(b, localScore);
          localStorage.setItem(KEY, String(nb));
          return nb;
        });
        setRunning(false);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", jump);
    };
  }, [running]);

  return (
    <div className="glass rounded-3xl p-5">
      <div className="mb-3 flex items-center justify-between text-xs tracking-widest uppercase">
        <span className="text-muted-foreground">Last {score}</span>
        <span className="text-primary">Best {best}</span>
      </div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={640}
          height={260}
          className="w-full rounded-2xl border border-border"
        />
        {!running && (
          <button
            onClick={() => setRunning(true)}
            className="absolute inset-0 flex items-center justify-center rounded-2xl bg-background/70 font-display text-sm font-bold tracking-widest uppercase text-primary"
          >
            {score ? "Run again" : "Start run"}
          </button>
        )}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Tap the canvas or press Space to jump.</p>
    </div>
  );
}
