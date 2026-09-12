import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { PortalDemo } from "@/components/demos/PortalDemo";

export const metadata: Metadata = {
  title: "B2B Kundenportal",
  description:
    "Kundenportal auf dem bestehenden ERP: Stammdaten pflegen, bestellen, Service und Produktwissen — mit Rechten, Freigabe und Audit.",
};

export default function KundenportalPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-6 pb-10 pt-8">
        <div className="mb-3 text-[0.85rem] text-muted">
          <Link href="/#loesungen" className="hover:text-ink">
            Lösungen
          </Link>
          <span className="mx-2">/</span>
          <span>B2B Kundenportal</span>
        </div>
        <h1 className="m-0 max-w-[20ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          B2B-Portal auf eurem ERP — Self-Service für Kunden, Kontrolle bei euch
        </h1>
        <p className="mt-3.5 max-w-[40rem] text-[1.05rem] text-muted">
          EpilaYer stellt euren Bestandskunden ein Portal bereit: Stammdaten
          aktualisieren, Nachbestellungen und Serviceanfragen stellen,
          Dokumente und Produktwissen abrufen. Schreibende Vorgänge laufen über
          Prüfung und Freigabe — das ERP bleibt System of Record.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20B2B%20Kundenportal"
        >
          Termin zum Kundenportal
        </a>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Wofür das Portal gedacht ist</div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Stammdaten selbst pflegen",
              b: "Adressen, Ansprechpartner, Rechnungsdaten. Der Kunde meldet Änderungen; ihr freigt, bevor sie ins ERP geschrieben werden.",
            },
            {
              t: "Bestellung und Nachbestellung",
              b: "Bekannte Artikel, Mengen und Wunschtermine. Daraus entsteht ein Auftragsvorschlag — Buchung erst nach Freigabe.",
            },
            {
              t: "Serviceanfragen",
              b: "Reklamationen, Lieferstatus, Ersatzbedarf strukturiert statt als Freitext-Mail an fünf Postfächer.",
            },
            {
              t: "Wissensbereich und Dokumente",
              b: "Datenblätter, Anleitungen, Ersatzteillisten — freigegebene Inhalte aus eurem Bestand, nicht aus dem offenen Web.",
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
            { title: "Login", detail: "Rechte je Kunde / Rolle" },
            { title: "Aktion", detail: "Stammdaten, Auftrag, Service" },
            { title: "Prüfung", detail: "Freigabe wo nötig" },
            { title: "Ins ERP", detail: "Nach der Freigabe" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-14">
        <div className="section-label">Portal im Überblick</div>
        <PortalDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Nutzen</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-card border border-line bg-surface p-5">
            <h2 className="m-0 text-[1.1rem] font-semibold">Für den Innendienst</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] text-muted">
              <li>Weniger Anrufe zu Adressen, Lieferterminen und Standardbestellungen</li>
              <li>Freigabe nur bei Abweichungen und kritischen Änderungen</li>
              <li>Nachvollziehbarer Eingang statt verstreuter Mails</li>
            </ul>
          </div>
          <div className="rounded-card border border-line bg-surface p-5">
            <h2 className="m-0 text-[1.1rem] font-semibold">Für eure Kunden</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] text-muted">
              <li>Self-Service rund um bekannte Artikel und eigene Stammdaten</li>
              <li>Zugriff auf freigegebene Dokumente und Produktwissen</li>
              <li>Status und Vorgänge ohne Hotline</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Enterprise</div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Rechte",
              b: "Rollen je Firma und Ansprechpartner. Sicht- und Schreibrechte auf das, was der Vertrag vorsieht.",
            },
            {
              t: "Freigaben",
              b: "Stammdatenänderungen und Aufträge können eine Innendienst-Freigabe verlangen, bevor geschrieben wird.",
            },
            {
              t: "Audit",
              b: "Wer hat was wann geändert oder bestellt — nachvollziehbar für euch und für Revision.",
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
            href="/loesungen/support-agent"
            className="pill hover:border-muted hover:text-ink"
          >
            Support-Agent →
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
        title="Kundenportal auf eurem ERP anbinden?"
        body="Im Termin klären wir Rechte, Freigabelogik und welche Prozesse zuerst ins Portal gehören."
        ctaLabel="Termin vereinbaren"
        mailtoSubject="Termin B2B Kundenportal"
      />
    </>
  );
}
