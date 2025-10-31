const rateLimitMap = new Map<string, { hits: number; expiresAt: number }>();

const windowSec = Number(process.env.RATE_LIMIT_WINDOW ?? 60);
const maxHits = Number(process.env.RATE_LIMIT_MAX ?? 5);

export function rateLimit(key: string) {
  const now = Date.now();
  const existing = rateLimitMap.get(key);

  if (existing && existing.expiresAt > now) {
    if (existing.hits >= maxHits) {
      return { success: false, retryAfter: Math.ceil((existing.expiresAt - now) / 1000) };
    }
    existing.hits += 1;
    rateLimitMap.set(key, existing);
    return { success: true };
  }

  rateLimitMap.set(key, { hits: 1, expiresAt: now + windowSec * 1000 });
  return { success: true };
}
