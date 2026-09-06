import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { Section, Reveal, GlassCard } from "@/components/Section";
import shiba from "@/assets/shiba-astronaut.png";
import moonHero from "@/assets/moon-hero.jpg";
import moonSurface from "@/assets/moon-surface.jpg";

export const Route = createFileRoute("/memes")({
  head: () => ({
    meta: [
      { title: "MOONZO Meme Lab — Build & Download Memes" },
      {
        name: "description",
        content:
          "Make MOONZO memes in the browser: pick a backdrop or upload your own, add top and bottom text, and download the result.",
      },
      { property: "og:title", content: "MOONZO Meme Lab" },
      {
        property: "og:description",
        content: "Create and download MOONZO memes in seconds. No sign-up needed.",
      },
    ],
  }),
  component: MemesPage,
});

const backdrops = [
  { src: moonHero, label: "Golden Moon" },
  { src: moonSurface, label: "Moon Surface" },
  { src: shiba, label: "Shiba Astronaut" },
];

function MemesPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [bg, setBg] = useState<string>(moonHero);
  const [top, setTop] = useState("WHEN MOONZO");
  const [bottom, setBottom] = useState("HITS THE MOON");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.fillStyle = "#0b0a1d";
      ctx.fillRect(0, 0, W, H);
      const scale = Math.max(W / img.width, H / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);

      ctx.textAlign = "center";
      ctx.lineJoin = "round";
      const draw = (text: string, y: number) => {
        if (!text) return;
        const size = Math.round(W / 11);
        ctx.font = `bold ${size}px Impact, "Space Grotesk", sans-serif`;
        ctx.lineWidth = size / 6;
        ctx.strokeStyle = "#0b0a1d";
        ctx.fillStyle = "#ffffff";
        ctx.strokeText(text.toUpperCase(), W / 2, y);
        ctx.fillText(text.toUpperCase(), W / 2, y);
      };
      draw(top, 80);
      draw(bottom, H - 36);
    };
    img.src = bg;
  }, [bg, top, bottom]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = "moonzo-meme.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  };

  return (
    <div className="relative">
      <Starfield density={0.8} />

      <Section
        eyebrow="Creative Bay"
        title="MOONZO MEME LAB"
        subtitle="Pick a backdrop or upload your own image, write your lines, and download the meme. Everything happens in your browser."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <GlassCard>
              <canvas
                ref={canvasRef}
                width={720}
                height={720}
                className="w-full rounded-2xl border border-border"
              />
            </GlassCard>
          </Reveal>

          <Reveal delay={80}>
            <GlassCard className="space-y-5">
              <div>
                <label className="text-xs tracking-widest text-primary uppercase">Top text</label>
                <input
                  value={top}
                  onChange={(e) => setTop(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest text-primary uppercase">Bottom text</label>
                <input
                  value={bottom}
                  onChange={(e) => setBottom(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">Backdrop</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {backdrops.map((b) => (
                    <button
                      key={b.label}
                      onClick={() => setBg(b.src)}
                      className={`rounded-full border px-4 py-2 text-xs ${
                        bg === b.src
                          ? "border-primary text-primary"
                          : "border-border text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground hover:text-primary">
                <Upload className="h-4 w-4" />
                Upload your own image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setBg(URL.createObjectURL(file));
                  }}
                />
              </label>

              <button
                onClick={download}
                className="glow flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-6 py-4 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Download meme
              </button>
              <p className="text-xs text-muted-foreground">
                Keep it fun and respectful. Do not use MOONZO artwork to imply endorsement by any
                company or exchange.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
