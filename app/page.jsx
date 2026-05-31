"use client";

import InstallPWA from "@/components/InstallPWA";
import Downloader from "@/components/Downloader";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-3xl mx-auto px-4 py-10">

        <InstallPWA />

        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            TikTok & Instagram Downloader – Reels, Stories, Posts, Highlights, MP3 (No Watermark)
          </h1>
          <p className="text-gray-700">
            Download TikTok videos, Instagram Reels, Stories, Posts, and Highlights in HD without watermark.
            Extract MP3 audio from TikTok instantly. 100% free, no login required.
          </p>
        </header>

        <Downloader />
      </section>

      {/* Long-form SEO content */}
      <section className="max-w-4xl mx-auto px-4 pb-16 text-gray-800 space-y-6">

        <h2 className="text-2xl font-bold mt-10">
          Free TikTok & Instagram Downloader – Reels, Stories, Posts, Highlights, MP3
        </h2>
        <p>
          This tool allows you to download TikTok videos and Instagram content in the highest quality.
          Whether you're saving Reels, Stories, Posts, or Highlights, everything is processed instantly
          with no watermark and no login required. You can also extract MP3 audio from TikTok videos
          for edits, remixes, or background music.
        </p>

        <p>
          Simply paste any TikTok or Instagram link into the box above. Our system automatically detects
          the platform and content type — Reel, Story, Post, or Highlight — and gives you the correct
          download options. Choose between HD video (MP4), photo (JPG), or audio-only (MP3).
        </p>

        <h3 className="text-xl font-semibold mt-6">
          Why use our TikTok & Instagram Downloader?
        </h3>
        <p>
          Unlike the official apps, TikTok adds a watermark and Instagram does not allow direct downloads.
          Our downloader solves this by giving you clean, watermark-free files with full audio. Everything
          works directly in your browser — no app installation, no login, and no account needed.
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

        <h3 className="text-xl font-semibold mt-6">
          TikTok to MP3 Converter – Extract Audio Instantly
        </h3>
        <p>
          Many creators only need the sound from a TikTok video — for edits, remixes, CapCut templates,
          or background audio. Our built-in MP3 converter lets you extract the audio from any TikTok link
          instantly. Just paste the link and choose “Download Audio (MP3).”
        </p>

        <h3 className="text-xl font-semibold mt-6">
          Instagram Story, Reel, Post & Highlight Downloader
        </h3>
        <p>
          Instagram content comes in many formats — Stories, Reels, Posts, and Highlights. This tool
          supports all of them. Whether it's a photo Story, a video Reel, a carousel Post, or a Highlight
          from a creator, you can download it instantly in the best available quality.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          Is this downloader free?
        </h3>
        <p>
          Yes. This tool is completely free to use and will remain free. You can download unlimited TikTok
          videos, Instagram content, and MP3 audio files without restrictions.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          Do we store your videos?
        </h3>
        <p>
          No. We do not store or archive any videos. Every download is a direct connection between your
          device and the content source. Your privacy is fully protected.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          A modern tool for creators and editors
        </h3>
        <p>
          Short-form video dominates the internet, and creators need fast, reliable tools to save, reuse,
          and manage content. This downloader is built specifically for that purpose — simple, fast, and
          optimized for TikTok and Instagram. As the ecosystem evolves, more features will be added,
          including YouTube thumbnail downloading, video trimming, audio editing, and more.
        </p>

        <p>
          Whether you're saving videos for offline viewing, collecting clips for edits, or extracting audio
          for creative projects, this tool gives you everything you need in one place.
        </p>

      </section>
    </main>
  );
}
