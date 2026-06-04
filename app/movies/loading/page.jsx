"use client";
import { useEffect, useState } from "react";

export default function LoadingPage() {
  const secondAdLink = "https://omg10.com/4/11083789"; // SECOND SMARTLINK

  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let p = 0;

    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 15) + 5; // random smooth loading
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 600); // delay before showing button
      }
      setProgress(p);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050814",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background:
            "radial-gradient(circle at top, #1b2340 0, #050814 55%, #02030a 100%)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
          borderRadius: "18px",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginBottom: "10px",
            letterSpacing: "0.04em",
          }}
        >
          Preparing HD Stream…
        </h2>

        <p style={{ opacity: 0.7, fontSize: "13px", marginBottom: "20px" }}>
          Please wait while we optimize your video playback.
        </p>

        {/* PROGRESS BAR */}
        <div
          style={{
            width: "100%",
            height: "12px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "999px",
            overflow: "hidden",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "linear-gradient(90deg, #ff4b5c, #ff7b3b, #ffd86b)",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        <p style={{ fontSize: "12px", opacity: 0.6, marginBottom: "20px" }}>
          Loading… {progress}%
        </p>

        {/* BUTTON APPEARS AFTER LOADING */}
        {showButton ? (
          <a
            href={secondAdLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 22px",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, #4bffb8 0%, #3bdfff 50%, #6b9dff 100%)",
              color: "#050814",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ▶ Tap to Start Watching
          </a>
        ) : (
          <p style={{ fontSize: "12px", opacity: 0.5 }}>
            Optimizing video stream…
          </p>
        )}
      </div>
    </main>
  );
                }
