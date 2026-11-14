import type { Metadata } from "next";
import { Nav, Footer, SectionHead, InstagramIcon, FacebookIcon } from "@/components/ui";
import { BookOpen, Heart, Bug, ShieldCheck, Handshake, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — BEST KidSbooks Shop",
  description:
    "Get in touch with BEST KidSbooks Shop: worksheet ideas, book suggestions, broken links, privacy requests, partnerships and press. The fastest way to reach us is Instagram.",
  alternates: {
    canonical: "https://bestkidbooks.online/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestkidbooks.online/contact",
    siteName: "BEST KidSbooks Shop",
    title: "Contact Us — BEST KidSbooks Shop",
    description:
      "Worksheet ideas, book suggestions, broken links, privacy requests and partnerships — the fastest way to reach us is Instagram.",
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
    title: "Contact Us — BEST KidSbooks Shop",
    description:
      "Worksheet ideas, book suggestions, broken links, privacy requests and partnerships — the fastest way to reach us is Instagram.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

const CHANNELS = [
  {
    name: "Instagram",
    handle: "@best.kidsbooks",
    href: "https://www.instagram.com/best.kidsbooks/",
    desc: "Fastest reply — usually within a couple of days. Send a DM about anything: worksheet ideas, book suggestions, or a question about your child's reading.",
    icon: <InstagramIcon size={26} className="text-[#E1306C]" />,
    cta: "Message on Instagram",
  },
  {
    name: "Facebook",
    handle: "Best Kids Books",
    href: "https://www.facebook.com/profile.php?id=740046505866724",
    desc: "Our page for announcements, new printables and the daily phonics game. Message the page and we will get back to you.",
    icon: <FacebookIcon size={26} className="text-[#1877F2]" />,
    cta: "Message on Facebook",
  },
  {
    name: "Pinterest",
    handle: "bestkidsbooks",
    href: "https://www.pinterest.com/zehraraza345/",
    desc: "Every printable and phonics game, pinned and organised by board. Follow for the newest worksheets as they are published.",
    icon: <span className="font-serif text-[26px] font-black text-[#E60023]">P</span>,
    cta: "Follow on Pinterest",
  },
];

const TOPICS = [
  {
    icon: <BookOpen size={20} className="text-orange" />,
    title: "A worksheet or book idea",
    desc: "Tell us the sound, the book or the age — if enough parents ask for it, we make it.",
  },
  {
    icon: <Bug size={20} className="text-blue" />,
    title: "Something is broken",
    desc: "A download that won't open, a link that goes nowhere, a page that looks wrong — tell us the page and what happened.",
  },
  {
    icon: <ShieldCheck size={20} className="text-mint" />,
    title: "Privacy or data request",
    desc: "Ask us to show, correct or delete your email address, or report anything a child may have shared. We act on these first.",
  },
  {
    icon: <Handshake size={20} className="text-orange" />,
    title: "Partnerships & press",
    desc: "Schools, libraries, publishers and creators — tell us what you have in mind and we will reply honestly.",
  },
  {
    icon: <Heart size={20} className="text-[#E1306C]" />,
    title: "Just to say thank you",
    desc: "Parents send us photos of coloured-in bookmarks and finished reading trees. They make our week — keep them coming.",
  },
  {
    icon: <Mail size={20} className="text-blue" />,
    title: "Newsletter trouble",
    desc: "Not receiving the weekly crib sheet, or getting it twice? Tell us the email address and we will sort it out.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="max-w-[820px]">
            <SectionHead
              kicker="Say hello"
              title="Contact Us"
              sub="We read everything. The fastest reply comes through Instagram — everything else goes through the same inbox, just a little slower."
            />
          </div>

          {/* ───────────── CHANNELS ───────────── */}
          <div className="grid gap-6 md:grid-cols-3">
            {CHANNELS.map((channel) => (
              <article
                key={channel.name}
                className="chunky flex flex-col rounded-3xl bg-paper p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  {channel.icon}
                  <div>
                    <h2 className="font-display text-[20px] font-extrabold text-ink">
                      {channel.name}
                    </h2>
                    <p className="text-[13px] font-bold text-ink/60">
                      {channel.handle}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/75">
                  {channel.desc}
                </p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-orange text-cream mt-auto pt-2 self-start"
                >
                  {channel.cta}
                </a>
              </article>
            ))}
          </div>

          {/* ───────────── WHAT TO WRITE ABOUT ───────────── */}
          <div className="mt-14">
            <h2 className="font-display text-[28px] font-extrabold text-ink">
              What to write about
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TOPICS.map((topic) => (
                <div
                  key={topic.title}
                  className="chunky-sm rounded-2xl bg-paper p-5 border-2 border-ink"
                >
                  <div className="flex items-center gap-2">
                    {topic.icon}
                    <h3 className="font-display text-[17px] font-extrabold text-ink">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/75">
                    {topic.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-[720px] text-[14.5px] leading-relaxed text-ink/70">
            A note on replies: this is a small, parent-run site, not a support
            desk — please allow a few days. If your message is about a child's
            privacy or a broken download, say so in the first line and it jumps
            the queue. We do not take phone calls; everything in writing means
            nothing gets lost.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
