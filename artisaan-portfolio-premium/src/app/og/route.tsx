import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const font = fetch('https://fonts.gstatic.com/s/plusjakartasans/v7/7cH1v4kjgoGqM7E_BA.woff2').then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Artisaan';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #040616 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            padding: 120,
            borderRadius: 48,
            background: 'rgba(8,16,32,0.65)',
            border: '1px solid rgba(56,189,248,0.35)',
            boxShadow: '0 40px 80px rgba(8,16,32,0.6)',
          }}
        >
          <span style={{ color: '#22d3ee', fontSize: 24, letterSpacing: 12, textTransform: 'uppercase' }}>
            Artisaan
          </span>
          <h1 style={{ fontSize: 72, color: 'white', fontWeight: 700 }}>{title}</h1>
          <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: 28 }}>
            Crafting beautifully engineered Android apps.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Plus Jakarta Sans',
          data: await font,
          style: 'normal',
        },
      ],
    },
  );
}
