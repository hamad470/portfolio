"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Live AI Products" },
  { value: "1yr", label: "Industry XP" },
  { value: "3.62", label: "CGPA" },
  { value: "∞", label: "Models Trained" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[0.6rem] tracking-[0.3em] uppercase mb-12"
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
      >
        01 / About
      </motion.p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2
            className="text-4xl md:text-5xl font-800 leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Engineering intelligence
            <br />
            <span style={{ color: "var(--accent)" }}>from first principles.</span>
          </h2>
          <div
            className="space-y-4 text-sm leading-relaxed"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
          >
            <p>
              I&apos;m a Data Scientist and AI Engineer with a proven track record of shipping
              production ML systems. Currently pursuing an MSc in Data Science at Liverpool John
              Moores while having already spent a year as an AI Engineer at FirnasTech — building
              real products that real users rely on.
            </p>
            <p>
              My edge is bridging the gap between research and deployment. I don&apos;t just train
              models — I architect end-to-end systems: from data pipelines to LangChain-powered RAG
              apps to YOLO-based computer vision.
            </p>
            <p>
              Open to full-time Data Scientist / ML Engineer roles, internships, and research
              collaborations.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href="mailto:hamadurrehman62@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase border transition-all duration-200 hover:bg-[#00ff87] hover:text-black hover:border-[#00ff87]"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Hire Me
            </a>
            <a
              href="https://github.com/hamad470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase border border-[#1e1e1e] text-[#666666] hover:border-[#666666] transition-all duration-200"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="border p-6"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <p
                className="text-4xl font-800"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--accent)" }}
              >
                {s.value}
              </p>
              <p
                className="text-[0.6rem] tracking-widest uppercase mt-1"
                style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
