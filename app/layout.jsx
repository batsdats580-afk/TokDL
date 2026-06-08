import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "TokDL - TikTok Downloader (No Watermark)",
  description:
    "TokDL is a fast, free TikTok downloader that lets you save videos without watermark in HD quality."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://quge5.com/88/tag.min.js" data-zone="247658" async data-cfasync="false"></script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
<script>(function(s){s.dataset.zone='11120208',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
        
        {/* ⭐ Adsterra Popunder Script */}
        <script src="https://pl29603713.effectivecpmnetwork.com/6d/d6/ba/6dd6ba5493682d87d257268189048b54.js"></script>
      </head>

      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <Header />

        {/* ⭐ Banner 728x90 (Visible Ad) */}
        <div className="flex justify-center my-4">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : 'f7405c607167f1d8fcacc8f89106bf98',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              `,
            }}
          />
          <script src="https://www.highperformanceformat.com/f7405c607167f1d8fcacc8f89106bf98/invoke.js"></script>
        </div>

        <main className="flex-1 flex justify-center px-4">
          <div className="w-full max-w-3xl py-10">{children}</div>
        </main>

        <Footer />

        {/* Service Worker */}
        <script>
          {`
            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.register("/service-worker.js")
                .then(() => console.log("SW registered"))
                .catch(err => console.log("SW registration failed", err));
            }
          `}
        </script>
      </body>
    </html>
  );
}
