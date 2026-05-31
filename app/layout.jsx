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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>

      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <Header />

        <main className="flex-1 flex justify-center px-4">
          <div className="w-full max-w-3xl py-10">{children}</div>
        </main>

        <Footer />

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
