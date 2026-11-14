import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories — Reading Ideas, Research & the Christmas Book Advent",
  description:
    "Plainly told reading ideas for parents: how to swap screen time for story time, how many books a 6-year-old should read, and the questions that beat 'did you like it?' — plus the Christmas Book Advent, one book a day from 1–24 December.",
  keywords: [
    "screen time vs story time",
    "how many books should a child read",
    "questions to ask after reading",
    "learn to read",
    "christmas book advent",
    "bedtime stories for kids",
    "reading habits for kids",
  ],
  alternates: {
    canonical: "https://bestkidbooks.online/stories",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/stories",
    siteName: "BEST KidSbooks Shop",
    title: "Stories — Reading Ideas, Research & the Christmas Book Advent",
    description:
      "Plainly told reading ideas for parents — plus the Christmas Book Advent, one book a day from 1–24 December.",
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
    title: "Stories — Reading Ideas, Research & the Christmas Book Advent",
    description:
      "Plainly told reading ideas for parents — plus the Christmas Book Advent, one book a day from 1–24 December.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
