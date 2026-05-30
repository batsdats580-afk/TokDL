          "use client";

import { useState } from "react";

export default function Downloader() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      videoUrl: data.data.play,
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
    };
  };

  // ⭐ FINAL REAL FORCED DOWNLOAD — FASTEST + MOBILE SAFE
  const forceDownload = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl, {
        mode: "cors",
        cache: "no-store",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/octet-stream",
        },
      });

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "video.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      alert("Download failed. Try again.");
    }
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
    <section className="max-w-xl mx-auto mt-6">
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

          <button
            onClick={() => forceDownload(result.videoUrl)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Download Video
          </button>
        </div>
      )}
    </section>
  );
}
