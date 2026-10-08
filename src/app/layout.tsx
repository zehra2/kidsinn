import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  metadataBase: new URL("https://bestkidbooks.online"),
  title: {
    default: "BEST KidSbooks Shop — Picture Books, Free Phonics Printables & Reading Journals",
    template: "%s · BEST KidSbooks Shop",
  },
  description:
    "Evidence-based children's books, free multi-sensory phonics printables, keepsake bedtime reading journals, and AAP-backed screen time calculators.",
  keywords: [
    "best kids books",
    "kids books shop",
    "free phonics printables",
    "cvc sound box mats",
    "elkonin sound boxes printable",
    "silent e magic wand activity",
    "bedtime reading journals",
    "children picture books",
    "dialogic reading questions",
    "screen time calculator for kids",
    "aap screen time guidance",
    "30 day reading habit tracker",
    "early literacy activities",
    "family reading routines",
  ],
  authors: [{ name: "BEST KidSbooks Shop", url: "https://bestkidbooks.online" }],
  creator: "BEST KidSbooks Shop",
  publisher: "BEST KidSbooks Shop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://bestkidbooks.online",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online",
    siteName: "BEST KidSbooks Shop",
    title: "BEST KidSbooks Shop — Turn Screen Time into Story Time",
    description:
      "Curated picture books, free Elkonin phonics mats, keepsake bedtime journals, and parent screen-time calculators. 100% free offline learning tools.",
    images: [
      {
        url: "/images/logo.png",
        width: 635,
        height: 224,
        alt: "BEST KidSbooks Shop Logo and Reading Bear Mascot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEST KidSbooks Shop — Picture Books, Phonics Printables & Journals",
    description:
      "Transform bedtime reading into joyful connection. Free multi-sensory phonics mats, reading trackers, and picture book discussion guides.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "kW1WtRuJ_0gHA1zdc4DcVAsKT-zt8pLq4pPPM8_e8zE",
    other: {
      "p:domain_verify": "b4f5f275f3e01eb43ca997d1a562651d",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="kW1WtRuJ_0gHA1zdc4DcVAsKT-zt8pLq4pPPM8_e8zE"
        />
        <meta
          name="p:domain_verify"
          content="b4f5f275f3e01eb43ca997d1a562651d"
        />
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
        {/* Structured Data: Organization & WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bestkidbooks.online/#organization",
                  "name": "BEST KidSbooks Shop",
                  "url": "https://bestkidbooks.online",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://bestkidbooks.online/images/logo.png",
                    "caption": "BEST KidSbooks Shop Reading Bear"
                  },
                  "description": "Evidence-backed children picture books, multi-sensory phonics printables, family reading journals, and parent screen-time tools.",
                  "sameAs": [
                    "https://bestkidbooks.online",
                    "https://www.pinterest.com/bestkidbooks"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bestkidbooks.online/#website",
                  "url": "https://bestkidbooks.online",
                  "name": "BEST KidSbooks Shop",
                  "publisher": {
                    "@id": "https://bestkidbooks.online/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://bestkidbooks.online/books?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q0HB8GVDFP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q0HB8GVDFP');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
