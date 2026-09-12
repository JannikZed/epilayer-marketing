"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#loesungen", label: "Lösungen" },
  { href: "/loesungen/bestellung-aus-der-email", label: "Bestellung" },
  { href: "/loesungen/preisliste", label: "Preisliste" },
  { href: "/loesungen/wiegeschein", label: "Wiegeschein" },
  { href: "/loesungen/kundenportal", label: "Kundenportal" },
  { href: "/loesungen/support-agent", label: "Support-Agent" },
  { href: "/loesungen/mobile-app", label: "Mobile" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#sicherheit", label: "Sicherheit" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-site items-center justify-between gap-3 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[1.15rem] font-bold tracking-[-0.02em] text-ink"
          onClick={close}
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

        <nav className="hidden items-center gap-[18px] text-[0.9rem] text-muted xl:flex">
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

        <div className="flex items-center gap-2">
          <a
            className="btn-primary hidden text-sm sm:inline-flex md:text-[0.95rem]"
            href="mailto:hello@epilayer.de?subject=Schnittstellen-Check"
          >
            Termin vereinbaren
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Schließen" : "Menü"}</span>
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-0.5 w-5 bg-ink transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-canvas xl:hidden"
        >
          <nav className="mx-auto flex max-w-site flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-[1rem] font-medium text-ink hover:bg-surface"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="btn-primary mt-3 justify-center"
              href="mailto:hello@epilayer.de?subject=Schnittstellen-Check"
              onClick={close}
            >
              Termin vereinbaren
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
