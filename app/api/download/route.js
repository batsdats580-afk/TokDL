export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "No URL provided" }, { status: 400 });
    }

    const lower = url.toLowerCase();

    // ----------------------------------------------------
    // ⭐ 1. TIKTOK HANDLER (TikWM API)
    // ----------------------------------------------------
    if (lower.includes("tiktok.com")) {
      let finalUrl = url;

      // Expand short TikTok links (vm.tiktok.com)
      if (lower.includes("vm.tiktok.com")) {
        const res = await fetch(url, { redirect: "follow" });
        finalUrl = res.url;
      }

      const api = `https://www.tikwm.com/api/?url=${encodeURIComponent(finalUrl)}`;
      const response = await fetch(api);
      const data = await response.json();

      if (!data || !data.data) {
        return Response.json({ error: "Invalid TikTok link." }, { status: 400 });
      }

      return Response.json({
        platform: "tiktok",
        nowm: data.data.play,
        cover: data.data.cover,
        title: data.data.title || "TikTok Video"
      });
    }

    // ----------------------------------------------------
    // ⭐ 2. INSTAGRAM REELS HANDLER (Updated SnapInsta)
    // ----------------------------------------------------
    if (lower.includes("instagram.com") && lower.includes("/reel")) {
      const snap = await fetch("https://snapinsta.app/api/ajaxSearch", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: new URLSearchParams({ url })
      });

      const html = await snap.text();

      // Updated MP4 extraction
      const mp4 = html.match(/https?:\/\/[^"']+\.mp4/);
      const thumb = html.match(/https?:\/\/[^"']+\.(jpg|jpeg|png)/);

      if (!mp4) {
        return Response.json(
          { error: "Failed to fetch Instagram Reel." },
          { status: 400 }
        );
      }

      return Response.json({
        platform: "instagram",
        nowm: mp4[0],
        cover: thumb ? thumb[0] : null,
        title: "Instagram Reel"
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
