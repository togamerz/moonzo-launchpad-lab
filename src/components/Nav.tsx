import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Volume2, VolumeX, Sparkles } from "lucide-react";
import logo from "@/assets/moonzo-logo.png";
import { useSiteState } from "@/lib/site-state";

const links = [
  { to: "/", label: "Home" },
  { to: "/moonzo", label: "MOONZO" },
  { to: "/phera", label: "PHERA" },
  { to: "/chain", label: "Robinhood Chain" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/arcade", label: "Arcade" },
  { to: "/memes", label: "Meme Lab" },
  { to: "/community", label: "Community" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { muted, toggleMuted, lowPower, toggleLowPower } = useSiteState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass py-2" : "py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="MOONZO logo" width={40} height={40} className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-widest gold-text">MOONZO</span>
        </Link>

        <ul className="hidden items-center gap-5 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary text-sm font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLowPower}
            aria-label="Toggle low power mode"
            title={lowPower ? "Low-power mode on" : "Low-power mode off"}
            className={`hidden rounded-full border border-border p-2 transition-colors sm:block ${
              lowPower ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            <Sparkles className="h-4 w-4" />
          </button>
          <button
            onClick={toggleMuted}
            aria-label="Toggle ambient sound"
            className="hidden rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <Link
            to="/moonzo"
            className="hidden rounded-full bg-[image:var(--gradient-gold)] px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            Buy / Trade
          </Link>
          <button
            className="rounded-full border border-border p-2 text-foreground xl:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass fixed inset-0 top-0 z-40 flex flex-col gap-1 overflow-y-auto px-6 pt-24 pb-10 xl:hidden">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{ animation: `rise-in 0.4s ease both ${i * 0.04}s` }}
              className="rounded-xl px-4 py-4 text-xl font-semibold text-foreground hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
