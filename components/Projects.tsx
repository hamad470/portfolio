"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    name: "SeedsWild",
    tagline: "Unsupervised ML for agriculture",
    description:
      "Seed recommendation engine using clustering algorithms to help farmers select optimal seeds. Reduced cost and increased yield efficiency for rural users.",
    tags: ["Scikit-learn", "K-Means", "Python", "Data Pipeline"],
    url: "https://seedswild.com",
    accent: "#00ff87",
    outcome: "↑ Yield efficiency for farmers",
  },
  {
    id: "02",
    name: "Iqbal AI Teacher",
    tagline: "LLM-powered educational chatbot",
    description:
      "Conversational AI that simulates a teacher-student dialogue. Built with prompt engineering and token optimization for cost-efficient LLM deployment at scale.",
    tags: ["LangChain", "OpenAI API", "Prompt Eng.", "RAG"],
    url: "https://iqbalai.com",
    accent: "#00c8ff",
    outcome: "Live · Production LLM app",
  },
  {
    id: "03",
    name: "EduFlex",
    tagline: "PDF → interactive learning tools",
    description:
      "AI assistant that ingests PDFs and auto-generates flashcards, MCQ quizzes, and summaries. Chat-enabled document support via RAG pipeline.",
    tags: ["RAG", "FAISS", "NLP", "Flask", "React"],
    url: "https://mcqs-bank-frontend.onrender.com",
    accent: "#ff6b6b",
    outcome: "Chat-enabled PDF intelligence",
  },
  {
    id: "04",
    name: "Computer Vision Pipeline",
    tagline: "YOLO object detection system",
    description:
      "End-to-end CV pipeline using YOLOv8, Roboflow for annotation, and DarkLabel for custom dataset creation. Deployed with real-time inference.",
    tags: ["YOLO", "OpenCV", "Roboflow", "DeepFace", "MediaPipe"],
    url: "#",
    accent: "#ffd93d",
    outcome: "Real-time inference pipeline",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[0.6rem] tracking-[0.3em] uppercase mb-12"
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
      >
        02 / Selected Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl font-800 mb-16 leading-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      >
        Things I&apos;ve
        <br />
        <span style={{ color: "var(--accent)" }}>shipped.</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative block border p-7 overflow-hidden"
            style={{
              borderColor: "var(--border)",
              background: "rgba(17,17,17,0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(400px at 50% 50%, ${p.accent}12, transparent 70%)`,
              }}
            />
            {/* Top border accent on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: p.accent }}
            />

            <div className="relative z-10">
              {/* ID + arrow */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[0.55rem] tracking-[0.3em] uppercase"
                  style={{ color: p.accent, fontFamily: "var(--font-mono)" }}
                >
                  {p.id}
                </span>
                <span
                  className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: p.accent }}
                >
                  ↗
                </span>
              </div>

              <h3
                className="text-2xl font-700 mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {p.name}
              </h3>
              <p
                className="text-xs mb-4"
                style={{ color: p.accent, fontFamily: "var(--font-mono)" }}
              >
                {p.tagline}
              </p>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
              >
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.55rem] tracking-wider uppercase px-2 py-1 border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <p
                className="text-[0.6rem] tracking-widest uppercase"
                style={{ color: p.accent, fontFamily: "var(--font-mono)" }}
              >
                → {p.outcome}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
