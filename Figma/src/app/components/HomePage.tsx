import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Scan,
  FolderTree,
  BarChart3,
  Sparkles,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { SubjectCard } from "./SubjectCard";
import { FeatureCard } from "./FeatureCard";
import { StatsBar } from "./StatsBar";
import { subjects3rd, subjects4th } from "../data/subjects";

/* ───────── DATA ───────── */

const features = [
  {
    icon: <Scan size={18} style={{ color: "rgba(0, 200, 255, 0.9)" }} />,
    title: "Pattern Recognition",
    description:
      "Questions analyzed by frequency, year distribution, and mark allocation to identify consistent examination trends and high-probability topics.",
    step: 1,
  },
  {
    icon: <FolderTree size={18} style={{ color: "rgba(0, 200, 255, 0.9)" }} />,
    title: "Intelligent Organization",
    description:
      "Structured categorization by units and subtopics, with each question classified by priority, difficulty level, and examination frequency.",
    step: 2,
  },
  {
    icon: <BarChart3 size={18} style={{ color: "rgba(0, 200, 255, 0.9)" }} />,
    title: "Evidence-Based Preparation",
    description:
      "Historical exam data enabling focused study on high-yield topics backed by actual examination records across multiple academic years.",
    step: 3,
  },
];

const navLinks = ["Home", "Subjects", "Methodology", "About"];

/* ───────── ACCORDION TOGGLE ───────── */

