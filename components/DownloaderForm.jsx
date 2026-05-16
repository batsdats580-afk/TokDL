"use client";
import { useState } from "react";

export default function DownloaderForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!url.trim()) {
      setError("Please enter a valid link.");
      return;
    }

    setLoading(true);

    try {
      // Detect platform
      const endpoint = url.includes("instagram.com")
        ? "/api/reels"
        : "/api/download";

      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Server error. Try again.");
        setLoading(false);
        return;
      }

      setResult(data);
    } catch (err) {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-6 p-4 bg-white shadow rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Paste TikTok or Instagram Reel"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        {error && (
          <p className="text-red-600 text-sm font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "Download"}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          {result.thumbnail && (
            <img
              src={result.thumbnail}
              alt="Thumbnail"
              className="w-full rounded-lg mb-3"
            />
          )}

          <a
            href={result.video || result.nowm}
            className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            download
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}
