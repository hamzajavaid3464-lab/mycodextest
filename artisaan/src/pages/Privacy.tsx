import Section from '../components/Section';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'data', title: 'Data we collect' },
  { id: 'usage', title: 'How we use data' },
  { id: 'third-party', title: 'Third-party services' },
  { id: 'rights', title: 'Your rights' },
  { id: 'contact', title: 'Contact' },
];

const Privacy = () => (
  <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-20 lg:flex-row">
    <aside className="glass sticky top-28 hidden h-max min-w-[220px] rounded-[var(--radius-lg)] p-6 lg:block">
      <nav className="space-y-3 text-sm">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="block text-text/70 hover:text-primary">
            {section.title}
          </a>
        ))}
      </nav>
    </aside>
    <div className="flex-1 space-y-16">
      <Section
        title="Privacy Policy"
        description={`Effective ${new Date().getFullYear()}. Artisaan respects your privacy and is committed to protecting your data.`}
      />
      <div className="space-y-12 text-base leading-relaxed text-text/80">
        <section id="overview">
          <h2 className="text-2xl font-semibold text-text">Overview</h2>
          <p className="mt-4">
            Artisaan builds Android apps centered on creativity. This privacy policy describes how we handle personal
            information within our apps and services.
          </p>
        </section>
        <section id="data">
          <h2 className="text-2xl font-semibold text-text">Data we collect</h2>
          <p className="mt-4">
            Our apps may collect limited usage analytics, device information, and crash diagnostics to ensure stability.
            We avoid collecting personally identifiable data unless you voluntarily provide it.
          </p>
        </section>
        <section id="usage">
          <h2 className="text-2xl font-semibold text-text">How we use data</h2>
          <p className="mt-4">
            Usage data helps us improve performance, personalize experiences, and prioritize features. We never sell user
            information.
          </p>
        </section>
        <section id="third-party">
          <h2 className="text-2xl font-semibold text-text">Third-party services</h2>
          <p className="mt-4">
            Artisaan apps may integrate Google Play Services, Firebase Analytics, and Google AdMob to enable core
            functionality, analytics, and responsible monetization.
          </p>
        </section>
        <section id="rights">
          <h2 className="text-2xl font-semibold text-text">Your rights</h2>
          <p className="mt-4">
            You can request data deletion, opt out of personalized ads, or disable analytics from your device settings at
            any time. Contact us to exercise your rights.
          </p>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-semibold text-text">Contact</h2>
          <p className="mt-4">
            Reach our privacy team at <a href="mailto:privacy@artisaan.app">privacy@artisaan.app</a> with questions or
            concerns.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy;
