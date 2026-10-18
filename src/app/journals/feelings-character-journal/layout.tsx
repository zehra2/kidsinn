import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Feelings & Friendships Social-Emotional Journal (Free Printable PDF | Ages 5–10)",
  description:
    "Download the Feelings & Friendships Social-Emotional Journal! A free printable activity journal for kids ages 5–10 featuring an Animal Feelings Wheel, empathy prompts, and calming toolkits.",
  keywords: [
    "feelings and friendships journal",
    "social emotional learning printable pdf",
    "kids feelings wheel printable",
    "emotional literacy journal ages 5-10",
    "name it to tame it printable",
    "empathy activities for elementary students",
    "calming strategies for kids printable",
    "character feelings reflection sheet",
    "reduce emotional outbursts children",
    "story character emotion mirror",
  ],
  alternates: {
    canonical:
      "https://bestkidbooks.online/journals/feelings-character-journal",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/journals/feelings-character-journal",
    siteName: "BEST KidSbooks Shop",
    title:
      "Feelings & Friendships Social-Emotional Journal (Free Printable PDF | Ages 5–10)",
    description:
      "Help children name big feelings through story characters. Free printable with Animal Feelings Wheel, calming strategies, and empathy prompts.",
    images: [
      {
        url: "/images/feelings-journal-mockup.jpg",
        width: 1200,
        height: 675,
        alt: "Feelings & Friendships Social-Emotional Journal spread with Animal Feelings Wheel and Calming Strategy Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Feelings & Friendships Social-Emotional Journal (Free Printable PDF | Ages 5–10)",
    description:
      "Help children name big feelings through story characters. Free printable with Animal Feelings Wheel, calming strategies, and empathy prompts.",
    images: ["/images/feelings-journal-mockup.jpg"],
  },
};

export default function FeelingsJournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
