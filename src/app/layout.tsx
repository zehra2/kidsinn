import type { Metadata } from "next";
import "./globals.css";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  metadataBase: new URL("https://bestkidbooks.online"),
  title: {
    default: "BEST KidSbooks Shop — picture books, parent tools & courses",
    template: "%s · BEST KidSbooks Shop",
  },
  description:
    "Picture books chosen for read-aloud time, free parent calculators backed by AAP guidance and the million-word gap research, and short courses that help parents raise readers.",
  keywords: [
    "best kids books",
    "kids books shop",
    "picture books for kids",
    "screen time calculator",
    "read aloud goals",
    "parent reading courses",
  ],
  openGraph: {
    type: "website",
    siteName: "BEST KidSbooks Shop",
    title: "BEST KidSbooks Shop — turn screen time into story time",
    description:
      "Books, free parent calculators and short courses for families raising readers.",
    images: [
      {
        url: "/images/logo.png",
        width: 635,
        height: 224,
        alt: "BEST KidSbooks Shop",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Newsreader:ital,wght@0,400;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {ADSENSE_CLIENT ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body>{children}</body>
    </html>
  );
}
