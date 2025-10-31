'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function SupportForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus('loading');
    setMessage(null);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus('success');
      setMessage('Thanks for reaching out. We will respond within one business day.');
      form.reset();
    } else {
      const data = await response.json();
      setStatus('error');
      const fieldErrors = Object.values(data?.error?.fieldErrors ?? {}).flat();
      const formErrors = data?.error?.formErrors ?? [];
      setMessage(fieldErrors.concat(formErrors).join(' ') || 'Something went wrong. Please try again.');
    }
  }

  return (
    <motion.form
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
      initial={{ opacity: 0, y: 12 }}
      onSubmit={handleSubmit}
      transition={{ duration: 0.4 }}
    >
      <input name="honeypot" type="hidden" value="" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="you@company.com" required type="email" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" name="company" placeholder="Company or product" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" name="message" placeholder="Share context, timeline, and success metrics." required />
      </div>
      <Button className="w-full md:w-auto" disabled={status === 'loading'} size="lg" type="submit">
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </Button>
      {message ? (
        <p className={`text-sm ${status === 'error' ? 'text-amber-400' : 'text-emerald-400'}`}>{message}</p>
      ) : null}
    </motion.form>
  );
}
