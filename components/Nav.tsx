"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 mix-blend-difference"
    >
      <a
        href="#"
        className="font-display text-sm font-700 tracking-widest text-accent uppercase"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.2em", fontSize: "0.75rem" }}
      >
        H.U.R
      </a>
      <ul className="flex gap-8">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-xs uppercase tracking-widest text-[#e8e8e8] hover:text-[#00ff87] transition-colors duration-200"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
