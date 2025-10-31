import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './App.css';

const socialLinks = [
  { icon: faInstagram, label: 'Instagram', href: 'https://www.instagram.com/' },
  { icon: faTwitter, label: 'Twitter', href: 'https://twitter.com/' },
  { icon: faPinterest, label: 'Pinterest', href: 'https://www.pinterest.com/' },
  { icon: faLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: faEnvelope, label: 'Email', href: 'mailto:hello@artisaan.studio' }
];

function App(): JSX.Element {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Artisaan Studio</p>
        <h1>Crafting bold digital experiences.</h1>
        <p className="lede">
          We blend art direction, animation, and engineering to help modern brands
          stand out. Let&apos;s build something remarkable together.
        </p>
        <a className="cta" href="mailto:hello@artisaan.studio">
          Start a project
        </a>
      </header>

      <section className="services">
        <h2>What we do</h2>
        <div className="service-grid">
          <article>
            <h3>Brand Systems</h3>
            <p>
              Visual identities, type systems, and brand kits designed to scale
              across products and campaigns.
            </p>
          </article>
          <article>
            <h3>Product Design</h3>
            <p>
              From UX research to high-fidelity prototyping, we craft interfaces
              that feel effortless to use.
            </p>
          </article>
          <article>
            <h3>Motion &amp; 3D</h3>
            <p>
              Expressive motion graphics and real-time 3D moments that bring
              products to life.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>Follow our studio</p>
        <nav aria-label="Social media">
          <ul>
            {socialLinks.map(({ icon, label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="smallprint">© {new Date().getFullYear()} Artisaan Studio</p>
      </footer>
    </div>
  );
}

export default App;
