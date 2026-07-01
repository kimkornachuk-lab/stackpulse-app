import { SwipeDeck } from "@/components/SwipeDeck/SwipeDeck";
import { PLACEHOLDER_INSIGHTS } from "@/lib/placeholderData";

export default function Home() {
  return (
    <main className="relative h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-mar-bg">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-5 pt-safe-top py-4">
        <h1 className="text-lg font-bold tracking-tight">
          <span className="text-mar-accent">Mar</span>
          <span className="text-mar-text">Stack</span>
        </h1>
        <button className="mar-btn-secondary text-sm">
          My Stack
        </button>
      </header>

      {/* Swipe Deck */}
      <SwipeDeck insights={PLACEHOLDER_INSIGHTS} />

      {/* Bottom hint */}
      <div className="swipe-indicator">
        \u2191 New Topic \u00a0\u00b7\u00a0 \u2190 More Depth
      </div>
    </main>
  );
}
