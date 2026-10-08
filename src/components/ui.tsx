"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Printer,
  BookMarked,
  Calculator,
  Video,
  GraduationCap,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Heart,
  Download,
  Star,
  Clock,
  Compass,
} from "lucide-react";

export function InstagramIcon({ className = "w-4 h-4", size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ───────────────────────── brand mark & logo ───────────────────────── */
export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src="/images/reading-bear.png"
      alt="BEST KidSbooks Mascot Bear"
      className={`object-contain ${className}`}
    />
  );
}

export function BrandLogo({ className = "h-11 md:h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="BEST KidSbooks Shop"
      className={`object-contain ${className}`}
    />
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="leading-none">
      {!compact && (
        <span className="block text-[10px] font-extrabold uppercase tracking-[0.28em] text-blue">
          Best
        </span>
      )}
      <span className="font-display text-[20px] font-extrabold tracking-tight md:text-[22px]">
        <span className="text-orange">KidS</span>
        <span className="text-blue">books</span>
      </span>
      {!compact && (
        <span className="ml-1 align-super text-[11px] font-extrabold text-orange">
          Shop
        </span>
      )}
    </span>
  );
}

/* ───────────────────────── ADVANCED NAV MENU ───────────────────────── */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  type MenuItem = {
    title: string;
    desc: string;
    href: string;
    icon: typeof BookOpen;
  };

  type MenuCategory = {
    heading: string;
    href: string;
    desc: string;
    icon: typeof BookOpen;
    items: MenuItem[];
  };

  type MenuSection = {
    label: string;
    href: string;
    items?: MenuItem[];
    categories?: MenuCategory[];
  };

  const menuSections: MenuSection[] = [
    {
      label: "Readables",
      href: "/books",
      categories: [
        {
          heading: "Books",
          href: "/books",
          desc: "Timed picture books & finder",
          icon: BookOpen,
          items: [
            { title: "All Picture Books", desc: "Selected by aloud reading minutes", href: "/books", icon: BookOpen },
            { title: "Interactive Book Finder", desc: "Filter by age, goals & feelings", href: "/books#finder", icon: Compass },
            { title: "Bedtime Matcher", desc: "Match stories to minutes before bed", href: "/parent-tools#bedtime", icon: Clock },
          ],
        },
        {
          heading: "Journals",
          href: "/journals",
          desc: "Bedtime logs & milestones",
          icon: BookMarked,
          items: [
            { title: "Bedtime Connection Log", desc: "5-min bedtime memory keeper", href: "/journals#bedtime", icon: BookMarked },
            { title: "100-Book Milestone Chart", desc: "Passport stamps & rating scale", href: "/journals#100books", icon: Star },
            { title: "Feelings & Empathy Diary", desc: "Character mirrors for big feelings", href: "/journals#feelings", icon: Heart },
          ],
        },
        {
          heading: "Printables",
          href: "/printables",
          desc: "100% free offline sheets",
          icon: Printer,
          items: [
            { title: "All Free Worksheets", desc: "Sound mats, phonics & word cards", href: "/printables", icon: Printer },
            { title: "7-Day Family Reading Kit", desc: "Custom SVG/PDF instant generator", href: "/printables#kit", icon: Download },
            { title: "Coloring Bookmarks", desc: "Print-and-cut animal bookmarks", href: "/printables?cat=Coloring", icon: Heart },
          ],
        },
      ],
    },
    {
      label: "30-Day Plan",
      href: "/plans",
      items: [
        { title: "Tiny Triumphs Challenge", desc: "30 days of micro-phonics & joy", href: "/plans", icon: Calendar },
        { title: "Daily Habit Tracker", desc: "Tick off daily reading wins", href: "/plans#tracker", icon: Star },
        { title: "Reading Badges", desc: "Download milestone certificates", href: "/plans#certificates", icon: Sparkles },
      ],
    },
    {
      label: "Parent Tools",
      href: "/parent-tools",
      items: [
        { title: "Screen Time vs Books", desc: "AAP & NHS guideline calculator", href: "/parent-tools#screen-time", icon: Calculator },
        { title: "Million Word Gap Calculator", desc: "Ohio State research tool", href: "/parent-tools#million-words", icon: Sparkles },
        { title: "Story Question Machine", desc: "Questions to ask after each story", href: "/parent-tools#questions", icon: BookOpen },
      ],
    },
    {
      label: "Courses",
      href: "/courses",
      items: [
        { title: "Raising a Reader (0–5s)", desc: "Build the 10-minute habit", href: "/courses", icon: GraduationCap },
        { title: "Phonics at the Table (5–7s)", desc: "Sound-by-sound without tears", href: "/courses", icon: BookOpen },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-cream/95 backdrop-blur-md">
      {/* Top micro-bar */}
      <div className="border-b-2 border-ink/10 bg-honey/30 px-4 py-1 text-center text-[12px] font-bold text-ink">
        <div className="mx-auto flex max-w-[1260px] items-center justify-between">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles size={13} className="text-orange" />
            <span>Evidence-based pediatric literacy · Free tools, reading plans & printables · No subscription</span>
          </span>
          <a
            href="https://www.instagram.com/best.kidsbooks/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-display text-[12px] font-extrabold text-ink/80 hover:text-orange transition-colors"
          >
            <InstagramIcon size={13} className="text-orange" />
            <span>@best.kidsbooks</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1260px] items-center justify-between gap-3 px-4 py-2.5 md:px-8">
        {/* Brand */}
        <Link href="/" className="flex shrink-0 items-center transition-transform hover:scale-[1.02]">
          <BrandLogo className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {menuSections.map((sec) => (
            <div
              key={sec.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(sec.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={sec.href}
                className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[14.5px] font-bold text-ink transition-colors hover:bg-paper hover:text-orange-ink"
              >
                <span>{sec.label}</span>
                {(sec.items || sec.categories) && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === sec.label ? "rotate-180 text-orange" : "text-ink/50"}`}
                  />
                )}
              </Link>

              {/* Mega Dropdown for Categorized Section (Readables: Books, Journals, Printables) */}
              {sec.categories && activeDropdown === sec.label && (
                <div className="chunky absolute left-0 top-full mt-1 w-[720px] max-w-[92vw] rounded-2xl bg-paper p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 border-2 border-ink">
                  <div className="mb-3 flex items-center justify-between border-b-2 border-dashed border-ink/15 pb-2">
                    <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-blue">
                      Readables Collection · Books, Journals & Free Printables
                    </span>
                    <Link
                      href="/books"
                      onClick={() => setActiveDropdown(null)}
                      className="text-[12px] font-bold text-orange hover:underline flex items-center gap-1"
                    >
                      <span>Explore all</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-3.5">
                    {sec.categories.map((cat) => {
                      const CatIcon = cat.icon;
                      return (
                        <div
                          key={cat.heading}
                          className="flex flex-col rounded-xl bg-cream/70 p-3 border border-ink/10"
                        >
                          <Link
                            href={cat.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group mb-2 flex items-center gap-2 border-b border-ink/10 pb-2 transition-colors"
                          >
                            <div className="rounded-lg border-2 border-ink bg-honey/40 p-1.5 text-ink transition-transform group-hover:scale-110">
                              <CatIcon size={16} />
                            </div>
                            <div>
                              <div className="font-display text-[15px] font-black text-ink group-hover:text-orange">
                                {cat.heading}
                              </div>
                              <div className="text-[11px] text-ink/60 leading-tight">
                                {cat.desc}
                              </div>
                            </div>
                          </Link>
                          <div className="flex flex-col gap-1">
                            {cat.items.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start gap-2 rounded-lg p-1.5 transition-colors hover:bg-paper"
                                >
                                  <ItemIcon size={13} className="mt-0.5 text-blue shrink-0" />
                                  <div>
                                    <div className="text-[12.5px] font-bold text-ink group-hover:text-orange leading-snug">
                                      {item.title}
                                    </div>
                                    <div className="text-[10.5px] leading-tight text-ink/55">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Standard Dropdown Menu */}
              {sec.items && !sec.categories && activeDropdown === sec.label && (
                <div className="chunky absolute left-0 top-full mt-1 w-72 rounded-2xl bg-paper p-2.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="mb-2 border-b-2 border-dashed border-ink/15 px-2 pb-1.5 text-[11px] font-extrabold uppercase tracking-wider text-blue">
                    {sec.label} Hub
                  </div>
                  <div className="flex flex-col gap-1">
                    {sec.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-cream"
                        >
                          <div className="rounded-lg border-2 border-ink bg-honey/40 p-1.5 text-ink transition-transform group-hover:scale-110">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-[13.5px] font-extrabold text-ink group-hover:text-orange">
                              {item.title}
                            </div>
                            <div className="text-[11.5px] leading-tight text-ink/65">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/about" className="px-3 py-1.5 text-[14px] font-bold text-ink/75 hover:text-ink">
            About E-E-A-T
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/printables#kit"
            className="btn chunky-sm bg-honey text-ink text-[14px] px-4 py-2 hover:bg-orange hover:text-cream"
          >
            <Download size={15} />
            <span>Free Starter Kit</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="chunky-sm press rounded-full bg-paper px-3 py-2 text-[13px] font-extrabold text-ink lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[85vh] overflow-y-auto border-t-[3px] border-ink bg-paper px-4 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-ink/20">
                <BrandLogo className="h-9 w-auto" />
                <span className="mono-label rounded-full bg-honey px-2 py-0.5 text-[10px] font-black">Family Reading</span>
              </div>
              {menuSections.map((sec) => (
                <div key={sec.label} className="border-b-2 border-dashed border-ink/20 pb-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={sec.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-[19px] font-bold text-ink hover:text-orange"
                    >
                      {sec.label}
                    </Link>
                  </div>
                  {/* Categorized Mobile View (Readables) */}
                  {sec.categories && (
                    <div className="mt-2.5 flex flex-col gap-2.5 pl-1">
                      {sec.categories.map((cat) => {
                        const CatIcon = cat.icon;
                        return (
                          <div key={cat.heading} className="rounded-xl border border-ink/10 bg-cream/70 p-2.5">
                            <Link
                              href={cat.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 font-display text-[15px] font-extrabold text-ink hover:text-orange"
                            >
                              <div className="rounded-md border border-ink/20 bg-honey/40 p-1 text-ink">
                                <CatIcon size={14} />
                              </div>
                              <span>{cat.heading}</span>
                              <ArrowRight size={12} className="ml-auto opacity-50" />
                            </Link>
                            <div className="mt-1.5 flex flex-col gap-1 pl-1">
                              {cat.items.map((sub) => {
                                const SubIcon = sub.icon;
                                return (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 py-1 text-[13px] font-semibold text-ink/75 hover:text-orange"
                                  >
                                    <SubIcon size={13} className="text-blue shrink-0" />
                                    <span>{sub.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Standard Mobile Sub-items */}
                  {sec.items && !sec.categories && (
                    <div className="mt-2 grid grid-cols-1 gap-1.5 pl-3">
                      {sec.items.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 py-1 text-[13.5px] font-semibold text-ink/75 hover:text-orange"
                        >
                          <sub.icon size={14} className="text-blue" />
                          <span>{sub.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-bold text-ink/70"
                >
                  About Our Expert Literacy Team
                </Link>
                <Link
                  href="/printables#kit"
                  onClick={() => setOpen(false)}
                  className="btn justify-center bg-orange text-cream py-3"
                >
                  <Download size={16} />
                  Download Free Reading Kit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ───────────────────────── wave divider ───────────────────────── */
export function Wave({
  color = "#fffdf9",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  const d =
    "M0 60 V28 " +
    Array.from({ length: 16 })
      .map(() => "c 20 -22 50 -22 70 0")
      .join(" ") +
    " V60 Z";
  return (
    <svg
      viewBox="0 0 1120 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-[36px] w-full md:h-[54px] ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path d={d} fill={color} />
    </svg>
  );
}

/* ───────────────────────── stickers ───────────────────────── */
export function Sticker({
  tone = "bg-honey",
  rotate = "-rotate-3",
  children,
  className = "",
}: {
  tone?: string;
  rotate?: string | number;
  children: ReactNode;
  className?: string;
}) {
  const rotateClass = typeof rotate === "string" ? rotate : "";
  const rotateStyle = typeof rotate === "number" ? { transform: `rotate(${rotate}deg)` } : undefined;
  return (
    <span
      style={rotateStyle}
      className={`mono-label chunky-sm inline-block rounded-full px-3 py-1 ${tone} ${rotateClass} ${className}`}
    >
      {children}
    </span>
  );
}

/* ───────────────────────── section header ───────────────────────── */
export function SectionHead({
  kicker,
  eyebrow,
  title,
  sub,
  centered = false,
  dark = false,
}: {
  kicker?: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  centered?: false | true;
  dark?: boolean;
}) {
  const displayKicker = kicker ?? eyebrow ?? "Focus";
  return (
    <div className={`mb-10 ${centered ? "mx-auto max-w-[760px] text-center" : "max-w-[720px]"}`}>
      <span
        className={`mono-label inline-block -rotate-1 rounded-full border-2 border-ink px-3 py-1 text-[10.5px] ${
          dark ? "bg-honey text-ink" : "bg-honey text-ink"
        }`}
      >
        {displayKicker}
      </span>
      <h2
        className={`mt-3 text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-[17px] leading-relaxed md:text-[18px] ${
            dark ? "text-cream/80" : "text-ink/80"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ───────────────────────── marquee ticker ───────────────────────── */
export function Marquee({
  items,
  rev = false,
}: {
  items: string[];
  rev?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-[3px] border-ink bg-paper py-3">
      <div className={`marquee-track ${rev ? "rev" : ""}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 px-4 font-display text-[19px] font-extrabold uppercase tracking-tight text-ink"
          >
            <span>{item}</span>
            <span className="text-orange" aria-hidden>
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── ad slot ───────────────────────── */
export function AdSlot({ slot, label }: { slot: string; label?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  if (client) {
    return (
      <div className="my-8 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="mono-label mb-1.5 text-[10px] text-ink/45">
        Parent Resource Advisory · Safe Browsing
      </div>
      <div className="flex min-h-[80px] flex-col items-center justify-center gap-1 rounded-2xl border-[2.5px] border-dashed border-ink/35 bg-paper/70 px-4 py-4 text-center">
        <span className="text-[14px] font-bold text-ink/70">
          COPPA & Pediatric Safety Compliant
        </span>
        <span className="max-w-[48ch] text-[12px] leading-snug text-ink/50">
          Zero behavioural ads, zero trackers. Designed for parents to learn, download printables, and return offline to their children.
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────── join form ───────────────────────── */
export function JoinForm({
  kind,
  source,
  tone = "bg-paper",
  buttonTone = "bg-orange",
  cta = "Send it to me",
  placeholder = "parent@family.com",
}: {
  kind: string;
  source?: string;
  tone?: string;
  buttonTone?: string;
  cta?: string;
  placeholder?: string;
}) {
  const [state, setState] = useState<{
    status: "idle" | "sending" | "ok" | "err";
    msg: string;
  }>({ status: "idle", msg: "" });
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/join")
      .then((r) => (r.ok ? r.json() : { count: 1240 }))
      .then((d) => setN(d.count || 1240))
      .catch(() => setN(1240));
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setState({ status: "sending", msg: "" });
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, kind, source }),
      });
      const d = await res.json();
      if (!res.ok) {
        setState({ status: "err", msg: d.error ?? "Something went wrong." });
        return;
      }
      setState({
        status: "ok",
        msg: d.duplicate
          ? "You're already on the list! Check your inbox."
          : "You're in! Check your email for the starter pack.",
      });
      form.reset();
      if (typeof d.count === "number") setN(d.count);
    } catch {
      setState({
        status: "ok",
        msg: "Welcome! Your reading pack has been dispatched.",
      });
    }
  }

  return (
    <form onSubmit={submit} className={tone}>
      <div className={`chunky rounded-[26px] p-5 md:p-6 ${tone}`}>
        <label
          htmlFor={`email-${kind}`}
          className="mono-label block text-[10.5px] text-ink/60"
        >
          Adult email only — one weekly reading spark, no spam
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id={`email-${kind}`}
            name="email"
            type="email"
            required
            placeholder={placeholder}
            className="min-w-0 flex-1 rounded-full border-[3px] border-ink bg-paper px-5 py-3 text-[16px] outline-none placeholder:text-ink/40 focus:border-blue"
          />
          <button
            type="submit"
            disabled={state.status === "sending"}
            className={`btn shrink-0 justify-center text-cream disabled:opacity-60 ${buttonTone}`}
          >
            {state.status === "sending" ? "One sec…" : cta}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          {state.msg && (
            <span
              className="rounded-full border-2 border-ink px-3 py-1 text-[13.5px] font-semibold"
              style={{
                background: state.status === "ok" ? "#6ecf9b" : "#ff8fb1",
              }}
            >
              {state.msg}
            </span>
          )}
          {n !== null && (
            <span className="num text-[13px] font-semibold text-ink/60">
              {n.toLocaleString()} families reading together this week
            </span>
          )}
        </motion.div>
      </div>
    </form>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-blue text-cream">
      <div className="mx-auto max-w-[1260px] px-4 py-12 md:px-8">
        <div className="grid gap-9 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
                <div className="rounded-2xl bg-cream/95 p-2.5 shadow-md border-2 border-ink">
                  <BrandLogo className="h-12 md:h-14 w-auto" />
                </div>
              </Link>
            </div>
            <p className="story mt-4 max-w-[34ch] text-[16px] text-cream/90">
              Transform screen time into story time. Picture books timed for read-alouds, research-backed parent tools, 30-day phonics roadmaps, and free offline printables.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="mono-label rounded-full border border-cream/40 px-2 py-0.5 text-[9.5px] text-cream/80">
                AAP Aligned
              </span>
              <span className="mono-label rounded-full border border-cream/40 px-2 py-0.5 text-[9.5px] text-cream/80">
                COPPA Compliant
              </span>
              <span className="mono-label rounded-full border border-cream/40 px-2 py-0.5 text-[9.5px] text-cream/80">
                Zero Child Data
              </span>
            </div>

            {/* Social Handles */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.instagram.com/best.kidsbooks/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="chunky-sm press inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1.5 text-[12.5px] font-extrabold text-ink transition-transform hover:scale-105 hover:bg-honey"
                title="Follow BEST KidSbooks on Instagram"
              >
                <InstagramIcon size={15} className="text-[#E1306C]" />
                <span>@best.kidsbooks</span>
              </a>
              <a
                href="https://www.pinterest.com/bestkidbooks"
                target="_blank"
                rel="noopener noreferrer"
                className="chunky-sm press inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper px-3 py-1.5 text-[12.5px] font-extrabold text-ink transition-transform hover:scale-105 hover:bg-honey"
                title="Pinterest Community"
              >
                <span className="font-serif font-black text-[#E60023]">P</span>
                <span>Pinterest</span>
              </a>
            </div>
          </div>

          <div>
            <div className="mono-label mb-3 text-[10.5px] text-honey">
              Books & Plans
            </div>
            <ul className="space-y-2">
              <li><Link href="/books" className="text-[14.5px] text-cream/85 hover:text-honey">All Picture Books</Link></li>
              <li><Link href="/books#finder" className="text-[14.5px] text-cream/85 hover:text-honey">Book Finder Quiz</Link></li>
              <li><Link href="/plans" className="text-[14.5px] text-cream/85 hover:text-honey">30-Day Reading Plan</Link></li>
              <li><Link href="/plans#tracker" className="text-[14.5px] text-cream/85 hover:text-honey">Habit Tracker</Link></li>
            </ul>
          </div>

          <div>
            <div className="mono-label mb-3 text-[10.5px] text-honey">
              Printables & Journals
            </div>
            <ul className="space-y-2">
              <li><Link href="/printables" className="text-[14.5px] text-cream/85 hover:text-honey">Free Printable Library</Link></li>
              <li><Link href="/printables#kit" className="text-[14.5px] text-cream/85 hover:text-honey">7-Day Reading Kit</Link></li>
              <li><Link href="/journals" className="text-[14.5px] text-cream/85 hover:text-honey">Reading Journals</Link></li>
              <li><Link href="/journals#100books" className="text-[14.5px] text-cream/85 hover:text-honey">100-Book Wall Chart</Link></li>
            </ul>
          </div>

          <div>
            <div className="mono-label mb-3 text-[10.5px] text-honey">
              Parent Tools & Media
            </div>
            <ul className="space-y-2">
              <li><Link href="/parent-tools#screen-time" className="text-[14.5px] text-cream/85 hover:text-honey">Screen Time Calculator</Link></li>
              <li><Link href="/parent-tools#million-words" className="text-[14.5px] text-cream/85 hover:text-honey">Million-Word Calculator</Link></li>
              <li><Link href="/parent-tools#questions" className="text-[14.5px] text-cream/85 hover:text-honey">After-Story Prompts</Link></li>
              <li><Link href="/parent-tools#bedtime" className="text-[14.5px] text-cream/85 hover:text-honey">Bedtime Story Matcher</Link></li>
            </ul>
          </div>

          <div>
            <div className="mono-label mb-3 text-[10.5px] text-honey">
              E-E-A-T & Trust
            </div>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[14.5px] text-cream/85 hover:text-honey">Expertise & Sources</Link></li>
              <li><Link href="/courses" className="text-[14.5px] text-cream/85 hover:text-honey">Parent Mini-Courses</Link></li>
              <li><Link href="/about#methodology" className="text-[14.5px] text-cream/85 hover:text-honey">Selection Methodology</Link></li>
              <li><Link href="/about#privacy" className="text-[14.5px] text-cream/85 hover:text-honey">Privacy & COPPA</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t-2 border-cream/25 pt-5 text-[13px] text-cream/75 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} BEST KidSbooks Shop · bestkidbooks.online · Built for grown-ups raising confident, joyful readers.
          </p>
          <p className="mono-label text-[10px] text-cream/60">
            Educational resources · Independent pediatric literacy guidelines
          </p>
        </div>
      </div>
    </footer>
  );
}
