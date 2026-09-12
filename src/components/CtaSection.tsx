type CtaSectionProps = {
  title: string;
  body: string;
  ctaLabel?: string;
  mailtoSubject?: string;
};

export function CtaSection({
  title,
  body,
  ctaLabel = "Termin vereinbaren",
  mailtoSubject = "Schnittstellen-Check",
}: CtaSectionProps) {
  return (
    <section
      id="cta"
      className="mx-auto max-w-site px-6 pb-20 pt-10"
    >
      <div className="rounded-card border border-line bg-surface p-8 shadow-soft md:p-10">
        <h2 className="m-0 text-[1.5rem] font-semibold tracking-[-0.02em] md:text-[1.65rem]">
          {title}
        </h2>
        <p className="mt-2.5 max-w-xl text-muted">{body}</p>
        <a
          className="btn-primary mt-5"
          href={`mailto:hello@epilayer.de?subject=${encodeURIComponent(mailtoSubject)}`}
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
