export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "No URL provided" }, { status: 400 });
    }

    // SnapInsta API (free, no watermark)
    const apiUrl = "https://snapinsta.app/api/ajaxSearch";

    const formData = new URLSearchParams();
    formData.append("url", url);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (!data || !data.data || !data.data[0]?.url) {
      return Response.json({ error: "Failed to fetch Reel" }, { status: 500 });
    }

    return Response.json({
      video: data.data[0].url, // direct MP4 link
      thumbnail: data.data[0].thumbnail,
    });
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
