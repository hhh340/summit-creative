import "server-only";

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

/**
 * Best-effort in-memory rate limit. Resets on cold start / new serverless
 * instance, so it's a spam deterrent, not a hard guarantee — pair with
 * Vercel's edge rate limiting or a durable store (Upstash/Redis) if abuse
 * becomes a real problem.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
