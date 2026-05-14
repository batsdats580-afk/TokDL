import { NextResponse } from "next/server";

function detectPlatform(url) {
  const u = url.toLowerCase();

  if (u.includes("tiktok.com")) return "tiktok";
  if (u.includes("instagram.com") && u.includes("/reel")) return "instagram";

  return "unknown";
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "No URL provided." }, { status: 400 });
  }

  const platform = detectPlatform(url);

  if (platform === "unknown") {
    return NextResponse.json(
      { error: "Unsupported link. Only TikTok + Instagram Reels supported." },
      { status: 400 }
    );
  }

  try {
    // -----------------------------
    // ⭐ TIKTOK (TikWM API)
    // -----------------------------
    if (platform === "tiktok") {
      const api = await fetch(
        `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`
      );

      const data = await api.json();

      if (!data || !data.data) {
        return NextResponse.json(
          { error: "Invalid TikTok link." },
          { status: 400 }
        );
      }

      return NextResponse.json({
        platform: "tiktok",
        nowm: data.data.play,
        cover: data.data.cover,
        title: data.data.title || "TikTok Video"
      });
    }

    // -----------------------------
    // ⭐ INSTAGRAM REELS (SnapInsta)
    // -----------------------------
    if (platform === "instagram") {
      const snap = await fetch("https://snapinsta.app/api/ajaxSearch", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: new URLSearchParams({ url })
      });

      const text = await snap.text();

      // Extract MP4 link from SnapInsta HTML
      const mp4 = text.match(/https?:\/\/[^"']+\.mp4/);
      const thumb = text.match(/https?:\/\/[^"']+\.(jpg|jpeg|png)/);

      if (!mp4) {
        return NextResponse.json(
          { error: "Failed to fetch Instagram Reel." },
          { status: 400 }
        );
      }

      return NextResponse.json({
        platform: "instagram",
        nowm: mp4[0],
        cover: thumb ? thumb[0] : null,
        title: "Instagram Reel"
      });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error. Try again." },
      { status: 500 }
    );
  }
}
