import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer } from "@/components/ui";
import { STORIES, type StoryBlock } from "@/lib/content";
import { ArrowLeft, ArrowRight, Check, Clock, Lightbulb } from "lucide-react";

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);
  if (!story) return {};
  const title = story.title;
  return {
    title,
    description: story.dek,
    alternates: {
      canonical: `https://bestkidbooks.online/stories/${story.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://bestkidbooks.online/stories/${story.slug}`,
      siteName: "BEST KidSbooks Shop",
      title,
      description: story.dek,
      publishedTime: story.datePublished,
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
      title,
      description: story.dek,
      images: ["/images/logo.png"],
      creator: "@bestkidbooks",
    },
  };
}

function StoryBody({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <div className="space-y-5 text-[17px] leading-relaxed text-ink/85">
      {blocks.map((block, i) => {
        if ("h" in block) {
          return (
            <h2
              key={i}
              className="pt-4 font-display text-[26px] md:text-[30px] font-extrabold leading-tight text-ink"
            >
              {block.h}
            </h2>
          );
        }
        if ("list" in block) {
          return (
            <ul key={i} className="space-y-2.5">
              {block.list.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <Check size={18} className="mt-1 shrink-0 text-mint stroke-[3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if ("tip" in block) {
          return (
            <div
              key={i}
              className="chunky rounded-2xl border-2 border-ink bg-honey/40 p-5 flex items-start gap-3"
            >
              <Lightbulb size={22} className="mt-0.5 shrink-0 text-orange" />
              <p className="font-display text-[16px] font-bold leading-snug text-ink">
                {block.tip}
              </p>
            </div>
          );
        }
        return <p key={i}>{block.p}</p>;
      })}
    </div>
  );
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  const related = STORIES.filter((s) => s.slug !== story.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: story.title,
            description: story.dek,
            datePublished: story.datePublished,
            author: {
              "@type": "Organization",
              name: "BEST KidSbooks Shop",
              url: "https://bestkidbooks.online",
            },
            publisher: {
              "@type": "Organization",
              name: "BEST KidSbooks Shop",
              url: "https://bestkidbooks.online",
            },
          }),
        }}
      />
      <Nav />

      {/* ───────────── ARTICLE ───────────── */}
      <article className="bg-cream border-b-[3px] border-ink">
        <div className="mx-auto max-w-[780px] px-4 md:px-8 pt-10 pb-14">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 font-display text-[14px] font-extrabold text-ink/70 hover:text-orange transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to All Stories
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="mono-label rounded-full border-2 border-ink bg-honey px-3 py-1 text-[11px] font-black text-ink">
              {story.tag}
            </span>
            <span className="mono-label text-[12px] font-bold text-ink/60">
              {story.date} 2026
            </span>
            <span className="mono-label text-[12px] font-bold text-ink/60 flex items-center gap-1">
              <Clock size={13} />
              {story.read} read
            </span>
          </div>

          <h1 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] leading-[1.08]">
            {story.title}
          </h1>
          <p className="mt-4 text-[19px] leading-relaxed text-ink/75 font-medium">
            {story.dek}
          </p>

          <div className="mt-8 border-t-2 border-dashed border-ink/20 pt-8">
            <StoryBody blocks={story.body} />
          </div>

          {/* ───────────── NEXT STEP ───────────── */}
          <div className="chunky mt-10 rounded-3xl bg-paper p-6">
            <h2 className="font-display text-[20px] font-extrabold text-ink">
              Try it tonight
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
              Every story on this page ends with something you can actually do
              at bedtime. Grab a free printable from the library, or run one of
              the parent calculators — both are free, with no sign-up and no
              child data.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/printables" className="btn bg-orange text-cream">
                Free Printables
              </Link>
              <Link href="/parent-tools" className="btn bg-paper text-ink">
                Parent Tools
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ───────────── MORE STORIES ───────────── */}
      <section className="py-12 bg-paper">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <h2 className="font-display text-[26px] font-extrabold text-ink">
            Keep reading
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <article
                key={item.slug}
                className="chunky flex flex-col rounded-3xl bg-cream p-6 transition-transform hover:-translate-y-1"
              >
                <span className="mono-label rounded-full border-2 border-ink bg-honey px-2.5 py-0.5 text-[10px] font-extrabold text-ink self-start">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-display text-[20px] font-extrabold leading-tight text-ink">
                  <Link
                    href={`/stories/${item.slug}`}
                    className="hover:text-orange transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                  {item.dek}
                </p>
                <Link
                  href={`/stories/${item.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 font-display text-[14px] font-bold text-orange"
                >
                  Read story
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
