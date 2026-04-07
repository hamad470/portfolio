"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "GitHub", url: "https://github.com/hamad470" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hamad-ur-rehman-064b1b21a/" },
  { label: "Email", url: "mailto:hamadurrehman62@gmail.com" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-8 md:px-16 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Big background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[20vw] font-800 whitespace-nowrap opacity-[0.025]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          HIRE ME
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[0.6rem] tracking-[0.3em] uppercase mb-12"
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
        >
          04 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-800 leading-none mb-8"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          Let&apos;s build
          <br />
          <span style={{ color: "var(--accent)" }}>something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-sm max-w-md mb-12 leading-relaxed"
          style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          Open to full-time Data Scientist / ML Engineer roles, research internships, and
          freelance AI projects. Based in Liverpool, UK. Available from September 2026 full-time —
          part-time immediately.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center gap-4 mb-20"
        >
          <a
            href="mailto:hamadurrehman62@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase font-700 transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "#000",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
            }}
          >
            Send a message →
          </a>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase border px-5 py-4 transition-all duration-200 hover:border-[#00ff87] hover:text-[#00ff87]"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {l.label}
            </a>
          ))}
        </motion.div>

        {/* Footer bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t pt-8"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
          >
            © 2025 Hamad Ur Rehman · All rights reserved
          </p>
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
          >
            +447445943562 · Liverpool, UK
          </p>
        </motion.div>
      </div>
    </section>
  );
}
