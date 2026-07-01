"use client";

import { AddToStack } from "@/components/AddToStack/AddToStack";
import { VoicePlayer } from "@/components/VoicePlayer/VoicePlayer";
import type { Insight } from "@/lib/placeholderData";

interface InsightCardProps {
  insight: Insight;
  depthLevel: number;
}

export function InsightCard({ insight, depthLevel }: InsightCardProps) {
  const isBase = depthLevel === 0;
  const depthContent = insight.depth[depthLevel - 1];

  return (
    <article className="insight-card min-h-[320px] flex flex-col justify-between select-none">
      {/* Topic badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pulse-accent/20 text-pulse-accent">
          {insight.topic}
        </span>
        <span className="text-xs text-pulse-muted">
          {depthLevel === 0 ? "Overview" : `Depth ${depthLevel}`}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold leading-tight mb-3">
          {insight.headline}
        </h2>

        <p className="text-sm text-pulse-muted leading-relaxed">
          {isBase ? insight.summary : depthContent?.content}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
        <div className="text-xs text-pulse-muted">
          <span className="font-medium text-pulse-text">{insight.author}</span>
          {" \u00b7 "}
          {insight.source}
        </div>

        <div className="flex items-center gap-2">
          <VoicePlayer
            text={isBase ? insight.summary : depthContent?.content ?? ""}
          />
          <AddToStack insightId={insight.id} />
        </div>
      </div>
    </article>
  );
}
