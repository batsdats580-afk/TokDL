"use client";

import InstallPWA from "@/components/InstallPWA";
import Downloader from "@/components/Downloader";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] dark:bg-black transition">

      <section className="max-w-3xl mx-auto px-4 py-10">

        <InstallPWA />

        {/* HERO SECTION */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-blue-600 dark:text-white">
            TikTok & Instagram Downloader
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
            No Watermark • HD Video • MP3 Audio
          </p>

          {/* HOW TO USE */}
          <div className="card mt-6 max-w-md mx-auto text-left">
            <h2 className="section-title">How to Use</h2>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>🔵 Paste your TikTok or Instagram link</li>
              <li>🟣 Tap <strong>Download → Save to device</strong></li>
              <li>🟧 When video opens, tap <strong>Back</strong> or <strong>❌</strong></li>
              <li>🔵 Tap <strong>“Download again”</strong> if shown</li>
            </ul>
          </div>
        </header>

        {/* DOWNLOADER */}
        <Downloader />
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-4 pb-16 text-gray-800 dark:text-gray-300 space-y-6">

        <h2 className="text-2xl font-bold mt-10 dark:text-white">
          TAP Save Video after fetching  
          Then click "Download again" if displayed
        </h2>

        <p>
          IMPORTANT NOTICE: the video is first cleaned and downloaded on our side
          before serving it. This is the reason for the “Download again” message.
          This tool allows you to download TikTok videos in the highest quality.
          Whether you're saving Reels, Stories, Posts, or Highlights, everything
          is processed instantly with no watermark and no login required.
        </p>

        <p>
          Simply paste any TikTok link into the box above. Our system automatically
          detects the platform and content type — Reel, Story, Post, or Highlight —
          and gives you the correct download options.
        </p>

        <h3 className="text-xl font-semibold mt-6 dark:text-white">
          Why use our TikTok Downloader?
        </h3>

        <p>
          Unlike the official apps, TikTok adds a watermark and Instagram does not
          allow direct downloads. Our downloader solves this by giving you clean,
          watermark-free files with full audio. Everything works directly in your
          browser — no app installation, no login, and no account needed.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Download TikTok videos without watermark</li>
          <li>Download Instagram Reels in HD</li>
          <li>Download Instagram Stories (photo or video)</li>
          <li>Download Instagram Posts (photo or video)</li>
          <li>Download Instagram Highlights</li>
          <li>Extract MP3 audio from TikTok videos</li>
          <li>Fast downloads with no limits</li>
          <li>Works on mobile, tablet, and desktop</li>
          <li>No login, no app, no account required</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 dark:text-white">
          TikTok to MP3 Converter – Extract Audio Instantly
        </h3>

        <p>
          Many creators only need the sound from a TikTok video — for edits,
          remixes, CapCut templates, or background audio. Our built-in MP3
          converter lets you extract the audio instantly.
        </p>

        <h3 className="text-xl font-semibold mt-6 dark:text-white">
          Instagram Story, Reel, Post & Highlight Downloader
        </h3>

        <p>
          Instagram content comes in many formats — Stories, Reels, Posts, and
          Highlights. This tool supports all of them.
        </p>

        <h3 className="text-xl font-semibold mt-6 dark:text-white">
          Is this downloader free?
        </h3>

        <p>
          Yes. This tool is completely free to use and will remain free.
        </p>

        <h3 className="text-xl font-semibold mt-6 dark:text-white">
          Do we store your videos?
        </h3>

        <p>
          No. We do not store or archive any videos. Every download is a direct
          connection between your device and the content source.
        </p>

        <h3 className="text-xl font-semibold mt-6 dark:text-white">
          A modern tool for creators and editors
        </h3>

        <p>
          Short-form video dominates the internet, and creators need fast,
          reliable tools to save, reuse, and manage content. This downloader is
          built specifically for that purpose.
        </p>

      </section>
    </main>
  );
}
