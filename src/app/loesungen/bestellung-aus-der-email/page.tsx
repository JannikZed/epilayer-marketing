import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { CtaSection } from "@/components/CtaSection";
import { ErpFit } from "@/components/ErpFit";
import { EmailOrderDemo } from "@/components/demos/EmailOrderDemo";

export const metadata: Metadata = {
  title: "Bestellung aus der E-Mail",
  description:
    "Kundenmails und Anhänge mit KI zum Auftragsvorschlag: Kunde, Artikel, Mengen erkennen — Freigabe im Innendienst, dann ins ERP.",
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
        <h1 className="m-0 max-w-[20ch] text-[clamp(1.8rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
          Bestellung aus der E-Mail — freigabereif ins ERP
        </h1>
        <p className="mt-3.5 max-w-[40rem] text-[1.05rem] text-muted">
          Kunden schreiben Freitext oder schicken einen Anhang. EpilaYer
          erkennt die Bestellung, liest Kunde, Artikel und Mengen aus und legt
          einen Auftragsvorschlag bereit. Schreiben ins ERP erst nach eurer
          Freigabe.
        </p>
        <a
          className="btn-primary mt-6"
          href="mailto:hello@epilayer.de?subject=Termin%20Bestellung%20aus%20der%20E-Mail"
        >
          Termin zu diesem Prozess
        </a>
      </section>

      <ErpFit
        erps={["Service ERP L3", "Sage 100", "enwis", "gevis"]}
        why="Systeme, in denen der Auftragseingang oft noch per Mail und Anhang ankommt — EpilaYer bereitet den Auftragsvorschlag vor."
      />

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Das Problem im Innendienst</div>
        <div className="max-w-2xl space-y-3 text-[1rem] text-muted">
          <p className="m-0">
            Bestellungen kommen als Mail, PDF oder Excel. Jemand tippt Positionen
            ab, sucht Artikelnummern und legt den Auftrag im ERP an. Bei
            Produktion und Logistik heißt das oft Rückfragen, Doppelarbeit und
            Verzögerung — besonders wenn Stammdaten unsauber oder Anhänge
            uneinheitlich sind.
          </p>
          <p className="m-0">
            EpilaYer übernimmt das Auslesen und die Zuordnung. Der Innendienst
            prüft den Vorschlag und gibt frei.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">So funktioniert es</div>
        <FlowStrip
          steps={[
            { title: "Eingang", detail: "Postfach / Weiterleitung" },
            { title: "Erkennen", detail: "Das ist eine Bestellung" },
            { title: "Auslesen", detail: "Kunde, Artikel, Menge" },
            { title: "Prüfen", detail: "Ihr schaut drüber" },
            { title: "Ins ERP", detail: "Auftrag anlegen" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Rolle der KI</div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Klassifizieren",
              b: "Unterscheidet Bestellung von Angebot, Reklamation und Info-Mail.",
            },
            {
              t: "Extrahieren",
              b: "Liest Freitext und Anhänge: Kunde, Positionen, Mengen, Termine, Werke.",
            },
            {
              t: "Zuordnen",
              b: "Matched gegen eure Stammdaten. Unklare Treffer markiert es zur Prüfung.",
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
        <EmailOrderDemo />
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Freigabe und Kontrolle</div>
        <p className="m-0 max-w-2xl text-muted">
          Der Vorschlag liegt zur Prüfung bereit. Erst nach Freigabe schreibt
          EpilaYer in euer ERP. Rollen und Audit halten fest, wer freigegeben
          hat. Das ERP bleibt System of Record.
        </p>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Was ihr dafür braucht</div>
        <ul className="m-0 max-w-xl list-disc space-y-2 pl-5 text-muted">
          <li>Ein Postfach oder eine Weiterleitung für Bestellungen</li>
          <li>Zugang zum ERP (lesen und nach Freigabe schreiben)</li>
          <li>Stammdaten, an denen man Kunden und Artikel erkennen kann</li>
        </ul>
      </section>

      <section className="mx-auto max-w-site px-6 pb-12">
        <div className="section-label">Häufige Einwände</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="m-0 text-[1.05rem] font-semibold">
              Unsaubere Stammdaten
            </h3>
            <p className="mt-2 m-0 text-[0.95rem] text-muted">
              Die KI markiert unsichere Treffer. Ihr korrigiert einmal — der
              nächste Lauf lernt die Zuordnung. Schlechte Stammdaten stoppen den
              Prozess nicht; sie machen die Freigabe wichtiger.
            </p>
          </div>
          <div className="rounded-card border border-line bg-surface p-5">
            <h3 className="m-0 text-[1.05rem] font-semibold">
              Anhänge und Freitext
            </h3>
            <p className="mt-2 m-0 text-[0.95rem] text-muted">
              PDF, Excel und Fließtext werden unterstützt. Uneinheitliche
              Formate sind der Normalfall — deshalb der Prüfschritt vor der
              Buchung.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-6">
        <div className="section-label">Weitere Prozesse</div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/loesungen/preisliste" className="pill hover:border-muted hover:text-ink">
            Preisliste vom Lieferanten →
          </Link>
          <Link href="/loesungen/wiegeschein" className="pill hover:border-muted hover:text-ink">
            Wiegeschein →
          </Link>
          <Link href="/loesungen/kundenportal" className="pill hover:border-muted hover:text-ink">
            B2B Kundenportal →
          </Link>
          <Link href="/loesungen/support-agent" className="pill hover:border-muted hover:text-ink">
            Support-Agent →
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
