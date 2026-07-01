# StackPulse \ud83d\ude80

**Your Professional Scroll \u2014 A morning marketing briefing in swipeable cards.**

StackPulse curates insights from top marketing thought leaders, summarizes them with AI, and delivers them in a mobile-first swipe interface designed for your morning routine.

## Features

- **Swipe Navigation** \u2014 Swipe up for new topics, swipe left for more depth
- **AI Summarizer** \u2014 Long-form content condensed into actionable card-sized insights
- **AI Voiceover** \u2014 Listen to your morning stack hands-free
- **\"Add to Stack\"** \u2014 Save insights for later reference
- **Curated Sources** \u2014 Pre-selected marketing thought leaders (RSS, Substack, social)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI/Animations:** Framer Motion + @use-gesture/react
- **Styling:** Tailwind CSS (dark mode, mobile-first)
- **AI:** OpenAI GPT-4o-mini (summarization) + TTS-1 (voiceover)
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) \u2014 best experienced on mobile viewport.

## Project Structure

```
src/
\u251c\u2500\u2500 app/
\u2502   \u251c\u2500\u2500 api/
\u2502   \u2502   \u251c\u2500\u2500 summarize/route.ts   # AI content summarization
\u2502   \u2502   \u2514\u2500\u2500 voice/route.ts       # Text-to-Speech generation
\u2502   \u251c\u2500\u2500 layout.tsx               # Root layout (mobile viewport)
\u2502   \u2514\u2500\u2500 page.tsx                 # Main swipe deck page
\u251c\u2500\u2500 components/
\u2502   \u251c\u2500\u2500 SwipeDeck/               # Core swipe navigation
\u2502   \u251c\u2500\u2500 InsightCard/             # Individual insight display
\u2502   \u251c\u2500\u2500 AddToStack/              # Save/bookmark feature
\u2502   \u2514\u2500\u2500 VoicePlayer/            # Audio playback controls
\u251c\u2500\u2500 hooks/
\u2502   \u2514\u2500\u2500 useSwipeGesture.ts      # Touch gesture detection
\u251c\u2500\u2500 lib/
\u2502   \u251c\u2500\u2500 curators.ts             # Thought leader source list
\u2502   \u2514\u2500\u2500 placeholderData.ts      # Demo insight cards
\u2514\u2500\u2500 styles/
    \u2514\u2500\u2500 globals.css             # Tailwind + custom utilities
```

## Roadmap

See [BUILD_PLAN.md](./BUILD_PLAN.md) for the full 6-week implementation roadmap.

## License

MIT
