import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy — BEST KidSbooks Shop",
  description:
    "How BEST KidSbooks Shop handles your data: what we collect (parent emails, anonymous analytics), what we never collect (any child data), how Google Analytics and AdSense work here, and your rights under COPPA.",
  alternates: {
    canonical: "https://bestkidbooks.online/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/privacy",
    siteName: "BEST KidSbooks Shop",
    title: "Privacy Policy — BEST KidSbooks Shop",
    description:
      "What we collect, what we never collect, and how Google Analytics and AdSense work on this site. Written for parents, not lawyers.",
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
    title: "Privacy Policy — BEST KidSbooks Shop",
    description:
      "What we collect, what we never collect, and how Google Analytics and AdSense work on this site.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: "The short version",
    body: [
      "This site is made for parents and guardians — not for children to use on their own. We collect almost nothing: an email address only if you choose to join the parent reading circle, and anonymous visit statistics through Google Analytics. We never collect any information from children, we never sell data, and we never show personalised ads to children. The rest of this page is the full detail, written as plainly as we can.",
    ],
  },
  {
    h: "Who we are",
    body: [
      "BEST KidSbooks Shop (bestkidbooks.online) is an independent family literacy site. We publish free phonics printables, picture-book guides, reading journals and parent tools. There is no company behind the site collecting data at scale — it is run by a parent, for parents.",
    ],
  },
  {
    h: "What we collect",
    body: [
      "Parent email sign-ups: if you join the parent reading circle or a course waitlist, we store the email address you typed in and nothing else — no name, no child's name, no address. You can unsubscribe in one click from any email, and we delete unsubscribed addresses on request.",
      "Anonymous analytics: Google Analytics (GA4) tells us how many people visit, which pages are popular and roughly where visitors come from. It does not tell us who you are, and we have not enabled any feature that identifies individual visitors.",
      "What we do not collect: we do not ask children for any information, we do not run accounts or logins for children, we do not collect children's names, ages, photos or school details, and our printables and tools work without any sign-up at all.",
    ],
  },
  {
    h: "Cookies & advertising",
    body: [
      "This site uses cookies in two places. Google Analytics uses cookies to count visits and see which pages help parents most. Google AdSense — the ads that help pay for the free printables — uses cookies to decide which ads to show. AdSense may show personalised ads to adult visitors; it does not personalise ads on child-directed content, and our printable and book pages carry no advertising at all.",
      "You can turn off personalised advertising at any time in your Google Ad Settings (adssettings.google.com), or by clearing cookies in your browser. Blocking cookies will not break the printables, the calculators or the reading plans — everything on this site works without them.",
    ],
  },
  {
    h: "Children's privacy (COPPA)",
    body: [
      "This site is directed at parents and guardians, not at children. We do not knowingly collect personal information from anyone under 13, and we do not knowingly allow children to sign up for anything. Our email forms, courses and tools are written for the adult holding the device.",
      "If you believe a child has shared personal information with us — for example by typing it into a form — please contact us through the contact page and we will delete it promptly. We will never use a child's information for advertising.",
    ],
  },
  {
    h: "How we use your email",
    body: [
      "One email a week, at most: the read-aloud crib sheet and one new book pick. We use your address only to send those emails. We never sell, rent or share email addresses with anyone, and we never send emails to children. Every email has a one-click unsubscribe link, and unsubscribing removes you from the list.",
    ],
  },
  {
    h: "Third parties & links",
    body: [
      "This site links out to Instagram, Facebook and Pinterest, and uses Google Analytics and Google AdSense. Those services have their own privacy policies, and what they collect when you click through is governed by them, not by us. We recommend checking their policies if you want the full picture — the links are in the footer of every page.",
    ],
  },
  {
    h: "Data retention & security",
    body: [
      "Email addresses are kept only while you are subscribed, and deleted when you unsubscribe or ask us to. Analytics data is kept in aggregate form and never tied to an individual. The site runs over HTTPS, and access to the email list is limited to the site owner.",
    ],
  },
  {
    h: "Your rights",
    body: [
      "You can ask us at any time to show you what we hold about you (your email address and subscription status), to correct it, or to delete it entirely. The fastest way is the contact page — tell us the email address to remove and we will confirm once it is done. You can also unsubscribe from any email with one click, no questions asked.",
    ],
  },
  {
    h: "Changes to this policy",
    body: [
      "If we change how we handle data — for example by adding a new tool that stores something — we will update this page and change the date below. Continued use of the site after a change means you accept the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <section className="bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div className="mx-auto max-w-[820px] px-4 md:px-8">
          <SectionHead
            kicker="Legal"
            title="Privacy Policy"
            sub="Written for parents, not lawyers. Last updated 14 November 2026."
          />

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.h}>
                <h2 className="font-display text-[24px] md:text-[28px] font-extrabold leading-tight text-ink">
                  {section.h}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[16.5px] leading-relaxed text-ink/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="chunky mt-12 rounded-3xl bg-paper p-6">
            <h2 className="font-display text-[20px] font-extrabold text-ink">
              Questions about your data?
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
              Ask us anything — including asking us to delete your email
              address. The contact page is the fastest way to reach us.
            </p>
            <Link href="/contact" className="btn bg-orange text-cream mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
