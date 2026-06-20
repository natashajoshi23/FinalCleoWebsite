import { createClient } from 'next-sanity'

// projectId is a public identifier (visible in every network request to Sanity).
// Prefer reading from env vars (NEXT_PUBLIC_SANITY_PROJECT_ID) in new work;
// the hardcoded fallback keeps static builds working without a .env file.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2geocfye',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-11',
  useCdn: true,
})
