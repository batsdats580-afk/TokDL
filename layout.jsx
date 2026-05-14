import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InstallPWA from "../components/InstallPWA";

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
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <Header />
        <InstallPWA />
        <main className="flex-1 flex justify-center px-4">
          <div className="w-full max-w-3xl py-10">{children}</div>
        </main>
        <Footer />

        <script>
          {`
            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.register("/service-worker.js");
            }
          `}
        </script>
      </body>
    </html>
  );
}