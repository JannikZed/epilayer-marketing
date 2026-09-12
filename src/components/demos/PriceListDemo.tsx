"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PriceRow = {
  artNo: string;
  name: string;
  pack: string;
  currency: string;
  t1: number;
  t2: number;
  t3: number;
  validFrom: string;
  validTo: string;
  plant: string;
  oldT1: number;
};

const ROWS: PriceRow[] = [
  {
    artNo: "BF-M8-25-A2",
    name: "Sechskantschraube M8×25 A2",
    pack: "100 Stk.",
    currency: "EUR",
    t1: 4.82,
    t2: 4.41,
    t3: 4.05,
    validFrom: "01.10.2026",
    validTo: "31.03.2027",
    plant: "DE-NW",
    oldT1: 4.65,
  },
  {
    artNo: "BF-M10-40-8.8",
    name: "Sechskantschraube M10×40 8.8",
    pack: "50 Stk.",
    currency: "EUR",
    t1: 7.15,
    t2: 6.62,
    t3: 6.1,
    validFrom: "01.10.2026",
    validTo: "31.03.2027",
    plant: "DE-NW",
    oldT1: 7.4,
  },
  {
    artNo: "PF-S23-500",
    name: "Stretchfolie 23 µm / 500 mm",
    pack: "6 Rollen",
    currency: "EUR",
    t1: 38.9,
    t2: 36.2,
    t3: 33.8,
    validFrom: "15.09.2026",
    validTo: "14.03.2027",
    plant: "DE-BY",
    oldT1: 36.5,
  },
  {
    artNo: "PF-B50-1200",
    name: "Blasfolie LDPE 50 µm / 1200 mm",
    pack: "Rolle 25 kg",
    currency: "EUR",
    t1: 89.0,
    t2: 84.5,
    t3: 79.0,
    validFrom: "15.09.2026",
    validTo: "14.03.2027",
    plant: "DE-BY",
    oldT1: 91.2,
  },
  {
    artNo: "HY-H12-2M-JIC",
    name: "Hydraulikschlauch DN12 / 2 m / JIC",
    pack: "1 Stk.",
    currency: "EUR",
    t1: 24.6,
    t2: 22.9,
    t3: 21.1,
    validFrom: "01.10.2026",
    validTo: "30.09.2027",
    plant: "DE-HH",
    oldT1: 23.8,
  },
  {
    artNo: "HY-FSP-3/4",
    name: "Schnellkupplung Flat-Face 3/4″",
    pack: "2 Stk.",
    currency: "EUR",
    t1: 56.4,
    t2: 52.0,
    t3: 48.5,
    validFrom: "01.10.2026",
    validTo: "30.09.2027",
    plant: "DE-HH",
    oldT1: 58.0,
  },
  {
    artNo: "SL-IPA-99-25L",
    name: "Isopropanol 99,9 % — 25 L",
    pack: "Kanister",
    currency: "EUR",
    t1: 62.8,
    t2: 58.4,
    t3: 54.0,
    validFrom: "01.09.2026",
    validTo: "28.02.2027",
    plant: "DE-RP",
    oldT1: 59.9,
  },
  {
    artNo: "SL-ACE-99-10L",
    name: "Aceton techn. 99 % — 10 L",
    pack: "Kanister",
    currency: "EUR",
    t1: 28.4,
    t2: 26.1,
    t3: 24.0,
    validFrom: "01.09.2026",
    validTo: "28.02.2027",
    plant: "DE-RP",
    oldT1: 27.5,
  },
  {
    artNo: "EL-RJ45-CAT6-50",
    name: "Patchkabel Cat.6 50 cm, grau",
    pack: "50 Stk.",
    currency: "EUR",
    t1: 41.2,
    t2: 38.0,
    t3: 34.5,
    validFrom: "20.09.2026",
    validTo: "19.03.2027",
    plant: "DE-BW",
    oldT1: 42.0,
  },
  {
    artNo: "EL-PSU-24V-5A",
    name: "Netzteil 24 V / 5 A DIN-Rail",
    pack: "1 Stk.",
    currency: "EUR",
    t1: 48.9,
    t2: 45.5,
    t3: 42.0,
    validFrom: "20.09.2026",
    validTo: "19.03.2027",
    plant: "DE-BW",
    oldT1: 46.8,
  },
];

const STEPS = ["Eingang", "Auslesen", "Diff prüfen", "Freigeben", "Ins ERP"] as const;

type Phase = "idle" | "scan" | "extract" | "diff" | "ready" | "done";

