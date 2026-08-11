import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alexander Ferguson",
    template: "%s | Alexander Ferguson",
  },
  description: "Portfolio of Alexander Ferguson.",
};

/* The shell (header, sidebar, footer) lives in the root layout rather than
   in page.tsx so that navigating to /blog and /resume swaps only <main>,
   keeping the chrome mounted and the transition client-side. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a href="#main" className={styles.skipLink}>
          Skip to content
        </a>
        <div className={styles.shell}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          {/* tabIndex allows the skip link to move real focus here; without
              it some browsers scroll but leave focus stranded at the top. */}
          <main id="main" tabIndex={-1} className={styles.main}>
            {children}
          </main>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
