// Converts extracted questionDatabase JS files to questions.ts format
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const BASE = path.join(__dirname, "data");
const OUT = path.join(__dirname, "Figma", "src", "app", "data", "questions.ts");

const subjects = [
  { abbr: "deld", file: "DELD_qdb.js" },
  { abbr: "os",   file: "OS_qdb.js"   },
  { abbr: "ppl",  file: "PPL_qdb.js"  },
  { abbr: "oop",  file: "OOP_qdb.js"  },
  { abbr: "daa",  file: "DAA_qdb.js"  },
  { abbr: "csa",  file: "CSA_qdb.js"  },
  { abbr: "dbms", file: "DBMS_qdb.js" },
  { abbr: "dm",   file: "DM_qdb.js"   },
];

// Keywords that signal a numerical/calculation question
const NUMERICAL_RX = /\b(solve|solv|calculat|convert|simplif|minimis|minimiz|reduc|tabul|find the|compute|implement.*function|express.*using|realiz|expression.*using|k-map|karnaugh|boolean.*function|quine|mccluskey|hamming|excess.3|gray code|bcd|binary of|2'?s complement|encode|decode|sum of|product of|parity|minterms|maxterms|Σm|Πm|ΠM)/i;

// Keywords that signal an application/design/programming question
const APPLICATION_RX = /\b(design|draw|construct|implement(?!.*function)|write a program|vhdl|code|circuit diagram|logic diagram|block diagram|state diagram|timing diagram|flowchart|program|develop|build|show that|using.*gate|using.*flip.flop|using.*mux|using.*decoder|using.*counter)/i;

function inferType(text) {
  if (NUMERICAL_RX.test(text)) return "numerical";
  if (APPLICATION_RX.test(text)) return "application";
  return "theory";
}

function safeid(abbr, rawId) {
  return `${abbr}-${rawId.toLowerCase().replace(/[^a-z0-9.]/g, "-")}`;
}

function parseQdb(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  // Replace 'const questionDatabase' with global assignment so vm sandbox captures it
  const modifiedCode = code.replace(/const questionDatabase\s*=/, "questionDatabase =");
  const sandbox = { questionDatabase: undefined };
  vm.createContext(sandbox);
  vm.runInContext(modifiedCode, sandbox);
  return sandbox.questionDatabase;
}

let allExports = [];
const perSubject = {};

for (const { abbr, file } of subjects) {
  const filePath = path.join(BASE, file);
  const qdb = parseQdb(filePath);

  const questions = [];

  for (const [unitKey, unitObj] of Object.entries(qdb)) {
    // unit number: "unit1" → 1
    const unitNum = parseInt(unitKey.replace("unit", ""), 10);
    const unitName = unitObj.name;

    for (const [subtopicKey, subtopicObj] of Object.entries(unitObj.subtopics)) {
      const topic = subtopicObj.name;
      for (const q of subtopicObj.questions) {
        const id = safeid(abbr, q.id);
        questions.push({
          id,
          unit: unitNum,
          unitName,
          topic,
          years: q.years ?? [],
          year: (q.years && q.years[0]) ? (q.years[0].match(/^\d+/)?.[0] ?? "") : "",
          marks: q.marks,
          frequency: q.frequency ?? 1,
          priority: q.priority ?? "medium",
          type: inferType(q.text),
          text: q.text,
        });
      }
    }
  }

  perSubject[abbr] = questions;
  console.log(`${abbr.toUpperCase()}: ${questions.length} questions`);
}

// Generate TypeScript content
let ts = `// AUTO-GENERATED from ppl-question-bank HTML files
// Do not edit manually — run convert-questions.js to regenerate

export interface Question {
  id: string;
  unit: number;
  unitName: string;
  topic: string;
  /** Primary display year (first occurrence, year part only) */
  year: string;
  /** All exam years this question appeared in */
  years: string[];
  marks: number;
  frequency: number;
  priority: "high" | "medium" | "low";
  type: "theory" | "numerical" | "application";
  text: string;
  parts?: string[];
}

`;

for (const [abbr, questions] of Object.entries(perSubject)) {
  const varName = `${abbr}Questions`;
  ts += `export const ${varName}: Question[] = ${JSON.stringify(questions, null, 2)};\n\n`;
  allExports.push(varName);
}

ts += `export const allQuestions: Question[] = [\n`;
for (const v of allExports) {
  ts += `  ...${v},\n`;
}
ts += `];\n\n`;

ts += `export function getQuestionsForSubject(abbreviation: string): Question[] {
  const map: Record<string, Question[]> = {
${Object.keys(perSubject).map(a => `    "${a}": ${a}Questions,`).join("\n")}
  };
  return map[abbreviation.toLowerCase()] ?? [];
}\n`;

fs.writeFileSync(OUT, ts, "utf8");
console.log(`\nWrote ${OUT}`);
const total = Object.values(perSubject).reduce((s, q) => s + q.length, 0);
console.log(`Total questions: ${total}`);
