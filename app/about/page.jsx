export default function AboutPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">About TokDL</h1>
      <p className="text-gray-700 leading-relaxed">
        TokDL is a fast, secure, and free TikTok downloader designed to help
        users save videos in HD quality without watermark. Our mission is to
        provide a clean, simple, and powerful tool that works instantly on any
        device — iPhone, Android, or PC.
      </p>

      <p className="text-gray-700 leading-relaxed mt-4">
        We do not store videos, track users, or require any login. All video
        processing happens directly through TikTok’s public CDN, ensuring
        privacy and safety.
      </p>

      <p className="text-gray-700 leading-relaxed mt-4">
        TokDL is built for creators, editors, educators, and anyone who needs
        watermark-free TikTok content for personal or professional use.
      </p>
    </div>
  );
}
