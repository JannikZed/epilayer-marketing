import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { PriceListDemo } from "@/components/demos/PriceListDemo";

export const metadata: Metadata = {
  title: "Preisliste vom Lieferanten",
  description:
    "Excel oder PDF einlesen, Abweichungen zeigen, Preise übernehmen — mit Freigabe durch euren Innendienst.",
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
          Preisliste vom Lieferanten
        </h1>
        <p className="mt-3.5 max-w-[36rem] text-[1.05rem] text-muted">
          Excel oder PDF einlesen, Abweichungen zeigen, Preise übernehmen.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Preisliste"
        >
          Termin zu diesem Prozess
        </a>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Flow</div>
        <FlowStrip
          steps={[
            { title: "Eingang", detail: "Excel oder PDF" },
            { title: "Auslesen", detail: "Artikel, Staffeln, Werke" },
            { title: "Diff prüfen", detail: "Abweichungen markieren" },
            { title: "Ins ERP", detail: "Nach der Freigabe" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-14">
        <div className="section-label">Zum Freigeben</div>
        <PriceListDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-6">
        <div className="section-label">Weitere Prozesse</div>
        <p className="m-0 max-w-xl text-muted">
          Dazu passen später auch Bestellungen aus der E-Mail, Wiegescheine oder
          ein eigener Baustein.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
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
        title="Passt das zu euren Preislisten?"
        body="Wir schauen uns eine eurer Listen und euer ERP an."
        ctaLabel="Termin vereinbaren"
        mailtoSubject="Termin Preisliste"
      />
    </>
  );
}
