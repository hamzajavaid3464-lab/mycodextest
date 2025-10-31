import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validators';
import { CONTACT_EMAIL } from '@/lib/constants';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const limit = rateLimit(`contact-${ip}`);
  if (!limit.success) {
    return NextResponse.json({ error: 'Too many submissions. Please try again soon.' }, { status: 429 });
  }

  const data = await request.json().catch(() => undefined);

  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { honeypot, ...payload } = parsed.data;
  if (honeypot) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  console.info('Contact request received', { ...payload, to: CONTACT_EMAIL });

  return NextResponse.json({ success: true });
}
