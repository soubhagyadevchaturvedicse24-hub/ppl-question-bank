import type { ReactNode } from "react";
import { motion } from "motion/react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  step: number;
  index?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  step,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="relative p-px rounded-2xl group"
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-40 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 180, 255, 0.2), rgba(100, 80, 255, 0.1), rgba(0, 220, 255, 0.2))",
        }}
      />

      {/* Inner card */}
      <div
        className="relative rounded-2xl p-6 sm:p-7 transition-all duration-500 group-hover:-translate-y-1 h-full"
        style={{
          background:
            "linear-gradient(165deg, rgba(13, 25, 55, 0.95), rgba(8, 16, 40, 0.98))",
        }}
      >
        {/* Top accent */}
        <div
          className="h-px w-full absolute top-0 left-0 right-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), transparent)",
          }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0, 180, 255, 0.04) 0%, transparent 60%)",
          }}
        />

        {/* Step number */}
        <div
          className="absolute top-5 right-5 sm:top-6 sm:right-6"
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            lineHeight: 1,
            background:
              "linear-gradient(135deg, rgba(0, 180, 255, 0.08), rgba(100, 80, 255, 0.05))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          0{step}
        </div>

        <div className="relative">
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 180, 255, 0.2), rgba(80, 60, 255, 0.15))",
              border: "1px solid rgba(0, 180, 255, 0.2)",
            }}
          >
            <div
              className="absolute inset-0 rounded-xl opacity-60"
              style={{
                boxShadow: "0 0 15px rgba(0, 180, 255, 0.15)",
              }}
            />
            <div className="relative z-10">{icon}</div>
          </div>

          <h4
            className="text-white mb-2.5"
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(170, 190, 220, 0.6)",
              lineHeight: 1.7,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
