import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-site gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
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
            KI-Automatisierung, B2B-Portal und Support-Agents — mit Freigabe am
            bestehenden ERP.
          </p>
          <a
            href="mailto:hello@epilayer.de"
            className="mt-3 inline-block text-[0.9rem] text-muted hover:text-ink"
          >
            hello@epilayer.de
          </a>
        </div>

        <div>
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
            Lösungen
          </div>
          <div className="mt-3 flex flex-col gap-2 text-[0.9rem] text-muted">
            <Link href="/loesungen/bestellung-aus-der-email" className="hover:text-ink">
              Bestellung aus der E-Mail
            </Link>
            <Link href="/loesungen/preisliste" className="hover:text-ink">
              Preisliste
            </Link>
            <Link href="/loesungen/wiegeschein" className="hover:text-ink">
              Wiegeschein
            </Link>
            <Link href="/loesungen/kundenportal" className="hover:text-ink">
              B2B Kundenportal
            </Link>
            <Link href="/loesungen/support-agent" className="hover:text-ink">
              Support-Agent
            </Link>
            <Link href="/loesungen/mobile-app" className="hover:text-ink">
              Mobile App
            </Link>
          </div>
        </div>

        <div>
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
            Produkt
          </div>
          <div className="mt-3 flex flex-col gap-2 text-[0.9rem] text-muted">
            <Link href="/loesungen/mobile-app" className="hover:text-ink">
              Mobile App
            </Link>
            <Link href="/#erp" className="hover:text-ink">
              Für euer ERP
            </Link>
            <Link href="/#referenzen" className="hover:text-ink">
              Referenzen
            </Link>
            <Link href="/#sicherheit" className="hover:text-ink">
              Sicherheit
            </Link>
          </div>
        </div>

        <div>
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
            Unternehmen
          </div>
          <div className="mt-3 flex flex-col gap-2 text-[0.9rem] text-muted">
            <Link href="/impressum" className="hover:text-ink">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-ink">
              Datenschutz
            </Link>
            <a
              href="mailto:hello@epilayer.de?subject=Schnittstellen-Check"
              className="hover:text-ink"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-site flex-col gap-2 border-t border-line px-6 py-5 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} EpilaYer · trieb.work OHG</span>
        <span>ERP bleibt System of Record</span>
      </div>
    </footer>
  );
}
