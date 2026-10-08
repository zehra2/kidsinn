"use client";

import Link from "next/link";
import { Nav, Footer, SectionHead, Sticker, Wave } from "@/components/ui";
import { EEAT_CREDENTIALS } from "@/lib/consolidated-data";
import {
  ShieldCheck,
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  CheckCircle2,
  FileCheck,
  Users,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div
          className="pointer-events-none absolute -right-16 top-10 h-60 w-60 rounded-full opacity-60"
          style={{ background: "#ffc531" }}
        />
        <div
          className="pointer-events-none absolute -left-12 -top-12 h-52 w-52 rounded-full opacity-60"
          style={{ background: "#3b6fe8" }}
        />

        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12.5px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
              <img src="/images/reading-bear.png" alt="" className="h-5 w-5 object-contain" />
              <span>BEST KidSbooks Shop</span>
            </span>
            <span className="mono-label chunky-sm inline-block -rotate-1 rounded-full bg-honey px-3 py-1 text-ink">
              Experience · Expertise · Authoritativeness · Trust
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-2.5 py-1 text-[11px] text-ink/60">
              Evidence-Based Pediatric Literacy
            </span>
          </div>

          <div className="mt-5 max-w-[840px]">
            <h1 className="text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[1.02]">
              Raising readers on
              <br />
              <span className="text-orange">science, not guilt.</span>
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-ink/85">
              Best Kid Books was founded to bridge the gap between clinical child development research and real Tuesday evening bedtimes. We create parent-led tools, timed read-alouds, and zero-pressure printables backed by peer-reviewed evidence.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 items-center">
              <a href="#research" className="btn bg-orange text-cream">
                <FileCheck size={16} />
                Explore Clinical Research Citations
              </a>
              <Link href="/parent-tools" className="btn bg-paper">
                <GraduationCap size={16} />
                Test the Free Parent Calculators
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── RESEARCH FOUNDATIONS ───────────── */}
      <section id="research" className="py-14 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Evidence Base"
            title="The Research Behind Every Recommendation"
            sub="We don't invent reading advice. Every calculator, book timing, and 30-day challenge skill is directly calibrated against gold-standard pediatric literacy literature."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {EEAT_CREDENTIALS.map((cred) => (
              <div key={cred.org} className="chunky rounded-3xl bg-cream p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-blue text-[11px] font-black uppercase">
                      Peer-Reviewed Literature
                    </span>
                    <span className="mono-label rounded-full border-2 border-ink bg-honey px-2.5 py-0.5 text-[11px] font-black text-ink">
                      {cred.metric}
                    </span>
                  </div>
                  <h3 className="font-display text-[22px] font-extrabold text-ink mt-2">
                    {cred.org}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink/80 leading-relaxed">
                    {cred.finding}
                  </p>
                </div>

                <div className="mt-4 border-t border-ink/15 pt-3 flex items-center gap-2 text-[12px] font-bold text-ink/60">
                  <CheckCircle2 size={16} className="text-mint shrink-0" />
                  <span>Integrated into Best Kid Books tools & calculators</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── EDITORIAL PRINCIPLES ───────────── */}
      <section id="methodology" className="py-14 bg-cream border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Our Standards"
            title="Our 5 Editorial Commitments"
            sub="How we maintain transparency, child safety, and high-trust guidance for every family."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="chunky-sm rounded-2xl bg-paper p-6">
              <ShieldCheck size={32} className="text-blue mb-2" />
              <h4 className="font-display text-[20px] font-extrabold text-ink">
                1. No Child Data Ever
              </h4>
              <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                We never collect a child’s name, photo, school, or exact birthdate. All calculators use anonymous age bands. Newsletter forms are restricted to adult emails.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-paper p-6">
              <Award size={32} className="text-orange mb-2" />
              <h4 className="font-display text-[20px] font-extrabold text-ink">
                2. Real Timing Audits
              </h4>
              <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                Publishers claim books take "5 minutes", but in reality they take 15. We read every book aloud at a calm, bedtime pace with natural pauses to determine true duration.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-paper p-6">
              <Users size={32} className="text-mint mb-2" />
              <h4 className="font-display text-[20px] font-extrabold text-ink">
                3. Market to Parents, Not Kids
              </h4>
              <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                In compliance with FTC & Google publisher policies, we never use manipulative gamification or 'pester power' ads aimed at children.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-paper p-6">
              <Heart size={32} className="text-blush mb-2" />
              <h4 className="font-display text-[20px] font-extrabold text-ink">
                4. Connection Over Testing
              </h4>
              <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                We avoid comprehension quizzes that make bedtime feel like school. Every prompt invites conversation, laughter, and emotional safety.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-paper p-6">
              <FileCheck size={32} className="text-honey mb-2" />
              <h4 className="font-display text-[20px] font-extrabold text-ink">
                5. Free Offline Hand-off
              </h4>
              <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                The ultimate goal of this website is for you to close your screen and open a physical paper book with your child.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-paper p-6">
              <Sparkles size={32} className="text-blue mb-2" />
              <h4 className="font-display text-[20px] font-extrabold text-ink">
                6. Unbiased Book Selection
              </h4>
              <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                We do not sell sponsored placement to publishers. Books earn a spot on our shelf solely based on kid feedback and literacy merit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
