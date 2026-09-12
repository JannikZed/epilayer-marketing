import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { WiegescheinDemo } from "@/components/demos/WiegescheinDemo";

export const metadata: Metadata = {
  title: "Wiegeschein erfassen",
  description:
    "Scan oder PDF auslesen, Felder zuordnen, Vorgang freigeben — dann ins ERP. Mit EpilaYer.",
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
        <h1 className="m-0 max-w-[18ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Wiegeschein erfassen
        </h1>
        <p className="mt-3.5 max-w-[36rem] text-[1.05rem] text-muted">
          Scan oder PDF auslesen und den Vorgang vorbereiten. Ihr prüft die
          Werte, dann geht der Beleg ins ERP.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Wiegeschein"
        >
          Termin zu diesem Prozess
        </a>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Flow</div>
        <FlowStrip
          steps={[
            { title: "Eingang", detail: "Scan oder PDF" },
            { title: "Auslesen", detail: "Gewichte, Kennzeichen" },
            { title: "Prüfen", detail: "Ihr schaut drüber" },
            { title: "Ins ERP", detail: "Nach der Freigabe" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-14">
        <div className="section-label">Zum Freigeben</div>
        <WiegescheinDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-6">
        <div className="section-label">Weitere Prozesse</div>
        <p className="m-0 max-w-xl text-muted">
          Dazu passen Bestellungen aus der E-Mail, Preislisten oder ein eigener
          Baustein.
        </p>
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
          <Link href="/#loesungen" className="pill hover:border-muted hover:text-ink">
            Alle Lösungen →
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
