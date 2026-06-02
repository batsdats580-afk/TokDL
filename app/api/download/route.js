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
// ⭐ NEW: GET HANDLER FOR FORCING BROWSER DOWNLOADS
// ----------------------------------------------------
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const videoUrl = searchParams.get("url");
    const title = searchParams.get("title") || "video";

    if (!videoUrl) {
      return new Response("Missing url parameter", { status: 400 });
    }

    // Fetch the raw video from the CDN (works for both TikTok and Instagram links)
    const videoResponse = await fetch(videoUrl);
    
    if (!videoResponse.ok) {
      return new Response("Failed to fetch video file from CDN source", { status: 500 });
    }

    // Get the video as an ArrayBuffer and turn it into a Buffer
    const arrayBuffer = await videoResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Sanitize title for filename usage
    const safeTitle = encodeURIComponent(title.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 50));
    const filename = `${safeTitle}.mp4`;

    // Return the video data back with headers that force the mobile or desktop browser to download
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });

  } catch (err) {
    console.error("Forced download routing error:", err);
    return new Response("Internal server error downloading video", { status: 500 });
  }
}
