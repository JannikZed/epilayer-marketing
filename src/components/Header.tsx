"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type NavLink = { href: string; label: string; hint?: string };

type NavGroup = {
  id: string;
  label: string;
  href?: string;
  sections: { title: string; items: NavLink[] }[];
};

const solutionGroups: NavGroup = {
  id: "loesungen",
  label: "Lösungen",
  href: "/#loesungen",
  sections: [
    {
      title: "Belege & Auftragseingang",
      items: [
        {
          href: "/loesungen/bestellung-aus-der-email",
          label: "Bestellung aus der E-Mail",
          hint: "Freitext und Anhang → ERP",
        },
        {
          href: "/loesungen/preisliste",
          label: "Preisliste vom Lieferanten",
          hint: "Excel/PDF mit Diff",
        },
        {
          href: "/loesungen/wiegeschein",
          label: "Wiegeschein erfassen",
          hint: "Scan/PDF → Vorgang",
        },
      ],
    },
    {
      title: "Portal & Agents",
      items: [
        {
          href: "/loesungen/kundenportal",
          label: "B2B Kundenportal",
          hint: "Stammdaten, Bestellung, Wissen",
        },
        {
          href: "/loesungen/support-agent",
          label: "Support-Agent",
          hint: "Produktwissen für Innendienst",
        },
      ],
    },
    {
      title: "Mobile",
      items: [
        {
          href: "/loesungen/mobile-app",
          label: "Mobile App fürs ERP",
          hint: "Außendienst und unterwegs",
        },
      ],
    },
  ],
};

const topLinks: NavLink[] = [
  { href: "/#erp", label: "Für euer ERP" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#sicherheit", label: "Sicherheit" },
];

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M2.5 4.5 L6 8 L9.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true);
  const deskId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!desktopOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setDesktopOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [desktopOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setDesktopOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-site items-center justify-between gap-3 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[1.15rem] font-bold tracking-[-0.02em] text-ink"
          onClick={closeAll}
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

        <nav className="hidden items-center gap-1 text-[0.92rem] text-muted lg:flex">
          <div className="relative" ref={wrapRef}>
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-surface hover:text-ink ${
                desktopOpen ? "bg-surface text-ink" : ""
              }`}
              aria-expanded={desktopOpen}
              aria-controls={deskId}
              onClick={() => setDesktopOpen((v) => !v)}
            >
              {solutionGroups.label}
              <Chevron open={desktopOpen} />
            </button>

            {desktopOpen ? (
              <div
                id={deskId}
                className="absolute left-0 top-full z-50 mt-2 w-[min(92vw,640px)] rounded-card border border-line bg-surface p-4 shadow-soft"
              >
                <div className="mb-3 flex items-center justify-between gap-3 border-b border-line pb-3">
                  <div>
                    <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
                      Lösungen
                    </div>
                    <p className="m-0 text-[0.85rem] text-muted">
                      Prozesse wählen — Details auf der jeweiligen Seite.
                    </p>
                  </div>
                  <Link
                    href="/#loesungen"
                    className="shrink-0 text-[0.85rem] font-semibold text-accent hover:opacity-80"
                    onClick={closeAll}
                  >
                    Alle ansehen →
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {solutionGroups.sections.map((section) => (
                    <div key={section.title}>
                      <div className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-muted">
                        {section.title}
                      </div>
                      <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-lg px-2.5 py-2 hover:bg-canvas"
                              onClick={closeAll}
                            >
                              <span className="block text-[0.92rem] font-medium text-ink">
                                {item.label}
                              </span>
                              {item.hint ? (
                                <span className="mt-0.5 block text-[0.78rem] text-muted">
                                  {item.hint}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {topLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="btn-primary hidden text-sm sm:inline-flex md:text-[0.95rem]"
            href="mailto:hello@epilayer.de?subject=Schnittstellen-Check"
          >
            Termin vereinbaren
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                  mobileOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-5 bg-ink transition-opacity ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-0.5 w-5 bg-ink transition-transform ${
                  mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="max-h-[min(80vh,720px)] overflow-y-auto border-t border-line bg-canvas lg:hidden"
        >
          <nav className="mx-auto flex max-w-site flex-col px-6 py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-[1rem] font-semibold text-ink hover:bg-surface"
              aria-expanded={mobileSolutionsOpen}
              onClick={() => setMobileSolutionsOpen((v) => !v)}
            >
              Lösungen
              <Chevron open={mobileSolutionsOpen} />
            </button>

            {mobileSolutionsOpen ? (
              <div className="mb-2 ml-1 border-l border-line pl-3">
                {solutionGroups.sections.map((section) => (
                  <div key={section.title} className="py-2">
                    <div className="px-3 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-muted">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 hover:bg-surface"
                        onClick={closeAll}
                      >
                        <span className="block font-medium text-ink">
                          {item.label}
                        </span>
                        {item.hint ? (
                          <span className="mt-0.5 block text-[0.8rem] text-muted">
                            {item.hint}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}

            <div className="my-2 border-t border-line" />

            {topLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-[1rem] font-medium text-ink hover:bg-surface"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}

            <a
              className="btn-primary mt-4 justify-center"
              href="mailto:hello@epilayer.de?subject=Schnittstellen-Check"
              onClick={closeAll}
            >
              Termin vereinbaren
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
