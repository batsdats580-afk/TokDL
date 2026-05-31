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
      platform: "tiktok",
    };
  };

  const fetchInstagram = async (link) => {
    const res = await fetch(
      `https://api.igdownloader.app/api/v1/instagram?url=${encodeURIComponent(
        link
      )}`
    );

    const data = await res.json();
    if (!data || !data.data || !data.data[0])
      throw new Error("Failed to fetch Instagram data");

    const item = data.data[0];

    return {
      thumbnail: item.thumbnail,
      username: item.username || "unknown",
      caption: item.title || "",
      videoUrl: item.url,
      platform: "instagram",
    };
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const downloadDirect = (fileUrl, platform) => {
    if (platform === "tiktok") {
      showToast("Tip: Tap ⋮ → Download if the video opens.");
    }

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "video.mp4";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
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

      if (platform === "tiktok") data = await fetchTikTok(url);
      if (platform === "instagram") data = await fetchInstagram(url);

      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
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
          Paste TikTok or Instagram Reel
        </label>

        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.tiktok.com/... or https://www.instagram.com/reel/..."
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Fetching video..." : "Download"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
          <img
            src={result.thumbnail}
            alt="thumbnail"
            className="w-full rounded-lg mb-3"
          />

          <p className="font-semibold text-sm">@{result.username}</p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {result.caption}
          </p>

          {/* GREEN BUTTON */}
          <button
            onClick={() => downloadDirect(result.videoUrl, result.platform)}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition"
          >
            Save video to device
          </button>

          {/* RED INSTRUCTION TEXT */}
          {result.platform === "tiktok" && (
            <p className="text-sm font-semibold text-red-600 mt-3 text-center">
              When the video opens, tap ⋮ then Download
            </p>
          )}
        </div>
      )}
    </section>
  );
}
