export default function MichaelMoviePage() {
  const firstAdLink = "https://omg10.com/4/11083799"; // FIRST SMARTLINK

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
          maxWidth: "900px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.1fr 1.4fr",
          gap: "24px",
          borderRadius: "18px",
          background:
            "radial-gradient(circle at top, #1b2340 0, #050814 55%, #02030a 100%)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
          padding: "24px",
        }}
      >
        {/* Poster */}
        <div
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
          }}
        >
          <img
            src="/posters/michael.jpg" // <- put your real poster here
            alt="Michael Movie Poster"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              padding: "6px 10px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.75)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            HD • 1080p • Streaming
          </div>
        </div>

        {/* Info + Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "26px",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            Michael (2024)
          </h1>

          <div
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "13px",
              opacity: 0.9,
            }}
          >
            <span>⭐ 8.7/10 IMDb</span>
            <span>•</span>
            <span>Action / Thriller</span>
            <span>•</span>
            <span>2h 04m</span>
          </div>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              opacity: 0.85,
              marginTop: "6px",
            }}
          >
            Michael follows a mysterious man drawn into a dangerous web of crime,
            loyalty and revenge. As his past collides with the present, every
            decision pulls him deeper into a world where trust is a luxury and
            survival is never guaranteed.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              fontSize: "12px",
              opacity: 0.85,
              marginTop: "4px",
            }}
          >
            <span>Year: 2024</span>
            <span>•</span>
            <span>Language: English</span>
            <span>•</span>
            <span>Quality: HD 1080p</span>
          </div>

          {/* Fake player hint */}
          <div
            style={{
              marginTop: "12px",
              padding: "10px 12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.04)",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "#2ecc71",
                boxShadow: "0 0 8px rgba(46,204,113,0.8)",
              }}
            />
            <span>Stream is ready. Tap below to start watching in HD.</span>
          </div>

          {/* WATCH FULL MOVIE BUTTON */}
          <a
            href={firstAdLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "16px",
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
            ▶ WATCH FULL MOVIE (HD)
          </a>

          <p
            style={{
              fontSize: "11px",
              opacity: 0.6,
              marginTop: "8px",
            }}
          >
            If the stream does not start automatically, your browser may block
            the player. You can try again or switch to another browser.
          </p>
        </div>
      </div>
    </main>
  );
              }
