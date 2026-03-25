// Stripe Price IDs pre každý typ kurzu.
// V test mode: z Stripe dashboardu (test mode).
// Pre produkciu stačí vymeniť hodnoty v .env – kód sa nemení.
export const STRIPE_PRICES: Record<string, string> = {
  S: process.env.STRIPE_PRICE_ID_S ?? '',
  P: process.env.STRIPE_PRICE_ID_P ?? '',
}
