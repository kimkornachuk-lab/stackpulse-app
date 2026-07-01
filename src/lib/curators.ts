/**
 * StackPulse Content Curation Engine
 * 
 * Preset list of marketing thought leaders and their feeds.
 * These serve as the initial content sources for the aggregation engine.
 */

export interface ContentSource {
  id: string;
  name: string;
  handle?: string;
  platform: "rss" | "twitter" | "linkedin" | "substack" | "youtube";
  feedUrl?: string;
  topics: string[];
  tier: "essential" | "deep-dive" | "emerging";
}

export const MARKETING_THOUGHT_LEADERS: ContentSource[] = [
  // --- ESSENTIAL TIER (daily must-reads) ---
  {
    id: "src-001",
    name: "Marketing Brew",
    platform: "rss",
    feedUrl: "https://www.marketingbrew.com/feed",
    topics: ["industry-news", "trends", "brand-strategy"],
    tier: "essential",
  },
  {
    id: "src-002",
    name: "Rand Fishkin",
    handle: "@randfish",
    platform: "substack",
    feedUrl: "https://sparktoro.com/blog/feed",
    topics: ["seo", "audience-research", "zero-click"],
    tier: "essential",
  },
  {
    id: "src-003",
    name: "Lenny Rachitsky",
    handle: "@lennysan",
    platform: "substack",
    feedUrl: "https://www.lennysnewsletter.com/feed",
    topics: ["growth", "product-marketing", "frameworks"],
    tier: "essential",
  },
  {
    id: "src-004",
    name: "HubSpot Blog",
    platform: "rss",
    feedUrl: "https://blog.hubspot.com/marketing/rss.xml",
    topics: ["inbound", "content-marketing", "automation"],
    tier: "essential",
  },
  {
    id: "src-005",
    name: "Search Engine Land",
    platform: "rss",
    feedUrl: "https://searchengineland.com/feed",
    topics: ["seo", "ppc", "ai-search"],
    tier: "essential",
  },

  // --- DEEP-DIVE TIER (weekly strategic reads) ---
  {
    id: "src-006",
    name: "Andrew Chen",
    handle: "@andrewchen",
    platform: "substack",
    feedUrl: "https://andrewchen.substack.com/feed",
    topics: ["growth-loops", "marketplace", "network-effects"],
    tier: "deep-dive",
  },
  {
    id: "src-007",
    name: "Stratechery (Ben Thompson)",
    platform: "rss",
    feedUrl: "https://stratechery.com/feed/",
    topics: ["platform-strategy", "tech-business", "aggregation"],
    tier: "deep-dive",
  },
  {
    id: "src-008",
    name: "AdExchanger",
    platform: "rss",
    feedUrl: "https://www.adexchanger.com/feed/",
    topics: ["programmatic", "adtech", "measurement"],
    tier: "deep-dive",
  },
  {
    id: "src-009",
    name: "Emily Kramer (MKT1)",
    handle: "@emilykramer",
    platform: "substack",
    feedUrl: "https://mkt1.substack.com/feed",
    topics: ["b2b-marketing", "positioning", "team-building"],
    tier: "deep-dive",
  },

  // --- EMERGING TIER (fresh voices, experimental) ---
  {
    id: "src-010",
    name: "Amanda Natividad",
    handle: "@amandanat",
    platform: "twitter",
    topics: ["content-strategy", "zero-click-content", "audience"],
    tier: "emerging",
  },
  {
    id: "src-011",
    name: "Eli Schwartz",
    handle: "@5le",
    platform: "linkedin",
    topics: ["product-led-seo", "international-seo"],
    tier: "emerging",
  },
  {
    id: "src-012",
    name: "Jay Acunzo",
    platform: "rss",
    feedUrl: "https://jayacunzo.com/feed",
    topics: ["storytelling", "creative-marketing", "resonance"],
    tier: "emerging",
  },
];

/**
 * Get sources by tier for display priority
 */
export function getSourcesByTier(tier: ContentSource["tier"]): ContentSource[] {
  return MARKETING_THOUGHT_LEADERS.filter((s) => s.tier === tier);
}

/**
 * Get sources by topic for filtering
 */
export function getSourcesByTopic(topic: string): ContentSource[] {
  return MARKETING_THOUGHT_LEADERS.filter((s) => s.topics.includes(topic));
}
