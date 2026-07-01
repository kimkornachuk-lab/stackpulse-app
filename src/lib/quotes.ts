/**
 * MarStack - Curated Marketing Quotes
 * Dynamic quotes tied to insights and marketing thought leaders.
 */

export interface MarketingQuote {
  id: string;
  quote: string;
  author: string;
  role?: string;
  topic: string;
  insightId?: string;
}

export const MARKETING_QUOTES: MarketingQuote[] = [
  {
    id: "q-001",
    quote: "In a market of infinite choice, being remarkable isn't optional — it's survival.",
    author: "Seth Godin",
    role: "Author & Marketing Philosopher",
    topic: "Brand Strategy",
    insightId: "ins-003",
  },
  {
    id: "q-002",
    quote: "The brands that maintain share-of-voice during downturns emerge with outsized market share gains.",
    author: "Jon Evans",
    role: "Host, Uncensored CMO",
    topic: "Brand Building",
    insightId: "ins-002",
  },
  {
    id: "q-003",
    quote: "AI commoditizes 'good enough' — the only viable strategy is making work worth talking about.",
    author: "Seth Godin",
    role: "Author & Marketing Philosopher",
    topic: "Content Strategy",
    insightId: "ins-003",
  },
  {
    id: "q-004",
    quote: "70% of B2B buying decisions happen before a prospect ever fills out a form.",
    author: "Jean Kang",
    role: "Growth Marketing Leader",
    topic: "B2B Strategy",
    insightId: "ins-006",
  },
  {
    id: "q-005",
    quote: "Ship less, but ship things that create tension and demand a response.",
    author: "Seth Godin",
    role: "Author & Marketing Philosopher",
    topic: "Content Strategy",
    insightId: "ins-003",
  },
  {
    id: "q-006",
    quote: "A creator with 5,000 engaged followers outperforms one with 50,000 generic followers for business outcomes.",
    author: "Mariah",
    role: "learnwithmariah",
    topic: "Personal Branding",
    insightId: "ins-007",
  },
  {
    id: "q-007",
    quote: "Attribution is dead. Incrementality is king.",
    author: "John Wall & Christopher Penn",
    role: "Marketing Over Coffee",
    topic: "Measurement",
    insightId: "ins-005",
  },
  {
    id: "q-008",
    quote: "Marketing teams are reducing their stack by 30% while increasing output. Less tools, more integration.",
    author: "Benjamin Shapiro",
    role: "The MarTech Podcast",
    topic: "MarTech",
    insightId: "ins-004",
  },
  {
    id: "q-009",
    quote: "Long-form content generates 3x more organic traffic. Depth wins in the age of AI.",
    author: "Sarah Chen",
    role: "Marketing Brew",
    topic: "Content Strategy",
    insightId: "ins-001",
  },
  {
    id: "q-010",
    quote: "Before publishing anything, ask: 'Would someone forward this to a colleague?' If not, it's not remarkable enough.",
    author: "Seth Godin",
    role: "Author & Marketing Philosopher",
    topic: "Content Quality",
    insightId: "ins-003",
  },
];

/**
 * Get quote of the day based on current date
 * Rotates through quotes daily
 */
export function getQuoteOfTheDay(): MarketingQuote {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % MARKETING_QUOTES.length;
  return MARKETING_QUOTES[index];
}

/**
 * Get a random quote from the collection
 */
export function getRandomQuote(): MarketingQuote {
  const index = Math.floor(Math.random() * MARKETING_QUOTES.length);
  return MARKETING_QUOTES[index];
}

/**
 * Get quote by insight ID
 */
export function getQuoteByInsight(insightId: string): MarketingQuote | undefined {
  return MARKETING_QUOTES.find((q) => q.insightId === insightId);
}
