"use client";

import { useState } from "react";

interface AddToStackProps {
  insightId: string;
}

export function AddToStack({ insightId }: AddToStackProps) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    if (typeof window !== "undefined") {
      const stack = JSON.parse(localStorage.getItem("stackpulse_stack") || "[]");
      if (!stack.includes(insightId)) {
        stack.push(insightId);
        localStorage.setItem("stackpulse_stack", JSON.stringify(stack));
      }
    }
  };

  return (
    <button
      onClick={handleSave}
      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
        saved
          ? "bg-green-500/20 text-green-400"
          : "bg-pulse-accent/20 text-pulse-accent hover:bg-pulse-accent/30"
      }`}
      aria-label={saved ? "Saved to stack" : "Add to stack"}
    >
      {saved ? "\u2713 Stacked" : "+ Stack"}
    </button>
  );
}
