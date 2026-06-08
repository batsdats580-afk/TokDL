"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

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
    <header className="w-full bg-white dark:bg-black shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600 dark:text-white neon-text">
        TokDL
      </h1>

      {/* Navigation */}
      <nav className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/dmca">DMCA</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-2 rounded-full neon-border text-sm font-semibold text-gray-800 dark:text-white hover:scale-105 active:scale-95 transition"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}
