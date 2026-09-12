import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { ErpFit } from "@/components/ErpFit";
import { WiegescheinDemo } from "@/components/demos/WiegescheinDemo";

export const metadata: Metadata = {
  title: "Wiegeschein erfassen",
  description:
    "Wiegescheine aus Scan oder PDF auslesen, Felder zuordnen und nach Freigabe ins ERP buchen — mit EpilaYer.",
};

export default function WiegescheinPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-10 pt-8">
        <div className="mb-3 text-[0.85rem] text-muted">
          <Link href="/#loesungen" className="hover:text-ink">
            Lösungen
          </Link>
          <span className="mx-2">/</span>
          <span>Wiegeschein erfassen</span>
        </div>
        <h1 className="m-0 max-w-[16ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Wiegescheine nicht mehr abtippen.
        </h1>
        <p className="mt-3.5 max-w-[40rem] text-[1.05rem] text-muted">
          Scan oder PDF rein. EpilaYer zieht Gewichte und Kennzeichen. Ihr
          prüft die Werte, dann geht der Beleg ins ERP.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Wiegeschein"
        >
          Termin zu diesem Prozess
        </a>
      </section>

      <ErpFit
        erps={["enwis", "Service ERP L3"]}
        why="Typisch für Wiege- und Hofzettel-Workflows — Scan rein, Vorgang prüfen, dann ins ERP."
      />

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Das Problem</div>
        <p className="m-0 max-w-2xl text-muted">
          Wiegescheine entstehen an der Rampe, auf der Waage oder beim
          Dienstleister. Papier und PDF landen im Innendienst und werden
          abgetippt — fehleranfällig und langsam, wenn Logistik und Disposition
          auf aktuelle Mengen warten.
        </p>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">So funktioniert es</div>
        <FlowStrip
          steps={[
            { title: "Eingang", detail: "Scan oder PDF" },
            { title: "Auslesen", detail: "Gewichte, Kennzeichen" },
            { title: "Prüfen", detail: "Ihr schaut drüber" },
            { title: "Ins ERP", detail: "Nach der Freigabe" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Rolle der KI</div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Beleg lesen",
              b: "OCR und Feldzuordnung auch bei Scanqualität und Stempel.",
            },
            {
              t: "Werte prüfen",
              b: "Brutto, Tara, Netto und Plausibilität — Auffälligkeiten markieren.",
            },
            {
              t: "Vorgang vorbereiten",
              b: "Passender ERP-Vorgang als Vorschlag, Buchung nach Freigabe.",
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
        <WiegescheinDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Freigabe</div>
        <p className="m-0 max-w-2xl text-muted">
          Kritische Mengen und Kennzeichen bleiben sichtbar. Erst nach Freigabe
          schreibt EpilaYer. Für Produktion und Logistik heißt das: Tempo ohne
          Blindbuchung.
        </p>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Voraussetzungen</div>
        <ul className="m-0 max-w-xl list-disc space-y-2 pl-5 text-muted">
          <li>Scans oder PDFs der Wiegescheine (Upload, Mail oder Ordner)</li>
          <li>ERP-Zugang zum Anlegen des Vorgangs nach Freigabe</li>
          <li>Optional: Stammdaten zu Fahrzeugen, Werken, Artikeln</li>
        </ul>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Häufige Einwände</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="m-0 text-[1.05rem] font-semibold">
              Schlechte Scanqualität
            </h3>
            <p className="mt-2 m-0 text-[0.95rem] text-muted">
              Unsichere Felder werden markiert. Ihr korrigiert vor der Freigabe —
              der Beleg muss nicht perfekt sein, um den Prozess zu starten.
            </p>
          </div>
          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="m-0 text-[1.05rem] font-semibold">
              Fehlende Stammdaten
            </h3>
            <p className="mt-2 m-0 text-[0.95rem] text-muted">
              Ohne Treffer bleibt die Zuordnung offen. Der Rest der Felder kann
              trotzdem vorbereitet und freigegeben werden.
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
          <Link
            href="/loesungen/preisliste"
            className="pill hover:border-muted hover:text-ink"
          >
            Preisliste →
          </Link>
          <Link href="/loesungen/support-agent" className="pill hover:border-muted hover:text-ink">
            Support-Agent →
          </Link>
        </div>
      </section>

      <CtaSection
        title="Passt das zu euren Wiegescheinen?"
        body="Wir schauen uns einen eurer Belege und euer ERP an."
        ctaLabel="Termin vereinbaren"
        mailtoSubject="Termin Wiegeschein"
      />
    </>
  );
}
