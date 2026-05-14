export default function DMCA() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">DMCA Policy</h1>

      <p className="text-gray-700 leading-relaxed">
        TokDL does not host or store any videos. All content is fetched directly
        from TikTok’s public CDN. If you believe your copyrighted content is
        being misused, you may contact us for removal assistance.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">Submit a DMCA Request</h2>
      <p className="text-gray-700 leading-relaxed">
        Email us with the following:
      </p>

      <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
        <li>Your name</li>
        <li>Link to the original TikTok video</li>
        <li>Link to the infringing content</li>
        <li>Proof of ownership</li>
      </ul>
    </div>
  );
}
