"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Field = { label: string; value: string; mark: string };

type Example = {
  id: string;
  label: string;
  from: string;
  subject: string;
  body: string;
  fields: Field[];
};

const EXAMPLES: Example[] = [
  {
    id: "freetext",
    label: "Freitext-Mail",
    from: "einkauf@nordwerk-industrie.de",
    subject: "Bestellung Hydraulikschläuche — dringend",
    body: "Guten Morgen,\nbitte 40 Stk. Hydraulikschlauch DN12, 2m, Anschluss JIC 37°,\nLieferung KW 41 an Werk Hamburg.\nKostenstelle 4410.\nViele Grüße\nS. Berger",
    fields: [
      { label: "Kunde", value: "Nordwerk Industrie GmbH", mark: "nordwerk" },
      {
        label: "Artikel",
        value: "Hydraulikschlauch DN12 / 2m / JIC 37°",
        mark: "Hydraulikschlauch",
      },
      { label: "Menge", value: "40 Stk.", mark: "40 Stk" },
      { label: "Termin", value: "KW 41", mark: "KW 41" },
      { label: "Werk", value: "Hamburg", mark: "Hamburg" },
    ],
  },
  {
    id: "attachment",
    label: "Mail mit Anhang",
    from: "orders@packfilm-solutions.com",
    subject: "PO-22914 · Stretchfolie",
    body: "Anbei unsere Bestellung PO-22914.\nBitte bestätigen und Liefertermin nennen.\n\n[Anhang: PO-22914_Stretchfolie.pdf — 3 Positionen]",
    fields: [
      { label: "Kunde", value: "PackFilm Solutions AG", mark: "packfilm" },
      { label: "Beleg", value: "PO-22914", mark: "PO-22914" },
      { label: "Positionen", value: "3 Zeilen aus PDF", mark: "Anhang" },
      {
        label: "Artikel",
        value: "Stretchfolie 23 µm / 500 mm",
        mark: "Stretchfolie",
      },
      { label: "Wunschtermin", value: "laut PDF", mark: "Bestellung" },
    ],
  },
];

const STEPS = ["Eingang", "Erkennen", "Auslesen", "Prüfen", "Ins ERP"] as const;

type Phase =
  | "idle"
  | "incoming"
  | "recognize"
  | "scanning"
  | "extracting"
  | "ready"
  | "done"
  | "correct";

