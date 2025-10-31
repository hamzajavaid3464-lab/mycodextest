interface MetricStatProps {
  label: string;
  value: string;
  description: string;
}

export function MetricStat({ label, value, description }: MetricStatProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-3 font-display text-3xl font-semibold text-foreground">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
