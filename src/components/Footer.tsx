import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/moonzo-logo.png";

export function Footer() {
  const [party, setParty] = useState(false);

  return (
    <footer className="relative border-t border-border bg-[color:var(--bg-secondary)] px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <button
            onClick={() => {
              setParty(true);
              setTimeout(() => setParty(false), 1600);
            }}
            aria-label="Poke the MOONZO mascot"
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="MOONZO mascot"
              width={44}
              height={44}
              loading="lazy"
              className={`h-11 w-11 ${party ? "animate-float" : ""}`}
            />
            <span className="font-display text-lg font-bold gold-text">MOONZO</span>
          </button>
          <p className="mt-3 text-sm text-muted-foreground">
            Meme Energy. Community Power. Future Legacy.
          </p>
          {party && <p className="mt-2 text-sm text-primary">🚀 To the moon together!</p>}
        </div>

        <div className="text-sm">
          <h4 className="mb-3 text-xs tracking-widest text-primary uppercase">Explore</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/moonzo" className="hover:text-primary">
                MOONZO Token
              </Link>
            </li>
            <li>
              <Link to="/phera" className="hover:text-primary">
                PHERA
              </Link>
            </li>
            <li>
              <Link to="/chain" className="hover:text-primary">
                Robinhood Chain
              </Link>
            </li>
            <li>
              <Link to="/roadmap" className="hover:text-primary">
                Roadmap
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 text-xs tracking-widest text-primary uppercase">Play</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/arcade" className="hover:text-primary">
                MOONZO Arcade
              </Link>
            </li>
            <li>
              <Link to="/memes" className="hover:text-primary">
                Meme Lab
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-primary">
                The MOONZO Crew
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 text-xs tracking-widest text-primary uppercase">Legal</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/legal" hash="terms" className="hover:text-primary">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/legal" hash="privacy" className="hover:text-primary">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/legal" hash="risk" className="hover:text-primary">
                Risk Disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl space-y-4 border-t border-border pt-8">
        <div className="glass rounded-2xl p-5">
          <h5 className="font-display text-sm tracking-widest text-primary">CRYPTO ASSET RISK</h5>
          <p className="mt-2 text-sm text-muted-foreground">
            MOONZO is a meme-oriented crypto project. Digital assets are highly volatile and may lose
            significant or all of their value. Nothing on this website constitutes financial,
            investment, legal, or tax advice. Do your own research and never commit more than you can
            afford to lose.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 MOONZO. All rights reserved. MOONZO and its original artwork, branding, and creative
          materials are part of the MOONZO project. PHERA and Robinhood Chain are referenced as
          ecosystem/network technologies and are not claimed as MOONZO trademarks or endorsements.
        </p>
      </div>
    </footer>
  );
}
