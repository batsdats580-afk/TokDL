export default function ResultCard({ result }) {
  if (!result) return null;

  if (result.error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded mt-6">
        {result.error}
      </div>
    );
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg mt-6">
      <img
        src={result.cover}
        alt="Thumbnail"
        className="w-full rounded mb-4"
      />

      <a
        href={result.nowm}
        download
        className="block bg-green-600 text-white text-center py-3 rounded font-semibold"
      >
        Download (No Watermark)
      </a>
    </div>
  );
}
