export const runtime = "edge";

export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "No URL provided" }, { status: 400 });
    }

    const lower = url.toLowerCase();

    // ----------------------------------------------------
    // ⭐ 1. TIKTOK HANDLER (TikWM)
    // ----------------------------------------------------
    if (lower.includes("tiktok.com")) {
      let finalUrl = url;

      // Expand short TikTok links
      if (lower.includes("vm.tiktok.com")) {
        const res = await fetch(url, { redirect: "follow" });
        finalUrl = res.url;
      }

      const api = `https://www.tikwm.com/api/?url=${encodeURIComponent(finalUrl)}`;
      const response = await fetch(api);
      const data = await response.json();

      if (!data || !data.data) {
        return Response.json(
          { error: "Invalid TikTok link." },
          { status: 400 }
        );
      }

      return Response.json({
        platform: "tiktok",
        nowm: data.data.play,
        cover: data.data.cover_large || data.data.cover,
        title: data.data.title || "TikTok Video",
      });
    }

    // ----------------------------------------------------
    // ⭐ 2. INSTAGRAM REELS HANDLER (RapidAPI)
    // ----------------------------------------------------
    if (lower.includes("instagram.com") && lower.includes("/reel")) {
      const apiKey = process.env.RAPIDAPI_KEY;
      const apiHost = process.env.RAPIDAPI_HOST;

      if (!apiKey || !apiHost) {
        return Response.json(
          { error: "Instagram not configured yet (missing API key)." },
          { status: 500 }
        );
      }

      const apiUrl = `https://${apiHost}/download?url=${encodeURIComponent(url)}`;

      const resp = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": apiHost,
        },
      });

      const data = await resp.json();

      if (!data || !data.video) {
        return Response.json(
          { error: "Failed to fetch Instagram Reel." },
          { status: 400 }
        );
      }

      return Response.json({
        platform: "instagram",
        nowm: data.video,
        cover: data.thumbnail,
        title: data.title || "Instagram Reel",
      });
    }

    // ----------------------------------------------------
    // ⭐ UNSUPPORTED LINK
    // ----------------------------------------------------
    return Response.json(
      { error: "Unsupported link. Only TikTok + Instagram Reels supported." },
      { status: 400 }
    );

  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error. Try again." },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------
// ⭐ STREAM-OPTIMIZED GET HANDLER: BYPASSES VERCEL 4.5MB LIMIT
// ----------------------------------------------------
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const videoUrl = searchParams.get("url");
    const title = searchParams.get("title") || "video";

    if (!videoUrl) {
      return new Response("Missing url parameter", { status: 400 });
    }

    // 1. Fetch the video from the external source
    const videoResponse = await fetch(videoUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "*/*",
      }
    });
    
    // Safety Fallback: Redirect to raw URL if the CDN blocks the request
    if (!videoResponse.ok) {
      console.error(`Fetch failed with status: ${videoResponse.status}`);
      return Response.redirect(videoUrl);
    }

    // 2. Clean up the filename safely
    const safeTitle = title.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 50) || "download";
    const filename = safeTitle.endsWith(".mp4") || safeTitle.endsWith(".mp3") ? safeTitle : `${safeTitle}.mp4`;

    // 3. STREAM the file body back to the frontend Blob
    return new Response(videoResponse.body, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream", 
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Access-Control-Allow-Origin": "*", // Prevents CORS blocking in browser
      },
    });

  } catch (err) {
    console.error("Forced download streaming error:", err);
    
    // Ultimate safety net fallback: just redirect to the video
    const { searchParams } = new URL(req.url);
    const videoUrl = searchParams.get("url");
    if (videoUrl) return Response.redirect(videoUrl);
    
    return new Response("Internal server error", { status: 500 });
  }
}
