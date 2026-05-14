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
    <div className="bg-blue-600 text-white text-center py-3 px-4">
      <button
        onClick={installApp}
        className="font-semibold underline"
      >
        Install TokDL App
      </button>
    </div>
  );
}
