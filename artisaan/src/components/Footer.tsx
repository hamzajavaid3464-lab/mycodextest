import { Link } from 'react-router-dom';
import { Github, Instagram, Youtube, Twitter } from 'lucide-react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="glass relative mt-16 overflow-hidden">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-70" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">About</h4>
          <p className="text-sm text-text/70">
            Artisaan crafts delightful Android experiences for creativity, drawing, and immersive wallpapers.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">Apps</h4>
          <ul className="space-y-2 text-sm text-text/70">
            <li>Anime Drawing</li>
            <li>Wallpapers</li>
            <li>Kids Creativity</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">Legal</h4>
          <ul className="space-y-2 text-sm text-text/70">
            <li>
              <Link to="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</h4>
          <a href="mailto:hello@artisaan.app" className="text-sm text-primary">
            hello@artisaan.app
          </a>
          <div className="flex gap-3 text-text/60">
            <a href="#" aria-label="Artisaan on X" className="transition hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Artisaan on YouTube" className="transition hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Artisaan on Instagram" className="transition hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Artisaan on GitHub" className="transition hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-white/60">
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-80"
          aria-hidden
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-text/60 md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Artisaan — We only make Android apps.</span>
          <span className="text-text/50">Crafted with care in every release.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
