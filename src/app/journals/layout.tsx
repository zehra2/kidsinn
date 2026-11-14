import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bedtime Reading Journals for Kids — Free Printable Keepsake Journals",
  description:
    "Free printable bedtime reading journals for kids: 5-minute connection logs, a 100-book milestone chart, feelings journals and habit diaries. Keepsakes that help children learn to read — and remember how loved they felt reading it.",
  keywords: [
    "bedtime reading journal",
    "reading journal for kids",
    "printable kids journal",
    "100 book reading challenge",
    "social emotional learning printable",
    "learn to read",
    "bedtime stories for kids",
  ],
  alternates: {
    canonical: "https://bestkidbooks.online/journals",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/journals",
    siteName: "BEST KidSbooks Shop",
    title: "Bedtime Reading Journals for Kids — Free Printables",
    description:
      "Free printable bedtime reading journals for kids — connection logs, milestone charts and feelings journals. Five minutes a night.",
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
    title: "Bedtime Reading Journals for Kids — Free Printables",
    description:
      "Free printable bedtime reading journals for kids. Five minutes a night, a keepsake for years.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

export default function JournalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
