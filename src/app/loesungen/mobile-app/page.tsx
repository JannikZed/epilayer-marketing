import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { ErpFit } from "@/components/ErpFit";
import { MobileSection } from "@/components/MobileSection";

export const metadata: Metadata = {
  title: "Mobile App",
  description:
    "Mobile Apps für Außendienst, Lager und Disposition — angebunden an euer ERP. Bei Metz produktiv im Einsatz.",
};

export default function MobileAppPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-10 pt-8">
        <div className="mb-3 text-[0.85rem] text-muted">
          <Link href="/#loesungen" className="hover:text-ink">
            Lösungen
          </Link>
          <span className="mx-2">/</span>
          <span>Mobile App</span>
        </div>
        <h1 className="m-0 max-w-[20ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Mobile Apps für euer ERP — Feld und Hof ohne Systemwechsel
        </h1>
        <p className="mt-3.5 max-w-[40rem] text-[1.05rem] text-muted">
          EpilaYer bringt ausgewählte Prozesse aufs Handy: Außendienst, Lager,
          Wareneingang und Disposition. Angebunden an euer bestehendes ERP, mit
          Freigabe wo es drauf ankommt. Bei Metz läuft die Außendienst-App
          bereits produktiv.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Mobile%20App"
        >
          Termin zur Mobile App
        </a>
      </section>

      <ErpFit
        erps={["Service ERP L3 (Metz)", "Sage 100", "enwis"]}
        why="Feld- und Hofprozesse, die oft ohne starke native Mobile-Apps am ERP laufen — EpilaYer ergänzt, ersetzt das ERP nicht."
      />

      <MobileSection />

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Ablauf</div>
        <FlowStrip
          steps={[
            { title: "Erfassen", detail: "App vor Ort" },
            { title: "Sync", detail: "Daten ans Layer" },
            { title: "Prüfen", detail: "Innendienst freigibt" },
            { title: "Ins ERP", detail: "Nach der Freigabe" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Freigabe und Kontrolle</div>
        <p className="m-0 max-w-2xl text-muted">
          Vorgänge vom Feld landen als Vorschlag. Kritische Buchungen gehen erst
          nach Freigabe ins ERP. Rechte und Audit bleiben nachvollziehbar — das
          ERP ist System of Record.
        </p>
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
            href="/loesungen/wiegeschein"
            className="pill hover:border-muted hover:text-ink"
          >
            Wiegeschein →
          </Link>
          <Link
            href="/loesungen/kundenportal"
            className="pill hover:border-muted hover:text-ink"
          >
            B2B Kundenportal →
          </Link>
          <Link
            href="/loesungen/support-agent"
            className="pill hover:border-muted hover:text-ink"
          >
            Support-Agent →
          </Link>
        </div>
      </section>

      <CtaSection
        title="Mobile für euer ERP?"
        body="Im Termin klären wir, welche Feldprozesse zuerst aufs Handy gehören und wie die Freigabe laufen soll."
        ctaLabel="Termin vereinbaren"
        mailtoSubject="Termin Mobile App"
      />
    </>
  );
}
