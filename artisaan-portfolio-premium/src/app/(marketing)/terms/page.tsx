import { SectionHeader } from '@/components/layout/section-header';
import { formatDate } from '@/lib/utils';

const effectiveDate = '2024-03-01';

export default function TermsPage() {
  return (
    <article className="container max-w-3xl space-y-8 py-24">
      <SectionHeader
        align="left"
        description="These Terms govern your use of the Artisaan website and Android applications."
        eyebrow="Terms of use"
        title="Use with intention"
      />
      <p className="text-sm text-muted-foreground">Effective: {formatDate(effectiveDate)}</p>
      <div className="prose prose-invert max-w-none text-base">
        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing our website or installing our apps, you agree to these Terms. If you do not agree, do not use our
          services.
        </p>
        <h2>2. License</h2>
        <p>
          We grant you a limited, non-transferable, revocable license to use our apps for personal or internal business purposes
          in accordance with Google Play policies.
        </p>
        <h2>3. User responsibilities</h2>
        <ul>
          <li>Provide accurate information and keep credentials secure.</li>
          <li>Use the services for lawful purposes and comply with applicable regulations.</li>
          <li>Respect intellectual property rights and do not reverse engineer the apps.</li>
        </ul>
        <h2>4. Fees and subscriptions</h2>
        <p>
          Paid features, in-app purchases, and subscriptions are processed by Google Play. Refunds are governed by Google Play
          policies. We may update pricing with prior notice via the store listing.
        </p>
        <h2>5. Availability</h2>
        <p>
          We strive for continuous uptime but may suspend access for maintenance, updates, or security reasons. We are not
          liable for outages beyond our control.
        </p>
        <h2>6. Third-party services</h2>
        <p>
          Our apps may integrate third-party APIs or services. Use of those services is subject to their own terms and privacy
          policies.
        </p>
        <h2>7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Artisaan is not liable for indirect, incidental, or consequential damages
          arising from the use or inability to use our services.
        </p>
        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify and hold Artisaan harmless from claims arising out of your misuse of the services or violation
          of these Terms.
        </p>
        <h2>9. Changes</h2>
        <p>We may update these Terms periodically. Material changes will be communicated via the website or app updates.</p>
        <h2>10. Contact</h2>
        <p>
          Questions? Email <a href="mailto:legal@artisaan.dev">legal@artisaan.dev</a>.
        </p>
      </div>
    </article>
  );
}
