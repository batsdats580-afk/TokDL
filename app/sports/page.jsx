"use client";

export default function SportsLanding() {
  const smartLink = "https://omg10.com/4/11086794";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050814",
        color: "#fff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        paddingBottom: "60px",
      }}
    >
      {/* LIVE TICKER */}
      <div
        style={{
          background: "linear-gradient(90deg, #ff3b3b, #ff9f0a)",
          padding: "6px 14px",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <span>LIVE NOW</span>
        <span>World Cup • UFC • NBA • Football</span>
      </div>

      {/* HERO IMAGE */}
      <div
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <img
          src="/sports/worldcup.jpg"
          alt="World Cup"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />

        {/* STRONGER OVERLAY GRADIENT */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            background:
              "linear-gradient(to top, rgba(5,8,20,1), rgba(5,8,20,0.4), rgba(5,8,20,0))",
          }}
        />
      </div>

      {/* APP HEADER */}
      <div style={{ padding: "20px", marginTop: "-31px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="/sports/app-icon.png"
            alt="LiveSports Mobile"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
              objectFit: "cover",
            }}
          />

          <div>
            <h1 style={{ margin: 0, fontSize: "26px", fontWeight: 800 }}>
              LiveSports Mobile
            </h1>
            <p style={{ margin: "4px 0 0", opacity: 0.75, fontSize: "13px" }}>
              Watch Live Sports Free • HD Streaming • No Subscription
            </p>

            {/* RATING + DOWNLOADS */}
            <div
              style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "12px",
                opacity: 0.85,
              }}
            >
              <span>⭐ 4.8 • 2.1M+ downloads</span>
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: "999px",
                  background: "rgba(0,255,157,0.12)",
                  color: "#00ff9d",
                  fontWeight: 600,
                  fontSize: "11px",
                }}
              >
                VERIFIED APP
              </span>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <a
            href={smartLink}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "linear-gradient(135deg, #00ff9d, #00c2ff)",
              padding: "14px",
              borderRadius: "12px",
              textAlign: "center",
              color: "#050814",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            DOWNLOAD APP TO WATCH LIVE
          </a>

          <a
            href={smartLink}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "14px",
              borderRadius: "12px",
              textAlign: "center",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "15px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            START STREAMING IN HD
          </a>

          <div
            style={{
              fontSize: "11px",
              opacity: 0.6,
              textAlign: "center",
              marginTop: "4px",
            }}
          >
            No credit card • No subscription • Mobile friendly
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ padding: "0 20px 20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Why fans use LiveSports Mobile
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "13px",
          }}
        >
          <li>⚽ Live Football, World Cup, Champions League & more</li>
          <li>🥊 UFC, Boxing, MMA main cards in HD</li>
          <li>🏀 NBA, EuroLeague & top basketball leagues</li>
          <li>📺 Smooth streaming with low buffering</li>
          <li>📱 Works on any phone or tablet</li>
        </ul>
      </div>

      {/* SUPPORTED LEAGUES */}
      <div style={{ padding: "0 20px 20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Leagues & competitions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "8px",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: "8px 10px",
              borderRadius: "10px",
            }}
          >
            ⚽ World Cup
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: "8px 10px",
              borderRadius: "10px",
            }}
          >
            ⚽ Champions League
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: "8px 10px",
              borderRadius: "10px",
            }}
          >
            🏀 NBA
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: "8px 10px",
              borderRadius: "10px",
            }}
          >
            🥊 UFC & Boxing
          </div>
        </div>
      </div>

      {/* APP PREVIEW */}
      <div style={{ padding: "0 20px 20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>App preview</h2>

        <div style={{ display: "flex", overflowX: "auto", gap: "12px" }}>
          <img
            src="/sports/screenshot1.jpg"
            alt="LiveSports Mobile screenshot 1"
            style={{
              width: "240px",
              height: "auto",
              borderRadius: "14px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              flexShrink: 0,
            }}
          />
          <img
            src="/sports/screenshot2.jpg"
            alt="LiveSports Mobile screenshot 2"
            style={{
              width: "240px",
              height: "auto",
              borderRadius: "14px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              flexShrink: 0,
            }}
          />
          <img
            src="/sports/screenshot3.jpg"
            alt="LiveSports Mobile screenshot 3"
            style={{
              width: "240px",
              height: "auto",
              borderRadius: "14px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              flexShrink: 0,
            }}
          />
        </div>

        <p
          style={{
            marginTop: "8px",
            fontSize: "11px",
            opacity: 0.6,
          }}
        >
          Screenshots are for illustration only. Install the app to start
          streaming live matches.
        </p>
      </div>

      {/* LIVE MATCHES */}
      <div style={{ padding: "0 20px 20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Live now</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            fontSize: "13px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "12px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src="/sports/player1.jpg"
              alt="Match 1"
              style={{
                width: "80px",
                height: "60px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <div>
              <p style={{ margin: 0, fontWeight: 600 }}>Argentina vs Brazil</p>
              <p style={{ margin: 0, opacity: 0.7, fontSize: "12px" }}>
                LIVE • World Cup Qualifier
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "11px",
                  color: "#00ff9d",
                }}
              >
                Tap → Download app to watch
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "12px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src="/sports/player2.jpg"
              alt="Match 2"
              style={{
                width: "80px",
                height: "60px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <div>
              <p style={{ margin: 0, fontWeight: 600 }}>UFC Fight Night</p>
              <p style={{ margin: 0, opacity: 0.7, fontSize: "12px" }}>
                LIVE • Main Card
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "11px",
                  color: "#00ff9d",
                }}
              >
                Tap → Start streaming in HD
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CHANNELS */}
      <div style={{ padding: "0 20px 20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Live sports channels
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "12px",
            opacity: 0.85,
          }}
        >
          <li>• Football & World Cup channels</li>
          <li>• Fight sports & UFC coverage</li>
          <li>• Basketball & NBA streams</li>
          <li>• More live sports added regularly</li>
        </ul>
      </div>

      {/* REVIEWS */}
      <div style={{ padding: "0 20px 20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>What fans say</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600 }}>⭐️⭐️⭐️⭐️⭐️</p>
            <p style={{ margin: "4px 0 0" }}>
              “Best app to catch live matches on my phone. Streams are smooth
              and fast.”
            </p>
            <p
              style={{
                margin: "4px 0 0",
                opacity: 0.6,
                fontSize: "11px",
              }}
            >
              — Daniel, football fan
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600 }}>⭐️⭐️⭐️⭐️⭐️</p>
            <p style={{ margin: "4px 0 0" }}>
              “I use it for UFC and boxing cards. Super easy to start
              streaming.”
            </p>
            <p
              style={{
                margin: "4px 0 0",
                opacity: 0.6,
                fontSize: "11px",
              }}
            >
              — Malik, fight fan
            </p>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{ padding: "0 20px 30px", marginTop: "10px" }}>
        <a
          href={smartLink}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "linear-gradient(135deg, #00ff9d, #00c2ff)",
            padding: "16px",
            borderRadius: "14px",
            textAlign: "center",
            color: "#050814",
            fontWeight: 800,
            textDecoration: "none",
            fontSize: "16px",
            display: "block",
          }}
        >
          DOWNLOAD LIVESP0RTS MOBILE & START STREAMING
        </a>
        <p
          style={{
            marginTop: "8px",
            fontSize: "11px",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Tap the button above to continue to the official download and start
          watching live sports.
        </p>
      </div>
    </main>
  );
            }
