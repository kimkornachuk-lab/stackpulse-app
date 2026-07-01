import { SwipeDeck } from "@/components/SwipeDeck/SwipeDeck";
import { QuoteOfTheDay } from "@/components/QuoteOfTheDay/QuoteOfTheDay";
import { PLACEHOLDER_INSIGHTS } from "@/lib/placeholderData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-mar-bg">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-5 pt-safe-top py-4">
        <h1 className="text-lg font-bold tracking-tight">
          <span className="text-mar-accent">Mar</span>
          <span className="text-mar-text">Stack</span>
        </h1>
        <div className="flex items-center gap-2">
          <Link href="/welcome" className="mar-btn-secondary text-xs px-3 py-1.5">
            How It Works
          </Link>
          <button className="mar-btn-secondary text-sm">
            My Stack
          </button>
        </div>
      </header>

      {/* Swipe Deck */}
      <SwipeDeck insights={PLACEHOLDER_INSIGHTS} />

      {/* Quote of the Day */}
      <QuoteOfTheDay />

      {/* Bottom hint */}
      <div className="swipe-indicator">
        ↑ New Topic &nbsp;·&nbsp; ← More Depth
      </div>
    </main>
  );
}
