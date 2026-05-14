export default function PrivacyPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-gray-700 leading-relaxed">
        TokDL respects your privacy. We do not collect, store, or share any
        personal information. We do not track users, require accounts, or store
        downloaded videos.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">Information We Do Not Collect</h2>
      <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
        <li>No personal data</li>
        <li>No login information</li>
        <li>No browsing history</li>
        <li>No video content</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">Third-Party Services</h2>
      <p className="text-gray-700 leading-relaxed">
        TikTok videos are fetched directly from TikTok’s public CDN. TokDL does
        not modify or store these files.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">Cookies</h2>
      <p className="text-gray-700 leading-relaxed">
        TokDL does not use cookies or tracking technologies.
      </p>
    </div>
  );
}
