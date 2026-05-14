export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">TokDL</h1>

      <nav className="flex gap-4 text-sm">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/dmca">DMCA</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
