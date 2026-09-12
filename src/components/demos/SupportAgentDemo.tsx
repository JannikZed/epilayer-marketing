"use client";

import { useState } from "react";

type Msg = { role: "user" | "agent"; text: string; source?: string };

const EXAMPLES: { q: string; a: string; source: string }[] = [
  {
    q: "Welcher Ersatzfilter passt zur Hydraulikpumpe HP-440?",
    a: "Für die Hydraulikpumpe HP-440 ist der Filter HF-440-F vorgesehen (Artikel 88421). Alternative bei Engpass: HF-440-F/XL mit längerer Standzeit. Einbauhinweis: Gehäusedeckel mit 18 Nm, Dichtung mitliefern.",
    source: "Stammdaten · Ersatzteilliste HP-440 · Montageanleitung S. 12",
  },
  {
    q: "Kann der Kunde PackFilm die Stretchfolie 23 µm auch in 750 mm bestellen?",
    a: "Ja. Stretchfolie 23 µm ist als SF-23-500 (Standard) und SF-23-750 gelistet. Für PackFilm gilt Kondition T2. Mindestmenge SF-23-750: 8 Paletten. Lieferzeit aktuell ca. 8 Werktage ab Werk Leipzig.",
    source: "Artikelstamm · Preisliste PackFilm · Bestandswerk Leipzig",
  },
  {
    q: "Entwurf einer Antwort: Lieferverzug Kantenschutz KE-4040",
    a: "Vorschlag:\n\n„Guten Tag, die Position KE-4040 verzögert sich um 3 Werktage wegen Nachproduktion. Neuer Termin: Freitag nächste Woche, Teillieferung der fertigen 6 Kartons ist möglich. Soll ich die Teillieferung anstoßen?“\n\nVor dem Versand: Freigabe durch Innendienst.",
    source: "Auftragshistorie · Lieferstatus KE-4040 · Vorlagenkatalog",
  },
];

export function SupportAgentDemo() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "agent",
      text: "Ich antworte aus euren Docs, Stammdaten und der Historie. Wählt eine Beispiel-Frage oder tippt kurz.",
    },
  ]);
  const [busy, setBusy] = useState(false);

  function ask(ex: (typeof EXAMPLES)[number]) {
    if (busy) return;
    setBusy(true);
    setMessages((m) => [...m, { role: "user", text: ex.q }]);
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: "agent", text: ex.a, source: ex.source },
      ]);
      setBusy(false);
    }, 550);
  }

  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-canvas/60 px-4 py-3 sm:px-5">
        <div>
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
            Interner Support-Agent
          </div>
          <div className="text-[0.95rem] font-semibold tracking-[-0.01em]">
            Produktwissen · Innendienst
          </div>
        </div>
        <span className="rounded-full bg-info px-2.5 py-1 text-[0.72rem] font-semibold text-ink">
          Nur Firmenwissen
        </span>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-line px-4 py-3 sm:px-5">
        {EXAMPLES.map((ex) => (
          <button
            key={ex.q}
            type="button"
            disabled={busy}
            onClick={() => ask(ex)}
            className="rounded-full border border-line bg-canvas px-3 py-1.5 text-left text-[0.8rem] font-medium text-muted transition-colors hover:border-muted hover:text-ink disabled:opacity-50"
          >
            {ex.q.length > 52 ? `${ex.q.slice(0, 50)}…` : ex.q}
          </button>
        ))}
      </div>

      <div className="max-h-[380px] space-y-3 overflow-y-auto p-4 sm:p-5">
        {messages.map((msg, i) => (
          <div
            key={`${msg.role}-${i}`}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[92%] rounded-control px-3.5 py-2.5 text-[0.92rem] whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-accent text-white"
                  : "border border-line bg-canvas text-ink"
              }`}
            >
              {msg.text}
              {msg.source ? (
                <div
                  className={`mt-2 border-t pt-2 text-[0.75rem] ${
                    msg.role === "user"
                      ? "border-white/30 text-white/85"
                      : "border-line text-muted"
                  }`}
                >
                  Quelle: {msg.source}
                </div>
              ) : null}
            </div>
          </div>
        ))}
        {busy ? (
          <div className="text-[0.85rem] text-muted">Sucht in Stammdaten und Docs…</div>
        ) : null}
      </div>
    </div>
  );
}
