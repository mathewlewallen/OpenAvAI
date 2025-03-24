import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = () =>
  createEnv({
    server: {
      CLERK_SECRET_KEY: z.string().min(1).startsWith('sk_'),
      CLERK_WEBHOOK_SECRET: z.string().min(1).startsWith('whsec_').optional(),
      AUTH_SECRET: z.string().min(1),
      XAI_API_KEY: z.string().min(1),
      GROQ_API_KEY: z.string().min(1),
      BLOB_READ_WRITE_TOKEN: z.string().min(1),
      POSTGRES_URL: z.string().min(1),
      STRIPE_SECRET_KEY: z.string().min(1).startsWith('sk_'),
      STRIPE_WEBHOOK_SECRET: z.string().min(1).startsWith('whsec_').optional(),
      BETTERSTACK_API_KEY: z.string().min(1).optional(),
      BETTERSTACK_URL: z.string().min(1).url().optional(),
      SENTRY_ORG: z.string().min(1).optional(),
      SENTRY_PROJECT: z.string().min(1).optional(),
    },
    client: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1).startsWith('pk_'),
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1).startsWith('/'),
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1).startsWith('/'),
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1).startsWith('/'),
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1).startsWith('/'),
      NEXT_PUBLIC_SENTRY_DSN: z.string().min(1).url().optional(),
      NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1).startsWith('phc_'),
      NEXT_PUBLIC_POSTHOG_HOST: z.string().min(1).url(),
      NEXT_PUBLIC_GA_MEASUREMENT_ID: z
        .string()
        .min(1)
        .startsWith('G-')
        .optional(),
    },
    runtimeEnv: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        XAI_API_KEY: process.env.XAI_API_KEY,
        GROQ_API_KEY: process.env.GROQ_API_KEY,
        BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
        POSTGRES_URL: process.env.POSTGRES_URL,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
        CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
            process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
            process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
            process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        BETTERSTACK_API_KEY: process.env.BETTERSTACK_API_KEY,
        BETTERSTACK_URL: process.env.BETTERSTACK_URL,
        SENTRY_ORG: process.env.SENTRY_ORG,
        SENTRY_PROJECT: process.env.SENTRY_PROJECT,
        NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
        NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
        NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    }
  }
  );