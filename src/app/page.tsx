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
        <h1 className="m-0 max-w-[17ch] text-[clamp(2.25rem,4.5vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
          Mails, Excel und Scans automatisch ins ERP.
        </h1>
        <p className="mt-4 max-w-[40rem] text-[1.15rem] text-muted">
          EpilaYer liest Bestellungen, Preislisten und Wiegescheine mit KI aus,
          erkennt Kunde, Artikel und Mengen und legt den Buchungsvorschlag
          bereit. Schreiben ins ERP erst nach eurer Freigabe.
        </p>
        <p className="mt-3 max-w-[40rem] text-[1rem] text-muted">
          Dazu B2B-Kundenportal und interne Support-Agents mit eurem
          Produktwissen — angebunden an das bestehende ERP. Ohne Migration.
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
            title="B2B Kundenportal"
            body="Kunden pflegen Stammdaten, bestellen und greifen auf Produktwissen zu."
            href="/loesungen/kundenportal"
          />
          <JobCard
            title="Support-Agent / Produktwissen"
            body="Interner KI-Agent für Innendienst — Docs, Stammdaten, Historie."
            href="/loesungen/support-agent"
          />
          <JobCard
            title="Mobile App"
            body="Außendienst-App am ERP. Bei Metz bereits im Einsatz."
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
              { title: "Eingang", detail: "Mail, PDF, Excel, Scan, Portal, App" },
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
                Für die üblichen Prozesse gibt es fertige Bausteine — inkl.
                Portal und Support-Agent. Fehlt etwas, bauen wir ihn dazu. Euer
                ERP bleibt System of Record. Erfahrung mit produktiven
                Anbindungen.
              </p>
            </div>
            <div>
              <div className="section-label">Für euer ERP</div>
              <div className="flex flex-wrap gap-2">
                <span className="pill">Service ERP L3</span>
                <span className="pill">enwis</span>
                <span className="pill">Sage 100</span>
                <span className="pill">weitere ERPs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="referenzen" className="border-t border-line">
        <div className="mx-auto max-w-site px-6 py-14">
          <div className="section-label">Referenzen &amp; Erfahrung</div>
          <h2 className="m-0 max-w-[22ch] text-[1.5rem] font-semibold tracking-[-0.02em]">
            Produktiv im Mittelstand — ERP-kritische Prozesse mit Freigabe
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-card border border-line bg-surface p-6 shadow-soft">
              <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
                Kunde · Metz
              </div>
              <h3 className="mt-2 m-0 text-[1.15rem] font-semibold tracking-[-0.01em]">
                Außendienst-App am ERP
              </h3>
              <p className="mt-2.5 m-0 text-[0.95rem] text-muted">
                Bei Metz läuft die Außendienst-App von EpilaYer produktiv über
                dem ERP. Besuche und Vorgänge kommen vom Feld; Freigabe und
                Buchung bleiben im Innendienst.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] text-muted">
                <li>Schnellerer Übergang vom Außendienst in den Innendienst</li>
                <li>Weniger Rückfragen zu Besuchen und Auftragsdaten</li>
                <li>Freigabe im Innendienst, bevor etwas ins ERP geschrieben wird</li>
              </ul>
              <Link
                href="#mobile"
                className="mt-5 inline-block text-[0.9rem] font-semibold text-accent no-underline hover:opacity-80"
              >
                Mobile UI ansehen →
              </Link>
            </article>
            <article className="rounded-card border border-line bg-surface p-6 shadow-soft">
              <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
                Weitere Kunden
              </div>
              <h3 className="mt-2 m-0 text-[1.15rem] font-semibold tracking-[-0.01em]">
                Mittelstand mit eigenem ERP
              </h3>
              <p className="mt-2.5 m-0 text-[0.95rem] text-muted">
                Weitere mittelständische Betriebe setzen EpilaYer für
                dokumenten- und mailbasierte Prozesse ein — Produktion und
                Logistik inklusive, immer mit dem ERP als System of Record.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] text-muted">
                <li>Erfahrung mit produktiven ERP-Anbindungen</li>
                <li>Freigabe- und Rollenlogik für kritische Buchungen</li>
                <li>Sicherheit: lesen zuerst, schreiben nach Freigabe</li>
              </ul>
            </article>
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
                Nichts geht ins ERP, bevor jemand aus eurem Team freigibt —
                auch im Portal und bei Agent-Entwürfen.
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface p-5">
              <h3 className="m-0 text-[1.05rem] font-semibold tracking-[-0.01em]">
                Lesen zuerst
              </h3>
              <p className="mt-2 text-[0.95rem] text-muted">
                Stammdaten und Belege werden gelesen. Schreiben erst nach
                Freigabe. Rechte und Audit nachvollziehbar.
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface p-5">
              <h3 className="m-0 text-[1.05rem] font-semibold tracking-[-0.01em]">
                Euer ERP bleibt
              </h3>
              <p className="mt-2 text-[0.95rem] text-muted">
                Keine Migration. EpilaYer dockt an und bereitet Vorgänge vor —
                System of Record bleibt das ERP.
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
