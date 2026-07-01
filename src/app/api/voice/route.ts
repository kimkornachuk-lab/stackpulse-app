import { NextRequest, NextResponse } from "next/server";

/**
 * MarStack Voice API
 * 
 * Generates audio summaries using OpenAI TTS.
 * Voice Configuration:
 *   - Tone: "Executive" \u2014 calm, authoritative, professional
 *   - Primary Voice: "onyx" (deep, calm, confident)
 *   - Fallback Voice: "alloy" (balanced, clear, neutral)
 */

const VOICE_CONFIG = {
  model: "tts-1",
  voice: "onyx" as const,
  speed: 0.95,
} as const;

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text' field" },
        { status: 400 }
      );
    }

    if (text.length > 4096) {
      return NextResponse.json(
        { error: "Text exceeds 4096 character limit" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: VOICE_CONFIG.model,
        input: text,
        voice: VOICE_CONFIG.voice,
        speed: VOICE_CONFIG.speed,
        response_format: "mp3",
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("OpenAI TTS error:", errBody);
      return NextResponse.json(
        { error: "Voice generation failed" },
        { status: 502 }
      );
    }

    const audioBuffer = await response.arrayBuffer();

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("Voice route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
