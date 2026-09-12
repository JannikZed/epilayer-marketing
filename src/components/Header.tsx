import Link from "next/link";

const nav = [
  { href: "/#loesungen", label: "Lösungen" },
  { href: "/#erp", label: "Für euer ERP" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#sicherheit", label: "Sicherheit" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-canvas/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-[1.15rem] font-bold tracking-[-0.02em] text-ink"
        >
          EpiLayer
        </Link>
        <nav className="hidden items-center gap-[22px] text-[0.95rem] text-muted md:flex">
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
