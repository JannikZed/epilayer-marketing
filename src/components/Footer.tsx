import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-site flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[1.05rem] font-bold tracking-[-0.02em]">
            <Image
              src="/logo-mark.png"
              alt=""
              width={28}
              height={27}
              className="h-7 w-auto"
            />
            <span>
              Epila<span className="text-accent">Y</span>er
            </span>
          </div>
          <p className="mt-2 max-w-sm text-[0.9rem] text-muted">
            Der Layer über eurem ERP — Vorgänge vorbereiten, Freigabe behalten.
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
          <Link href="/loesungen/wiegeschein" className="hover:text-ink">
            Wiegeschein
          </Link>
          <Link href="/#mobile" className="hover:text-ink">
            Mobile App
          </Link>
          <a href="mailto:hello@epilayer.de" className="hover:text-ink">
            hello@epilayer.de
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-site flex-col gap-2 border-t border-line px-6 py-5 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} EpilaYer · trieb.work OHG</span>
        <div className="flex gap-5">
          <Link href="/impressum" className="hover:text-ink">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-ink">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
