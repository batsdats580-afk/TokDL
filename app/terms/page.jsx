export default function TermsPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="text-gray-700 leading-relaxed">
        By using TokDL, you agree to use the downloaded content responsibly and
        in accordance with TikTok’s terms and copyright laws.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">User Responsibility</h2>
      <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
        <li>You must have permission to download or reuse any video.</li>
        <li>You may not use TokDL for illegal or abusive purposes.</li>
        <li>You are responsible for how you use downloaded content.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">No Affiliation</h2>
      <p className="text-gray-700 leading-relaxed">
        TokDL is not affiliated with TikTok, ByteDance, or any related company.
      </p>
    </div>
  );
}
