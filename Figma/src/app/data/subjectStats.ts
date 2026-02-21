/**
 * Computes subject statistics automatically from questions.ts.
 * Re-run convert-questions.js to regenerate questions.ts — stats update here for free.
 */
import { getQuestionsForSubject } from "./questions";

export interface ComputedStats {
  questions: number;
  subtopics: number;
  units: number;
  coverage: string;
  typeSplit: { theory: number; numerical: number; application: number };
  yearDistribution: { year: string; count: number }[];
}

const ABBRS = ["DELD", "OS", "PPL", "OOP", "DAA", "CSA", "DBMS", "DM"] as const;

function compute(abbr: string): ComputedStats {
  const qs = getQuestionsForSubject(abbr);

  const units = new Set(qs.map((q) => q.unit)).size;
  const subtopics = new Set(qs.map((q) => q.topic)).size;

  const yearNums = qs
    .map((q) => parseInt(q.year, 10))
    .filter((y) => !isNaN(y) && y > 2000);

  const minYear = yearNums.length ? Math.min(...yearNums) : 2020;
  const maxYear = yearNums.length ? Math.max(...yearNums) : 2024;
  const coverage = `${minYear}-${String(maxYear).slice(2)}`;

  const yearMap = new Map<string, number>();
  for (const q of qs) {
    if (q.year) yearMap.set(q.year, (yearMap.get(q.year) ?? 0) + 1);
  }
  const yearDistribution = [...yearMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([year, count]) => ({ year, count }));

  // type → category split
  const theory      = qs.filter((q) => q.type === "theory").length;
  const numerical   = qs.filter((q) => q.type === "numerical").length;
  const application = qs.filter((q) => q.type === "application").length;

  return { questions: qs.length, subtopics, units, coverage, typeSplit: { theory, numerical, application }, yearDistribution };
}

/** Map of UPPERCASE abbreviation → computed stats (evaluated once at module load). */
export const subjectStatsMap: Record<string, ComputedStats> = Object.fromEntries(
  ABBRS.map((abbr) => [abbr, compute(abbr)])
);
