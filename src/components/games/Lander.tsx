import { useEffect, useRef, useState } from "react";

export function Lander() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const padX = 60 + Math.random() * (W - 200);
    const padW = 90;
    const ground = H - 30;

    let x = W / 2;
    let y = 40;
    let vx = (Math.random() - 0.5) * 2;
    let vy = 0;
    let fuel = 700;
    const keys: Record<string, boolean> = {};
    let raf = 0;

    const down = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) e.preventDefault();
      keys[e.code] = true;
    };
    const up = (e: KeyboardEvent) => (keys[e.code] = false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    let touchThrust = false;
    const pd = () => (touchThrust = true);
    const pu = () => (touchThrust = false);
    canvas.addEventListener("pointerdown", pd);
    canvas.addEventListener("pointerup", pu);
    canvas.addEventListener("pointerleave", pu);

    const loop = () => {
      const thrusting = (keys["ArrowUp"] || keys["Space"] || touchThrust) && fuel > 0;
      vy += 0.045;
      if (thrusting) {
        vy -= 0.11;
        fuel -= 1;
      }
      if (keys["ArrowLeft"] && fuel > 0) {
        vx -= 0.03;
        fuel -= 0.5;
      }
      if (keys["ArrowRight"] && fuel > 0) {
        vx += 0.03;
        fuel -= 0.5;
      }
      x += vx;
      y += vy;
      if (x < 8) x = 8;
      if (x > W - 8) x = W - 8;

      ctx.fillStyle = "#0b0a1d";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      for (let i = 0; i < 50; i++) ctx.fillRect((i * 131) % W, (i * 71) % (H - 40), 2, 2);

      ctx.strokeStyle = "#6f6a8f";
      ctx.beginPath();
      ctx.moveTo(0, ground);
      ctx.lineTo(W, ground);
      ctx.stroke();
      ctx.fillStyle = "#e6b74a";
      ctx.fillRect(padX, ground - 4, padW, 6);

      ctx.fillStyle = "#f2d68a";
      ctx.fillRect(x - 8, y - 10, 16, 20);
      if (thrusting) {
        ctx.fillStyle = "#ff9d3d";
        ctx.fillRect(x - 4, y + 10, 8, 8 + Math.random() * 8);
      }

      ctx.fillStyle = "#f2d68a";
      ctx.font = "14px monospace";
      ctx.fillText(`FUEL ${Math.max(0, Math.round(fuel))}`, 12, 22);
      ctx.fillText(`V ${vy.toFixed(2)}`, 12, 40);

      if (y + 10 >= ground) {
        const onPad = x > padX && x < padX + padW;
        const soft = vy < 1.2 && Math.abs(vx) < 0.7;
        setResult(
          onPad && soft
            ? "PERFECT TOUCHDOWN — the crew survives."
            : onPad
              ? "Too fast. The lander crumples on the pad."
              : "Missed the pad. Lost in the regolith.",
        );
        setRunning(false);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      canvas.removeEventListener("pointerdown", pd);
      canvas.removeEventListener("pointerup", pu);
      canvas.removeEventListener("pointerleave", pu);
    };
  }, [running]);

  return (
    <div className="glass rounded-3xl p-5">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={640}
          height={320}
          className="w-full rounded-2xl border border-border"
        />
        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-background/75 px-6 text-center">
            {result && <p className="text-sm text-muted-foreground">{result}</p>}
            <button
              onClick={() => {
                setResult(null);
                setRunning(true);
              }}
              className="glow rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
            >
              {result ? "Try again" : "Begin descent"}
            </button>
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Hold the canvas or press Space / Arrow Up to thrust. Arrow keys steer. Land on the gold pad,
        slowly.
      </p>
    </div>
  );
}
