# StackPulse \u2014 Content Aggregation Engine Build Plan

## Architecture Overview

```
\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                    Client (Next.js SSR + CSR)            \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510             \u2502
\u2502  \u2502SwipeDeck \u2502  \u2502VoicePlayer\u2502  \u2502AddToStack\u2502             \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2518             \u2502
\u2502       \u2502               \u2502            \u2502                    \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502       \u2502    API Layer (Next.js Route Handlers)           \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2510    \u250c\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510           \u2502
\u2502  \u2502/api/feed\u2502    \u2502/api/voice \u2502   \u2502/api/stack\u2502           \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2518    \u2514\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518           \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502       \u2502     Services Layer                              \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2510             \u2502
\u2502  \u2502AggregationSvc \u2502 \u2502TTS Svc\u2502 \u2502Storage   \u2502             \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518             \u2502
\u2502       \u2502                                                 \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                 \u2502
\u2502  \u2502  Content Pipeline (Cron/Queue)    \u2502                 \u2502
\u2502  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u2502                 \u2502
\u2502  \u2502  \u2502Fetch\u2502\u2192\u2502Parse\u2502\u2192\u2502AI Summarize  \u2502\u2502                 \u2502
\u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2502                 \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

## Phase 1: Content Aggregation Engine (Weeks 1-2)

### 1.1 RSS Feed Collector
- **Library:** `rss-parser` (already in deps)
- **Schedule:** Cron job every 30 min via Vercel Cron or external scheduler
- **Flow:**
  1. Iterate through `curators.ts` sources with `platform: "rss"`
  2. Fetch + parse each feed
  3. Deduplicate by URL hash
  4. Store raw articles in database (Supabase/PlanetScale)

### 1.2 Social Feed Collector
- **Twitter/X:** Use Twitter API v2 (user timeline endpoint) for thought leader tweets
- **LinkedIn:** Scraping is unreliable; use RSS bridges or manual curation
- **Substack:** Most Substacks expose RSS; treat as RSS sources

### 1.3 AI Processing Pipeline
- **Trigger:** On new article ingestion
- **Steps:**
  1. Extract article body (readability algorithm or Firecrawl)
  2. Send to `/api/summarize` for headline + summary + takeaways
  3. Generate depth layers (progressive detail levels)
  4. Classify by topic using GPT embeddings
  5. Score relevance (recency + source tier + topic diversity)

### 1.4 Database Schema (Supabase)
```sql
CREATE TABLE sources (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  platform TEXT NOT NULL,
  feed_url TEXT,
  tier TEXT DEFAULT 'emerging',
  topics TEXT[],
  last_fetched_at TIMESTAMPTZ
);

CREATE TABLE articles (
  id UUID PRIMARY KEY,
  source_id UUID REFERENCES sources(id),
  url TEXT UNIQUE NOT NULL,
  title TEXT,
  raw_content TEXT,
  published_at TIMESTAMPTZ,
  fetched_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE insights (
  id UUID PRIMARY KEY,
  article_id UUID REFERENCES articles(id),
  topic TEXT NOT NULL,
  headline TEXT NOT NULL,
  summary TEXT NOT NULL,
  depth_layers JSONB DEFAULT '[]',
  relevance_score FLOAT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE user_stacks (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  insight_id UUID REFERENCES insights(id),
  saved_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Phase 2: Personalization (Weeks 3-4)

- Track topic engagement (swipe-through vs. skip)
- Smart ordering: highest-relevance first, topic diversity enforced
- Time-decay: prioritize content < 12 hours old
- "Add to Stack" analytics: save rates per topic/source

## Phase 3: Voice & Audio (Week 5)

- Pre-generate audio for top 20 insights daily
- Cache in Cloudflare R2 / Vercel Blob
- Audio playlist mode (sequential card playback)
- Voice options: Professional (alloy), Casual (nova), Quick (echo 1.2x)

## Phase 4: Production Hardening (Week 6)

- ISR for feed pages, edge caching for API routes
- PWA: service worker, offline cache, push notifications
- Monitoring: Sentry + Vercel Analytics + custom events
- Bundle budget: < 100KB JS initial load

## Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| UI/Motion | Framer Motion + @use-gesture/react |
| Styling | Tailwind CSS |
| AI/LLM | OpenAI GPT-4o-mini (summarization) |
| TTS | OpenAI TTS-1 (voiceover) |
| Database | Supabase (PostgreSQL) |
| Hosting | Vercel (Edge + Serverless) |
| Caching | Vercel KV / Upstash Redis |
| Storage | Cloudflare R2 (audio files) |
| Monitoring | Sentry + Vercel Analytics |
| Auth | NextAuth.js (magic link) |
