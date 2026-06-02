"use client";

import { useEffect } from "react";

export default function RedirectPage({ searchParams }) {
  const file = searchParams.file;

  useEffect(() => {
    if (!file) return;

    // ⭐ Step 2: After video loads, open the ad
    setTimeout(() => {
      const popup = window.open("https://omg10.com/4/11083799", "_blank");

      // Backup trigger
      setTimeout(() => {
        if (!popup || popup.closed) {
          window.open("https://omg10.com/4/11083799", "_blank");
        }
      }, 300);
    }, 800); // delay ensures CDN loads first
  }, [file]);

  return (
    <div style={{ padding: 20, fontSize: 18 }}>
      Redirecting…
    </div>
  );
}
