import Link from "next/link";
import { Nav, Footer } from "@/components/ui";
import { ArrowRight, BookOpen, Printer, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Nav />

      <section className="bg-cream pt-16 pb-20 border-b-[3px] border-ink">
        <div className="mx-auto max-w-[760px] px-4 md:px-8 text-center">
          <img
            src="/images/reading-bear.png"
            alt="BEST KidSbooks Reading Bear Mascot"
            className="mx-auto h-24 w-24 object-contain"
          />
          <p className="mono-label mt-6 inline-block -rotate-1 rounded-full border-2 border-ink bg-honey px-3 py-1 text-ink">
            404 · Page not found
          </p>
          <h1 className="mt-4 text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.05]">
            Even Bear can&apos;t find
            <br />
            <span className="text-orange">that page.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-[17px] leading-relaxed text-ink/80">
            The link may be old, mistyped, or the page may have moved. The good
            news: the books, printables and reading tools are all one click
            away.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn bg-orange text-cream">
              Back Home
            </Link>
            <Link href="/printables" className="btn bg-paper text-ink">
              <Printer size={16} />
              Free Printables
            </Link>
            <Link href="/books" className="btn bg-paper text-ink">
              <BookOpen size={16} />
              Picture Books
            </Link>
          </div>

          <div className="chunky mx-auto mt-10 max-w-[560px] rounded-3xl bg-paper p-6 text-left">
            <h2 className="flex items-center gap-2 font-display text-[18px] font-extrabold text-ink">
              <Search size={18} className="text-blue" />
              Looking for something in particular?
            </h2>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/80">
              <li>
                <Link href="/stories" className="font-bold text-orange hover:underline">
                  Stories & reading ideas
                </Link>{" "}
                — including the Christmas Book Advent, one book a day in December.
              </li>
              <li>
                <Link href="/parent-tools" className="font-bold text-orange hover:underline">
                  Parent tools
                </Link>{" "}
                — screen-time, million-word and reading-goal calculators.
              </li>
              <li>
                <Link href="/contact" className="font-bold text-orange hover:underline">
                  Contact us
                </Link>{" "}
                — tell us the broken link and we will fix it.
              </li>
            </ul>
            <Link
              href="/stories"
              className="mt-4 inline-flex items-center gap-1.5 font-display text-[14px] font-bold text-orange"
            >
              Browse all stories
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
