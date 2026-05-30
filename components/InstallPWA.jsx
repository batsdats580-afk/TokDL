"use client";

import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [prompt, setPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect standalone mode (inside the app)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsStandalone(true);
    }

    // Detect installation event
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
    });

    // Capture install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPrompt(e);
    });
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
    <div className="w-full flex justify-center mt-4 mb-2">
      <button
        onClick={isInstalled ? openApp : installApp}
        className="
          bg-gradient-to-r from-[#ff0050] to-[#00f2ea]
          text-white font-bold
          px-6 py-3
          rounded-full shadow-xl
          text-lg
          animate-pulse
          hover:opacity-90
          transition-all
        "
      >
        {isInstalled ? "Open TokDL App" : "Install TokDL App"}
      </button>
    </div>
  );
}
