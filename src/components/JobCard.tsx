import Link from "next/link";

type JobCardProps = {
  title: string;
  body: string;
  href?: string;
  dashed?: boolean;
};

export function JobCard({ title, body, href, dashed }: JobCardProps) {
  const inner = (
    <>
      {dashed ? (
        <div className="mb-2 text-[1.6rem] leading-none text-muted">+</div>
      ) : null}
      <h3 className="mb-2 text-[1.15rem] font-semibold tracking-[-0.02em]">
        {title}
      </h3>
      <p className="m-0 text-[0.95rem] text-muted">{body}</p>
      {href ? (
        <div className="mt-[18px] text-[0.9rem] font-semibold text-accent">
          {dashed ? "Gespräch anfragen →" : "Zur Lösung →"}
        </div>
      ) : null}
    </>
  );

  const className = dashed
    ? "flex min-h-[180px] flex-col justify-center rounded-card border border-dashed border-line bg-transparent p-[22px] transition-colors hover:border-muted"
    : "min-h-[180px] rounded-card border border-line bg-surface p-[22px] shadow-soft transition-shadow hover:shadow-md";

  if (href) {
    return (
      <Link href={href} className={`${className} block`}>
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}
