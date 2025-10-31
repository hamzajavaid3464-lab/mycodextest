const stats = [
  { label: 'Total installs', value: '2M+' },
  { label: 'Average rating', value: '4.7★' },
  { label: 'Apps launched', value: '18' },
  { label: 'Creative assets delivered', value: '45K+' },
];

const Stats = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat) => (
      <div key={stat.label} className="glass rounded-[var(--radius-lg)] p-6 text-center">
        <p className="text-2xl font-semibold text-text">{stat.value}</p>
        <p className="mt-2 text-sm text-text/60">{stat.label}</p>
      </div>
    ))}
  </div>
);

export default Stats;
