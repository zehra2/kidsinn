import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "The Bedtime Connection Journal — Free Printable 5-Minute Kids Journal (Ages 3–7)",
  description:
    "A free printable bedtime journal for kids ages 3–7. Ask one connection question after storytime, capture your child's exact words, and build a keepsake in 5 minutes a night. No prep needed.",
  keywords: [
    "bedtime journal for kids",
    "printable kids journal",
    "reading journal for kids ages 3-7",
    "kids conversation starters",
    "parent child journal",
    "memory keeper journal",
    "screen-free bedtime routine",
    "5-minute bedtime ritual",
    "questions to ask kids after reading a bedtime story",
    "bedtime questions for anxious kids",
    "read aloud journal printable for parents",
    "keepsake journal funny things kids say",
    "dialogic reading questions",
    "connection questions after storytime",
  ],
  alternates: {
    canonical:
      "https://bestkidbooks.online/journals/bedtime-connection-journal",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/journals/bedtime-connection-journal",
    siteName: "BEST KidSbooks Shop",
    title:
      "The Bedtime Connection Journal — Free Printable 5-Minute Kids Journal (Ages 3–7)",
    description:
      "A free printable bedtime journal for kids ages 3–7. Ask one connection question after storytime, capture your child's exact words, and build a keepsake in 5 minutes a night. No prep needed.",
    images: [
      {
        url: "/images/bedtime-journal-mockup.jpg",
        width: 1200,
        height: 900,
        alt: "Bedtime journal nightly entry page with connection questions for kids ages 3-7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Bedtime Connection Journal — Free Printable 5-Minute Kids Journal",
    description:
      "Ask one connection question after storytime. Capture your child's exact words. Build a keepsake in 5 minutes a night. Free instant download.",
    images: ["/images/bedtime-journal-mockup.jpg"],
  },
};

export default function BedtimeJournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
