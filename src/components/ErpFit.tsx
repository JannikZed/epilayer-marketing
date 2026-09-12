type ErpFitProps = {
  erps: string[];
  why: string;
};

export function ErpFit({ erps, why }: ErpFitProps) {
  return (
    <section className="mx-auto max-w-site px-6 pb-12">
      <div className="rounded-card border border-line bg-surface p-5 shadow-soft">
        <div className="section-label mb-2.5">Passt z. B. zu</div>
        <div className="flex flex-wrap gap-2">
          {erps.map((erp) => (
            <span key={erp} className="pill">
              {erp}
            </span>
          ))}
        </div>
        <p className="mt-3 mb-0 max-w-2xl text-[0.95rem] text-muted">{why}</p>
      </div>
    </section>
  );
}
