import { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import {
  getSubjectByAbbreviation,
  getOtherSubjects,
} from "../data/subjects";
import {
  getQuestionsForSubject,
  type Question,
} from "../data/questions";

/* ═══════════════════════════════════
   TYPES & HELPERS
   ═══════════════════════════════════ */

interface GroupedSubtopic {
  key: string;
  name: string;
  questions: Question[];
}

interface GroupedUnit {
  unitNum: number;
  name: string;
  subtopics: GroupedSubtopic[];
}

function groupQuestions(questions: Question[]): GroupedUnit[] {
  const unitMap = new Map<number, { name: string; topicMap: Map<string, Question[]> }>();

  for (const q of questions) {
    if (!unitMap.has(q.unit)) {
      unitMap.set(q.unit, { name: q.unitName, topicMap: new Map() });
    }
    const unit = unitMap.get(q.unit)!;
    if (!unit.topicMap.has(q.topic)) {
      unit.topicMap.set(q.topic, []);
    }
    unit.topicMap.get(q.topic)!.push(q);
  }

  const result: GroupedUnit[] = [];
  const sortedUnits = [...unitMap.entries()].sort((a, b) => a[0] - b[0]);

  for (const [unitNum, { name, topicMap }] of sortedUnits) {
    const subtopics: GroupedSubtopic[] = [];
    let stIdx = 1;
    for (const [topicName, qs] of topicMap.entries()) {
      subtopics.push({
        key: `${unitNum}.${stIdx}`,
        name: topicName,
        questions: qs,
      });
      stIdx++;
    }
    result.push({ unitNum, name, subtopics });
  }
  return result;
}

function getPriority(marks: number): "high" | "medium" | "low" {
  if (marks >= 7) return "high";
  if (marks >= 4) return "medium";
  return "low";
}

function loadProgress(key: string): Record<string, boolean> {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveProgressData(key: string, data: Record<string, boolean>) {
  localStorage.setItem(key, JSON.stringify(data));
}

/* ═══════════════════════════════════
   META BADGE COMPONENTS
   ═══════════════════════════════════ */

function PriorityBadge({ priority }: { priority: "high" | "medium" | "low" }) {
  if (priority === "high")
    return (
      <span
        className="meta-badge"
        style={{
          background: "rgba(239, 68, 68, 0.2)",
          color: "#fca5a5",
          border: "1px solid rgba(239, 68, 68, 0.4)",
          fontWeight: 700,
          boxShadow: "0 0 8px rgba(239, 68, 68, 0.2)",
        }}
        title="High Priority"
      >
        HIGH
      </span>
    );
  if (priority === "medium")
    return (
      <span
        className="meta-badge"
        style={{
          background: "rgba(245, 158, 11, 0.15)",
          color: "#fcd34d",
          border: "1px solid rgba(245, 158, 11, 0.3)",
        }}
        title="Medium Priority"
      >
        MED
      </span>
    );
  return null;
}

function MarksBadge({ marks }: { marks: number }) {
  return (
    <span
      className="meta-badge"
      style={{
        background: "rgba(56, 189, 248, 0.15)",
        color: "#7dd3fc",
        border: "1px solid rgba(56, 189, 248, 0.25)",
        fontWeight: 700,
      }}
      title={`${marks} marks`}
    >
      {marks}M
    </span>
  );
}

function YearBadge({ years }: { years: string[] }) {
  if (!years || years.length === 0) return null;
  const first = years[0];
  const extra = years.length - 1;
  return (
    <span
      className="meta-badge"
      style={{
        background: "rgba(139, 92, 246, 0.15)",
        color: "#c4b5fd",
        border: "1px solid rgba(139, 92, 246, 0.25)",
      }}
      title={years.join(", ")}
    >
      {first}{extra > 0 ? ` +${extra}` : ""}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const cfg: Record<string, { bg: string; color: string; border: string }> = {
    theory:      { bg: "rgba(34, 197, 94, 0.15)",  color: "#86efac", border: "rgba(34, 197, 94, 0.3)" },
    numerical:   { bg: "rgba(234, 179, 8, 0.15)",  color: "#fde047", border: "rgba(234, 179, 8, 0.3)" },
    application: { bg: "rgba(249, 115, 22, 0.15)", color: "#fdba74", border: "rgba(249, 115, 22, 0.3)" },
  };
  const c = cfg[type] || cfg.theory;
  return (
    <span
      className="meta-badge"
      style={{
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.border}`,
        textTransform: "uppercase",
      }}
      title={type}
    >
      {type}
    </span>
  );
}

/* ═══════════════════════════════════
   QUESTION ITEM
   ═══════════════════════════════════ */

function QuestionItem({
  question,
  isCompleted,
  onToggle,
}: {
  question: Question;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}) {
  const priority = question.priority;
  return (
    <div
      className="question-item"
      style={{
        background: isCompleted
          ? "rgba(16, 185, 129, 0.1)"
          : "rgba(255, 255, 255, 0.04)",
        border: isCompleted
          ? "1px solid rgba(16, 185, 129, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 10,
        padding: "0.65rem 0.85rem",
        marginBottom: "0.5rem",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (!isCompleted) {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isCompleted
          ? "rgba(16, 185, 129, 0.1)"
          : "rgba(255, 255, 255, 0.04)";
        e.currentTarget.style.borderColor = isCompleted
          ? "rgba(16, 185, 129, 0.3)"
          : "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "1rem",
          alignItems: "start",
        }}
      >
        {/* Left: checkbox + ID + text */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", minWidth: 0 }}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggle(question.id)}
            style={{
              width: 18,
              height: 18,
              cursor: "pointer",
              marginTop: "0.2rem",
              accentColor: "#38bdf8",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#38bdf8",
              padding: "0.125rem 0.5rem",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: 4,
              flexShrink: 0,
              alignSelf: "flex-start",
              whiteSpace: "nowrap",
            }}
          >
            {question.id.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.5,
              color: "rgba(255, 255, 255, 0.95)",
              flex: 1,
              minWidth: 0,
              wordWrap: "break-word",
              whiteSpace: "pre-line",
            }}
          >
            {question.text}
            {question.parts && question.parts.length > 0 && (
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
                {question.parts.map((p, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(200, 215, 235, 0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    ({String.fromCharCode(97 + i)}) {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right: meta badges */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
            alignItems: "flex-end",
            flexShrink: 0,
            maxWidth: 200,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.25rem",
              justifyContent: "flex-end",
            }}
          >
            <PriorityBadge priority={priority} />
            <MarksBadge marks={question.marks} />
            <TypeBadge type={question.type} />
            <YearBadge years={question.years} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   SUBTOPIC SECTION
   ═══════════════════════════════════ */

function SubtopicSection({
  subtopic,
  unitNum,
  progress,
  onToggleQuestion,
  onToggleAllInSubtopic,
  isExpanded,
  onToggleExpand,
  searchQuery,
  yearFilter,
  priorityFilter,
}: {
  subtopic: GroupedSubtopic;
  unitNum: number;
  progress: Record<string, boolean>;
  onToggleQuestion: (id: string) => void;
  onToggleAllInSubtopic: (ids: string[], checked: boolean) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  searchQuery: string;
  yearFilter: string;
  priorityFilter: string;
}) {
  const filteredQs = subtopic.questions.filter((q) => {
    const matchSearch =
      !searchQuery ||
      q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchYear = yearFilter === "all" || q.year === yearFilter;
    const matchPriority =
      priorityFilter === "all" || q.priority === priorityFilter;
    return matchSearch && matchYear && matchPriority;
  });

  if (filteredQs.length === 0) return null;

  const totalQs = filteredQs.length;
  const completedQs = filteredQs.filter((q) => progress[q.id]).length;
  const allChecked = completedQs === totalQs && totalQs > 0;

  return (
    <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
      {/* Subtopic Header */}
      <div
        onClick={onToggleExpand}
        style={{
          padding: "1rem 1.5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "background-color 0.2s ease",
          userSelect: "none",
          background: isExpanded ? "rgba(56, 189, 248, 0.06)" : "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isExpanded
            ? "rgba(56, 189, 248, 0.06)"
            : "rgba(255, 255, 255, 0.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isExpanded
            ? "rgba(56, 189, 248, 0.06)"
            : "transparent";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={(e) => {
              e.stopPropagation();
              onToggleAllInSubtopic(
                filteredQs.map((q) => q.id),
                !allChecked
              );
            }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 16,
              height: 16,
              cursor: "pointer",
              accentColor: "#38bdf8",
            }}
          />
          <span
            style={{
              fontWeight: 500,
              fontSize: "0.9375rem",
              color: "rgba(255, 255, 255, 0.95)",
            }}
          >
            {subtopic.key}: {subtopic.name}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              color: "rgba(255, 255, 255, 0.55)",
              minWidth: 110,
              textAlign: "right",
            }}
          >
            {totalQs} Questions | {completedQs} Done
          </span>
          <span
            style={{
              fontSize: "1.2rem",
              transition: "transform 0.3s ease",
              color: "#38bdf8",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            &#9660;
          </span>
        </div>
      </div>

      {/* Subtopic Content */}
      {isExpanded && (
        <div style={{ padding: "1rem 1.5rem 1.5rem", background: "rgba(0, 0, 0, 0.15)" }}>
          {filteredQs.map((q) => (
            <QuestionItem
              key={q.id}
              question={q}
              isCompleted={!!progress[q.id]}
              onToggle={onToggleQuestion}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════
   UNIT SECTION
   ═══════════════════════════════════ */

function UnitSection({
  unit,
  progress,
  onToggleQuestion,
  onToggleAllInUnit,
  onToggleAllInSubtopic,
  expandedUnits,
  expandedSubtopics,
  onToggleUnitExpand,
  onToggleSubtopicExpand,
  searchQuery,
  yearFilter,
  priorityFilter,
}: {
  unit: GroupedUnit;
  progress: Record<string, boolean>;
  onToggleQuestion: (id: string) => void;
  onToggleAllInUnit: (ids: string[], checked: boolean) => void;
  onToggleAllInSubtopic: (ids: string[], checked: boolean) => void;
  expandedUnits: Set<number>;
  expandedSubtopics: Set<string>;
  onToggleUnitExpand: (unitNum: number) => void;
  onToggleSubtopicExpand: (key: string) => void;
  searchQuery: string;
  yearFilter: string;
  priorityFilter: string;
}) {
  // Check if any subtopic has visible questions
  const hasVisibleQuestions = unit.subtopics.some((st) =>
    st.questions.some((q) => {
      const matchSearch =
        !searchQuery ||
        q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchQuery.toLowerCase());
      const matchYear = yearFilter === "all" || q.year === yearFilter;
      const matchPriority =
        priorityFilter === "all" || q.priority === priorityFilter;
      return matchSearch && matchYear && matchPriority;
    })
  );

  if (!hasVisibleQuestions) return null;

  const allQIds = unit.subtopics.flatMap((st) => st.questions.map((q) => q.id));
  const totalQs = allQIds.length;
  const completedQs = allQIds.filter((id) => progress[id]).length;
  const allChecked = completedQs === totalQs && totalQs > 0;
  const isExpanded = expandedUnits.has(unit.unitNum);

  return (
    <div
      style={{
        marginBottom: "1.5rem",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: 16,
        background: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
      }}
    >
      {/* Unit Header */}
      <div
        onClick={() => onToggleUnitExpand(unit.unitNum)}
        style={{
          background: isExpanded
            ? "rgba(56, 189, 248, 0.18)"
            : "rgba(56, 189, 248, 0.06)",
          padding: "1.25rem 1.5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "background-color 0.2s ease",
          userSelect: "none",
          borderBottom: isExpanded
            ? "1px solid rgba(56, 189, 248, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.12)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isExpanded
            ? "rgba(56, 189, 248, 0.18)"
            : "rgba(56, 189, 248, 0.06)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={(e) => {
              e.stopPropagation();
              onToggleAllInUnit(allQIds, !allChecked);
            }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 18,
              height: 18,
              cursor: "pointer",
              accentColor: "#38bdf8",
            }}
          />
          <strong
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.95)",
            }}
          >
            Unit {unit.unitNum}: {unit.name}
          </strong>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.875rem",
              color: "rgba(255, 255, 255, 0.55)",
              minWidth: 100,
              textAlign: "right",
            }}
          >
            {unit.subtopics.length} Subtopics | {totalQs} Qs | {completedQs} Done
          </span>
          <span
            style={{
              fontSize: "1.2rem",
              transition: "transform 0.3s ease",
              color: "#38bdf8",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            &#9660;
          </span>
        </div>
      </div>

      {/* Unit Content */}
      {isExpanded && (
        <div>
          {unit.subtopics.map((st) => (
            <SubtopicSection
              key={st.key}
              subtopic={st}
              unitNum={unit.unitNum}
              progress={progress}
              onToggleQuestion={onToggleQuestion}
              onToggleAllInSubtopic={onToggleAllInSubtopic}
              isExpanded={expandedSubtopics.has(`${unit.unitNum}-${st.key}`)}
              onToggleExpand={() =>
                onToggleSubtopicExpand(`${unit.unitNum}-${st.key}`)
              }
              searchQuery={searchQuery}
              yearFilter={yearFilter}
              priorityFilter={priorityFilter}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════
   MAIN SUBJECT PAGE
   ═══════════════════════════════════ */

export function SubjectPage() {
  const { abbreviation } = useParams<{ abbreviation: string }>();
  const navigate = useNavigate();

  const subject = getSubjectByAbbreviation(abbreviation || "");
  const allQuestions = useMemo(
    () => getQuestionsForSubject(abbreviation || ""),
    [abbreviation]
  );
  const grouped = useMemo(() => groupQuestions(allQuestions), [allQuestions]);
  const otherSubjects = useMemo(
    () => getOtherSubjects(abbreviation || ""),
    [abbreviation]
  );

  // Year options
  const yearOptions = useMemo(() => {
    const years = [...new Set(allQuestions.map((q) => q.year))];
    return years.sort((a, b) => b.localeCompare(a));
  }, [allQuestions]);

  // State
  const storageKey = `${abbreviation?.toUpperCase()}_question_progress`;
  const [progress, setProgress] = useState<Record<string, boolean>>(() =>
    loadProgress(storageKey)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [unitFilter, setUnitFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [expandedUnits, setExpandedUnits] = useState<Set<number>>(
    () => new Set(grouped.length > 0 ? [grouped[0].unitNum] : [])
  );
  const [expandedSubtopics, setExpandedSubtopics] = useState<Set<string>>(
    new Set()
  );
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Computed stats
  const totalQuestions = allQuestions.length;
  const completedQuestions = useMemo(
    () => Object.values(progress).filter((v) => v === true).length,
    [progress]
  );
  const progressPercent =
    totalQuestions > 0
      ? Math.round((completedQuestions / totalQuestions) * 100)
      : 0;

  // Reset when subject changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const newProgress = loadProgress(
      `${abbreviation?.toUpperCase()}_question_progress`
    );
    setProgress(newProgress);
    setSearchQuery("");
    setUnitFilter("all");
    setPriorityFilter("all");
    setYearFilter("all");
    setExpandedUnits(new Set(grouped.length > 0 ? [grouped[0].unitNum] : []));
    setExpandedSubtopics(new Set());
    setMobileSidebarOpen(false);
  }, [abbreviation, grouped]);

  // Toggle handlers
  const toggleQuestion = useCallback(
    (id: string) => {
      setProgress((prev) => {
        const next = { ...prev, [id]: !prev[id] };
        saveProgressData(storageKey, next);
        return next;
      });
    },
    [storageKey]
  );

  const toggleBulk = useCallback(
    (ids: string[], checked: boolean) => {
      setProgress((prev) => {
        const next = { ...prev };
        for (const id of ids) next[id] = checked;
        saveProgressData(storageKey, next);
        return next;
      });
    },
    [storageKey]
  );

  const toggleUnitExpand = useCallback((unitNum: number) => {
    setExpandedUnits((prev) => {
      const next = new Set(prev);
      if (next.has(unitNum)) next.delete(unitNum);
      else next.add(unitNum);
      return next;
    });
  }, []);

  const toggleSubtopicExpand = useCallback((key: string) => {
    setExpandedSubtopics((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setExpandedUnits(new Set(grouped.map((u) => u.unitNum)));
    const allSt = new Set<string>();
    for (const u of grouped)
      for (const st of u.subtopics) allSt.add(`${u.unitNum}-${st.key}`);
    setExpandedSubtopics(allSt);
  }, [grouped]);

  const collapseAll = useCallback(() => {
    setExpandedUnits(new Set());
    setExpandedSubtopics(new Set());
  }, []);

  const resetProgress = useCallback(() => {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      setProgress({});
      saveProgressData(storageKey, {});
    }
  }, [storageKey]);

  // Filter which units to show
  const filteredGrouped = useMemo(() => {
    if (unitFilter === "all") return grouped;
    const num = parseInt(unitFilter.replace("Unit ", ""), 10);
    return grouped.filter((u) => u.unitNum === num);
  }, [grouped, unitFilter]);

  // Auto-expand when filtering
  useEffect(() => {
    if (searchQuery || unitFilter !== "all" || priorityFilter !== "all" || yearFilter !== "all") {
      setExpandedUnits(new Set(filteredGrouped.map((u) => u.unitNum)));
      const allSt = new Set<string>();
      for (const u of filteredGrouped)
        for (const st of u.subtopics) allSt.add(`${u.unitNum}-${st.key}`);
      setExpandedSubtopics(allSt);
    }
  }, [searchQuery, unitFilter, priorityFilter, yearFilter, filteredGrouped]);

  /* ── NOT FOUND ── */
  if (!subject) {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center"
        style={{
          fontFamily: "'Inter', sans-serif",
          background:
            "linear-gradient(135deg, #0f0c29 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
          color: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <div className="text-center">
          <h1 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
            Subject Not Found
          </h1>
          <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            The subject you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer"
            style={{
              padding: "0.5rem 1.5rem",
              borderRadius: 8,
              background: "rgba(56, 189, 248, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              color: "rgba(255, 255, 255, 0.95)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
        background:
          "linear-gradient(135deg, #0f0c29 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "rgba(255, 255, 255, 0.95)",
        lineHeight: 1.6,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ═══════ STICKY HEADER ═══════ */}
      <header
        style={{
          background: "rgba(15, 12, 41, 0.75)",
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          flexWrap: "wrap",
        }}
      >
        {/* Left: Back + Title */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.35rem 0.6rem",
                borderRadius: 6,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "rgba(255, 255, 255, 0.7)",
                cursor: "pointer",
                fontSize: "0.75rem",
                fontWeight: 500,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.95)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
              }}
            >
              <ArrowLeft size={13} /> Home
            </button>
            <div>
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "rgba(255, 255, 255, 0.95)",
                }}
              >
                {subject.title.split("(")[0].trim()}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255, 255, 255, 0.55)",
                  fontWeight: 400,
                }}
              >
                {subject.abbreviation} &bull; Question Bank
              </div>
            </div>
          </div>
        </div>

        {/* Center: Progress bar */}
        <div
          style={{
            flex: 1,
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              height: 6,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                transition: "width 0.3s ease",
                borderRadius: 3,
                width: `${progressPercent}%`,
              }}
            />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "rgba(255, 255, 255, 0.55)",
              textAlign: "center",
            }}
          >
            {completedQuestions} of {totalQuestions} completed
          </div>
        </div>

        {/* Right: Stats */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#38bdf8",
                marginBottom: "0.125rem",
              }}
            >
              {completedQuestions}
            </div>
            <div
              style={{
                fontSize: "0.6875rem",
                color: "rgba(255, 255, 255, 0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 500,
              }}
            >
              Completed
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#38bdf8",
                marginBottom: "0.125rem",
              }}
            >
              {totalQuestions}
            </div>
            <div
              style={{
                fontSize: "0.6875rem",
                color: "rgba(255, 255, 255, 0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 500,
              }}
            >
              Total
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#38bdf8",
                marginBottom: "0.125rem",
              }}
            >
              {progressPercent}%
            </div>
            <div
              style={{
                fontSize: "0.6875rem",
                color: "rgba(255, 255, 255, 0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 500,
              }}
            >
              Progress
            </div>
          </div>
        </div>

        {/* Mobile hamburger for sidebar */}
        <button
          className="cursor-pointer"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          style={{
            display: "none",
            padding: "0.4rem 0.6rem",
            borderRadius: 6,
            background: "rgba(56, 189, 248, 0.15)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            color: "rgba(255, 255, 255, 0.9)",
            cursor: "pointer",
            fontSize: "0.75rem",
            fontWeight: 500,
          }}
          id="mobile-sidebar-toggle"
        >
          Filters
        </button>
      </header>

      {/* ═══════ MAIN LAYOUT ═══════ */}
      <div
        style={{ display: "flex", flex: 1, overflow: "hidden" }}
        className="main-layout-qb"
      >
        {/* ── SIDEBAR ── */}
        <aside
          className="sidebar-qb"
          style={{
            width: 280,
            background: "rgba(15, 12, 41, 0.5)",
            borderRight: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "1.5rem",
            overflowY: "auto",
            flexShrink: 0,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          {/* Search */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "rgba(56, 189, 248, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.6rem",
              }}
            >
              Search
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              style={{
                width: "100%",
                padding: "0.5rem 0.75rem",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 8,
                fontSize: "0.875rem",
                background: "rgba(255, 255, 255, 0.06)",
                color: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                outline: "none",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#38bdf8";
                e.target.style.boxShadow = "0 0 0 3px rgba(56, 189, 248, 0.25)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Filters */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "rgba(56, 189, 248, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.6rem",
              }}
            >
              Filters
            </div>

            {/* Unit Filter */}
            <div style={{ marginBottom: "0.75rem" }}>
              <label
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.55)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Unit
              </label>
              <select
                value={unitFilter}
                onChange={(e) => setUnitFilter(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  background: "rgba(255, 255, 255, 0.06)",
                  color: "rgba(255, 255, 255, 0.95)",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="all" style={{ background: "#1a1a2e" }}>
                  All Units
                </option>
                {grouped.map((u) => (
                  <option
                    key={u.unitNum}
                    value={`Unit ${u.unitNum}`}
                    style={{ background: "#1a1a2e" }}
                  >
                    Unit {u.unitNum}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority Filter */}
            <div style={{ marginBottom: "0.75rem" }}>
              <label
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.55)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Priority
              </label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  background: "rgba(255, 255, 255, 0.06)",
                  color: "rgba(255, 255, 255, 0.95)",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="all" style={{ background: "#1a1a2e" }}>
                  All Priorities
                </option>
                <option value="high" style={{ background: "#1a1a2e" }}>
                  High
                </option>
                <option value="medium" style={{ background: "#1a1a2e" }}>
                  Medium
                </option>
                <option value="low" style={{ background: "#1a1a2e" }}>
                  Low
                </option>
              </select>
            </div>

            {/* Year Filter */}
            <div style={{ marginBottom: "0.75rem" }}>
              <label
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.55)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Year
              </label>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  background: "rgba(255, 255, 255, 0.06)",
                  color: "rgba(255, 255, 255, 0.95)",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="all" style={{ background: "#1a1a2e" }}>
                  All Years
                </option>
                {yearOptions.map((y) => (
                  <option key={y} value={y} style={{ background: "#1a1a2e" }}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Actions */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "rgba(56, 189, 248, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.6rem",
              }}
            >
              Actions
            </div>
            <button
              onClick={expandAll}
              className="cursor-pointer"
              style={{
                width: "100%",
                padding: "0.5rem 0.75rem",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: 8,
                fontSize: "0.875rem",
                background: "rgba(56, 189, 248, 0.15)",
                color: "rgba(255, 255, 255, 0.95)",
                cursor: "pointer",
                fontWeight: 500,
                marginBottom: "0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="cursor-pointer"
              style={{
                width: "100%",
                padding: "0.5rem 0.75rem",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: 8,
                fontSize: "0.875rem",
                background: "rgba(56, 189, 248, 0.15)",
                color: "rgba(255, 255, 255, 0.95)",
                cursor: "pointer",
                fontWeight: 500,
                marginBottom: "0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Collapse All
            </button>
            <button
              onClick={resetProgress}
              className="cursor-pointer"
              style={{
                width: "100%",
                padding: "0.5rem 0.75rem",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: 8,
                fontSize: "0.875rem",
                background: "rgba(56, 189, 248, 0.15)",
                color: "rgba(255, 255, 255, 0.95)",
                cursor: "pointer",
                fontWeight: 500,
                marginBottom: "0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Reset Progress
            </button>
          </div>

          {/* Quick Jump to other subjects */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "rgba(56, 189, 248, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.6rem",
              }}
            >
              Other Subjects
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {otherSubjects.slice(0, 7).map((s) => (
                <button
                  key={s.abbreviation}
                  onClick={() => navigate(`/subject/${s.abbreviation}`)}
                  className="cursor-pointer"
                  style={{
                    width: "100%",
                    padding: "0.4rem 0.6rem",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: 6,
                    fontSize: "0.8rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    color: "rgba(255, 255, 255, 0.65)",
                    cursor: "pointer",
                    fontWeight: 400,
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.95)";
                    e.currentTarget.style.borderColor = `${s.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: s.color,
                      flexShrink: 0,
                    }}
                  />
                  {s.abbreviation} - {s.title.split("(")[0].trim().slice(0, 22)}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ── MOBILE SIDEBAR OVERLAY ── */}
        {mobileSidebarOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "rgba(0, 0, 0, 0.6)",
            }}
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* ── CONTENT AREA ── */}
        <div
          className="content-area-qb"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "2rem",
          }}
        >
          <div style={{ maxWidth: 1200 }}>
            {filteredGrouped.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                  color: "rgba(255, 255, 255, 0.55)",
                  fontSize: "1rem",
                }}
              >
                No questions found matching your filters.
              </div>
            ) : (
              filteredGrouped.map((unit) => (
                <UnitSection
                  key={unit.unitNum}
                  unit={unit}
                  progress={progress}
                  onToggleQuestion={toggleQuestion}
                  onToggleAllInUnit={toggleBulk}
                  onToggleAllInSubtopic={toggleBulk}
                  expandedUnits={expandedUnits}
                  expandedSubtopics={expandedSubtopics}
                  onToggleUnitExpand={toggleUnitExpand}
                  onToggleSubtopicExpand={toggleSubtopicExpand}
                  searchQuery={searchQuery}
                  yearFilter={yearFilter}
                  priorityFilter={priorityFilter}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* ═══════ INLINE RESPONSIVE STYLES ═══════ */}
      <style>{`
        .meta-badge {
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          font-size: 0.6875rem;
          font-weight: 600;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: transform 0.2s ease;
        }
        .meta-badge:hover {
          transform: scale(1.05);
        }

        /* Scrollbar */
        .content-area-qb::-webkit-scrollbar,
        .sidebar-qb::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .content-area-qb::-webkit-scrollbar-track,
        .sidebar-qb::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .content-area-qb::-webkit-scrollbar-thumb,
        .sidebar-qb::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.3);
          border-radius: 4px;
        }
        .content-area-qb::-webkit-scrollbar-thumb:hover,
        .sidebar-qb::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.5);
        }

        /* Responsive */
        @media (max-width: 968px) {
          .main-layout-qb {
            flex-direction: column !important;
          }
          .sidebar-qb {
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
            max-height: 320px;
          }
          .content-area-qb {
            padding: 1rem !important;
          }
        }
        @media (max-width: 640px) {
          .content-area-qb {
            padding: 0.75rem !important;
          }
          .sidebar-qb {
            padding: 1rem !important;
          }
          header {
            padding: 0.75rem 1rem !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
