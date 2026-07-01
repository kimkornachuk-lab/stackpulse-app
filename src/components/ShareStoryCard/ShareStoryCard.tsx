"use client";

import { useState, useRef, useCallback } from "react";
import type { MarketingQuote } from "@/lib/quotes";

interface ShareStoryCardProps {
  quote: MarketingQuote;
  onClose: () => void;
}

export function ShareStoryCard({ quote, onClose }: ShareStoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;

    // Use html2canvas-like approach via canvas API
    const card = cardRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
    gradient.addColorStop(0, "#F3F0F8");
    gradient.addColorStop(0.5, "#FFFFFF");
    gradient.addColorStop(1, "#F3F0F8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // Decorative circles
    ctx.fillStyle = "rgba(124, 107, 175, 0.06)";
    ctx.beginPath();
    ctx.arc(200, 400, 250, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(880, 1500, 300, 0, Math.PI * 2);
    ctx.fill();

    // Quote mark
    ctx.font = "bold 180px Inter, sans-serif";
    ctx.fillStyle = "rgba(124, 107, 175, 0.15)";
    ctx.fillText("\u201C", 100, 650);

    // Quote text
    ctx.font = "bold 52px Inter, sans-serif";
    ctx.fillStyle = "#1E1E2E";
    const words = quote.quote.split(" ");
    let line = "";
    let y = 750;
    const maxWidth = 880;
    const lineHeight = 72;
    
    for (const word of words) {
      const testLine = line + word + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== "") {
        ctx.fillText(line.trim(), 100, y);
        line = word + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), 100, y);

    // Author
    y += lineHeight + 40;
    ctx.font = "600 36px Inter, sans-serif";
    ctx.fillStyle = "#7C6BAF";
    ctx.fillText(`— ${quote.author}`, 100, y);

    // Role
    if (quote.role) {
      y += 50;
      ctx.font = "400 28px Inter, sans-serif";
      ctx.fillStyle = "#6B7280";
      ctx.fillText(quote.role, 100, y);
    }

    // Topic badge
    y += 80;
    ctx.fillStyle = "rgba(124, 107, 175, 0.1)";
    const badgeText = quote.topic;
    const badgeWidth = ctx.measureText(badgeText).width + 40;
    ctx.beginPath();
    ctx.roundRect(100, y - 30, badgeWidth, 44, 22);
    ctx.fill();
    ctx.font = "500 24px Inter, sans-serif";
    ctx.fillStyle = "#7C6BAF";
    ctx.fillText(badgeText, 120, y);

    // Branding footer
    ctx.font = "bold 32px Inter, sans-serif";
    ctx.fillStyle = "#7C6BAF";
    ctx.fillText("Mar", 100, 1780);
    ctx.fillStyle = "#1E1E2E";
    ctx.fillText("Stack", 100 + ctx.measureText("Mar").width, 1780);
    
    ctx.font = "400 22px Inter, sans-serif";
    ctx.fillStyle = "#6B7280";
    ctx.fillText("Your Morning Marketing Scroll", 100, 1820);

    // Accent line at top
    ctx.fillStyle = "#7C6BAF";
    ctx.fillRect(0, 0, 1080, 6);

    // Download
    const link = document.createElement("a");
    link.download = `marstack-quote-${quote.id}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [quote]);

  const handleCopyText = useCallback(async () => {
    const text = `"${quote.quote}"\n— ${quote.author}${quote.role ? `, ${quote.role}` : ""}\n\n#MarStack #MarketingInsights`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [quote]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-mar-muted hover:text-mar-text transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Story Preview Card (9:16 aspect ratio) */}
        <div
          ref={cardRef}
          className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl"
          style={{ background: "linear-gradient(180deg, #F3F0F8 0%, #FFFFFF 50%, #F3F0F8 100%)" }}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-mar-accent" />

          {/* Decorative blobs */}
          <div className="absolute top-20 left-8 w-40 h-40 rounded-full bg-mar-accent/5" />
          <div className="absolute bottom-32 right-4 w-48 h-48 rounded-full bg-mar-accent/5" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-6 py-10">
            {/* Quote mark */}
            <span className="text-6xl font-bold text-mar-accent/20 leading-none mb-2">&ldquo;</span>
            
            {/* Quote text */}
            <p className="text-base font-semibold text-mar-text leading-relaxed mb-4">
              {quote.quote}
            </p>

            {/* Author */}
            <p className="text-sm font-semibold text-mar-accent">
              — {quote.author}
            </p>
            {quote.role && (
              <p className="text-xs text-mar-muted mt-0.5">{quote.role}</p>
            )}

            {/* Topic badge */}
            <div className="mt-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-mar-accent/10 text-mar-accent">
                {quote.topic}
              </span>
            </div>

            {/* Branding */}
            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-bold">
                <span className="text-mar-accent">Mar</span>
                <span className="text-mar-text">Stack</span>
              </p>
              <p className="text-[10px] text-mar-muted">Your Morning Marketing Scroll</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleDownload}
            className="flex-1 mar-btn flex items-center justify-center gap-2 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Save Image
          </button>
          <button
            onClick={handleCopyText}
            className="flex-1 mar-btn-secondary flex items-center justify-center gap-2 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            {copied ? "Copied!" : "Copy Text"}
          </button>
        </div>
      </div>
    </div>
  );
}
