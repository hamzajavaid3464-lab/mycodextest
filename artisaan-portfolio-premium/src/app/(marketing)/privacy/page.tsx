import { SectionHeader } from '@/components/layout/section-header';
import { formatDate } from '@/lib/utils';

const lastUpdated = '2024-03-01';

export default function PrivacyPage() {
  return (
    <article className="container max-w-4xl space-y-8 py-24">
      <SectionHeader
        align="left"
        description="This policy outlines how Artisaan collects, uses, and safeguards data across our website and Android applications."
        eyebrow="Privacy policy"
        title="Respecting your data, by design"
      />
      <p className="text-sm text-muted-foreground">Effective date: March 1, 2024 • Last updated: {formatDate(lastUpdated)}</p>
      <div className="prose prose-invert max-w-none">
        <h2>1. Overview</h2>
        <p>
          Artisaan ("we", "our", or "us") is a boutique Android studio. We build premium applications distributed via Google
          Play and operate the Artisaan website. This policy explains what information we collect, why we collect it, and how we
          protect your privacy. By using our apps or website, you agree to this policy.
        </p>
        <h2>2. Data we collect</h2>
        <ul>
          <li>
            <strong>App diagnostics.</strong> Crash logs, ANR traces, and minimal device metadata (Android version, device model) are collected via privacy-conscious tooling to maintain app stability.
          </li>
          <li>
            <strong>Usage analytics (optional).</strong> Aggregated event data—such as feature usage and session length—collected only with explicit user consent to inform product decisions.
          </li>
          <li>
            <strong>Support interactions.</strong> Information you submit via contact forms or support email, including name, email address, company, and message content.
          </li>
          <li>
            <strong>Website telemetry.</strong> Basic request logs (IP address, user agent) stored briefly for security and performance monitoring.
          </li>
          <li>
            <strong>Payment data.</strong> Purchases and subscriptions are processed by Google Play. We do not store full payment card data.
          </li>
        </ul>
        <h2>3. How we use information</h2>
        <ul>
          <li>Provide, maintain, and improve functionality across our apps.</li>
          <li>Diagnose issues, monitor performance, and deliver timely updates.</li>
          <li>Respond to support requests and fulfill contractual obligations.</li>
          <li>Comply with legal requirements and protect the rights and safety of users.</li>
          <li>Communicate updates, releases, or marketing messages (opt-in only, with unsubscribe available at any time).</li>
        </ul>
        <h2>4. Legal bases (EEA/UK)</h2>
        <p>
          For users in the European Economic Area or the United Kingdom, we rely on the following lawful bases under the GDPR:
        </p>
        <ul>
          <li><strong>Contract necessity</strong> for delivering app functionality and support.</li>
          <li><strong>Legitimate interests</strong> for ensuring security, preventing fraud, and improving quality.</li>
          <li><strong>Consent</strong> for optional analytics, marketing communications, and access to device features beyond what is strictly necessary.</li>
        </ul>
        <h2>5. Sharing & disclosure</h2>
        <p>We do not sell personal data. We share information only with trusted processors who help us operate:</p>
        <ul>
          <li>Google (Firebase, Crashlytics) for diagnostics and messaging.</li>
          <li>Plausible Analytics or Google Analytics (if enabled) for anonymized website metrics.</li>
          <li>Customer support tooling (e.g., HelpScout or email providers) for managing conversations.</li>
        </ul>
        <p>Each processor is bound by contractual obligations to safeguard data and act solely on our instructions.</p>
        <h2>6. Data retention</h2>
        <p>
          Diagnostics data is retained for up to 90 days. Support correspondence is kept for the duration necessary to resolve the
          inquiry and comply with legal obligations. Optional analytics are aggregated and stored for no longer than 24 months.
        </p>
        <h2>7. Cookies & tracking</h2>
        <p>
          The Artisaan website uses essential cookies for session security. Optional analytics cookies (if enabled) are only set
          after obtaining consent. You can manage preferences via the consent banner or your browser settings.
        </p>
        <h2>8. Children</h2>
        <p>
          Our apps and services are not directed to children under 13. We do not knowingly collect data from children. If you
          believe a child has provided personal data, contact us to delete it.
        </p>
        <h2>9. International transfers</h2>
        <p>
          We operate globally with infrastructure primarily located in the United States and the European Union. When data leaves
          your jurisdiction, we rely on appropriate safeguards such as Standard Contractual Clauses.
        </p>
        <h2>10. Security</h2>
        <p>
          We apply layered security measures including encryption in transit, restricted access, code reviews, and continuous
          monitoring. While no system is completely secure, we actively mitigate risk and remediate vulnerabilities quickly.
        </p>
        <h2>11. Your rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access and receive a copy of the data we hold about you.</li>
          <li>Request correction or deletion of personal data.</li>
          <li>Object to processing or request restriction of processing.</li>
          <li>Withdraw consent at any time for optional data uses.</li>
          <li>Request data portability where technically feasible.</li>
        </ul>
        <p>
          To exercise these rights, contact us at <a href="mailto:privacy@artisaan.dev">privacy@artisaan.dev</a>. We will respond within 30 days.
        </p>
        <h2>12. Contact</h2>
        <p>
          Artisaan • 2100 Market Street, Suite 500, San Francisco, CA 94114 • Email:{' '}
          <a href="mailto:privacy@artisaan.dev">privacy@artisaan.dev</a>
        </p>
        <h2>13. Changes to this policy</h2>
        <p>
          We may update this policy periodically. We will notify you of significant changes via the website or within our apps.
          Continued use after updates indicates acceptance.
        </p>
        <h2>14. Disclaimer</h2>
        <p>
          This privacy policy is provided for informational purposes and should not be considered legal advice. For questions,
          consult with a qualified attorney.
        </p>
      </div>
    </article>
  );
}
