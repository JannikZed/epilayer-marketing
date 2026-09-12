import Link from "next/link";
import { JobCard } from "@/components/JobCard";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { MobileSection } from "@/components/MobileSection";
import { EmailOrderDemo } from "@/components/demos/EmailOrderDemo";
import { PriceListDemo } from "@/components/demos/PriceListDemo";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-12 pt-[64px]">
        <p className="mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-accent">
          Der Layer über eurem ERP
        </p>
        <h1 className="m-0 max-w-[18ch] text-[clamp(2.1rem,4.2vw,2.9rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
          EpilaYer bereitet Vorgänge vor. Ihr gebt frei — dann geht es ins
          System.
        </h1>
        <p className="mt-4 max-w-[38rem] text-[1.1rem] text-muted">
          Bestellungen, Preislisten, Wiegescheine und Mobile — strukturiert für
          euren Innendienst, angebunden an euer bestehendes ERP. Ohne Migration.
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
        <div className="section-label">Welchen Prozess wollt ihr angehen?</div>
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
            href="/loesungen/wiegeschein"
          />
          <JobCard
            title="Mobile App"
            body="Außendienst und Hof-Prozesse am Nischen-ERP — inkl. Metz-Proof."
            href="/#mobile"
          />
          <JobCard
            title="Euer eigener Prozess"
            body="Wenn etwas fehlt: eigener Baustein am gleichen System."
            dashed
            href="#cta"
          />
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-16">
        <div className="mb-1 flex flex-wrap items-end justify-between gap-3">
          <div className="section-label mb-0">Bestellung aus der E-Mail</div>
          <Link
            href="/loesungen/bestellung-aus-der-email"
            className="text-[0.9rem] font-semibold text-accent hover:opacity-80"
          >
            Zur Lösung →
          </Link>
        </div>
        <EmailOrderDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-16">
        <div className="mb-1 flex flex-wrap items-end justify-between gap-3">
          <div className="section-label mb-0">Preisliste vom Lieferanten</div>
          <Link
            href="/loesungen/preisliste"
            className="text-[0.9rem] font-semibold text-accent hover:opacity-80"
          >
            Zur Lösung →
          </Link>
        </div>
        <PriceListDemo />
      </section>

      <MobileSection />

      <section className="border-t border-line">
        <div className="mx-auto max-w-site px-6 py-14">
          <div className="section-label">So landet es im ERP</div>
          <FlowStrip
            steps={[
              { title: "Eingang", detail: "Mail, PDF, Excel, Scan, App" },
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
                EpilaYer dockt an euer ERP an.
              </h2>
              <p className="mt-2.5 max-w-xl text-muted">
                Für die üblichen Prozesse gibt es fertige Bausteine. Fehlt
                etwas, bauen wir ihn dazu. Euer ERP bleibt System of Record.
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
              Läuft bei Metz (Außendienst-App) und weiteren mittelständischen
              Betrieben mit eigenem ERP
            </span>
            <Link
              href="#mobile"
              className="font-semibold text-accent no-underline hover:opacity-80"
            >
              Mobile ansehen →
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
                Keine Migration. EpilaYer dockt an und bereitet Vorgänge vor.
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
