import Link from "next/link";

const tiles = [
  {
    title: "Außendienst",
    body: "Besuche, Notizen und Aufträge unterwegs — direkt ans ERP.",
  },
  {
    title: "Lager & Wareneingang",
    body: "Bestände und Belege erfassen, wo die Arbeit stattfindet.",
  },
  {
    title: "Disposition",
    body: "Touren und Status unterwegs sehen und freigeben.",
  },
  {
    title: "Euer Prozess",
    body: "Wenn der Standard nicht reicht: eigener Baustein am gleichen Layer.",
  },
];

export function MobileSection() {
  return (
    <section id="mobile" className="border-t border-line">
      <div className="mx-auto max-w-site px-6 py-14">
        <div className="section-label">Mobile Apps</div>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="m-0 max-w-[20ch] text-[1.6rem] font-semibold tracking-[-0.02em]">
              Mobile Apps für Nischen-ERP
            </h2>
            <p className="mt-2.5 max-w-xl text-muted">
              EpilaYer bringt ausgewählte Prozesse aufs Handy — angebunden an
              euer bestehendes System, mit Freigabe wo es drauf ankommt.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {tiles.map((t) => (
                <article
                  key={t.title}
                  className="rounded-card border border-line bg-surface p-4 shadow-soft"
                >
                  <h3 className="m-0 text-[1.02rem] font-semibold tracking-[-0.01em]">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 m-0 text-[0.9rem] text-muted">{t.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="section-label">Proof · Metz</div>
            <p className="mt-0 mb-4 text-[0.95rem] text-muted">
              Bei Metz läuft die{" "}
              <strong className="font-semibold text-ink">Außendienst-App</strong>{" "}
              als Layer über dem ERP — Besuche und Vorgänge vom Feld, Freigabe
              im Innendienst.
            </p>

            {/* Phone frame mock */}
            <div className="mx-auto w-[260px] rounded-[2rem] border-[3px] border-ink/80 bg-ink p-2 shadow-soft">
              <div className="overflow-hidden rounded-[1.55rem] bg-canvas">
                <div className="flex items-center justify-between bg-surface px-4 py-2.5 text-[0.7rem] text-muted">
                  <span>9:41</span>
                  <span className="font-semibold text-ink">Außendienst</span>
                  <span>●●</span>
                </div>
                <div className="space-y-2.5 p-3">
                  <div className="rounded-control border border-line bg-surface px-3 py-2">
                    <div className="text-[0.65rem] uppercase tracking-wide text-muted">
                      Heute
                    </div>
                    <div className="text-[0.9rem] font-semibold">4 Besuche</div>
                  </div>
                  {[
                    { name: "Müller Technik GmbH", status: "Unterwegs", tone: "warn" },
                    { name: "Nordwerk KG", status: "Erledigt", tone: "ok" },
                    { name: "PackFilm AG", status: "Offen", tone: "muted" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between rounded-control border border-line bg-surface px-3 py-2.5"
                    >
                      <div>
                        <div className="text-[0.88rem] font-semibold">
                          {row.name}
                        </div>
                        <div className="text-[0.72rem] text-muted">
                          Auftrag · Notiz
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${
                          row.tone === "ok"
                            ? "bg-[#e4efe8] text-ok"
                            : row.tone === "warn"
                              ? "bg-[#fde8d8] text-warn"
                              : "bg-line/60 text-muted"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn-primary w-full py-2.5 text-[0.85rem]"
                  >
                    Neuen Besuch starten
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[0.8rem] text-muted">
              Mock-UI · Metz Außendienst als laufender Proof
            </p>
            <div className="mt-4 text-center">
              <Link
                href="#cta"
                className="text-[0.9rem] font-semibold text-accent no-underline hover:opacity-80"
              >
                Mobile für euer ERP anfragen →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
