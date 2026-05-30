"use client";

import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [prompt, setPrompt] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPrompt(e);
      setShow(true);
    });
  }, []);

  const installApp = () => {
    if (!prompt) return;
    prompt.prompt();
    setShow(false);
  };

  if (!show) return null;

  return (
    <button
      onClick={installApp}
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
      Install TokDL App
    </button>
  );
}
