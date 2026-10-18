import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tiny Triumphs 30-Day Reading Habit Diary (Free Printable PDF | Ages 3–8)",
  description:
    "Download the Tiny Triumphs 30-Day Reading Habit Diary! A free printable 30-day challenge tracker for kids ages 3–8 with sound games, streak stickers, and milestone badges.",
  keywords: [
    "30 day reading challenge for kids",
    "reading habit tracker printable pdf",
    "kids daily reading log ages 3-8",
    "early literacy habit builder",
    "sound of the day reading journal",
    "gamified reading streak tracker",
    "phonics activity journal printable",
    "atomic habits for kids reading",
    "kindergarten reading streak tracker",
    "free homeschool reading habit printables",
  ],
  alternates: {
    canonical:
      "https://bestkidbooks.online/journals/tiny-triumphs-habit-diary",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/journals/tiny-triumphs-habit-diary",
    siteName: "BEST KidSbooks Shop",
    title:
      "Tiny Triumphs 30-Day Reading Habit Diary (Free Printable PDF | Ages 3–8)",
    description:
      "Build the daily reading habit, one joyful micro-win at a time. Free printable with 30-day streak map, sound-of-the-day hunts, and completion certificate.",
    images: [
      {
        url: "/images/tiny-triumphs-mockup.jpg",
        width: 1200,
        height: 675,
        alt: "Tiny Triumphs 30-Day Reading Habit Diary spread with streak map and sound of the day hunt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tiny Triumphs 30-Day Reading Habit Diary (Free Printable PDF | Ages 3–8)",
    description:
      "Build the daily reading habit, one joyful micro-win at a time. Free printable with 30-day streak map, sound-of-the-day hunts, and completion certificate.",
    images: ["/images/tiny-triumphs-mockup.jpg"],
  },
};

export default function TinyTriumphsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
