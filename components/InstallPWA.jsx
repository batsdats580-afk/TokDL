"use client";

import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [prompt, setPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect if app is running as standalone (installed)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsStandalone(true);
    }

    // Detect installation event
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
    });

    // Detect install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPrompt(e);
    });

    // Detect if already installed (browser remembers)
    if (window.navigator.standalone === true) {
      setIsStandalone(true);
    }
  }, []);

  // If inside the installed app → show nothing
  if (isStandalone) return null;

  const installApp = () => {
    if (prompt) {
      prompt.prompt();
    } else {
      alert("If nothing happens, your browser is blocking the install prompt.");
    }
  };

  const openApp = () => {
    window.location.href = "/";
  };

  return (
    <button
      onClick={isInstalled ? openApp : installApp}
      className="
        fixed top-4 right-4
        bg-gradient-to-r from-[#ff0050] to-[#00f2ea]
        text-white font-bold
        px-6 py-3
        rounded-full shadow-2xl
        text-lg
        animate-pulse
        hover:opacity-90
        transition-all
        z-50
      "
    >
      {isInstalled ? "Open TokDL App" : "Install TokDL App"}
    </button>
  );
}
