"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ONBOARDING_STEPS = [
  {
    id: 1,
    title: "Your Morning Marketing Scroll",
    subtitle: "Curated insights from the voices that matter, delivered in a format designed for your commute.",
    illustration: "coffee",
    accent: "mar-accent",
  },
  {
    id: 2,
    title: "Swipe Up for New Topics",
    subtitle: "Each card is a fresh insight from top marketing minds. Swipe up to discover the next topic in your feed.",
    illustration: "swipe-up",
    accent: "mar-teal",
  },
  {
    id: 3,
    title: "Swipe Left for Depth",
    subtitle: "Want more? Swipe left to dive deeper into any insight. Each level adds actionable detail and frameworks.",
    illustration: "swipe-left",
    accent: "mar-coral",
  },
  {
    id: 4,
    title: "You're Ready",
    subtitle: "Build your marketing stack one insight at a time. Save what matters, share what inspires.",
    illustration: "ready",
    accent: "mar-gold",
  },
];

function StepIllustration({ type, accent }: { type: string; accent: string }) {
  const accentColor = accent === "mar-accent" ? "#7C6BAF" : 
                      accent === "mar-teal" ? "#5BA3A0" : 
                      accent === "mar-coral" ? "#D4836B" : "#C9A84C";

  if (type === "coffee") {
    return (
      <div className="relative w-48 h-48 mx-auto">
        <div className="absolute inset-0 rounded-full bg-mar-subtle animate-pulse" />
        <div className="absolute inset-4 flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="15" y="30" width="40" height="40" rx="8" fill={accentColor} opacity="0.2" />
            <rect x="18" y="33" width="34" height="34" rx="6" fill={accentColor} opacity="0.4" />
            <path d="M55 40h8a6 6 0 010 12h-8" stroke={accentColor} strokeWidth="3" fill="none" />
            <path d="M25 25c2-5 4-3 6-8" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M33 23c2-5 4-3 6-8" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M41 25c2-5 4-3 6-8" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === "swipe-up") {
    return (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
        <div className="absolute inset-6 rounded-2xl bg-mar-subtle border border-mar-border" />
        <div className="absolute inset-10 rounded-xl bg-white shadow-card border border-mar-border flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ y: [-4, -16, -4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </motion.div>
            <p className="text-[10px] text-mar-muted mt-1 font-medium">New Topic</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "swipe-left") {
    return (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
        <div className="absolute inset-6 rounded-2xl bg-mar-subtle border border-mar-border" />
        <div className="absolute inset-10 rounded-xl bg-white shadow-card border border-mar-border flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ x: [4, -12, 4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </motion.div>
            <p className="text-[10px] text-mar-muted mt-1 font-medium">More Depth</p>
          </div>
        </div>
        {/* Depth indicators */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          <div className="h-4 w-1 rounded-full bg-mar-teal" />
          <div className="h-4 w-1 rounded-full bg-mar-border" />
          <div className="h-4 w-1 rounded-full bg-mar-border" />
        </div>
      </div>
    );
  }

  // Ready
  return (
    <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 rounded-full flex items-center justify-center"
        style={{ background: `${accentColor}20` }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </motion.div>
    </div>
  );
}

export default function WelcomePage() {
  const [currentStep, setCurrentStep] = useState(0);

  const step = ONBOARDING_STEPS[currentStep];
  const isLast = currentStep === ONBOARDING_STEPS.length - 1;

  return (
    <main className="relative h-dvh w-full flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-safe-top py-4">
        <h1 className="text-lg font-bold tracking-tight">
          <span className="text-mar-accent">Mar</span>
          <span className="text-mar-text">Stack</span>
        </h1>
        {!isLast && (
          <Link
            href="/"
            className="text-sm text-mar-muted hover:text-mar-accent transition-colors"
          >
            Skip
          </Link>
        )}
      </header>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-2">
        {ONBOARDING_STEPS.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentStep
                ? "w-8 bg-mar-accent"
                : i < currentStep
                ? "w-1.5 bg-mar-accent/40"
                : "w-1.5 bg-mar-border"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-center w-full max-w-sm"
          >
            {/* Illustration */}
            <div className="mb-10">
              <StepIllustration type={step.illustration} accent={step.accent} />
            </div>

            {/* Text */}
            <h2 className="text-2xl font-bold text-mar-text mb-3 leading-tight">
              {step.title}
            </h2>
            <p className="text-sm text-mar-muted leading-relaxed max-w-xs mx-auto">
              {step.subtitle}
            </p>

            {/* Gesture hint card for steps 2 & 3 */}
            {(step.illustration === "swipe-up" || step.illustration === "swipe-left") && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 inline-flex items-center gap-2 bg-mar-subtle px-4 py-2 rounded-full"
              >
                <span className="text-xs text-mar-accent font-medium">
                  {step.illustration === "swipe-up" 
                    ? "↑ Swipe Up = New Topic" 
                    : "← Swipe Left = More Depth"}
                </span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom actions */}
      <div className="px-8 pb-8 pt-4">
        {isLast ? (
          <Link
            href="/"
            className="mar-btn w-full block text-center text-base py-3"
          >
            Start Your Scroll
          </Link>
        ) : (
          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="mar-btn-secondary flex-1 text-sm py-3"
              >
                Back
              </button>
            )}
            <button
              onClick={() => setCurrentStep((s) => s + 1)}
              className="mar-btn flex-1 text-sm py-3"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
