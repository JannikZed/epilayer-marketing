import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { ErpFit } from "@/components/ErpFit";
import { PriceListDemo } from "@/components/demos/PriceListDemo";

export const metadata: Metadata = {
  title: "Preisliste vom Lieferanten",
  description:
    "Excel oder PDF-Preislisten einlesen, Abweichungen zeigen, Preise nach Freigabe ins ERP übernehmen — mit EpilaYer.",
};

export default function PriceListPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-10 pt-8">
        <div className="mb-3 text-[0.85rem] text-muted">
          <Link href="/#loesungen" className="hover:text-ink">
            Lösungen
          </Link>
          <span className="mx-2">/</span>
          <span>Preisliste vom Lieferanten</span>
        </div>
        <h1 className="m-0 max-w-[18ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Lieferantenpreise aus Excel, ohne Abtippen.
        </h1>
        <p className="mt-3.5 max-w-[40rem] text-[1.05rem] text-muted">
          Die Liste kommt als Excel oder PDF. EpilaYer liest Artikel und Staffeln
          aus und zeigt, was sich gegenüber euren aktuellen Preisen geändert hat.
          Ihr gebt frei, dann landen die Preise im ERP.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Preisliste"
        >
          Termin zu diesem Prozess
        </a>
      </section>

      <ErpFit
        erps={["Service ERP L3", "Sage 100", "enwis"]}
        why="Lieferantenpreislisten kommen hier oft noch als Excel oder PDF — EpilaYer zeigt den Diff und bereitet die Übernahme vor."
      />

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Das Problem</div>
        <p className="m-0 max-w-2xl text-muted">
          Preislisten kommen unregelmäßig, in wechselnden Formaten, oft mit
          Staffeln und werksbezogenen Preisen. Manuelles Abtippen erzeugt Fehler
          und Verzögerung — besonders wenn Einkauf und Disposition parallel
          arbeiten. Der Diff gegen den ERP-Bestand fehlt oft.
        </p>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">So funktioniert es</div>
        <FlowStrip
          steps={[
            { title: "Eingang", detail: "Excel oder PDF" },
            { title: "Auslesen", detail: "Artikel, Staffeln, Werke" },
            { title: "Diff prüfen", detail: "Abweichungen markieren" },
            { title: "Ins ERP", detail: "Nach der Freigabe" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Rolle der KI</div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Struktur erkennen",
              b: "Spalten, Staffeln und Werke auch bei unruhigen Excel-Layouts.",
            },
            {
              t: "Artikel matchen",
              b: "Zuordnung zu euren Stammdaten — inkl. Lieferantenartikelnummern.",
            },
            {
              t: "Diff berechnen",
              b: "Nur Änderungen sichtbar machen. Unveränderte Zeilen bleiben ruhig.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-card border border-line bg-surface p-5"
            >
              <h2 className="m-0 text-[1.05rem] font-semibold">{c.t}</h2>
              <p className="mt-2 m-0 text-[0.95rem] text-muted">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-14">
        <div className="section-label">Zum Freigeben</div>
        <PriceListDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Freigabe</div>
        <p className="m-0 max-w-2xl text-muted">
          Ihr entscheidet je Zeile oder für die gesamte Liste. Erst nach Freigabe
          werden Preise geschrieben. Das ERP bleibt führend — EpilaYer ändert
          nichts ohne euren Schritt.
        </p>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Voraussetzungen</div>
        <ul className="m-0 max-w-xl list-disc space-y-2 pl-5 text-muted">
          <li>Zugang zu Lieferantenpreislisten (Mail, Share, Upload)</li>
          <li>Artikelstamm und aktuelle Preise im ERP lesbar</li>
          <li>Rechte zum Schreiben von Preisen nach Freigabe</li>
        </ul>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Häufige Einwände</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="m-0 text-[1.05rem] font-semibold">
              Unsaubere Stammdaten
            </h3>
            <p className="mt-2 m-0 text-[0.95rem] text-muted">
              Nicht treffende Artikel bleiben offen zur manuellen Zuordnung. Der
              Rest kann trotzdem freigegeben werden — kein Alles-oder-nichts.
            </p>
          </div>
          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="m-0 text-[1.05rem] font-semibold">
              Wechselnde Anhänge
            </h3>
            <p className="mt-2 m-0 text-[0.95rem] text-muted">
              PDF und Excel mit unterschiedlichen Spalten sind vorgesehen. Der
              Diff-Schritt fängt Überraschungen ab, bevor Preise live gehen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-6">
        <div className="section-label">Weitere Prozesse</div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/loesungen/bestellung-aus-der-email"
            className="pill hover:border-muted hover:text-ink"
          >
            Bestellung aus der E-Mail →
          </Link>
          <Link href="/loesungen/wiegeschein" className="pill hover:border-muted hover:text-ink">
            Wiegeschein →
          </Link>
          <Link href="/loesungen/kundenportal" className="pill hover:border-muted hover:text-ink">
            B2B Kundenportal →
          </Link>
        </div>
      </section>

      <CtaSection
        title="Passt das zu euren Preislisten?"
        body="Wir schauen uns eine eurer Listen und euer ERP an."
        ctaLabel="Termin vereinbaren"
        mailtoSubject="Termin Preisliste"
      />
    </>
  );
}
