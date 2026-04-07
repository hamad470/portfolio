"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "Java"],
  },
  {
    category: "ML / DL",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "AI / LLM",
    skills: ["LangChain", "RAG Systems", "OpenAI API", "FAISS", "Chroma", "Prompt Engineering"],
  },
  {
    category: "Computer Vision",
    skills: ["OpenCV", "YOLO", "DeepFace", "MediaPipe", "Roboflow", "DarkLabel"],
  },
  {
    category: "Web & Backend",
    skills: ["Flask", "HTML", "CSS", "Bootstrap", "WebSockets", "React"],
  },
  {
    category: "Data Skills",
    skills: ["Data Cleaning", "Feature Engineering", "EDA", "Web Scraping", "Visualization"],
  },
];

const courses = [
  "ML Specialization — Andrew Ng (Coursera)",
  "100 Days of ML — CampusX",
  "100 Days of DL — CampusX",
  "LangChain Masterclass — AI with Brandon",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[0.6rem] tracking-[0.3em] uppercase mb-12"
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
      >
        03 / Skills & Tools
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl font-800 mb-16 leading-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      >
        The stack I
        <br />
        <span style={{ color: "var(--accent)" }}>operate in.</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-px border" style={{ borderColor: "var(--border)" }}>
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            className="p-6 border-b md:border-b-0"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <p
              className="text-[0.55rem] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
            >
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[0.6rem] tracking-wide px-2 py-1"
                  style={{
                    background: "rgba(0,255,135,0.05)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Courses */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-16 border-t pt-12"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="text-[0.6rem] tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          Certifications & Courses
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {courses.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
              className="flex items-center gap-3"
            >
              <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>
                ▸
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
              >
                {c}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
