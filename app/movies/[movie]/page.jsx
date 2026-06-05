"use client";

import { moviesData } from "../moviesData";

export default function DynamicMoviePage({ params }) {
  const firstAdLink = "https://omg10.com/4/11083799"; // FIRST SMARTLINK
  const movieKey = params.movie;
  const movie = moviesData[movieKey];

  if (!movie) {
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
        <p style={{ opacity: 0.8 }}>Movie not found.</p>
      </main>
    );
  }

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
          maxWidth: "900px",
          background:
            "radial-gradient(circle at top, #1b2340 0, #050814 55%, #02030a 100%)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
          borderRadius: "18px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* POSTER */}
        <div
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
          }}
        >
          <img
            src={movie.poster}
            alt={`${movie.title} Poster`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* INFO SECTION */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <h1
            style={{
              fontSize: "26px",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            {movie.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "13px",
              opacity: 0.9,
              flexWrap: "wrap",
            }}
          >
            <span>⭐ {movie.rating}</span>
            <span>•</span>
            <span>{movie.genre}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              opacity: 0.85,
              marginTop: "6px",
            }}
          >
            {movie.description}
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
            <span>Year: {movie.year}</span>
            <span>•</span>
            <span>Language: {movie.language}</span>
            <span>•</span>
            <span>Quality: {movie.quality}</span>
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
