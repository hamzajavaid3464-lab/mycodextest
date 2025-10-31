import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Artisaan — Crafting delightful Android apps',
      '/apps': 'Apps — Artisaan',
      '/privacy': 'Privacy Policy — Artisaan',
      '/terms': 'Terms & Conditions — Artisaan',
    };

    const descriptions: Record<string, string> = {
      '/': 'Artisaan crafts premium Android apps for creativity, drawing, and beautiful wallpapers.',
      '/apps': 'Browse the full lineup of Artisaan Android apps designed for creativity and inspiration.',
      '/privacy': 'Learn how Artisaan protects your privacy across our Android applications.',
      '/terms': 'Review the Terms & Conditions for using Artisaan Android applications.',
    };

    document.title = titles[location.pathname] ?? 'Artisaan';
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[location.pathname] ?? descriptions['/']);
    }
  }, [location.pathname]);

  useEffect(() => {
    const stored = window.localStorage.getItem('artisaan-theme');
    const theme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
