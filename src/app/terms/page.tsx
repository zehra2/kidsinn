import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use — BEST KidSbooks Shop",
  description:
    "The terms for using bestkidbooks.online: how our free printables may be used, what our books and courses include, and the limits of the educational information on this site.",
  alternates: {
    canonical: "https://bestkidbooks.online/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/terms",
    siteName: "BEST KidSbooks Shop",
    title: "Terms of Use — BEST KidSbooks Shop",
    description:
      "How our free printables may be used, what our books and courses include, and the limits of the educational information on this site.",
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
    title: "Terms of Use — BEST KidSbooks Shop",
    description:
      "How our free printables may be used, what our books and courses include, and the limits of the educational information on this site.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: "Using this site",
    body: [
      "By using bestkidbooks.online you agree to these terms. The site is provided for families and educators to use at home and in classrooms. If you do not agree with these terms, please do not use the site.",
    ],
  },
  {
    h: "Free printables — what you may do",
    body: [
      "Every printable on this site is free for personal family use and for classroom use: print as many copies as you need, share them with your own children or your own class, and use them in homework or tutoring. You may not sell them, redistribute them on another website or app, include them in a paid product, or claim them as your own work. Please keep the BEST KidSbooks credit line on the sheet — it is how other families find us.",
    ],
  },
  {
    h: "Books, journals & courses",
    body: [
      "Book prices shown on the site are in US dollars and cover the physical book as described on its page. Course prices cover access to the course materials as described. Digital downloads (printables, guides, journal sheets) are delivered instantly and are not refundable once downloaded, unless the file is faulty — in which case contact us and we will replace it or refund it.",
    ],
  },
  {
    h: "Educational information — not professional advice",
    body: [
      "Everything on this site — the calculators, the reading plans, the phonics games, the articles — is educational information based on published research (cited on our About page). It is not medical, psychological or educational advice for a specific child. If you are worried about your child's development, reading progress or screen use, please speak to your child's teacher, paediatrician or another qualified professional. We do not diagnose, treat or assess individual children.",
    ],
  },
  {
    h: "Email newsletter",
    body: [
      "Joining the parent reading circle signs you up for at most one email a week. You can unsubscribe at any time with the link in any email, and we will stop sending to that address. We do not send marketing emails to children, and we do not share email addresses with anyone.",
    ],
  },
  {
    h: "Photos & messages you send us",
    body: [
      "If you send us a photo of your child's finished worksheet, a story, or a message, we may ask to share it on the site or on social media — and we will only do so with your clear permission, and never with a child's full name, school or location attached.",
    ],
  },
  {
    h: "Links to other sites",
    body: [
      "This site links to Instagram, Facebook, Pinterest and other third-party sites. We are not responsible for the content, products or privacy practices of those sites — their own terms apply once you click through.",
    ],
  },
  {
    h: "Availability & liability",
    body: [
      "We work hard to keep the site running and the downloads working, but we cannot guarantee uninterrupted access. The site and its content are provided “as is”, without warranties of any kind. To the fullest extent allowed by law, we are not liable for any loss or damage arising from your use of the site — including, for the avoidance of doubt, any reading outcome, test result or screen-time result.",
    ],
  },
  {
    h: "Changes to these terms",
    body: [
      "We may update these terms from time to time — for example when we add a new feature or product. The updated terms will be posted here with a new date, and continued use of the site after a change means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Nav />

      <section className="bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div className="mx-auto max-w-[820px] px-4 md:px-8">
          <SectionHead
            kicker="Legal"
            title="Terms of Use"
            sub="The rules for using this site, written plainly. Last updated 14 November 2026."
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
              Questions about these terms?
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
              Our privacy policy explains how we handle your data, and the
              contact page is the fastest way to reach us.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/privacy" className="btn bg-paper text-ink">
                Privacy Policy
              </Link>
              <Link href="/contact" className="btn bg-orange text-cream">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
