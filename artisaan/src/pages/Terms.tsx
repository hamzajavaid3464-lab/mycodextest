import Section from '../components/Section';

const sections = [
  { id: 'acceptance', title: 'Acceptance of terms' },
  { id: 'license', title: 'License to use' },
  { id: 'user', title: 'User responsibilities' },
  { id: 'subscriptions', title: 'Subscriptions & purchases' },
  { id: 'liability', title: 'Limitation of liability' },
  { id: 'changes', title: 'Changes to these terms' },
];

const Terms = () => (
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
      <Section title="Terms & Conditions" description="Please review these terms carefully before using Artisaan apps." />
      <div className="space-y-12 text-base leading-relaxed text-text/80">
        <section id="acceptance">
          <h2 className="text-2xl font-semibold text-text">Acceptance of terms</h2>
          <p className="mt-4">
            By installing or using Artisaan apps you agree to be bound by these Terms & Conditions. If you do not agree,
            please uninstall our applications and discontinue use.
          </p>
        </section>
        <section id="license">
          <h2 className="text-2xl font-semibold text-text">License to use</h2>
          <p className="mt-4">
            Artisaan grants you a personal, non-transferable license to use our apps for their intended purpose in
            accordance with Google Play policies.
          </p>
        </section>
        <section id="user">
          <h2 className="text-2xl font-semibold text-text">User responsibilities</h2>
          <p className="mt-4">
            You agree not to misuse the apps, disrupt services, or infringe on any intellectual property rights. Content
            you create remains yours; you grant Artisaan permission to display it within the app experience.
          </p>
        </section>
        <section id="subscriptions">
          <h2 className="text-2xl font-semibold text-text">Subscriptions & purchases</h2>
          <p className="mt-4">
            Optional premium features may be offered as in-app purchases or subscriptions processed via Google Play. All
            billing questions should be directed to Google Play Support.
          </p>
        </section>
        <section id="liability">
          <h2 className="text-2xl font-semibold text-text">Limitation of liability</h2>
          <p className="mt-4">
            Artisaan is not liable for indirect, incidental, or consequential damages arising from use of our apps. We
            provide services “as is” without warranties beyond those required by law.
          </p>
        </section>
        <section id="changes">
          <h2 className="text-2xl font-semibold text-text">Changes to these terms</h2>
          <p className="mt-4">
            We may update these terms periodically. Continued use of Artisaan apps after changes become effective
            constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Terms;
