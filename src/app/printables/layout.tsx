import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Printable Phonics Worksheets for Kids — Sound Mats, CVC & Digraphs",
  description:
    "Free phonics worksheets for kids: Elkonin sound-box mats, CVC blending sheets, silent-e magic wands and digraph hunts. Free printable worksheets for kids that help them learn to read — no sign-up, no email, no child data.",
  keywords: [
    "free phonics worksheets",
    "free printable worksheets for kids",
    "phonics for kids",
    "learn to read",
    "cvc worksheets",
    "elkonin sound boxes",
    "digraph worksheets",
    "silent e activity",
    "free printable worksheets",
    "reading worksheets for kids",
  ],
  alternates: {
    canonical: "https://bestkidbooks.online/printables",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/printables",
    siteName: "BEST KidSbooks Shop",
    title: "Free Printable Phonics Worksheets for Kids",
    description:
      "Free phonics worksheets for kids — sound-box mats, CVC blending, silent-e wands and digraph hunts. Print tonight, play tonight.",
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
    title: "Free Printable Phonics Worksheets for Kids",
    description:
      "Free phonics worksheets for kids that help them learn to read — sound mats, CVC blending and digraph hunts. No sign-up.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

export default function PrintablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