function AccordionToggle({
  label,
  count,
  isOpen,
  onToggle,
}: {
  label: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.998 }}
      className="w-full flex items-center justify-between py-4 px-5 sm:px-6 rounded-2xl cursor-pointer transition-all duration-400 group/toggle"
      style={{
        background: isOpen
          ? "linear-gradient(135deg, rgba(0, 120, 255, 0.12), rgba(80, 60, 255, 0.06))"
          : "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: isOpen
          ? "1px solid rgba(0, 180, 255, 0.2)"
          : "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: isOpen
          ? "0 0 30px rgba(0, 150, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
          : "inset 0 1px 0 rgba(255, 255, 255, 0.03)",
      }}
      onMouseEnter={(e) => {
        if (!isOpen) {
          e.currentTarget.style.borderColor = "rgba(0, 180, 255, 0.15)";
          e.currentTarget.style.boxShadow =
            "0 0 20px rgba(0, 180, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.04)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isOpen) {
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
          e.currentTarget.style.boxShadow =
            "inset 0 1px 0 rgba(255, 255, 255, 0.03)";
        }
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen
              ? "linear-gradient(135deg, rgba(0, 180, 255, 0.2), rgba(80, 60, 255, 0.15))"
              : "rgba(255, 255, 255, 0.05)",
            border: isOpen
              ? "1px solid rgba(0, 180, 255, 0.2)"
              : "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown
              size={16}
              style={{
                color: isOpen
                  ? "rgba(0, 200, 255, 0.9)"
                  : "rgba(180, 200, 230, 0.5)",
              }}
            />
          </motion.div>
        </div>
        <span
          className="text-white"
          style={{
            fontSize: "0.92rem",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          {label}
        </span>
      </div>

      {/* Count badge */}
      <div
        className="flex items-center gap-1.5 px-3 py-1 rounded-full"
        style={{
          background: isOpen
            ? "rgba(0, 180, 255, 0.12)"
            : "rgba(255, 255, 255, 0.04)",
          border: isOpen
            ? "1px solid rgba(0, 180, 255, 0.15)"
            : "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            color: isOpen
              ? "rgba(0, 200, 255, 0.9)"
              : "rgba(180, 200, 230, 0.5)",
          }}
        >
          {count} Subjects
        </span>
      </div>
    </motion.button>
  );
}

/* ───────── HOMEPAGE ───────── */

export function HomePage() {
  const navigate = useNavigate();
  const [is3rdOpen, setIs3rdOpen] = useState(true);
  const [is4thOpen, setIs4thOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
        background:
          "linear-gradient(165deg, #060d1f 0%, #0B132B 25%, #1C2541 55%, #0B132B 85%, #060d1f 100%)",
      }}
    >
      {/* ═══════ BACKGROUND EFFECTS ═══════ */}

      {/* Mesh pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.3 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="mesh"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(0, 120, 255, 0.04)"
                strokeWidth="0.5"
              />
              <circle
                cx="0"
                cy="0"
                r="1"
                fill="rgba(0, 180, 255, 0.08)"
              />
            </pattern>
            <radialGradient id="meshFade" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="meshMask">
              <rect width="100%" height="100%" fill="url(#meshFade)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#mesh)"
            mask="url(#meshMask)"
          />
        </svg>
      </div>

      {/* Floating gradient orbs */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          top: "5%",
          left: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 80, 255, 0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float-1 20s ease-in-out infinite",
        }}
      />
      <div
        className="fixed pointer-events-none z-0"
        style={{
          top: "40%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(100, 60, 255, 0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "float-2 25s ease-in-out infinite",
        }}
      />
      <div
        className="fixed pointer-events-none z-0"
        style={{
          bottom: "10%",
          left: "30%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 200, 255, 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float-3 22s ease-in-out infinite",
        }}
      />

      {/* ═══════ NAVBAR ═══════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(6, 13, 31, 0.8)"
            : "rgba(6, 13, 31, 0.2)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0, 0, 0, 0.3)"
            : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 150, 255, 0.3), rgba(100, 60, 255, 0.25))",
                border: "1px solid rgba(0, 180, 255, 0.25)",
                boxShadow: "0 0 12px rgba(0, 150, 255, 0.15)",
              }}
            >
              <span
                className="text-white"
                style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.03em" }}
              >
                QI
              </span>
            </div>
            <span
              className="text-white hidden sm:block"
              style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "-0.01em" }}
            >
              Question Intelligence
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                className="px-3.5 py-1.5 rounded-lg cursor-pointer transition-all duration-300"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "rgba(200, 215, 235, 0.6)",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => {
                  if (link === "Home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const ids: Record<string, string> = {
                      Subjects: "subject-library",
                      Methodology: "methodology",
                      About: "footer-section",
                    };
                    document
                      .getElementById(ids[link])
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.95)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(200, 215, 235, 0.6)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg cursor-pointer transition-all duration-300"
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(135deg, #0055EE, #0088FF)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 2px 12px rgba(0, 100, 255, 0.25)",
              }}
              onClick={() => {
                document
                  .getElementById("subject-library")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 100, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(0, 100, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Started
              <ArrowRight size={12} />
            </button>
            <button
              className="md:hidden p-1.5 rounded-lg cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "rgba(200, 215, 235, 0.7)",
              }}
              onClick={() => setMobileNav(!mobileNav)}
            >
              {mobileNav ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(6, 13, 31, 0.95)",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    className="w-full text-left px-3 py-2 rounded-lg cursor-pointer"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "rgba(200, 215, 235, 0.7)",
                      background: "transparent",
                      border: "none",
                    }}
                    onClick={() => {
                      setMobileNav(false);
                      if (link === "Home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const ids: Record<string, string> = {
                          Subjects: "subject-library",
                          Methodology: "methodology",
                          About: "footer-section",
                        };
                        setTimeout(() => {
                          document
                            .getElementById(ids[link])
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }
                    }}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* ───── HERO SECTION ───── */}
        <section className="text-center pt-28 sm:pt-36 pb-12 sm:pb-16 relative">
          {/* Decorative ring */}
          <div
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none hidden sm:block"
            style={{
              border: "1px solid rgba(0, 150, 255, 0.04)",
              animation: "pulse-ring 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-24 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full pointer-events-none hidden sm:block"
            style={{
              border: "1px solid rgba(100, 60, 255, 0.03)",
              animation: "pulse-ring 6s ease-in-out 1s infinite",
            }}
          />

          {/* Floating subject chips — ambient decoration, desktop only */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
            {([
              { text: "DELD", color: "rgba(0,204,255",  x: "7%",  y: "22%", ani: "float-1", dur: "22s", del: "0s"   },
              { text: "OS",   color: "rgba(96,80,255",  x: "87%", y: "16%", ani: "float-2", dur: "26s", del: "3s"   },
              { text: "PPL",  color: "rgba(0,221,170",  x: "12%", y: "63%", ani: "float-3", dur: "24s", del: "6s"   },
              { text: "OOP",  color: "rgba(255,107,107",x: "85%", y: "60%", ani: "float-1", dur: "28s", del: "1.5s" },
              { text: "DAA",  color: "rgba(255,179,71", x: "2%",  y: "43%", ani: "float-2", dur: "20s", del: "4.5s" },
              { text: "DBMS", color: "rgba(52,211,153", x: "90%", y: "38%", ani: "float-3", dur: "23s", del: "7s"   },
              { text: "CSA",  color: "rgba(167,139,250",x: "79%", y: "76%", ani: "float-1", dur: "27s", del: "2s"   },
              { text: "DM",   color: "rgba(244,114,182",x: "23%", y: "79%", ani: "float-2", dur: "21s", del: "5s"   },
            ] as const).map((chip) => (
              <div
                key={chip.text}
                className="absolute"
                style={{ left: chip.x, top: chip.y, animation: `${chip.ani} ${chip.dur} ease-in-out ${chip.del} infinite` }}
              >
                <span
                  style={{
                    display: "block",
                    padding: "3px 9px",
                    borderRadius: "9999px",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: `${chip.color}, 0.35)`,
                    background: `${chip.color}, 0.05)`,
                    border: `1px solid ${chip.color}, 0.12)`,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {chip.text}
                </span>
              </div>
            ))}
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(0, 150, 255, 0.08)",
              border: "1px solid rgba(0, 180, 255, 0.15)",
            }}
          >
            <Sparkles size={13} style={{ color: "rgba(0, 200, 255, 0.8)" }} />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "rgba(0, 210, 255, 0.85)",
                letterSpacing: "0.03em",
              }}
            >
              Powering Smart Exam Preparation
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 relative"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 900,
              background:
                "linear-gradient(90deg, #7eb8ff, #ffffff, #a0e8ff, #ffffff, #7eb8ff)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              animation: "shimmer 8s linear infinite",
            }}
          >
            Question Intelligence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white mb-4"
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)",
              fontWeight: 500,
              letterSpacing: "0.005em",
              lineHeight: 1.4,
            }}
          >
            Curated Insights for High-Probability Exam Success
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-xl mx-auto mb-8"
            style={{
              fontSize: "clamp(0.82rem, 1.5vw, 0.9rem)",
              color: "rgba(170, 190, 220, 0.55)",
              lineHeight: 1.75,
            }}
          >
            A focused platform analyzing previous year questions across multiple
            examination patterns, designed for structured and evidence-based exam
            preparation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl cursor-pointer transition-all duration-300 group/cta"
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(135deg, #0055EE, #0088FF, #00AAFF)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow:
                  "0 4px 25px rgba(0, 100, 255, 0.35), 0 0 60px rgba(0, 100, 255, 0.08)",
              }}
              onClick={() => {
                document
                  .getElementById("subject-library")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 35px rgba(0, 100, 255, 0.5), 0 0 80px rgba(0, 100, 255, 0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 25px rgba(0, 100, 255, 0.35), 0 0 60px rgba(0, 100, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Subjects
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover/cta:translate-x-0.5"
              />
            </button>
            <button
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl cursor-pointer transition-all duration-300"
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "rgba(200, 215, 235, 0.7)",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              onClick={() => {
                document
                  .getElementById("methodology")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.color = "rgba(200, 215, 235, 0.7)";
              }}
            >
              Our Methodology
            </button>
          </motion.div>
        </section>

        {/* ───── STATS BAR ───── */}
        <section className="mb-10 sm:mb-12">
          <StatsBar />
        </section>

        {/* ───── CURRICULUM MAP ───── */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 relative p-px rounded-2xl"
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 180, 255, 0.12), rgba(100, 80, 255, 0.07), rgba(0, 200, 255, 0.12))",
            }}
          />
          <div
            className="relative rounded-2xl px-5 sm:px-7 py-5"
            style={{
              background:
                "linear-gradient(165deg, rgba(13, 25, 55, 0.96), rgba(8, 16, 40, 0.99))",
            }}
          >
            {/* Top accent */}
            <div
              className="h-px w-full absolute top-0 left-0 right-0 rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), rgba(100, 80, 255, 0.15), transparent)",
              }}
            />
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="h-px flex-1 max-w-[50px]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0, 180, 255, 0.18))" }}
              />
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  color: "rgba(0, 200, 255, 0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Curriculum Coverage
              </span>
              <div
                className="h-px flex-1 max-w-[50px]"
                style={{ background: "linear-gradient(90deg, rgba(0, 180, 255, 0.18), transparent)" }}
              />
            </div>

            {/* Two columns */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              {/* 3rd Semester */}
              <div className="flex-1 sm:pr-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "rgba(200, 215, 235, 0.6)",
                    }}
                  >
                    3rd Semester
                  </span>
                  <span
                    className="px-1.5 py-0.5 rounded"
                    style={{
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      color: "rgba(0, 200, 255, 0.7)",
                      background: "rgba(0, 200, 255, 0.08)",
                      border: "1px solid rgba(0, 200, 255, 0.15)",
                    }}
                  >
                    {subjects3rd.length} subjects
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {subjects3rd.map((s) => (
                    <button
                      key={s.abbreviation}
                      onClick={() => {
                        setIs3rdOpen(true);
                        setTimeout(() => {
                          document
                            .getElementById("subject-library")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 50);
                      }}
                      className="cursor-pointer transition-all duration-300"
                      style={{
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: s.color,
                        background: `${s.color}12`,
                        border: `1px solid ${s.color}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${s.color}22`;
                        e.currentTarget.style.borderColor = `${s.color}55`;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${s.color}12`;
                        e.currentTarget.style.borderColor = `${s.color}30`;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {s.abbreviation}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div
                className="hidden sm:block w-px self-stretch"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.07), transparent)",
                }}
              />
              <div
                className="block sm:hidden h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.07), transparent)",
                }}
              />

              {/* 4th Semester */}
              <div className="flex-1 sm:pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "rgba(200, 215, 235, 0.6)",
                    }}
                  >
                    4th Semester
                  </span>
                  <span
                    className="px-1.5 py-0.5 rounded"
                    style={{
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      color: "rgba(100, 80, 255, 0.7)",
                      background: "rgba(100, 80, 255, 0.08)",
                      border: "1px solid rgba(100, 80, 255, 0.15)",
                    }}
                  >
                    {subjects4th.length} subjects
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {subjects4th.map((s) => (
                    <button
                      key={s.abbreviation}
                      onClick={() => {
                        setIs4thOpen(true);
                        setTimeout(() => {
                          document
                            .getElementById("subject-library")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 50);
                      }}
                      className="cursor-pointer transition-all duration-300"
                      style={{
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: s.color,
                        background: `${s.color}12`,
                        border: `1px solid ${s.color}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${s.color}22`;
                        e.currentTarget.style.borderColor = `${s.color}55`;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${s.color}12`;
                        e.currentTarget.style.borderColor = `${s.color}30`;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {s.abbreviation}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ───── SECTION HEADING ───── */}
        <motion.div
          id="subject-library"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0, 180, 255, 0.15), transparent)",
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "rgba(0, 200, 255, 0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Subject Library
          </span>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0, 180, 255, 0.15), transparent)",
            }}
          />
        </motion.div>

        {/* ───── ACCORDION: 3rd Semester ───── */}
        <section className="mb-4">
          <AccordionToggle
            label="3rd Semester Subjects"
            count={subjects3rd.length}
            isOpen={is3rdOpen}
            onToggle={() => setIs3rdOpen(!is3rdOpen)}
          />
          <AnimatePresence>
            {is3rdOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                  {subjects3rd.map((subject, i) => (
                    <SubjectCard
                      key={subject.abbreviation}
                      {...subject}
                      index={i}
                      onExplore={() =>
                        navigate(`/subject/${subject.abbreviation.toLowerCase()}`)
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ───── ACCORDION: 4th Semester ───── */}
        <section className="mb-16 sm:mb-20">
          <AccordionToggle
            label="4th Semester Subjects"
            count={subjects4th.length}
            isOpen={is4thOpen}
            onToggle={() => setIs4thOpen(!is4thOpen)}
          />
          <AnimatePresence>
            {is4thOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                  {subjects4th.map((subject, i) => (
                    <SubjectCard
                      key={subject.abbreviation}
                      {...subject}
                      index={i}
                      onExplore={() =>
                        navigate(`/subject/${subject.abbreviation.toLowerCase()}`)
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ───── OUR APPROACH ───── */}
        <section id="methodology" className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0, 180, 255, 0.2))",
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "rgba(0, 200, 255, 0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Methodology
              </span>
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 180, 255, 0.2), transparent)",
                }}
              />
            </div>
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
              }}
            >
              Our Approach
            </h2>
            <p
              className="mt-3 max-w-lg mx-auto"
              style={{
                fontSize: "0.82rem",
                color: "rgba(170, 190, 220, 0.5)",
                lineHeight: 1.6,
              }}
            >
              Three pillars of intelligent exam preparation, refined through years
              of academic pattern analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </section>

        {/* ───── BOTTOM CTA BAND ───── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 relative p-px rounded-2xl"
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 120, 255, 0.25), rgba(100, 60, 255, 0.15), rgba(0, 200, 255, 0.25))",
            }}
          />
          <div
            className="relative rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(165deg, rgba(13, 25, 55, 0.97), rgba(10, 18, 45, 0.99))",
            }}
          >
            {/* Decorative glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(0, 100, 255, 0.06) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.3), rgba(100, 80, 255, 0.2), transparent)",
              }}
            />

            <h3
              className="text-white mb-3 relative"
              style={{
                fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Ready to Study Smarter?
            </h3>
            <p
              className="mb-6 max-w-md mx-auto relative"
              style={{
                fontSize: "0.82rem",
                color: "rgba(170, 190, 220, 0.55)",
                lineHeight: 1.65,
              }}
            >
              Access our comprehensive question bank with intelligent analysis
              across all semesters and subjects.
            </p>
            <button
              className="relative inline-flex items-center gap-2 px-7 py-2.5 rounded-xl cursor-pointer transition-all duration-300 group/final"
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(135deg, #0055EE, #0088FF, #00AAFF)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow:
                  "0 4px 25px rgba(0, 100, 255, 0.35), 0 0 60px rgba(0, 100, 255, 0.08)",
              }}
              onClick={() => {
                document
                  .getElementById("subject-library")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 35px rgba(0, 100, 255, 0.5), 0 0 80px rgba(0, 100, 255, 0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 25px rgba(0, 100, 255, 0.35), 0 0 60px rgba(0, 100, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start Exploring
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover/final:translate-x-0.5"
              />
            </button>
          </div>
        </motion.section>

        {/* ───── FOOTER ───── */}
        <footer id="footer-section" className="pb-8">
          <div
            className="h-px w-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent)",
            }}
          />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 150, 255, 0.2), rgba(100, 60, 255, 0.15))",
                  border: "1px solid rgba(0, 180, 255, 0.15)",
                }}
              >
                <span
                  className="text-white"
                  style={{ fontSize: "0.5rem", fontWeight: 800 }}
                >
                  QI
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(160, 180, 210, 0.35)",
                  fontWeight: 500,
                }}
              >
                Question Intelligence Platform
              </span>
            </div>
            <p
              style={{
                fontSize: "0.68rem",
                color: "rgba(160, 180, 210, 0.3)",
                letterSpacing: "0.02em",
              }}
            >
              Academic Year 2024-2026
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
