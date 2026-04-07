"use client";

import {
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// ─── frame list ────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 64;
const getFramePath = (i: number) => {
  const pad = String(i).padStart(3, "0");
  return `/sequence/frame_${pad}.png`;
};

// ─── Overlay text panels ───────────────────────────────────────────────────────
function OverlayText({
  progress,
  start,
  end,
  align,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  align: "left" | "center" | "right";
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, [start - 0.08, start, end, end + 0.08], [0, 1, 1, 0]);
  const y = useTransform(progress, [start - 0.08, start, end, end + 0.08], [40, 0, 0, -40]);

  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2 text-center"
      : align === "left"
      ? "left-8 md:left-16 text-left"
      : "right-8 md:right-16 text-right";

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute bottom-20 md:bottom-28 z-20 max-w-xl ${alignClass}`}
    >
      {children}
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── Preload all frames ────────────────────────────────────────────────────
  useEffect(() => {
    const loaded: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        count++;
        if (count === TOTAL_FRAMES) {
          // draw first frame once everything is ready
          drawFrame(0);
        }
      };
      loaded.push(img);
    }
    imagesRef.current = loaded;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Draw a specific frame with cover logic ────────────────────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // ─── Handle canvas resize ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.max(0, lastFrameRef.current));
    };

    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [drawFrame]);

  // ─── Scroll → frame ───────────────────────────────────────────────────────
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (val) => {
      const rawIndex = Math.round(val * (TOTAL_FRAMES - 1));
      const index = Math.max(0, Math.min(TOTAL_FRAMES - 1, rawIndex));
      if (index !== lastFrameRef.current) {
        lastFrameRef.current = index;
        drawFrame(index);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, drawFrame]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "500vh" }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: "#0a0a0a" }}
        />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.7) 100%)",
          }}
        />

        {/* ── Overlay: Section 1 (0–25%) ── */}
        <OverlayText progress={scrollYProgress} start={0} end={0.22} align="center">
          <p
            className="text-[0.6rem] tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            AI Engineer & Data Scientist
          </p>
          <h1
            className="text-5xl md:text-7xl font-800 leading-none"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Hamad
            <br />
            <span style={{ color: "var(--accent)" }}>Ur Rehman</span>
          </h1>
          <p
            className="mt-4 text-xs tracking-widest text-[#666666]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            MSc Data Science · Liverpool John Moores
          </p>
        </OverlayText>

        {/* ── Overlay: Section 2 (28–52%) ── */}
        <OverlayText progress={scrollYProgress} start={0.28} end={0.52} align="left">
          <p
            className="text-[0.55rem] tracking-[0.3em] uppercase mb-2"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            What I do
          </p>
          <h2
            className="text-3xl md:text-5xl font-700 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            I build intelligent
            <br />
            systems that{" "}
            <span style={{ color: "var(--accent)" }}>learn.</span>
          </h2>
          <p
            className="mt-3 text-xs leading-relaxed max-w-xs"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
          >
            RAG pipelines · LLM fine-tuning · end-to-end ML
          </p>
        </OverlayText>

        {/* ── Overlay: Section 3 (58–82%) ── */}
        <OverlayText progress={scrollYProgress} start={0.58} end={0.82} align="right">
          <p
            className="text-[0.55rem] tracking-[0.3em] uppercase mb-2"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            The intersection
          </p>
          <h2
            className="text-3xl md:text-5xl font-700 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Where data meets
            <br />
            <span style={{ color: "var(--accent)" }}>design</span> meets
            <br />
            engineering.
          </h2>
          <p
            className="mt-3 text-xs leading-relaxed max-w-xs ml-auto"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
          >
            1 year professional experience · 3 live products
          </p>
        </OverlayText>

        {/* ── Overlay: Section 4 (88–100%) ── */}
        <OverlayText progress={scrollYProgress} start={0.88} end={1.0} align="center">
          <p
            className="text-[0.55rem] tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            Let&apos;s go deeper
          </p>
          <h2
            className="text-2xl md:text-4xl font-700"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Scroll to explore the work ↓
          </h2>
        </OverlayText>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] z-30"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
            background: "var(--accent)",
          }}
        />
      </div>
    </section>
  );
}
