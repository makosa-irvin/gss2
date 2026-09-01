import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required.'),
  JWT_SECRET: z.string().min(16, 'JWT_SECRET must be at least 16 characters.'),
  JWT_EXPIRES_IN: z.string().min(1).default('12h'),
  CORS_ORIGINS: z.string().min(1).default('http://localhost:3000'),
  ADMIN_COOKIE_SAME_SITE: z.enum(['lax', 'strict', 'none']).default('lax'),
  ADMIN_COOKIE_SECURE: z.enum(['true', 'false']).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  ENQUIRY_FROM_EMAIL: z.string().min(1).default('Good Secrets Safaris <onboarding@resend.dev>'),
  ENQUIRY_NOTIFY_EMAIL: z.string().min(1).optional(),
  ADMIN_SECURITY_NOTIFY_EMAIL: z.string().min(1).default('goodsecretssafaris@gmail.com'),
});

export type AppEnv = z.infer<typeof envSchema>;

export function parseEnv(input: NodeJS.ProcessEnv): AppEnv {
  const parsed = envSchema.safeParse(input);

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `${issue.path.join('.') || 'environment'}: ${issue.message}`)
      .join('; ');
    throw new Error(`Invalid server environment configuration. ${details}`);
  }

  if (
    parsed.data.NODE_ENV === 'production' &&
    parsed.data.ADMIN_COOKIE_SAME_SITE === 'none' &&
    parsed.data.ADMIN_COOKIE_SECURE === 'false'
  ) {
    throw new Error(
      'Invalid server environment configuration. ADMIN_COOKIE_SAME_SITE=none requires secure cookies in production.'
    );
  }

  return parsed.data;
}

export const env = parseEnv(process.env);

export const allowedOrigins = env.CORS_ORIGINS.split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
