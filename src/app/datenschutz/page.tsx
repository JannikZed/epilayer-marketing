import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung EpilaYer / trieb.work OHG",
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-site px-6 pb-20 pt-10">
      <div className="mb-3 text-[0.85rem] text-muted">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Datenschutz</span>
      </div>
      <h1 className="m-0 text-[clamp(1.8rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">
        Datenschutz
      </h1>
      <div className="mt-8 max-w-xl space-y-5 text-[0.98rem] text-muted">
        <p>
          Diese Seite ist ein Platzhalter. Die vollständige Datenschutzerklärung
          für EpilaYer / trieb.work OHG folgt.
        </p>
        <p>
          Verantwortlich: trieb.work OHG, Leonhardstr 20a, 8010 Graz.
          Kontakt:{" "}
          <a
            href="mailto:hello@epilayer.de"
            className="font-semibold text-accent hover:opacity-80"
          >
            hello@epilayer.de
          </a>
        </p>
        <p className="text-[0.85rem]">
          Stub — bitte noch nicht als finale Rechtsgrundlage verwenden.
        </p>
      </div>
    </section>
  );
}
