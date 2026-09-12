"use client";

import { useState } from "react";

type Tab = "stammdaten" | "bestellung" | "wissen";

const TABS: { id: Tab; label: string }[] = [
  { id: "stammdaten", label: "Stammdaten" },
  { id: "bestellung", label: "Bestellung" },
  { id: "wissen", label: "Wissen" },
];

export function PortalDemo() {
  const [tab, setTab] = useState<Tab>("stammdaten");
  const [saved, setSaved] = useState(false);
  const [ordered, setOrdered] = useState(false);

  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-canvas/60 px-4 py-3 sm:px-5">
        <div>
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
            B2B Kundenportal
          </div>
          <div className="text-[0.95rem] font-semibold tracking-[-0.01em]">
            PackFilm Solutions AG · angemeldet
          </div>
        </div>
        <span className="rounded-full bg-[#e4efe8] px-2.5 py-1 text-[0.72rem] font-semibold text-ok">
          ERP-verbunden
        </span>
      </div>

      <div className="flex gap-1 border-b border-line px-3 pt-3 sm:px-4">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setTab(t.id);
              setSaved(false);
              setOrdered(false);
            }}
            className={`rounded-t-lg px-3.5 py-2 text-[0.9rem] font-semibold transition-colors ${
              tab === t.id
                ? "bg-surface text-ink shadow-[0_-1px_0_0_var(--surface)]"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-5">
        {tab === "stammdaten" ? (
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <Field
                label="Lieferadresse"
                defaultValue="Werk Hamburg, Kai 12, 20457 Hamburg"
              />
              <Field label="Ansprechpartner Einkauf" defaultValue="S. Berger" />
              <Field
                label="Rechnungs-E-Mail"
                defaultValue="rechnung@packfilm-solutions.com"
              />
              <button
                type="button"
                className="btn-primary"
                onClick={() => setSaved(true)}
              >
                Änderung zur Freigabe senden
              </button>
              {saved ? (
                <p className="m-0 text-[0.9rem] text-ok">
                  Gesendet. Innendienst prüft und schreibt nach Freigabe ins ERP.
                </p>
              ) : null}
            </div>
            <aside className="rounded-control border border-line bg-canvas p-4 text-[0.9rem] text-muted">
              <div className="font-semibold text-ink">Ablauf</div>
              <ol className="mt-2 list-decimal space-y-1.5 pl-4">
                <li>Kunde aktualisiert Stammdaten</li>
                <li>Prüfung / Freigabe im Innendienst</li>
                <li>Schreiben ins ERP — System of Record bleibt dort</li>
              </ol>
            </aside>
          </div>
        ) : null}

        {tab === "bestellung" ? (
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-3 text-[0.85rem] text-muted">
                Nachbestellung aus bekannter Artikelliste
              </div>
              <div className="space-y-2">
                {[
                  {
                    art: "Stretchfolie 23 µm / 500 mm",
                    nr: "SF-23-500",
                    qty: "24 Pal.",
                  },
                  {
                    art: "Kantenschutz PE, 40×40×3",
                    nr: "KE-4040",
                    qty: "10 Kartons",
                  },
                ].map((row) => (
                  <div
                    key={row.nr}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-control border border-line bg-canvas px-3 py-2.5"
                  >
                    <div>
                      <div className="text-[0.95rem] font-semibold">{row.art}</div>
                      <div className="text-[0.78rem] text-muted">{row.nr}</div>
                    </div>
                    <div className="text-[0.9rem] font-semibold">{row.qty}</div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="btn-primary mt-4"
                onClick={() => setOrdered(true)}
              >
                Bestellung absenden
              </button>
              {ordered ? (
                <p className="mt-3 m-0 text-[0.9rem] text-ok">
                  Auftragsvorschlag erzeugt. Freigabe im Innendienst, danach
                  Buchung im ERP.
                </p>
              ) : null}
            </div>
            <aside className="rounded-control border border-line bg-canvas p-4 text-[0.9rem] text-muted">
              <div className="font-semibold text-ink">Für den Innendienst</div>
              <p className="mt-2 m-0">
                Weniger Telefonate und E-Mails. Der Kunde bestellt selbst —
                ihr prüft nur noch die Ausnahme.
              </p>
            </aside>
          </div>
        ) : null}

        {tab === "wissen" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Datenblatt Stretchfolie 23 µm",
                meta: "PDF · aktualisiert KW 36",
              },
              {
                title: "Verarbeitungsempfehlung Wickler",
                meta: "PDF · 4 Seiten",
              },
              {
                title: "Ersatzteile Kantenschutz-Presse",
                meta: "Liste · ERP-Artikelnummern",
              },
              {
                title: "Retourenprozess B2B",
                meta: "Anleitung · Innendienst",
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="rounded-control border border-line bg-canvas px-4 py-3"
              >
                <div className="text-[0.95rem] font-semibold">{doc.title}</div>
                <div className="mt-1 text-[0.8rem] text-muted">{doc.meta}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Field({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[0.78rem] font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      <input
        type="text"
        defaultValue={defaultValue}
        className="w-full rounded-control border border-line bg-canvas px-3 py-2.5 text-[0.95rem] text-ink outline-none focus:border-accent"
      />
    </label>
  );
}
