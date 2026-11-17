import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "100 Book Reading Challenge Printable — Free 100-Book Log for Kids (Ages 4–9)",
  description:
    "Take the 100 book reading challenge! Download this free 100 book reading challenge printable — an illustrated reading log for kids ages 4–9 with passport stamps, bear ratings and milestone badges.",
  keywords: [
    "100 book reading challenge printable",
    "100 book reading challenge",
    "reading log for kids",
    "books read log",
    "100 book milestone tracker for kids",
    "printable kids reading log pdf",
    "100 book challenge printable ages 4-9",
    "early literacy reading journal",
    "interactive book tracker for elementary kids",
    "gamified reading log printable",
    "reading passport for kids",
    "bear rating reading log",
    "free homeschool reading tracker",
    "elementary reading milestones",
  ],
  alternates: {
    canonical:
      "https://bestkidbooks.online/journals/100-book-milestone-explorer-log",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/journals/100-book-milestone-explorer-log",
    siteName: "BEST KidSbooks Shop",
    title: "100 Book Reading Challenge Printable — Free 100-Book Log for Kids (Ages 4–9)",
    description:
      "Take the 100 book reading challenge! Download this free 100 book reading challenge printable — an illustrated reading log for kids ages 4–9 with passport stamps, bear ratings and milestone badges.",
    images: [
      {
        url: "/images/100-book-explorer-mockup.jpg",
        width: 1200,
        height: 675,
        alt: "The 100-Book Milestone Explorer Log reading journal spread with passport stamps and bear ratings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Book Reading Challenge Printable — Free 100-Book Log for Kids (Ages 4–9)",
    description:
      "Take the 100 book reading challenge! A free, printable illustrated reading tracker for kids ages 4–9 with passport stamps, bear ratings and milestone badges.",
    images: ["/images/100-book-explorer-mockup.jpg"],
  },
};

export default function MilestoneExplorerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
