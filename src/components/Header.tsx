import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/#loesungen", label: "Lösungen" },
  { href: "/loesungen/bestellung-aus-der-email", label: "Bestellung" },
  { href: "/loesungen/kundenportal", label: "Kundenportal" },
  { href: "/loesungen/support-agent", label: "Support-Agent" },
  { href: "/loesungen/mobile-app", label: "Mobile" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#sicherheit", label: "Sicherheit" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[1.15rem] font-bold tracking-[-0.02em] text-ink"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={36}
            height={35}
            className="h-9 w-auto"
            priority
          />
          <span>
            Epila<span className="text-accent">Y</span>er
          </span>
        </Link>
        <nav className="hidden items-center gap-[18px] text-[0.9rem] text-muted lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="btn-primary text-sm md:text-[0.95rem]"
          href="mailto:hello@epilayer.de?subject=Schnittstellen-Check"
        >
          Termin vereinbaren
        </a>
      </div>
    </header>
  );
}
