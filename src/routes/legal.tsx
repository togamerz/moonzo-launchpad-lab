import { createFileRoute } from "@tanstack/react-router";
import { Starfield } from "@/components/Starfield";
import { Section, Reveal, GlassCard } from "@/components/Section";
import { affiliationAnswer } from "@/lib/content";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "MOONZO Legal — Terms, Privacy & Risk Disclosure" },
      {
        name: "description",
        content:
          "MOONZO terms of use, privacy approach and full crypto asset risk disclosure. Nothing here is financial advice.",
      },
      { property: "og:title", content: "MOONZO Legal & Risk Disclosure" },
      {
        property: "og:description",
        content: "Terms, privacy and the full risk disclosure for the MOONZO meme project.",
      },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <div className="relative">
      <Starfield density={0.5} />

      <Section
        id="risk"
        eyebrow="Read This First"
        title="RISK DISCLOSURE"
        subtitle="MOONZO is a meme-oriented community project, not an investment product."
      >
        <Reveal>
          <GlassCard>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                Digital assets are highly volatile and may lose significant or all of their value.
              </li>
              <li>
                Nothing on this website is financial, investment, legal or tax advice. Do your own
                research.
              </li>
              <li>Never commit more funds than you can afford to lose entirely.</li>
              <li>
                No independent security audit is claimed for this project. Token details are shown
                as unverified until they can be confirmed on-chain.
              </li>
              <li>
                Meme tokens are frequently created to test or exercise a network. Treat MOONZO as a
                cultural and technical experiment first.
              </li>
            </ul>
          </GlassCard>
        </Reveal>
      </Section>

      <Section id="terms" eyebrow="Terms" title="TERMS OF USE">
        <Reveal>
          <GlassCard>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                This website is provided on an "as is" basis for informational and entertainment
                purposes. By using it you accept that you are solely responsible for any decisions
                you make.
              </p>
              <p>{affiliationAnswer}</p>
              <p>
                MOONZO original artwork, branding and creative materials belong to the MOONZO
                project. PHERA and Robinhood Chain are referenced as ecosystem and network
                technologies only, and no endorsement is claimed.
              </p>
              <p>
                Games and tools on this site are for entertainment. Scores and in-game items have no
                monetary value and are not redeemable for tokens.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      <Section id="privacy" eyebrow="Privacy" title="PRIVACY">
        <Reveal>
          <GlassCard>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                This site does not ask you to create an account, connect a wallet, or submit
                personal information.
              </p>
              <p>
                Arcade scores and site preferences such as sound and low-power mode stay in your own
                browser. Clearing your browser data removes them.
              </p>
              <p>
                External links (X, PHERA, Robinhood Chain) are governed by those sites' own privacy
                policies.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </div>
  );
}
