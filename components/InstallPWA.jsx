"use client";

import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [prompt, setPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsStandalone(true);
    }

    const handler = (e) => {
      e.preventDefault();
      setPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  if (isStandalone) return null;

  const installApp = () => {
    if (!prompt) return;
    prompt.prompt();
  };

  return (
    <div className="w-full flex justify-center mt-4 mb-2">
      <button
        onClick={installApp}
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
        Install TokDL App
      </button>
    </div>
  );
}