function fmt(n: number) {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function DiffBadge({ oldVal, next }: { oldVal: number; next: number }) {
  const delta = next - oldVal;
  const pct = (delta / oldVal) * 100;
  const up = delta > 0;
  const flat = Math.abs(delta) < 0.005;
  if (flat) {
    return <span className="whitespace-nowrap text-[0.75rem] text-muted">±0%</span>;
  }
  const label = `${up ? "↑" : "↓"} ${Math.abs(pct).toFixed(1).replace(".", ",")}%`;
  return (
    <span
      className={`inline-flex whitespace-nowrap items-center rounded-full px-2.5 py-0.5 text-[0.75rem] font-semibold ${
        up ? "bg-[#fde8d8] text-warn" : "bg-[#e4efe8] text-ok"
      }`}
    >
      {label}
    </span>
  );
}

export function PriceListDemo() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIdx, setStepIdx] = useState(0);
  const [scanRow, setScanRow] = useState(-1);
  const [visibleRows, setVisibleRows] = useState(0);
  const [showDiff, setShowDiff] = useState(false);
  const [status, setStatus] = useState("");
  const timers = useRef<number[]>([]);

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
    setPhase("idle");
    setStepIdx(0);
    setScanRow(-1);
    setVisibleRows(0);
    setShowDiff(false);
    setStatus("");

    schedule(() => {
      setPhase("scan");
      setStepIdx(1);
    }, 400);

    ROWS.forEach((_, i) => {
      schedule(() => setScanRow(i), 500 + i * 140);
    });

    schedule(() => {
      setScanRow(-1);
      setPhase("extract");
      setStepIdx(1);
    }, 500 + ROWS.length * 140 + 200);

    ROWS.forEach((_, i) => {
      schedule(() => setVisibleRows(i + 1), 500 + ROWS.length * 140 + 400 + i * 90);
    });

    schedule(() => {
      setPhase("diff");
      setStepIdx(2);
      setShowDiff(true);
      setStatus("Abweichungen markiert.");
    }, 500 + ROWS.length * 140 + 400 + ROWS.length * 90 + 250);

    schedule(() => {
      setPhase("ready");
      setStepIdx(3);
      setStatus("Bereit zum Freigeben.");
    }, 500 + ROWS.length * 140 + 400 + ROWS.length * 90 + 900);
  }, [clearTimers, schedule]);

  useEffect(() => {
    run();
    return clearTimers;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const approve = () => {
    setPhase("done");
    setStepIdx(4);
    setStatus("Freigegeben — Preise gehen ins ERP.");
  };

  return (
    <div className="rounded-card border border-line bg-surface p-5 shadow-soft md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-[0.95rem] font-semibold tracking-[-0.01em]">
            Preisliste · Lieferant Bolt &amp; Film GmbH
          </div>
          <div className="text-[0.85rem] text-muted">
            Excel · 10 Positionen · Staffeln T1–T3 · Werke
          </div>
        </div>
        <button type="button" className="btn-ghost py-2 text-[0.85rem]" onClick={run}>
          Nochmal
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {STEPS.map((label, i) => {
          const done = i < stepIdx;
          const on = i === stepIdx;
          return (
            <span
              key={label}
              className={`rounded-full border px-3 py-1.5 text-[0.85rem] transition-colors ${
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

      <div className="relative overflow-hidden rounded-lg border border-line">
        {(phase === "scan" || scanRow >= 0) && phase !== "done" && phase !== "ready" && phase !== "diff" ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-80 shadow-[0_0_16px_rgba(196,92,38,0.35)]"
            style={{
              left: `${Math.min(92, Math.max(4, (scanRow / Math.max(ROWS.length - 1, 1)) * 88 + 4))}%`,
              transition: "left 140ms linear",
            }}
          />
        ) : null}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left text-[0.8rem]">
            <thead>
              <tr className="border-b border-line bg-[#fafaf8] text-muted">
                <th className="px-3 py-2.5 font-semibold">Art.-Nr.</th>
                <th className="px-3 py-2.5 font-semibold">Bezeichnung</th>
                <th className="px-3 py-2.5 font-semibold">Gebinde</th>
                <th className="px-3 py-2.5 font-semibold">Währung</th>
                <th className="px-3 py-2.5 font-semibold text-right">T1</th>
                <th className="px-3 py-2.5 font-semibold text-right">T2</th>
                <th className="px-3 py-2.5 font-semibold text-right">T3</th>
                <th className="px-3 py-2.5 font-semibold">Gültig</th>
                <th className="whitespace-nowrap px-3 py-2.5 font-semibold">Werk</th>
                <th className="whitespace-nowrap px-3 py-2.5 font-semibold">Diff T1</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => {
                const scanning = scanRow === i;
                const visible = i < visibleRows;
                return (
                  <tr
                    key={row.artNo}
                    className={`border-b border-line transition-colors ${
                      scanning ? "bg-[#fde8d8]/60" : visible ? "bg-surface" : "bg-[#fafaf8]"
                    }`}
                  >
                    <td className="px-3 py-2 font-mono text-[0.75rem]">
                      <span
                        className={`transition-opacity duration-300 ${
                          visible || scanning ? "opacity-100" : "opacity-35"
                        }`}
                      >
                        {row.artNo}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`transition-opacity duration-300 ${
                          visible || scanning ? "opacity-100" : "opacity-35"
                        }`}
                      >
                        {row.name}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-muted">{row.pack}</td>
                    <td className="px-3 py-2 text-muted">{row.currency}</td>
                    <td className="px-3 py-2 text-right font-medium tabular-nums">
                      {visible ? fmt(row.t1) : "—"}
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-muted">
                      {visible ? fmt(row.t2) : "—"}
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-muted">
                      {visible ? fmt(row.t3) : "—"}
                    </td>
                    <td className="px-3 py-2 text-muted">
                      {visible ? (
                        <span>
                          {row.validFrom}
                          <span className="mx-1 text-line">–</span>
                          {row.validTo}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 font-mono text-[0.75rem] text-muted">
                      {visible ? row.plant : "—"}
                    </td>
                    <td className="px-3 py-2">
                      {showDiff && visible ? (
                        <span className="inline-flex animate-fade-up">
                          <DiffBadge oldVal={row.oldT1} next={row.t1} />
                        </span>
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2.5">
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
          onClick={() => setStatus("Hier würdet ihr einzelne Zeilen anpassen.")}
        >
          Korrigieren
        </button>
        <div
          className={`min-h-[1.4em] text-[0.9rem] ${
            phase === "done" ? "font-semibold text-ok" : "text-muted"
          }`}
          role="status"
        >
          {status}
        </div>
      </div>
    </div>
  );
}
