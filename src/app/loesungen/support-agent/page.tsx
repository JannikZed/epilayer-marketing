import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { ErpFit } from "@/components/ErpFit";
import { SupportAgentDemo } from "@/components/demos/SupportAgentDemo";

export const metadata: Metadata = {
  title: "Support-Agent / Produktwissen",
  description:
    "Interner KI-Support-Agent mit eurem Produktwissen: Docs, Stammdaten und Historie für Innendienst — mit Freigabe für ausgehende Antworten.",
};

export default function SupportAgentPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-10 pt-8">
        <div className="mb-3 text-[0.85rem] text-muted">
          <Link href="/#loesungen" className="hover:text-ink">
            Lösungen
          </Link>
          <span className="mx-2">/</span>
          <span>Support-Agent</span>
        </div>
        <h1 className="m-0 max-w-[22ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Interner Support-Agent, der eure Produkte kennt
        </h1>
        <p className="mt-3.5 max-w-[40rem] text-[1.05rem] text-muted">
          EpilaYer stellt dem Innendienst einen KI-Agenten bereit, der auf
          Dokumenten, Stammdaten und Vorgangshistorie eures Unternehmens
          aufsetzt. Produktfragen, Ersatzteile und Antwortentwürfe — im
          Firmenwissen, mit Freigabe bevor etwas nach außen geht.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Support-Agent"
        >
          Termin zum Support-Agent
        </a>
      </section>

      <ErpFit
        erps={["Service ERP L3", "Sage 100", "enwis", "gevis"]}
        why="Innendienst braucht Produktwissen und Historie zusätzlich zum ERP — der Agent setzt auf Docs und Stammdaten auf."
      />

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Einsatz im Innendienst</div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Produktfragen beantworten",
              b: "Technische Specs, Verträglichkeiten, Lieferbedingungen — aus freigegebenen Docs und Artikelstammdaten.",
            },
            {
              t: "Artikel und Ersatzteile finden",
              b: "Passende Nummern, Alternativen und Lagerwerke ohne langes Suchen in mehreren Systemen.",
            },
            {
              t: "Antworten entwerfen",
              b: "Der Agent formuliert einen Entwurf aus Historie und Vorlagen. Versand erst nach eurer Freigabe.",
            },
            {
              t: "Kontext aus Docs und Stammdaten",
              b: "Eine Suche über Anleitungen, Stücklisten und Kundenvorgänge — gebunden an eure Daten.",
            },
          ].map((card) => (
            <article
              key={card.t}
              className="rounded-card border border-line bg-surface p-5 shadow-soft"
            >
              <h2 className="m-0 text-[1.1rem] font-semibold tracking-[-0.01em]">
                {card.t}
              </h2>
              <p className="mt-2 m-0 text-[0.95rem] text-muted">{card.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Ablauf</div>
        <FlowStrip
          steps={[
            { title: "Frage", detail: "Innendienst / Support" },
            { title: "Abruf", detail: "Docs, Stamm, Historie" },
            { title: "Antwort", detail: "Mit Quellenangabe" },
            { title: "Freigabe", detail: "Vor Versand nach außen" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-14">
        <div className="section-label">Beispiel-Dialog</div>
        <SupportAgentDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Grenzen und Kontrolle</div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Nur Firmenwissen",
              b: "Der Agent antwortet aus dem, was ihr freigebt: Dokumente, Stammdaten, Historie. Kein freies Surfen.",
            },
            {
              t: "Freigabe nach außen",
              b: "Entwürfe für Kundenmails bleiben intern, bis jemand aus eurem Team freigibt.",
            },
            {
              t: "ERP bleibt führend",
              b: "Artikelnummern und Konditionen kommen aus dem ERP. Der Agent liest mit — er ersetzt das System of Record nicht.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-card border border-line bg-surface p-5"
            >
              <h3 className="m-0 text-[1.05rem] font-semibold">{c.t}</h3>
              <p className="mt-2 m-0 text-[0.95rem] text-muted">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-6">
        <div className="section-label">Weitere Lösungen</div>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/loesungen/kundenportal"
            className="pill hover:border-muted hover:text-ink"
          >
            B2B Kundenportal →
          </Link>
          <Link
            href="/loesungen/bestellung-aus-der-email"
            className="pill hover:border-muted hover:text-ink"
          >
            Bestellung aus der E-Mail →
          </Link>
          <Link href="/#loesungen" className="pill hover:border-muted hover:text-ink">
            Alle Lösungen →
          </Link>
        </div>
      </section>

      <CtaSection
        title="Support-Agent mit eurem Produktwissen?"
        body="Wir schauen uns Docs, Stammdaten und typische Innendienst-Fragen an und legen den Scope fest."
        ctaLabel="Termin vereinbaren"
        mailtoSubject="Termin Support-Agent"
      />
    </>
  );
}
