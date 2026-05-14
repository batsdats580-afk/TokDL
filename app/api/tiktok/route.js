import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "No URL provided." });
  }

  try {
    const api = await fetch(
      `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`
    );

    const data = await api.json();

    if (!data || !data.data) {
      return NextResponse.json({ error: "Invalid TikTok link." });
    }

    return NextResponse.json({
      nowm: data.data.play,
      cover: data.data.cover
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process video." });
  }
}
