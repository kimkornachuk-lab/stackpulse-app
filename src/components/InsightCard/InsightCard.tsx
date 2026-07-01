"use client";

import { AddToStack } from "@/components/AddToStack/AddToStack";
import { VoicePlayer } from "@/components/VoicePlayer/VoicePlayer";
import type { Insight } from "@/lib/placeholderData";

interface InsightCardProps {
  insight: Insight;
  depthLevel: number;
}

const TOPIC_COLORS: Record<string, string> = {
  "Content Strategy": "bg-mar-teal/10 text-mar-teal",
  "Paid Media": "bg-mar-coral/10 text-mar-coral",
  "SEO & AI Search": "bg-mar-accent/10 text-mar-accent",
  "Email Marketing": "bg-mar-gold/10 text-mar-gold",
  "Brand Strategy": "bg-mar-blush/15 text-mar-blush",
  "Podcast Insight": "bg-mar-teal/10 text-mar-teal",
  "LinkedIn Thought Leader": "bg-mar-accent/10 text-mar-accent",
};

export function InsightCard({ insight, depthLevel }: InsightCardProps) {
  const isBase = depthLevel === 0;
  const depthContent = insight.depth[depthLevel - 1];
  const badgeColor = TOPIC_COLORS[insight.topic] ?? "bg-mar-subtle text-mar-accent";

  return (
    <article className="insight-card min-h-[320px] flex flex-col justify-between select-none">
      {/* Topic badge */}
      <div className="flex items-center justify-between mb-3">
        <span className={`mar-badge ${badgeColor}`}>
          {insight.topic}
        </span>
        <span className="text-xs text-mar-muted">
          {depthLevel === 0 ? "Overview" : `Depth ${depthLevel}`}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold leading-tight mb-3 text-mar-text">
          {insight.headline}
        </h2>

        <p className="text-sm text-mar-muted leading-relaxed">
          {isBase ? insight.summary : depthContent?.content}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-mar-border">
        <div className="text-xs text-mar-muted">
          <span className="font-medium text-mar-text">{insight.author}</span>
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
