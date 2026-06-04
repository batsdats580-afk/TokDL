"use client";

export default function ErrorPage() {
  const thirdAdLink = "https://omg10.com/4/11086794"; // THIRD SMARTLINK

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
          padding: "28px",
          textAlign: "center",
        }}
      >
        {/* Warning Icon */}
        <div
          style={{
            fontSize: "42px",
            marginBottom: "12px",
            color: "#ff6b6b",
          }}
        >
          ⚠️
        </div>

        <h2
          style={{
            fontSize: "20px",
            marginBottom: "10px",
            letterSpacing: "0.04em",
          }}
        >
          Stream Blocked by Browser
        </h2>

        <p
          style={{
            opacity: 0.75,
            fontSize: "13px",
            lineHeight: 1.5,
            marginBottom: "18px",
          }}
        >
          The movie loaded successfully, but your browser blocked the video
          stream.  
          This is a common issue on mobile browsers and usually fixes itself
          after retrying.
        </p>

        <p
          style={{
            opacity: 0.55,
            fontSize: "12px",
            marginBottom: "22px",
          }}
        >
          Tap Retry to re‑initialize the HD stream.
        </p>

        {/* RETRY BUTTON */}
        <a
          href={thirdAdLink}
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
              "linear-gradient(135deg, #ff4b5c 0%, #ff7b3b 50%, #ffd86b 100%)",
            color: "#050814",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
            boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          🔄 Retry Streaming
        </a>

        <p
          style={{
            fontSize: "11px",
            opacity: 0.45,
            marginTop: "14px",
          }}
        >
          If the issue continues, try switching to another browser.
        </p>
      </div>
    </main>
  );
}
