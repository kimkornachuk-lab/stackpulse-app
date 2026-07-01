"use client";

import { useState } from "react";

interface VoicePlayerProps {
  text: string;
}

export function VoicePlayer({ text }: VoicePlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlay = async () => {
    if (playing) {
      setPlaying(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error("TTS failed");

      const audioBlob = await res.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      audio.onended = () => setPlaying(false);
      audio.play();
      setPlaying(true);
    } catch (err) {
      console.error("Voice playback error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={loading}
      className="text-xs px-2.5 py-1.5 rounded-full bg-white/5 text-pulse-muted 
                 hover:bg-white/10 hover:text-white transition-all disabled:opacity-50"
      aria-label={playing ? "Stop voiceover" : "Play voiceover"}
    >
      {loading ? "..." : playing ? "\u25fc" : "\u25b6"}
    </button>
  );
}
