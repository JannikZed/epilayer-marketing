import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { EmailOrderDemo } from "@/components/demos/EmailOrderDemo";

export const metadata: Metadata = {
  title: "Bestellung aus der E-Mail",
  description:
    "Kunden schreiben Freitext oder schicken einen Anhang. EpilaYer macht daraus einen Auftragsvorschlag. Ihr gebt frei, dann geht er ins ERP.",
};

export default function EmailOrderPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-10 pt-8">
        <div className="mb-3 text-[0.85rem] text-muted">
          <Link href="/#loesungen" className="hover:text-ink">
            Lösungen
          </Link>
          <span className="mx-2">/</span>
          <span>Bestellung aus der E-Mail</span>
        </div>
        <h1 className="m-0 max-w-[18ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Bestellung aus der E-Mail
        </h1>
        <p className="mt-3.5 max-w-[36rem] text-[1.05rem] text-muted">
          Kunden schreiben Freitext oder schicken einen Anhang. EpilaYer macht
          daraus einen Auftragsvorschlag. Ihr gebt frei, dann geht er ins ERP.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Bestellung%20aus%20der%20E-Mail"
        >
          Termin zu diesem Prozess
        </a>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Flow</div>
        <FlowStrip
          steps={[
            { title: "Eingang", detail: "Postfach" },
            { title: "Erkennen", detail: "Das ist eine Bestellung" },
            { title: "Auslesen", detail: "Kunde, Artikel, Menge" },
            { title: "Prüfen", detail: "Ihr schaut drüber" },
            { title: "Ins ERP", detail: "Auftrag anlegen" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-14">
        <div className="section-label">Zum Freigeben</div>
        <EmailOrderDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-10">
        <div className="section-label">Was ihr dafür braucht</div>
        <ul className="m-0 max-w-xl list-disc space-y-2 pl-5 text-muted">
          <li>Ein Postfach oder eine Weiterleitung für Bestellungen</li>
          <li>Zugang zum ERP (lesen und nach Freigabe schreiben)</li>
          <li>Stammdaten, an denen man Kunden und Artikel erkennen kann</li>
        </ul>
      </section>

      <section className="mx-auto max-w-site px-6 pb-6">
        <div className="section-label">Weitere Prozesse</div>
        <p className="m-0 max-w-xl text-muted">
          Dazu passen später auch Preislisten, Wiegescheine oder ein eigener
          Baustein.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/loesungen/preisliste" className="pill hover:border-muted hover:text-ink">
            Preisliste vom Lieferanten →
          </Link>
          <Link href="/loesungen/wiegeschein" className="pill hover:border-muted hover:text-ink">
            Wiegeschein →
          </Link>
          <Link href="/#loesungen" className="pill hover:border-muted hover:text-ink">
            Alle Lösungen →
          </Link>
        </div>
      </section>

      <CtaSection
        title="Passt das zu eurem Auftragseingang?"
        body="Wir schauen uns ein paar eurer Mails und euer ERP an."
        ctaLabel="Termin vereinbaren"
        mailtoSubject="Termin Bestellung aus der E-Mail"
      />
    </>
  );
}
