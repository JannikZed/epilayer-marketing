import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum EpilaYer / trieb.work OHG",
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-site px-6 pb-20 pt-10">
      <div className="mb-3 text-[0.85rem] text-muted">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Impressum</span>
      </div>
      <h1 className="m-0 text-[clamp(1.8rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">
        Impressum
      </h1>
      <div className="mt-8 max-w-xl space-y-6 text-[0.98rem] text-muted">
        <div>
          <h2 className="m-0 text-[1.05rem] font-semibold text-ink">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2 whitespace-pre-line">
            {`trieb.work OHG
Leonhardstr 20a
8010 Graz
Österreich`}
          </p>
        </div>
        <div>
          <h2 className="m-0 text-[1.05rem] font-semibold text-ink">Kontakt</h2>
          <p className="mt-2">
            E-Mail:{" "}
            <a
              href="mailto:hello@epilayer.de"
              className="font-semibold text-accent hover:opacity-80"
            >
              hello@epilayer.de
            </a>
          </p>
        </div>
        <div>
          <h2 className="m-0 text-[1.05rem] font-semibold text-ink">
            Produkt
          </h2>
          <p className="mt-2">
            EpilaYer ist ein Produkt der trieb.work OHG.
          </p>
        </div>
        <p className="text-[0.85rem]">
          Stub — vollständige Rechtstexte folgen. Bei Fragen: hello@epilayer.de
        </p>
      </div>
    </section>
  );
}
