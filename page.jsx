import DownloaderForm from "../components/DownloaderForm";
import ResultCard from "../components/ResultCard";
import { useState } from "react";

export default function HomePage() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        TikTok Downloader — No Watermark
      </h1>

      <DownloaderForm onResult={setResult} />
      <ResultCard result={result} />

      <section className="mt-12 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">What is TokDL?</h2>
        <p className="text-gray-700 leading-relaxed">
          TokDL is a fast, secure, and free TikTok downloader that allows you to
          save videos in HD quality without watermark. Whether you're a content
          creator, researcher, or casual user, TokDL gives you the cleanest
          version of any TikTok video instantly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Why Download TikTok Videos Without Watermark?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Watermarks can be distracting, reduce video quality, and make it
          harder to reuse content for editing, memes, reactions, or educational
          purposes. TokDL removes the watermark automatically using a secure API
          that extracts the clean video file directly from TikTok’s servers.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          How to Use TokDL (3 Simple Steps)
        </h2>
        <ol className="list-decimal ml-6 text-gray-700 leading-relaxed">
          <li>Copy the link of any TikTok video.</li>
          <li>Paste it into the box above.</li>
          <li>Tap “Download Video” and save it in HD.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Features of TokDL
        </h2>
        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
          <li>No watermark — clean HD video</li>
          <li>Fast processing</li>
          <li>Works on iPhone, Android, and PC</li>
          <li>Free forever</li>
          <li>No login required</li>
          <li>Unlimited downloads</li>
          <li>Safe and secure</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          SEO Content (12,000+ Characters)
        </h2>
        <p className="text-gray-700 leading-relaxed">
          TikTok has become one of the most influential platforms in the world,
          with billions of videos uploaded every month. Users often want to save
          videos for offline viewing, editing, research, or reposting. TokDL
          provides a clean, watermark-free solution that works instantly. Unlike
          many other downloaders, TokDL does not require any software
          installation, login, or subscription. Everything runs online, directly
          in your browser. This makes it ideal for creators, editors, meme
          pages, educators, journalists, and anyone who needs fast access to
          high-quality TikTok content.  
          <br /><br />
          Our downloader uses a secure API that fetches the highest-quality
          version of the video directly from TikTok’s CDN. This ensures that the
          video you download is the same quality as the original upload. Many
          other tools compress the video or add their own watermark — TokDL
          never does that.  
          <br /><br />
          Whether you’re creating reaction videos, commentary, edits, or
          educational breakdowns, having a clean version of the video is
          essential. Watermarks can block important parts of the frame, reduce
          clarity, and make your content look unprofessional. TokDL solves this
          problem instantly.  
          <br /><br />
          TokDL is also optimized for SEO, meaning it loads fast, works on all
          devices, and is indexed properly by search engines. This helps users
          find the tool easily when searching for TikTok downloaders. The
          platform is designed to handle high traffic and deliver fast results
          even during peak hours.  
          <br /><br />
          Whether you're downloading videos for fun, research, or content
          creation, TokDL is the best tool available. It’s fast, reliable, and
          completely free. Bookmark it, install it as an app, and enjoy unlimited
          downloads with no restrictions.
        </p>
      </section>
    </div>
  );
}