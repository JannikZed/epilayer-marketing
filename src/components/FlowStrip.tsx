type Step = {
  title: string;
  detail?: string;
};

export function FlowStrip({ steps }: { steps: Step[] }) {
  const cols =
    steps.length <= 4
      ? "grid-cols-2 md:grid-cols-4"
      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";

  return (
    <div className={`grid gap-2.5 ${cols}`}>
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="rounded-card bg-info p-4 text-[0.9rem]"
        >
          <strong className="mb-1 block tracking-[-0.01em]">
            {i + 1} · {step.title}
          </strong>
          {step.detail ? (
            <span className="text-muted">{step.detail}</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
