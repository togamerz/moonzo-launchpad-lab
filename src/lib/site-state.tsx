import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SiteState = {
  introSeen: boolean;
  setIntroSeen: (v: boolean) => void;
  lowPower: boolean;
  toggleLowPower: () => void;
  muted: boolean;
  toggleMuted: () => void;
};

const Ctx = createContext<SiteState | null>(null);

export function SiteStateProvider({ children }: { children: ReactNode }) {
  const [introSeen, setIntroSeen] = useState(false);
  const [lowPower, setLowPower] = useState(false);
  const [muted, setMuted] = useState(true);

  const value = useMemo(
    () => ({
      introSeen,
      setIntroSeen,
      lowPower,
      toggleLowPower: () => setLowPower((v) => !v),
      muted,
      toggleMuted: () => setMuted((v) => !v),
    }),
    [introSeen, lowPower, muted],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSiteState() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSiteState must be used inside SiteStateProvider");
  return ctx;
}
