"use client";

import { useState } from "react";

export default function Downloader() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  const detectPlatform = (link) => {
    if (link.includes("tiktok.com")) return "tiktok";
    if (link.includes("instagram.com")) return "instagram";
    return null;
  };

  const detectInstagramType = (link) => {
    const lower = link.toLowerCase();

    if (lower.includes("/stories/") || lower.includes("/story/")) return "story";
    if (lower.includes("/reel/")) return "reel";
    if (lower.includes("/highlights/") || lower.includes("/highlight/"))
      return "highlight";
    if (lower.includes("/p/") || lower.includes("/tv/")) return "post";

    return "unknown";
  };

  // TikTok
  const fetchTikTok = async (link) => {
    const res = await fetch("https://www.tikwm.com/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: link }),
    });

    const data = await res.json();
    if (!data || !data.data) throw new Error("Failed to fetch TikTok data");

    return {
      thumbnail: data.data.cover,
      username: data.data.author?.unique_id || "unknown",
      caption: data.data.title || "",
      videoUrl: data.data.hdplay || data.data.play || data.data.play_url,
      audioUrl: data.data.music || null,
      platform: "tiktok",
    };
  };

  // Instagram
  const fetchInstagramUniversal = async (link) => {
    const igType = detectInstagramType(link);

    const res = await fetch(
      `https://snapinsta.io/api?url=${encodeURIComponent(link)}`
    );

    if (!res.ok) throw new Error("Failed to fetch Instagram data");

    const data = await res.json();

    const media = Array.isArray(data.media) ? data.media : data.data || [];
    if (!media || media.length === 0) {
      throw new Error("No downloadable media found for this Instagram link.");
    }

    const first = media[0];

    const isVideo =
      first.type === "video" ||
      first.is_video === true ||
      (first.url && first.url.endsWith(".mp4"));

    const videoUrl = isVideo ? first.url : null;
    const imageUrl = !isVideo ? first.url : first.thumbnail || null;

    return {
      thumbnail: first.thumbnail || imageUrl || videoUrl || "",
      username: data.username || first.username || "unknown",
      caption: data.caption || first.caption || "",
      videoUrl,
      imageUrl,
      igType,
      platform: "instagram",
    };
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  // ⭐ FINAL FIXED VERSION — VIDEO FIRST, AD AFTER
  const downloadDirect = (fileUrl, filename) => {
    if (!fileUrl) return;

    // ⭐ FIRST: open the video tab immediately (trusted gesture)
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = filename;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();

    // ⭐ THEN: open the ad AFTER the video navigation is done
    setTimeout(() => {
      const popup = window.open("https://omg10.com/4/11083799", "_blank");

      // ⭐ Backup trigger (in case browser blocks first attempt)
      setTimeout(() => {
        if (!popup || popup.closed) {
          window.open("https://omg10.com/4/11083799", "_blank");
        }
      }, 300);
    }, 500); // delay ensures video loads first
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!url.trim()) {
      setError("Paste a TikTok or Instagram link first.");
      return;
    }

    const platform = detectPlatform(url);
    if (!platform) {
      setError("Only TikTok and Instagram links are supported.");
      return;
    }

    try {
      setLoading(true);
      let data;

      if (platform === "tiktok") {
        data = await fetchTikTok(url);
      } else if (platform === "instagram") {
        data = await fetchInstagramUniversal(url);
      }

      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderInstagramButtonLabel = (res) => {
    if (!res || res.platform !== "instagram") return "Download";

    const { igType, videoUrl, imageUrl } = res;

    if (igType === "story") {
      return videoUrl ? "Download Story (MP4)" : "Download Story (JPG)";
    }

    if (igType === "reel") {
      return "Download Reel (MP4)";
    }

    if (igType === "highlight") {
      return videoUrl ? "Download Highlight (MP4)" : "Download Highlight (JPG)";
    }

    if (igType === "post") {
      if (videoUrl) return "Download Video (MP4)";
      if (imageUrl) return "Download Photo (JPG)";
      return "Download Post";
    }

    return "Download Media";
  };

  const getInstagramDownloadUrl = (res) => {
    if (!res || res.platform !== "instagram") return null;
    return res.videoUrl || res.imageUrl || null;
  };

  return (
    <section className="max-w-xl mx-auto mt-6 relative">
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg z-50">
          {toast}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Paste TikTok or Instagram link
        </label>

        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.tiktok.com/... or https://www.instagram.com/..."
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Fetching media..." : "Download"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
          {result.thumbnail && (
            <img
              src={result.thumbnail}
              alt="thumbnail"
              className="w-full rounded-lg mb-3"
            />
          )}

          <p className="font-semibold text-sm">@{result.username}</p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {result.caption}
          </p>

          {/* TIKTOK UI */}
          {result.platform === "tiktok" && (
            <>
              <button
                onClick={() => downloadDirect(result.videoUrl, "video.mp4")}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition"
              >
                Save video to device
              </button>

              {result.audioUrl && (
                <button
                  onClick={() => downloadDirect(result.audioUrl, "audio.mp3")}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition mt-3"
                >
                  Download Audio (MP3)
                </button>
              )}

              <p className="text-sm font-semibold text-red-600 mt-3 text-center">
                If the video opens instead of downloading, tap ⋮ then Download
              </p>
            </>
          )}

          {/* INSTAGRAM UI */}
          {result.platform === "instagram" && (
            <>
              <button
                onClick={() =>
                  downloadDirect(
                    getInstagramDownloadUrl(result),
                    result.igType === "post" && result.imageUrl
                      ? "photo.jpg"
                      : "video.mp4"
                  )
                }
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition"
              >
                {renderInstagramButtonLabel(result)}
              </button>

              <p className="text-xs text-gray-500 mt-2 text-center">
                Works for Instagram Stories, Reels, Posts, and Highlights.
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
    }
