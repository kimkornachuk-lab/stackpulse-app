export interface Insight {
  id: string;
  topic: string;
  headline: string;
  summary: string;
  source: string;
  author: string;
  depth: InsightDepth[];
  timestamp: string;
}

export interface InsightDepth {
  level: number;
  content: string;
}

export const PLACEHOLDER_INSIGHTS: Insight[] = [
  {
    id: "ins-001",
    topic: "Content Strategy",
    headline: "Long-Form Content Is Back: Why 3,000+ Word Posts Win in 2026",
    summary:
      "New data shows long-form content generates 3x more organic traffic than short posts. The key shift: AI-assisted research enables deeper, more authoritative pieces without proportional time investment.",
    source: "Marketing Brew",
    author: "Sarah Chen",
    depth: [
      {
        level: 1,
        content:
          "The study analyzed 50,000 blog posts across B2B SaaS companies. Posts exceeding 3,000 words averaged 2.4x more backlinks and 3.1x organic sessions compared to sub-1,000 word posts.",
      },
      {
        level: 2,
        content:
          "Actionable takeaway: Use AI to generate research outlines and first drafts, then layer in original insights, proprietary data, and expert quotes. Target 1 long-form piece per week instead of 3 short ones.",
      },
    ],
    timestamp: "2026-06-30T06:00:00Z",
  },
  {
    id: "ins-002",
    topic: "Paid Media",
    headline: "Meta's AI Audience Expansion: Early Results from Performance Marketers",
    summary:
      "Performance marketers report 22% lower CPA using Meta's new AI-driven audience expansion. The catch: creative fatigue hits faster, requiring 40% more ad variants.",
    source: "AdExchanger",
    author: "Mike Torres",
    depth: [
      {
        level: 1,
        content:
          "Meta's Advantage+ suite now handles audience targeting almost entirely via AI. Marketers who lean in report lower CPAs but reduced control over who sees their ads.",
      },
      {
        level: 2,
        content:
          "Pro tip: Pair AI audiences with UGC-style creatives and refresh every 5-7 days. Use cost caps aggressively to prevent overspend during learning phases.",
      },
    ],
    timestamp: "2026-06-30T05:30:00Z",
  },
  {
    id: "ins-003",
    topic: "SEO & AI Search",
    headline: "Google AI Overviews Now Cite Sources Differently \u2014 What It Means for CTR",
    summary:
      "Google's latest AI Overview update changes how source links appear. Early data: sites cited in AI Overviews see +15% CTR but only if their snippet is in the first 3 citations.",
    source: "Search Engine Land",
    author: "Lily Ray",
    depth: [
      {
        level: 1,
        content:
          "The new format surfaces 3 primary citations with preview cards instead of inline links. Position 1-3 citations capture 89% of all AI Overview referral traffic.",
      },
      {
        level: 2,
        content:
          "Optimization strategy: Structure content with clear, factual answer paragraphs in the first 200 words. Use schema markup and ensure your domain has high E-E-A-T signals.",
      },
    ],
    timestamp: "2026-06-30T05:00:00Z",
  },
  {
    id: "ins-004",
    topic: "Email Marketing",
    headline: "The 'Anti-Newsletter' Format That's Getting 62% Open Rates",
    summary:
      "A new wave of marketers is ditching traditional newsletters for single-insight emails: one idea, one CTA, under 150 words. Open rates average 62% vs. 38% for traditional formats.",
    source: "SparkToro Blog",
    author: "Rand Fishkin",
    depth: [
      {
        level: 1,
        content:
          "The format works because it respects inbox fatigue. Readers know exactly what they're getting: one actionable insight they can absorb in 30 seconds.",
      },
      {
        level: 2,
        content:
          "Implementation: Send 3x/week single-insight emails instead of 1x/week long newsletters. Use the subject line as the hook and deliver the full value in the preview text + first sentence.",
      },
    ],
    timestamp: "2026-06-29T18:00:00Z",
  },
  {
    id: "ins-005",
    topic: "Brand Strategy",
    headline: "Why B2B Brands Are Investing in 'Parasocial Content' on LinkedIn",
    summary:
      "Top B2B brands are shifting budget from gated content to founder/executive personal content. Companies with active founder presences report 2.8x higher inbound pipeline.",
    source: "Pavilion Weekly",
    author: "Sam Jacobs",
    depth: [
      {
        level: 1,
        content:
          "Parasocial content creates perceived relationships between audiences and brand leaders. LinkedIn's algorithm heavily favors personal posts over company page content (8:1 reach ratio).",
      },
      {
        level: 2,
        content:
          "Playbook: Ghostwrite 3-4 LinkedIn posts/week for your CEO or VP Marketing. Mix hot takes (40%), behind-the-scenes (30%), and tactical advice (30%). Engage in comments for 15 min post-publish.",
      },
    ],
    timestamp: "2026-06-29T14:00:00Z",
  },
];
