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
      const stack = JSON.parse(localStorage.getItem("marstack_saved") || "[]");
      if (!stack.includes(insightId)) {
        stack.push(insightId);
        localStorage.setItem("marstack_saved", JSON.stringify(stack));
      }
    }
  };

  return (
    <button
      onClick={handleSave}
      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
        saved
          ? "bg-mar-teal/15 text-mar-teal"
          : "bg-mar-accent/10 text-mar-accent hover:bg-mar-accent/20"
      }`}
      aria-label={saved ? "Saved to stack" : "Add to stack"}
    >
      {saved ? "\u2713 Stacked" : "+ Stack"}
    </button>
  );
}
