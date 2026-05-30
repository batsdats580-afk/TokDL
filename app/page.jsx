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
            TikTok & Instagram Reels Downloader (No Watermark, HD, Free)
          </h1>
          <p className="text-gray-700">
            Paste any TikTok or Instagram Reel link and download the video in HD
            without watermark, with sound, directly to your device.
          </p>
        </header>

        <Downloader />
      </section>

      {/* Long-form SEO content */}
      <section className="max-w-4xl mx-auto px-4 pb-16 text-gray-800 space-y-6">
        <h2 className="text-2xl font-bold mt-10">
          Free TikTok & Instagram Reels Downloader – No Watermark, HD, With Sound
        </h2>
        <p>
          This website is a simple, fast, and free TikTok and Instagram Reels
          downloader designed for creators, editors, and everyday users who want
          to save their favorite short-form videos in the highest possible
          quality. You can paste a TikTok video link or an Instagram Reel link
          into the single input box at the top of this page, and our system will
          automatically detect the platform, fetch the direct video file, and
          give you a clean download link without watermark and with full sound.
          There is no need to install any app, no need to log in, and no need to
          create an account. Everything works directly in your browser on mobile,
          tablet, or desktop.
        </p>

        <p>
          Many people want to download TikTok videos or Instagram Reels to reuse
          them in edits, save them for offline viewing, or keep a personal
          archive of their favorite content. However, the official apps do not
          make this easy. TikTok adds a watermark, and Instagram does not allow
          direct downloads at all. This tool solves that problem by giving you a
          clean, no-watermark MP4 file with full audio.
        </p>

        <p>
          <strong>Is this downloader free?</strong> Yes. This tool is completely
          free to use. TikTok and Instagram Reels will remain free.
        </p>

        <p>
          <strong>Do I need to create an account?</strong> No. You do not need to
          register, log in, or provide any personal information to use the
          downloader. You simply paste a link and click download.
        </p>

        <p>
          <strong>Does this site store my downloaded videos?</strong> No. The
          site does not store or archive the videos you download. Each download
          is a direct connection between your device and the content source.
        </p>

        <p>
          <strong>Can I use the videos I download for anything I want?</strong>{" "}
          You are responsible for how you use the content. This tool is intended
          for personal use, backups, and legitimate creative workflows. Always
          respect the rights of creators and the terms of service of the
          platforms you download from.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          A focused tool for modern short-form video
        </h2>

        <p>
          Short-form video has become one of the dominant formats on the
          internet. TikTok and Instagram Reels are at the center of this shift,
          enabling fast, creative, and highly shareable content. At the same
          time, creators and viewers often need more control over how they save,
          reuse, and manage these videos. A clean, focused downloader that
          supports both TikTok and Reels in one place solves a very real problem:
          it gives users a simple way to keep the content they care about in a
          format they can actually use.
        </p>

        <p>
          This site is built around that idea. It does not try to be a social
          network, a streaming platform, or a complex editing suite. Instead, it
          focuses on doing one job extremely well: turning a TikTok or Instagram
          Reel link into a high-quality, no-watermark, audio-included MP4 file
          that you can download directly to your device. The interface is kept
          intentionally minimal so that anyone can understand it at a glance,
          whether they are a casual viewer or a professional editor.
        </p>

        <p>
          As the short-form ecosystem evolves, this downloader can grow with it.
          Additional platforms, formats, and features can be added over time, but
          the core promise will remain the same: fast, reliable, no-watermark
          downloads that respect the user’s time and device. For now, the
          combination of TikTok and Instagram Reels covers a huge portion of the
          content people want to save, and this site is optimized specifically
          for that use case.
        </p>
      </section>
    </main>
  );
}
                  
