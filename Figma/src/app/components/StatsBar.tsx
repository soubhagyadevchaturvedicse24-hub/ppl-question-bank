import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { FileText, BookOpen, Clock, Target } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: FileText,
    value: 1123,
    suffix: "+",
    label: "Total Questions",
    color: "#00BBFF",
  },
  {
    icon: BookOpen,
    value: 8,
    suffix: "",
    label: "Subjects Covered",
    color: "#6050FF",
  },
  {
    icon: Clock,
    value: 5,
    suffix: " Yrs",
    label: "Year Coverage",
    color: "#00DDCC",
  },
  {
    icon: Target,
    value: 283,
    suffix: "+",
    label: "Subtopics Mapped",
    color: "#3388FF",
  },
];

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-px rounded-2xl mx-auto max-w-3xl"
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 180, 255, 0.22), rgba(100, 80, 255, 0.12), rgba(0, 200, 255, 0.22))",
        }}
      />

      {/* Inner card */}
      <div
        className="relative rounded-2xl px-4 sm:px-8 pt-4 pb-5 sm:pt-5 sm:pb-6"
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
              "linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.35), rgba(100, 80, 255, 0.25), transparent)",
          }}
        />

        {/* Center glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 120%, rgba(0, 130, 255, 0.05) 0%, transparent 60%)",
          }}
        />

        {/* Header label */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0, 180, 255, 0.2))",
            }}
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
            Platform Statistics
          </span>
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 180, 255, 0.2), transparent)",
            }}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center justify-center relative"
            >
              {i > 0 && (
                <div
                  className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.08), transparent)",
                  }}
                />
              )}
              <div className="flex items-center gap-3">
                {/* Icon box */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}28, ${stat.color}12)`,
                    border: `1px solid ${stat.color}30`,
                    boxShadow: `0 0 18px ${stat.color}18`,
                  }}
                >
                  <stat.icon size={17} style={{ color: stat.color, opacity: 0.9 }} />
                </div>
                {/* Text */}
                <div className="flex flex-col">
                  <span
                    className="text-white"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.15,
                    }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span
                    style={{
                      fontSize: "0.62rem",
                      color: "rgba(160, 180, 210, 0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
