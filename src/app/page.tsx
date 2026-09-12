import Link from "next/link";
import { JobCard } from "@/components/JobCard";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { EmailOrderDemo } from "@/components/demos/EmailOrderDemo";
import { PriceListDemo } from "@/components/demos/PriceListDemo";
import { WiegescheinDemo } from "@/components/demos/WiegescheinDemo";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-14 pt-[72px]">
        <h1 className="m-0 max-w-[16ch] text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Bestellungen kommen per Mail. Preislisten als Excel.
        </h1>
        <p className="mt-4 max-w-[38rem] text-[1.1rem] text-muted">
          EpiLayer bereitet die Buchung vor und ihr gebt frei.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href="mailto:hello@epilayer.de?subject=Schnittstellen-Check"
          >
            Termin für den Schnittstellen-Check
          </a>
          <a className="btn-ghost" href="#loesungen">
            Lösungen ansehen
          </a>
        </div>
      </section>

      <section id="loesungen" className="mx-auto max-w-site px-6 pb-16">
        <div className="section-label">Was ihr angehen könnt</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <JobCard
            title="Bestellung aus der E-Mail"
            body="Text oder Anhang wird zum Auftragsvorschlag im ERP."
            href="/loesungen/bestellung-aus-der-email"
          />
          <JobCard
            title="Preisliste vom Lieferanten"
            body="Excel oder PDF einlesen, Abweichungen zeigen, Preise übernehmen."
            href="/loesungen/preisliste"
          />
          <JobCard
            title="Wiegeschein erfassen"
            body="Scan oder PDF auslesen und den Vorgang vorbereiten."
          />
          <JobCard
            title="Euer eigener Prozess"
            body="Wenn etwas fehlt: eigener Baustein am gleichen System."
            dashed
          />
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-16">
        <div className="section-label">Bestellung aus der E-Mail</div>
        <EmailOrderDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-16">
        <div className="section-label">Preisliste vom Lieferanten</div>
        <PriceListDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-16">
        <div className="section-label">Wiegeschein</div>
        <WiegescheinDemo />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-site px-6 py-14">
          <div className="section-label">So landet es im ERP</div>
          <FlowStrip
            steps={[
              { title: "Eingang", detail: "Mail, PDF, Excel, Scan" },
              { title: "Auslesen", detail: "Felder zuordnen" },
              { title: "Prüfen", detail: "Ihr schaut kurz drüber" },
              { title: "Ins ERP", detail: "Nach der Freigabe" },
            ]}
          />
        </div>
      </section>

      <section id="erp" className="border-t border-line">
        <div className="mx-auto max-w-site px-6 py-14">
          <div className="grid items-start gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="section-label">Zum ERP</div>
              <h2 className="m-0 text-[1.6rem] font-semibold tracking-[-0.02em]">
                EpiLayer dockt an euer ERP an.
              </h2>
              <p className="mt-2.5 max-w-xl text-muted">
                Für die üblichen Prozesse gibt es fertige Bausteine. Fehlt
                etwas, bauen wir ihn dazu.
              </p>
            </div>
            <div>
              <div className="section-label">Für euer ERP</div>
              <div className="flex flex-wrap gap-2">
                <span className="pill">Service ERP L3</span>
                <span className="pill">enwis</span>
                <span className="pill">Sage 100</span>
                <span className="pill">weitere Nischen-ERPs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="referenzen" className="border-t border-line">
        <div className="mx-auto max-w-site px-6 py-12">
          <div className="section-label">Proof</div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem] text-muted">
            <span>
              Läuft bei mittelständischen Betrieben mit eigenem ERP
            </span>
            <Link
              href="#cta"
              className="font-semibold text-accent no-underline hover:opacity-80"
            >
              Mehr dazu →
            </Link>
          </div>
        </div>
      </section>

      <section id="sicherheit" className="border-t border-line">
        <div className="mx-auto max-w-site px-6 py-12">
          <div className="section-label">Sicherheit &amp; Kontrolle</div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-card border border-line bg-surface p-5">
              <h3 className="m-0 text-[1.05rem] font-semibold tracking-[-0.01em]">
                Freigabe bleibt bei euch
              </h3>
              <p className="mt-2 text-[0.95rem] text-muted">
                Nichts geht ins ERP, bevor jemand aus eurem Team freigibt.
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface p-5">
              <h3 className="m-0 text-[1.05rem] font-semibold tracking-[-0.01em]">
                Lesen zuerst
              </h3>
              <p className="mt-2 text-[0.95rem] text-muted">
                Stammdaten und Belege werden gelesen. Schreiben erst nach
                Freigabe.
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface p-5">
              <h3 className="m-0 text-[1.05rem] font-semibold tracking-[-0.01em]">
                Euer ERP bleibt
              </h3>
              <p className="mt-2 text-[0.95rem] text-muted">
                Keine Migration. EpiLayer dockt an und bereitet Vorgänge vor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <CtaSection
          title="Welchen Prozess wollt ihr zuerst angehen?"
          body="In einem kurzen Termin schauen wir uns euer ERP und einen konkreten Prozess an."
          ctaLabel="Termin vereinbaren"
          mailtoSubject="Schnittstellen-Check"
        />
      </div>
    </>
  );
}
