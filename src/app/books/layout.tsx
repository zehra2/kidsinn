import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picture Books That Help Kids Learn to Read — Timed Read-Alouds & Guides",
  description:
    "Picture books chosen by how long they take to read out loud, each with a free discussion guide that helps kids learn to read and talk about stories. Filter by age, goal and feeling — with phonics for kids built into every after-story question.",
  keywords: [
    "picture books for kids",
    "learn to read",
    "best picture books for kids",
    "read aloud books",
    "phonics for kids",
    "bedtime stories for kids",
    "books for 4 year olds",
    "books for 6 year olds",
    "dialogic reading",
  ],
  alternates: {
    canonical: "https://bestkidbooks.online/books",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/books",
    siteName: "BEST KidSbooks Shop",
    title: "Picture Books That Help Kids Learn to Read",
    description:
      "Picture books chosen by read-aloud minutes, each with a free discussion guide. Find the right book for your child's age and mood.",
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
    title: "Picture Books That Help Kids Learn to Read",
    description:
      "Picture books chosen by read-aloud minutes, each with a free discussion guide for parents.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