export function EmailOrderDemo() {
  const [exampleIdx, setExampleIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIdx, setStepIdx] = useState(0);
  const [shownFields, setShownFields] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [status, setStatus] = useState("");
  const [mailVisible, setMailVisible] = useState(false);
  const timers = useRef<number[]>([]);
  const runId = useRef(0);

  const example = EXAMPLES[exampleIdx];

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  }, []);

  const run = useCallback(() => {
    clearTimers();
    const id = ++runId.current;
    setPhase("incoming");
    setStepIdx(0);
    setShownFields(0);
    setHighlight(false);
    setScanning(false);
    setStatus("");
    setMailVisible(false);

    schedule(() => {
      if (runId.current !== id) return;
      setMailVisible(true);
    }, 120);

    schedule(() => {
      if (runId.current !== id) return;
      setPhase("recognize");
      setStepIdx(1);
    }, 700);

    schedule(() => {
      if (runId.current !== id) return;
      setPhase("scanning");
      setStepIdx(2);
      setScanning(true);
    }, 1350);

    schedule(() => {
      if (runId.current !== id) return;
      setHighlight(true);
    }, 1750);

    schedule(() => {
      if (runId.current !== id) return;
      setScanning(false);
      setPhase("extracting");
    }, 3000);

    example.fields.forEach((_, i) => {
      schedule(() => {
        if (runId.current !== id) return;
        setShownFields(i + 1);
        if (i === example.fields.length - 1) {
          schedule(() => {
            if (runId.current !== id) return;
            setPhase("ready");
            setStepIdx(3);
            setStatus("Bereit zum Freigeben.");
          }, 280);
        }
      }, 3200 + i * 360);
    });
  }, [clearTimers, example.fields, schedule]);

  useEffect(() => {
    run();
    return clearTimers;
  }, [exampleIdx, run, clearTimers]);

  const mailText = useMemo(
    () => `Von: ${example.from}\nBetreff: ${example.subject}\n\n${example.body}`,
    [example],
  );

  const mailHtml = useMemo(() => {
    if (!highlight) return null;
    let html = mailText
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
    example.fields.forEach((f) => {
      const re = new RegExp(
        f.mark.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i",
      );
      html = html.replace(
        re,
        (m) =>
          `<mark class="rounded-[3px] bg-[#fde8d8] px-0.5 text-ink">${m}</mark>`,
      );
    });
    return html;
  }, [example, highlight, mailText]);

  const approve = () => {
    setPhase("done");
    setStepIdx(4);
    setStatus("Freigegeben — Auftrag geht ins ERP.");
  };

  const correct = () => {
    setPhase("correct");
    setStatus("Hier würdet ihr Felder anpassen — in der echten Oberfläche.");
  };

  return (
    <div className="rounded-card border border-line bg-surface p-5 shadow-soft md:p-6">
      <div
        className="mb-4 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Beispiel wählen"
      >
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.id}
            type="button"
            role="tab"
            aria-selected={i === exampleIdx}
            onClick={() => setExampleIdx(i)}
            className={`rounded-lg border px-3 py-2 text-[0.85rem] font-medium transition-colors ${
              i === exampleIdx
                ? "border-accent text-accent"
                : "border-line text-ink hover:border-muted"
            }`}
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {STEPS.map((label, i) => {
          const done = i < stepIdx;
          const on = i === stepIdx;
          return (
            <span
              key={label}
              className={`rounded-full border px-3 py-1.5 text-[0.85rem] transition-colors duration-300 ${
                on
                  ? "border-transparent bg-info font-semibold text-ink"
                  : done
                    ? "border-line bg-surface font-medium text-ok"
                    : "border-line bg-surface text-muted"
              }`}
            >
              {i + 1} · {label}
            </span>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-line bg-[#fafaf8] p-4">
          <h3 className="mb-2.5 text-[0.95rem] font-semibold">So kam es an</h3>
          {scanning ? (
            <div
              aria-hidden
              className="pointer-events-none absolute left-4 right-4 top-14 z-10 h-8"
            >
              <div className="absolute inset-x-0 h-px bg-accent/80 shadow-[0_0_10px_rgba(196,92,38,0.55)] animate-[scanSweep_1.55s_ease-in-out_forwards]" />
              <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-accent/15 to-transparent animate-[scanSweep_1.55s_ease-in-out_forwards]" />
            </div>
          ) : null}
          <div
            className={`transition-opacity duration-500 ${
              mailVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {mailHtml ? (
              <pre
                className="m-0 whitespace-pre-wrap font-mono text-[0.8rem] leading-relaxed text-muted"
                dangerouslySetInnerHTML={{ __html: mailHtml }}
              />
            ) : (
              <pre className="m-0 whitespace-pre-wrap font-mono text-[0.8rem] leading-relaxed text-muted">
                {mailText}
              </pre>
            )}
          </div>
          {example.id === "attachment" && mailVisible ? (
            <div className="mt-3 inline-flex items-center gap-2 rounded-control border border-line bg-surface px-2.5 py-1.5 text-[0.75rem] text-muted">
              <span className="inline-block h-2 w-2 rounded-sm bg-accent/70" />
              PO-22914_Stretchfolie.pdf
            </div>
          ) : null}
        </div>

        <div className="min-h-[280px] rounded-lg border border-line bg-[#fafaf8] p-4">
          <h3 className="mb-2.5 flex flex-wrap items-center gap-2 text-[0.95rem] font-semibold">
            Vorschlag zum Freigeben
            {phase === "ready" ? (
              <span className="text-[0.8rem] font-semibold text-ok">· bereit</span>
            ) : null}
            {phase === "done" ? (
              <span className="text-[0.8rem] font-semibold text-ok">· im ERP</span>
            ) : null}
          </h3>

          <div>
            {example.fields.map((f, i) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between gap-3 border-b border-line py-2.5 text-[0.92rem]"
              >
                <span className="text-muted">{f.label}</span>
                <b
                  className={`max-w-[60%] text-right font-semibold transition-all duration-300 ${
                    i < shownFields
                      ? "translate-y-0 opacity-100"
                      : "translate-y-1 opacity-0"
                  }`}
                >
                  {f.value}
                </b>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              className="btn-primary py-2.5 text-[0.9rem]"
              disabled={phase !== "ready"}
              onClick={approve}
            >
              Freigeben
            </button>
            <button
              type="button"
              className="btn-ghost py-2.5 text-[0.9rem]"
              disabled={phase !== "ready"}
              onClick={correct}
            >
              Korrigieren
            </button>
            <button
              type="button"
              className="btn-ghost py-2.5 text-[0.9rem]"
              onClick={run}
            >
              Nochmal
            </button>
          </div>

          <div
            className={`mt-3.5 min-h-[1.4em] text-[0.9rem] transition-colors ${
              phase === "done" ? "font-semibold text-ok" : "text-muted"
            }`}
            role="status"
          >
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}
