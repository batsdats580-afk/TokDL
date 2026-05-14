"use client";

import { useState } from "react";

export default function DownloaderForm({ onResult }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const download = async () => {
    if (!url.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/tiktok?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      onResult(data);
    } catch (err) {
      onResult({ error: "Failed to fetch video." });
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <input
        type="text"
        placeholder="Paste TikTok link here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      <button
        onClick={download}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded font-semibold"
      >
        {loading ? "Processing..." : "Download Video"}
      </button>
    </div>
  );
}
