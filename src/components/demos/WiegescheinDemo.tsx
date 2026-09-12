"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FIELDS = [
  { label: "Beleg", value: "WS-10482" },
  { label: "Kennzeichen", value: "HH-LX 204" },
  { label: "Brutto", value: "28.420 kg" },
  { label: "Tara", value: "12.180 kg" },
  { label: "Netto", value: "16.240 kg" },
  { label: "Artikel", value: "Granulat PE-HD natur" },
];

type Phase = "idle" | "scan" | "fill" | "ready" | "done";

export function WiegescheinDemo() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [shown, setShown] = useState(0);
  const [scanning, setScanning] = useState(false);
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
    setShown(0);
    setScanning(false);
    setStatus("");

    schedule(() => {
      setPhase("scan");
      setScanning(true);
    }, 300);

    schedule(() => {
      setScanning(false);
      setPhase("fill");
    }, 1600);

    FIELDS.forEach((_, i) => {
      schedule(() => {
        setShown(i + 1);
        if (i === FIELDS.length - 1) {
          schedule(() => {
            setPhase("ready");
            setStatus("Bereit zum Freigeben.");
          }, 220);
        }
      }, 1750 + i * 280);
    });
  }, [clearTimers, schedule]);

  useEffect(() => {
    run();
    return clearTimers;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="rounded-card border border-line bg-surface p-5 shadow-soft md:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="text-[0.95rem] font-semibold">Wiegeschein erfassen</div>
        <button type="button" className="btn-ghost py-1.5 text-[0.8rem]" onClick={run}>
          Nochmal
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg border border-line bg-[#fafaf8] p-4">
          <div className="mb-2 text-[0.8rem] font-semibold text-muted">Scan / PDF</div>
          {scanning ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-3 top-10 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-scan-y"
            />
          ) : null}
          <div className="space-y-1.5 font-mono text-[0.75rem] leading-relaxed text-muted">
            <div>WS-10482 · Tor 3</div>
            <div>HH-LX 204</div>
            <div>Brutto 28.420 · Tara 12.180</div>
            <div>Netto 16.240 kg</div>
            <div>PE-HD natur · Silo B</div>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-[#fafaf8] p-4">
          <div className="mb-2 text-[0.8rem] font-semibold text-muted">
            Vorschlag zum Freigeben
          </div>
          {FIELDS.map((f, i) => (
            <div
              key={f.label}
              className="flex justify-between gap-2 border-b border-line py-1.5 text-[0.85rem]"
            >
              <span className="text-muted">{f.label}</span>
              <b
                className={`font-semibold transition-all duration-300 ${
                  i < shown ? "opacity-100" : "opacity-0"
                }`}
              >
                {f.value}
              </b>
            </div>
          ))}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-primary py-2 text-[0.85rem]"
              disabled={phase !== "ready"}
              onClick={() => {
                setPhase("done");
                setStatus("Freigegeben — Vorgang geht ins ERP.");
              }}
            >
              Freigeben
            </button>
          </div>
          <div
            className={`mt-2 min-h-[1.2em] text-[0.85rem] ${
              phase === "done" ? "font-semibold text-ok" : "text-muted"
            }`}
          >
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}
