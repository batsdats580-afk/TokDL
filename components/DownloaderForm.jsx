"use client";
import { useState } from "react";

export default function DownloaderForm({ onResult }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`/api/download?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      onResult(data);
    } catch {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleDownload} className="space-y-4">
      <input
        type="text"
        placeholder="Paste TikTok or Instagram Reel link..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-3 border rounded"
      />

      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded"
      >
        {loading ? "Processing..." : "Download"}
      </button>
    </form>
  );
}
