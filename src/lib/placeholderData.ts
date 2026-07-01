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
    summary: "New data shows long-form content generates 3x more organic traffic than short posts. The key shift: AI-assisted research enables deeper, more authoritative pieces without proportional time investment.",
    source: "Marketing Brew",
    author: "Sarah Chen",
    depth: [
      { level: 1, content: "The study analyzed 50,000 blog posts across B2B SaaS companies. Posts exceeding 3,000 words averaged 2.4x more backlinks and 3.1x organic sessions compared to sub-1,000 word posts." },
      { level: 2, content: "Actionable takeaway: Use AI to generate research outlines and first drafts, then layer in original insights, proprietary data, and expert quotes. Target 1 long-form piece per week instead of 3 short ones." }
    ],
    timestamp: "2026-06-30T06:00:00Z",
  },
  {
    id: "ins-002",
    topic: "Podcast Insight",
    headline: "Why Brand Building Beats Performance Marketing in a Downturn",
    summary: "Jon Evans argues that brands cutting awareness spend during recessions lose 3-5 years of equity. The CMOs who maintain share-of-voice during downturns emerge with outsized market share gains.",
    source: "Uncensored CMO",
    author: "Jon Evans",
    depth: [
      { level: 1, content: "Historical data from IPA shows brands that maintained or increased spend during 2008-2009 saw 4.5x more long-term profit growth vs. those that cut. The efficiency trap of pure performance marketing erodes brand salience over time." },
      { level: 2, content: "Framework: Allocate 60% brand / 40% performance as a baseline. In downturns, resist pressure to flip the ratio. Measure brand health monthly via unaided recall and search volume as leading indicators." }
    ],
    timestamp: "2026-06-30T07:00:00Z",
  },
  {
    id: "ins-003",
    topic: "Podcast Insight",
    headline: "Seth Godin: The End of Average and What Marketers Must Do Next",
    summary: "In a market of infinite choice, being remarkable isn't optional. Godin's latest thesis: AI commoditizes 'good enough' content, so the only viable strategy is making work that's worth talking about.",
    source: "Akimbo",
    author: "Seth Godin",
    depth: [
      { level: 1, content: "The purple cow principle updated for AI: when machines can produce competent content at zero marginal cost, human creativity must focus on tension, surprise, and emotional resonance. The average is now invisible." },
      { level: 2, content: "Practical filter: Before publishing anything, ask 'Would someone forward this to a colleague?' If no, it's not remarkable enough. Ship less, but ship things that create tension and demand a response." }
    ],
    timestamp: "2026-06-30T06:30:00Z",
  },
  {
    id: "ins-004",
    topic: "Podcast Insight",
    headline: "The MarTech Stack Consolidation Wave: Less Tools, More Integration",
    summary: "Marketing teams are reducing their tech stack by 30% on average while increasing output. The shift toward composable platforms and AI orchestration is replacing point-solution sprawl.",
    source: "The MarTech Podcast",
    author: "Benjamin Shapiro",
    depth: [
      { level: 1, content: "Average enterprise marketing team used 91 tools in 2024; that's dropped to 64 in 2026. The consolidation is driven by AI-native platforms that handle multiple use cases in one system." },
      { level: 2, content: "Audit playbook: Map every tool to a revenue-attributable workflow. If a tool doesn't directly enable a measurable outcome, it's a candidate for removal. Consolidate around 3-4 core platforms with open APIs." }
    ],
    timestamp: "2026-06-30T05:45:00Z",
  },
  {
    id: "ins-005",
    topic: "Podcast Insight",
    headline: "Marketing Over Coffee: Attribution Is Dead, Incrementality Is King",
    summary: "Multi-touch attribution models are failing in a privacy-first world. The new gold standard: incrementality testing through geo-holdouts and synthetic control groups.",
    source: "Marketing Over Coffee",
    author: "John Wall & Christopher Penn",
    depth: [
      { level: 1, content: "With cookie deprecation and iOS privacy changes, last-click and even multi-touch models report up to 40% error rates. Incrementality testing measures true lift by comparing exposed vs. holdout populations." },
      { level: 2, content: "Start simple: Run geo-holdout tests on your top 2-3 channels. Hold back spend in 10-15% of markets for 4-6 weeks, then measure revenue delta. This gives you true incremental ROAS without any tracking pixels." }
    ],
    timestamp: "2026-06-30T05:15:00Z",
  },
  {
    id: "ins-006",
    topic: "LinkedIn Thought Leader",
    headline: "Jean Kang: The 'Quiet Pipeline' Strategy for B2B Growth",
    summary: "Pipeline doesn't always come from visible campaigns. Kang's framework for building dark funnel awareness through executive content, community engagement, and strategic partnerships.",
    source: "LinkedIn",
    author: "Jean Kang",
    depth: [
      { level: 1, content: "70% of B2B buying decisions are influenced before a prospect ever fills out a form. The quiet pipeline builds through ungated thought leadership, podcast appearances, and community participation." },
      { level: 2, content: "Kang's 3-pillar approach: (1) Weekly executive LinkedIn posts that teach, not sell. (2) Monthly community contributions in Slack groups your ICP frequents. (3) Quarterly give-first partnerships with complementary brands." }
    ],
    timestamp: "2026-06-30T04:30:00Z",
  },
  {
    id: "ins-007",
    topic: "LinkedIn Thought Leader",
    headline: "learnwithmariah: Building a Personal Brand That Converts in 2026",
    summary: "Personal branding isn't vanity metrics. Mariah's data-backed framework shows creators who post consistently with a clear POV generate 5x more inbound opportunities than those with larger but unfocused audiences.",
    source: "LinkedIn",
    author: "Mariah (learnwithmariah)",
    depth: [
      { level: 1, content: "The niche authority model: A creator with 5,000 highly engaged followers in a specific vertical outperforms one with 50,000 generic followers for business outcomes." },
      { level: 2, content: "Mariah's content formula: 50% educational, 30% opinion (hot takes on industry trends), 20% personal (behind-the-scenes). Post 4-5x/week, engage 20 min/day in comments." }
    ],
    timestamp: "2026-06-30T04:00:00Z",
  },
  {
    id: "ins-008",
    topic: "SEO & AI Search",
    headline: "Google AI Overviews Now Cite Sources Differently",
    summary: "Google's latest AI Overview update changes how source links appear. Early data: sites cited in AI Overviews see +15% CTR but only if their snippet is in the first 3 citations.",
    source: "Search Engine Land",
    author: "Lily Ray",
    depth: [
      { level: 1, content: "The new format surfaces 3 primary citations with preview cards instead of inline links. Position 1-3 citations capture 89% of all AI Overview referral traffic." },
      { level: 2, content: "Optimization strategy: Structure content with clear, factual answer paragraphs in the first 200 words. Use schema markup and ensure your domain has high E-E-A-T signals." }
    ],
    timestamp: "2026-06-30T05:00:00Z",
  },
];
