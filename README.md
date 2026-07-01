# MarStack — Your Morning Marketing Scroll

A mobile-first swipeable marketing insights app built with Next.js 14 (App Router). Get curated, AI-summarized marketing intelligence from your favorite podcasts, LinkedIn thought leaders, and industry publications.

## Features

- **Swipe Deck UI** — Swipe up for new topics, left for deeper insights on the same topic
- **AI Voice Summaries** — Listen to insights with an Executive-tone voiceover (OpenAI TTS, 'onyx' voice)
- **Curated Sources** — Marketing podcasts, LinkedIn voices, and industry blogs
- **Save to Stack** — Bookmark insights for later reference
- **Progressive Web App** — Installable on mobile, works offline

## Content Sources

### Podcasts
- Uncensored CMO (Jon Evans)
- Akimbo (Seth Godin)
- Marketing Over Coffee (John Wall & Christopher Penn)
- The MarTech Podcast (Benjamin Shapiro)

### LinkedIn Thought Leaders
- Jean Kang — Growth & B2B strategy
- learnwithmariah — Marketing education & personal branding

### Publications & Blogs
- Marketing Brew, Search Engine Land, AdExchanger
- Rand Fishkin (SparkToro), Lenny Rachitsky, Andrew Chen
- Emily Kramer (MKT1), Amanda Natividad, Jay Acunzo

## Design System

- **Background:** Pure white (#FFFFFF)
- **Color Scheme:** Sophisticated muted pastels (purple, coral, teal, gold, blush)
- **Vibe:** Professional yet engaging and modern — fun meets corporate
- **Typography:** Inter font family
- **Cards:** Subtle shadows with pastel-tinted borders

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (swipe gestures & animations)
- OpenAI TTS API (voice summaries)

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Required for AI voice summaries |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with MarStack metadata
│   ├── page.tsx            # Home page with SwipeDeck
│   └── api/
│       ├── voice/route.ts  # TTS endpoint (Executive tone, 'onyx' voice)
│       └── summarize/route.ts  # AI summarization endpoint
├── components/
│   ├── SwipeDeck/          # Main swipeable card deck
│   ├── InsightCard/        # Individual insight display card
│   ├── VoicePlayer/        # Audio playback controls
│   └── AddToStack/         # Save-to-stack button
├── lib/
│   ├── curators.ts         # Content source registry
│   └── placeholderData.ts  # Demo insights data
├── hooks/
│   └── useSwipeGesture.ts  # Touch gesture handler
└── styles/
    └── globals.css         # MarStack design tokens
```

## License

Private — All rights reserved.
