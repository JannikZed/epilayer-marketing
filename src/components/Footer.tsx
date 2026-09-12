import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-site flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-[1.05rem] font-bold tracking-[-0.02em]">
            EpiLayer
          </div>
          <p className="mt-2 max-w-sm text-[0.9rem] text-muted">
            Automation über eurem ERP — mit Freigabe durch euren Innendienst.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[0.9rem] text-muted">
          <Link href="/#loesungen" className="hover:text-ink">
            Lösungen
          </Link>
          <Link
            href="/loesungen/bestellung-aus-der-email"
            className="hover:text-ink"
          >
            Bestellung aus der E-Mail
          </Link>
          <Link href="/loesungen/preisliste" className="hover:text-ink">
            Preisliste
          </Link>
          <a
            href="mailto:hello@epilayer.de"
            className="hover:text-ink"
          >
            hello@epilayer.de
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-site border-t border-line px-6 py-5 text-[0.8rem] text-muted">
        © {new Date().getFullYear()} EpiLayer
      </div>
    </footer>
  );
}
