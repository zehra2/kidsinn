import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BEST KidSbooks — Evidence-Based Early Literacy for Families",
  description:
    "BEST KidSbooks Shop bridges clinical child-development research and real bedtimes: free phonics worksheets, picture books and journals built on AAP screen-time guidance and the Ohio State million-word gap study.",
  keywords: [
    "about best kidsbooks",
    "early literacy research",
    "million word gap",
    "aap screen time guidance",
    "evidence based reading",
    "learn to read",
  ],
  alternates: {
    canonical: "https://bestkidbooks.online/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/about",
    siteName: "BEST KidSbooks Shop",
    title: "About BEST KidSbooks — Evidence-Based Early Literacy",
    description:
      "Raising readers on science, not guilt: free phonics worksheets, picture books and journals backed by peer-reviewed research.",
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
    title: "About BEST KidSbooks — Evidence-Based Early Literacy",
    description:
      "Raising readers on science, not guilt — free phonics worksheets, picture books and journals backed by research.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
