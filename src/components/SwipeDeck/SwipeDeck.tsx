"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { InsightCard } from "@/components/InsightCard/InsightCard";
import type { Insight } from "@/lib/placeholderData";

interface SwipeDeckProps {
  insights: Insight[];
}

const SWIPE_THRESHOLD = 80;

export function SwipeDeck({ insights }: SwipeDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [depthLevel, setDepthLevel] = useState(0);
  const [direction, setDirection] = useState<"up" | "left" | null>(null);

  const currentInsight = insights[currentIndex];

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const { offset, velocity } = info;

      if (offset.y < -SWIPE_THRESHOLD || velocity.y < -500) {
        setDirection("up");
        setDepthLevel(0);
        setCurrentIndex((prev) => (prev < insights.length - 1 ? prev + 1 : 0));
        return;
      }

      if (offset.x < -SWIPE_THRESHOLD || velocity.x < -500) {
        const maxDepth = currentInsight?.depth?.length ?? 0;
        if (depthLevel < maxDepth) {
          setDirection("left");
          setDepthLevel((prev) => prev + 1);
        }
        return;
      }
    },
    [currentIndex, depthLevel, insights.length, currentInsight]
  );

  if (!currentInsight) return null;

  const cardKey = `${currentInsight.id}-depth-${depthLevel}`;

  const variants = {
    enter: (dir: "up" | "left" | null) => ({
      y: dir === "up" ? 300 : 0,
      x: dir === "left" ? 300 : 0,
      opacity: 0,
      scale: 0.95,
    }),
    center: { y: 0, x: 0, opacity: 1, scale: 1 },
    exit: (dir: "up" | "left" | null) => ({
      y: dir === "up" ? -300 : 0,
      x: dir === "left" ? -300 : 0,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full max-w-md h-[70vh] flex items-center justify-center px-4">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={cardKey}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          className="absolute w-full cursor-grab active:cursor-grabbing"
        >
          <InsightCard insight={currentInsight} depthLevel={depthLevel} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-2 right-4 flex gap-1">
        {insights.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-6 rounded-full transition-colors ${
              i === currentIndex ? "bg-mar-accent" : "bg-mar-border"
            }`}
          />
        ))}
      </div>

      {currentInsight.depth.length > 0 && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          {[0, ...currentInsight.depth.map((_, i) => i + 1)].map((level) => (
            <div
              key={level}
              className={`h-6 w-1 rounded-full transition-colors ${
                level === depthLevel ? "bg-mar-teal" : "bg-mar-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
