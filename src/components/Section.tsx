import type { ReactNode } from "react";
import { useReveal } from "@/lib/reveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section-pad relative ${className}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          {eyebrow && (
            <p className="font-display text-xs tracking-[0.35em] text-primary uppercase">{eyebrow}</p>
          )}
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            <span className="gold-text">{title}</span>
          </h2>
          {subtitle && <p className="mt-4 max-w-3xl text-muted-foreground">{subtitle}</p>}
        </Reveal>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`glass tilt-card rounded-3xl p-6 ${className}`}>{children}</div>;
}
