import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/summarize
 * 
 * Accepts long-form marketing content and returns an AI-generated summary
 * optimized for the MarStack card format.
 * 
 * Body: { content: string, maxLength?: number }
 * Returns: { summary: string, headline: string, keyTakeaways: string[] }
 */
export async function POST(req: NextRequest) {
  try {
    const { content, maxLength = 280 } = await req.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'content' field" },
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

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a marketing content summarizer for MarStack, a morning briefing app for marketers. Summarize the given content into: 1. A punchy headline (max 80 chars) 2. A concise summary (max ${maxLength} chars) that captures the key insight 3. 2-3 actionable takeaways. Respond in JSON format: { "headline": "...", "summary": "...", "keyTakeaways": ["...", "..."] }`,
          },
          {
            role: "user",
            content: content.slice(0, 8000),
          },
        ],
        temperature: 0.4,
        max_tokens: 500,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI error:", err);
      return NextResponse.json(
        { error: "Summarization failed" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Summarize API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
