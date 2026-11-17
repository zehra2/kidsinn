import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Feelings Journal for Kids Printable — Free Social-Emotional Journal (Ages 5–10)",
  description:
    "Download this free feelings journal for kids printable! Help children name big feelings through story characters, with an Animal Feelings Wheel, empathy prompts, and calming toolkits — for kids ages 5–10.",
  keywords: [
    "feelings journal for kids printable",
    "feelings journal for kids",
    "social emotional journal printable",
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
      "Feelings Journal for Kids Printable — Free Social-Emotional Journal (Ages 5–10)",
    description:
      "A free feelings journal for kids printable: help children name big feelings through story characters. Animal Feelings Wheel, calming strategies, and empathy prompts.",
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
      "Feelings Journal for Kids Printable — Free Social-Emotional Journal (Ages 5–10)",
    description:
      "A free feelings journal for kids printable: help children name big feelings through story characters. Animal Feelings Wheel, calming strategies, and empathy prompts.",
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
