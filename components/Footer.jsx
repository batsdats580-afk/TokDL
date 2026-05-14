export default function Footer() {
  return (
    <footer className="w-full bg-white border-t py-6 text-center text-sm text-gray-600 mt-10">
      <p>© {new Date().getFullYear()} TokDL — All Rights Reserved.</p>
      <p className="mt-2">
        This site is not affiliated with TikTok. All trademarks belong to their respective owners.
      </p>
    </footer>
  );
}
