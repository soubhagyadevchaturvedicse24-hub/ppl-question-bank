import { FileText, Layers, BookOpen, Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

/* ── Color helper: hex → rgba string ── */
function ca(hex: string, alpha: number): string {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return `rgba(0, 180, 255, ${alpha})`;
  return `rgba(${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}, ${alpha})`;
}

interface SubjectCardProps {
  abbreviation: string;
  title: string;
  topics: string[];
  questions: number;
  subtopics: number;
  units: number;
  coverage: string;
  color?: string;
  description?: string;
  typeSplit?: { theory: number; numerical: number; application: number };
  difficulty?: { easy: number; medium: number; hard: number }; // legacy, unused
  index?: number;
  onExplore?: () => void;
}

export function SubjectCard({
  abbreviation,
  title,
  topics,
  questions,
  subtopics,
  units,
  coverage,
  color = "#00CCFF",
  description,
  typeSplit,
  index = 0,
  onExplore,
}: SubjectCardProps) {
  const totalSplit = typeSplit ? typeSplit.theory + typeSplit.numerical + typeSplit.application : 0;
  const theoryPct = totalSplit ? (typeSplit!.theory / totalSplit) * 100 : 0;
  const numericalPct = totalSplit ? (typeSplit!.numerical / totalSplit) * 100 : 0;
  const appPct = totalSplit ? (typeSplit!.application / totalSplit) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Gradient border wrapper */}
      <div className="relative p-px rounded-2xl group">
        {/* Border default */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${ca(color, 0.18)}, ${ca(color, 0.07)}, ${ca(color, 0.18)})`,
            opacity: 0.7,
          }}
        />
        {/* Border hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${ca(color, 0.55)}, ${ca(color, 0.22)}, ${ca(color, 0.55)})`,
          }}
        />

        {/* Card inner */}
        <div
          className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(165deg, rgba(13, 25, 55, 0.95), rgba(8, 16, 40, 0.98))",
          }}
        >
          {/* Top accent line — subject color */}
          <div
            className="h-px w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${ca(color, 0.6)}, ${ca(color, 0.25)}, transparent)`,
            }}
          />

          {/* Hover glow — subject color */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 30% 0%, ${ca(color, 0.07)} 0%, transparent 60%)`,
            }}
          />

          <div className="p-5 sm:p-6 flex flex-col h-full relative">
            {/* ── Header: Icon + Title + Description ── */}
            <div className="flex items-start gap-3.5 mb-4">
              {/* Subject icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative mt-0.5"
                style={{
                  background: `linear-gradient(135deg, ${ca(color, 0.28)}, ${ca(color, 0.12)})`,
                  border: `1px solid ${ca(color, 0.32)}`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    boxShadow: `0 0 22px ${ca(color, 0.28)}`,
                    animation: "glow-pulse 3s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-white relative z-10"
                  style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.03em" }}
                >
                  {abbreviation}
                </span>
              </div>

              {/* Title + description */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-white"
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </h3>
                {description && (
                  <p
                    className="mt-1 line-clamp-2"
                    style={{
                      fontSize: "0.71rem",
                      color: "rgba(170, 190, 220, 0.44)",
                      lineHeight: 1.55,
                    }}
                  >
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* ── Topics ── */}
            <ul className="mb-4 space-y-1.5 pl-0.5">
              {topics.slice(0, 3).map((topic, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5"
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(180, 200, 230, 0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${ca(color, 0.75)}, ${ca(color, 0.35)})`,
                    }}
                  />
                  {topic}
                </li>
              ))}
              {topics.length > 3 && (
                <li
                  style={{
                    fontSize: "0.68rem",
                    color: ca(color, 0.5),
                    fontWeight: 500,
                    paddingLeft: "1rem",
                  }}
                >
                  +{topics.length - 3} more topics
                </li>
              )}
            </ul>

            {/* ── Question Types split ── */}
            {typeSplit && totalSplit > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: "rgba(160, 180, 210, 0.38)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 600,
                    }}
                  >
                    Question Types
                  </span>
                  <div className="flex items-center gap-3">
                    {[
                      { label: "Theory", value: typeSplit.theory,      clr: "#22C55E" },
                      { label: "Numerical", value: typeSplit.numerical, clr: "#EAB308" },
                      { label: "Applied", value: typeSplit.application, clr: "#F97316" },
                    ].map((d) => (
                      <span
                        key={d.label}
                        style={{ fontSize: "0.6rem", fontWeight: 600, color: d.clr, opacity: 0.85 }}
                        title={d.label}
                      >
                        {d.label[0]}&thinsp;{d.value}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex h-1 rounded-full overflow-hidden gap-px">
                  <div style={{ width: `${theoryPct}%`,    background: "rgba(34, 197, 94, 0.75)",  borderRadius: "9999px" }} />
                  <div style={{ width: `${numericalPct}%`, background: "rgba(234, 179, 8, 0.75)",  borderRadius: "9999px" }} />
                  <div style={{ width: `${appPct}%`,       background: "rgba(249, 115, 22, 0.75)", borderRadius: "9999px" }} />
                </div>
              </div>
            )}

            {/* ── Stats Row ── */}
            <div
              className="rounded-xl px-1 py-3 mb-5"
              style={{
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="grid grid-cols-4 gap-0">
                {[
                  { icon: FileText, value: questions, label: "Questions" },
                  { icon: Layers, value: subtopics, label: "Subtopics" },
                  { icon: BookOpen, value: units, label: "Units" },
                  { icon: Calendar, value: coverage, label: "Coverage" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1 relative">
                    {i > 0 && (
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.08), transparent)",
                        }}
                      />
                    )}
                    <div className="flex items-center gap-1">
                      <stat.icon size={11} style={{ color: ca(color, 0.7) }} />
                      <span
                        className="text-white"
                        style={{ fontSize: "0.8rem", fontWeight: 600 }}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.58rem",
                        color: "rgba(160, 180, 210, 0.45)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CTA Button ── */}
            <button
              className="w-full py-2.5 rounded-xl text-white cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                background: "linear-gradient(135deg, #0055EE, #0088FF, #00AAFF)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: `0 4px 20px rgba(0, 100, 255, 0.25), 0 0 28px ${ca(color, 0.1)}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                onExplore?.();
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 6px 30px rgba(0, 100, 255, 0.45), 0 0 40px ${ca(color, 0.18)}, inset 0 1px 0 rgba(255, 255, 255, 0.15)`;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px rgba(0, 100, 255, 0.25), 0 0 28px ${ca(color, 0.1)}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s linear infinite",
                }}
              />
              <span className="relative z-10">Browse PYQ Questions</span>
              <ArrowRight
                size={14}
                className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}