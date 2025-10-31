import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { NavBar } from '@/components/layout/nav-bar';
import { Footer } from '@/components/layout/footer';
import { SeoProvider } from '@/components/layout/seo-provider';
import { defaultMetadata } from '@/lib/seo';
import { getOrganizationJsonLd, getWebsiteJsonLd } from '@/lib/structured-data';
import { ANALYTICS_ID } from '@/lib/constants';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = getOrganizationJsonLd();
  const websiteJsonLd = getWebsiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
          type="application/ld+json"
        />
        {ANALYTICS_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${ANALYTICS_ID}',{anonymize_ip:true});`,
              }}
            />
          </>
        ) : null}
      </head>
      <body className={`${plusJakarta.variable} ${jetBrainsMono.variable} font-sans`}>
        <ThemeProvider>
          <SeoProvider />
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
