import Link from 'next/link';
import { SectionHeader } from '@/components/layout/section-header';
import { SupportForm } from '@/components/forms/support-form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of apps does Artisaan build?',
    answer:
      'We specialize in premium Android apps across productivity, wellness, finance, and creativity. Each engagement includes design systems, motion language, and robust QA.',
  },
  {
    question: 'Do you offer maintenance retainers?',
    answer:
      'Yes. We offer tiered retainers for active monitoring, Play Store compliance, analytics reporting, and regular feature sprints.',
  },
  {
    question: 'How do you handle refunds or subscription issues?',
    answer:
      'In-app purchases are managed through Google Play billing. For account-specific questions, reach out via the form—our support response SLA is one business day.',
  },
  {
    question: 'What data do your apps collect?',
    answer:
      'Only essential diagnostics and optional analytics with explicit consent. Review the privacy policy for a detailed breakdown.',
  },
];

export default function SupportPage() {
  return (
    <div className="container space-y-16 py-24">
      <SectionHeader
        align="left"
        description="Need support, partnerships, or enterprise licensing? We respond within one business day."
        eyebrow="Support"
        title="How can we help?"
      />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-4xl border border-white/10 bg-card/70 p-10 shadow-glass-lg">
          <SupportForm />
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">FAQs</h2>
          <Accordion collapsible type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="rounded-3xl border border-white/10 bg-card/60 p-6 text-sm text-muted-foreground">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Need something else?</p>
            <p className="mt-2">
              Email us directly at{' '}
              <Link className="text-primary underline" href="mailto:hello@artisaan.dev">
                hello@artisaan.dev
              </Link>
              .
            </p>
            <p className="mt-3">
              For privacy questions, please review our{' '}
              <Link className="text-primary underline" href="/privacy">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
