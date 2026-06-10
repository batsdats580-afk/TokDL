"use client";

import { useState, useRef, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

export default function Downloader() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  // Recent downloads
  const [recent, setRecent] = useState([]);
  const [showRecent, setShowRecent] = useState(false);

  const inputRef = useRef(null);

  // ⭐ Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ⭐ Auto-paste TikTok/Instagram link from clipboard
  useEffect(() => {
    navigator.clipboard.readText().then(text => {
      if (
        text.includes("tiktok.com") ||
        text.includes("instagram.com") ||
        text.includes("ig.me")
      ) {
        setUrl(text);
      }
    });
  }, []);

  // ⭐ Load recent downloads
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentDownloads") || "[]");
    setRecent(saved);
  }, []);

  // ⭐ Save recent downloads
  const addRecent = (item) => {
    const updated = [item, ...recent].slice(0, 10);
    setRecent(updated);
    localStorage.setItem("recentDownloads", JSON.stringify(updated));
  };

  // ⭐ Paste button
  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      setError("Unable to read clipboard");
    }
  };

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

  // ⭐ Native OS download trigger + Monetag ad
  const downloadDirect = (fileUrl, filename) => {
    if (!fileUrl) return;

    window.open("https://omg10.com/4/11083799", "_blank");

    const proxyUrl = `/api/download?url=${encodeURIComponent(
      fileUrl
    )}&title=${encodeURIComponent(filename || "media")}`;

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = proxyUrl;
    document.body.appendChild(iframe);

    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 5000);
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
      addRecent({
        thumbnail: data.thumbnail,
        username: data.username,
        url: data.videoUrl || data.imageUrl,
      });

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

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg z-50">
          {toast}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 bg-white dark:bg-black p-5 rounded-2xl shadow-lg neon-border">

        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Paste TikTok or Instagram link
        </label>

        {/* Input + Paste Button */}
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.tiktok.com/... or https://www.instagram.com/..."
            className="btn-purple" 
          />

          <button
            type="button"
            onClick={pasteFromClipboard}
            className="px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold active:scale-95 neon-border"
          >
            Paste
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-blue" 
        >
          {loading ? <LoadingAnimation /> : "Download"}
        </button>
      </form>

      {/* Recent Downloads */}
      <div className="mt-4">
        <button
          onClick={() => setShowRecent(!showRecent)}
          className="w-full py-2 text-center font-semibold text-gray-800 dark:text-white neon-border rounded-xl"
        >
          Recent Downloads {showRecent ? "▲" : "▼"}
        </button>

        {showRecent && recent.length > 0 && (
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {recent.map((item, i) => (
              <div
                key={i}
                className="min-w-[120px] bg-white dark:bg-gray-900 rounded-xl shadow-md neon-border p-2"
              >
                <img
                  src={item.thumbnail}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-gray-700 dark:text-gray-300">@{item.username}</p>
                <button
                  onClick={() => downloadDirect(item.url, "media")}
                  className="w-full mt-2 bg-green-600 text-white text-xs py-1 rounded-lg neon-border"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Result */}
      {error && (
        <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-4 p-4 bg-white dark:bg-black rounded-xl shadow-md neon-border">
          {result.thumbnail && (
            <img
              src={result.thumbnail}
              alt="thumbnail"
              className="w-full rounded-lg mb-3"
            />
          )}

          <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">@{result.username}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
            {result.caption}
          </p>

          {/* TikTok */}
          {result.platform === "tiktok" && (
            <>
              <button
                onClick={() => downloadDirect(result.videoUrl, "video.mp4")}
                disabled={isDownloading}
                className="result-btn"
              >
                {isDownloading ? <LoadingAnimation /> : "Save video to device"}
              </button>

              {result.audioUrl && (
                <button
                  onClick={() => downloadDirect(result.audioUrl, "audio.mp3")}
                  disabled={isDownloading}
                  className="result-btn mp3"
                >
                  {isDownloading ? <LoadingAnimation /> : "Download Audio (MP3)"}
                </button>
              )}
            </>
          )}

          {/* Instagram */}
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
                disabled={isDownloading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition disabled:opacity-60 neon-border"
              >
                {isDownloading ? <LoadingAnimation /> : renderInstagramButtonLabel(result)}
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                Works for Instagram Stories, Reels, Posts, and Highlights.
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
    }
