export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      {result.cover && (
        <img
          src={result.cover}
          alt="Thumbnail"
          className="w-full rounded mb-4"
        />
      )}

      <h2 className="text-xl font-bold mb-2">{result.title}</h2>

      <a
        href={result.nowm}
        download
        className="inline-block px-4 py-2 bg-green-600 text-white rounded"
      >
        Download Video (No Watermark)
      </a>
    </div>
  );
}
