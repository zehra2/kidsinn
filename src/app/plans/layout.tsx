import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30-Day Reading Plan — Help Your Child Learn to Read with Daily Phonics Games",
  description:
    "A free 30-day reading plan that helps kids learn to read: daily micro-phonics games, CVC blending, digraphs and long vowels in 5 minutes a night. Free phonics worksheets and a printable certificate included.",
  keywords: [
    "30 day reading plan",
    "learn to read",
    "phonics for kids",
    "free phonics worksheets",
    "cvc blending",
    "reading challenge for kids",
    "daily phonics practice",
    "free printable worksheets for kids",
  ],
  alternates: {
    canonical: "https://bestkidbooks.online/plans",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/plans",
    siteName: "BEST KidSbooks Shop",
    title: "30-Day Reading Plan — Help Your Child Learn to Read",
    description:
      "A free 30-day reading plan: daily micro-phonics games that help kids learn to read, in 5 minutes a night.",
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
    title: "30-Day Reading Plan — Help Your Child Learn to Read",
    description:
      "A free 30-day reading plan with daily phonics games. Five minutes a night, thirty days of tiny triumphs.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

export default function PlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
