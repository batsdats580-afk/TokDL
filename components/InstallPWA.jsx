"use client";

import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [prompt, setPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detect if already installed
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
    });

    // Detect standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Capture install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPrompt(e);
    });
  }, []);

  const installApp = () => {
    if (prompt) {
      prompt.prompt();
    } else {
      alert("If nothing happens, your browser is blocking the prompt. Try again.");
    }
  };

  const openApp = () => {
    window.location.href = "/";
  };

  return (
    <button
      onClick={isInstalled ? openApp : installApp}
      className="
        fixed bottom-6 right-6
        bg-gradient-to-r from-[#ff0050] to-[#00f2ea]
        text-white font-bold
        px-7 py-4
        rounded-full shadow-2xl
        text-xl
        animate-pulse
        hover:opacity-90
        transition-all
      "
    >
      {isInstalled ? "Open TokDL App" : "Install TokDL App"}
    </button>
  );
}
