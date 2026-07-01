"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShareStoryCard } from "@/components/ShareStoryCard/ShareStoryCard";
import { MARKETING_QUOTES, type MarketingQuote } from "@/lib/quotes";

export function QuoteOfTheDay() {
  const [quote, setQuote] = useState<MarketingQuote | null>(null);
  const [showShareCard, setShowShareCard] = useState(false);

  useEffect(() => {
    // Get quote of the day based on current date
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    const index = dayOfYear % MARKETING_QUOTES.length;
    setQuote(MARKETING_QUOTES[index]);
  }, []);

  if (!quote) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute bottom-16 inset-x-4 z-40"
      >
        <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-card border border-mar-border overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-mar-accent rounded-full" />

          <div className="pl-3">
            {/* Label */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-mar-accent">
                Key Quote of the Day
              </span>
              <span className="text-[10px] text-mar-muted px-2 py-0.5 rounded-full bg-mar-subtle">
                {quote.topic}
              </span>
            </div>

            {/* Quote */}
            <p className="text-sm font-medium text-mar-text leading-snug mb-2 line-clamp-2">
              &ldquo;{quote.quote}&rdquo;
            </p>

            {/* Author & Share */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-mar-muted">
                — {quote.author}
              </span>
              <button
                onClick={() => setShowShareCard(true)}
                className="flex items-center gap-1.5 text-xs font-medium text-mar-accent 
                           bg-mar-subtle px-3 py-1.5 rounded-full transition-all 
                           active:scale-95 hover:bg-mar-accent hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
                </svg>
                Share to Social
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareCard && (
          <ShareStoryCard quote={quote} onClose={() => setShowShareCard(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
