import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { track } from '../lib/analytics';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    track('newsletter_signup', { email });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      whileHover={{ y: -2 }}
      className="glass flex w-full flex-col gap-4 rounded-[var(--radius-lg)] p-6 sm:flex-row sm:items-center"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-text">Stay in the loop</h3>
        <p className="text-sm text-text/70">
          Be the first to hear about new Artisaan releases, wallpapers, and drawing lessons.
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-full border border-transparent bg-white/80 px-4 py-3 text-sm text-text shadow-inner outline-none transition focus:border-accent focus:bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" disabled={submitted}>
          {submitted ? 'Thanks!' : 'Notify me'}
        </Button>
      </div>
    </motion.form>
  );
};

export default Newsletter;
