"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="w-full bg-white dark:bg-black shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 relative">

      {/* Logo */}
      <h1 className="text-xl font-extrabold text-blue-600 dark:text-white">
        TokDL
      </h1>

      {/* Desktop Navigation (hidden on mobile) */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
        <a className="hover:text-blue-600" href="/">Home</a>
        <a className="hover:text-purple-600" href="/about">About</a>
        <a className="hover:text-orange-600" href="/privacy">Privacy</a>
        <a className="hover:text-blue-600" href="/terms">Terms</a>
        <a className="hover:text-purple-600" href="/dmca">DMCA</a>
        <a className="hover:text-orange-600" href="/contact">Contact</a>
      </nav>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-105 transition"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Hamburger Menu (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-800 dark:text-white"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-3 w-40 bg-white dark:bg-gray-900 shadow-xl rounded-xl py-3 flex flex-col text-sm font-medium border border-gray-200 dark:border-gray-700 animate-slideDown">

          <a className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600" href="/">Home</a>
          <a className="px-4 py-2 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-500" href="/about">About</a>
          <a className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500" href="/privacy">Privacy</a>
          <a className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600" href="/terms">Terms</a>
          <a className="px-4 py-2 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-500" href="/dmca">DMCA</a>
          <a className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500" href="/contact">Contact</a>

        </div>
      )}
    </header>
  );
}
