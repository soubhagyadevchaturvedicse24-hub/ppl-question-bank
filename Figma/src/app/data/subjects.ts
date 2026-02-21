/* ───────── SUBJECT DATA ───────── */
import { subjectStatsMap } from "./subjectStats";

export interface UnitDetail {
  name: string;
  topics: string[];
  questionCount: number;
  priority: "high" | "medium" | "low";
  mostAskedTopic: string;
}

export interface YearData {
  year: string;
  count: number;
}

export interface Subject {
  abbreviation: string;
  title: string;
  topics: string[];
  questions: number;
  subtopics: number;
  units: number;
  coverage: string;
  semester: 3 | 4;
  externalUrl: string;
  description: string;
  studyTip: string;
  difficulty: { easy: number; medium: number; hard: number };
  typeSplit?: { theory: number; numerical: number; application: number };
  yearDistribution: YearData[];
  unitDetails: UnitDetail[];
  color: string;
}

const BASE_URL = "https://ppl-question-bank.vercel.app";

const _rawSubjects3rd: Subject[] = [
  {
    abbreviation: "DELD",
    title: "Digital Electronics & Logic Design (DELD)",
    topics: [
      "Number Systems & Codes",
      "Boolean Algebra & Logic Gates",
      "Combinational Circuits",
      "Sequential Circuits",
      "Memory & PLDs",
    ],
    questions: 193,
    subtopics: 21,
    units: 5,
    coverage: "2020-24",
    semester: 3,
    externalUrl: `${BASE_URL}/DELD_Interactive_QuestionBank.html`,
    color: "#00CCFF",
    description:
      "Covers the foundational hardware design principles from number systems and Boolean algebra through combinational and sequential circuit design to programmable logic devices. Questions consistently test K-map simplification, flip-flop conversions, counter design, and state machine analysis.",
    studyTip:
      "Focus heavily on K-map problems (appear every year), sequential circuit state diagrams, and counter design. Practice converting between flip-flop types — this is a guaranteed high-mark question pattern.",
    difficulty: { easy: 52, medium: 98, hard: 43 },
    yearDistribution: [
      { year: "2020", count: 35 },
      { year: "2021", count: 42 },
      { year: "2022", count: 38 },
      { year: "2023", count: 40 },
      { year: "2024", count: 38 },
    ],
    unitDetails: [
      {
        name: "Number Systems & Codes",
        topics: ["Binary, Octal, Hex conversions", "BCD, Gray, Excess-3 codes", "Signed number representations", "Error detection & correction codes"],
        questionCount: 28,
        priority: "medium",
        mostAskedTopic: "Code conversions & complements",
      },
      {
        name: "Boolean Algebra & Logic Gates",
        topics: ["Boolean theorems & postulates", "SOP & POS forms", "K-map simplification (up to 5 variables)", "NAND/NOR implementations", "Don't care conditions"],
        questionCount: 48,
        priority: "high",
        mostAskedTopic: "K-map simplification",
      },
      {
        name: "Combinational Logic Circuits",
        topics: ["Adders & subtractors", "Multiplexers & demultiplexers", "Encoders & decoders", "Comparators", "BCD arithmetic circuits"],
        questionCount: 42,
        priority: "high",
        mostAskedTopic: "MUX-based function implementation",
      },
      {
        name: "Sequential Logic Circuits",
        topics: ["SR, JK, D, T flip-flops", "Flip-flop conversions", "Counters (synchronous & asynchronous)", "Shift registers", "State diagram & state table design"],
        questionCount: 50,
        priority: "high",
        mostAskedTopic: "Counter design & state machines",
      },
      {
        name: "Memory & Programmable Logic",
        topics: ["RAM & ROM types", "PLA & PAL", "FPGA basics", "Memory expansion", "Cache mapping techniques"],
        questionCount: 25,
        priority: "medium",
        mostAskedTopic: "ROM-based function implementation",
      },
    ],
  },
  {
    abbreviation: "OS",
    title: "Operating System (OS)",
    topics: [
      "Process Management",
      "CPU Scheduling",
      "Synchronization & Deadlocks",
      "Memory Management",
      "File Systems & I/O",
      "Security & Protection",
    ],
    questions: 182,
    subtopics: 24,
    units: 6,
    coverage: "2021-23",
    semester: 3,
    externalUrl: `${BASE_URL}/OS_Interactive_QuestionBank.html`,
    color: "#6050FF",
    description:
      "A comprehensive coverage of operating system concepts from process lifecycle and CPU scheduling algorithms through synchronization primitives and deadlock handling to virtual memory and file system design. Numerical problems on scheduling, page replacement, and disk scheduling are exam staples.",
    studyTip:
      "Master CPU scheduling algorithm numericals (SJF, Round Robin, Priority) — they appear every single year. Practice Banker's Algorithm for deadlock avoidance and page replacement algorithms (LRU, FIFO, Optimal). Diagrams for process state transitions are quick marks.",
    difficulty: { easy: 38, medium: 92, hard: 52 },
    yearDistribution: [
      { year: "2021", count: 58 },
      { year: "2022", count: 65 },
      { year: "2023", count: 59 },
    ],
    unitDetails: [
      {
        name: "Introduction & Process Management",
        topics: ["OS types & structures", "Process concept & lifecycle", "Process control block", "Context switching", "Threads & multithreading models"],
        questionCount: 24,
        priority: "medium",
        mostAskedTopic: "Process states & PCB",
      },
      {
        name: "CPU Scheduling",
        topics: ["FCFS, SJF, Priority scheduling", "Round Robin & multilevel queues", "Preemptive vs non-preemptive", "Gantt chart construction", "Average waiting & turnaround time"],
        questionCount: 38,
        priority: "high",
        mostAskedTopic: "Scheduling algorithm numericals",
      },
      {
        name: "Process Synchronization",
        topics: ["Critical section problem", "Semaphores (binary & counting)", "Classical problems (Producer-Consumer, Dining Philosophers)", "Monitors", "Mutex locks"],
        questionCount: 32,
        priority: "high",
        mostAskedTopic: "Semaphore-based solutions",
      },
      {
        name: "Deadlock Handling",
        topics: ["Deadlock conditions & RAG", "Banker's algorithm", "Deadlock detection & recovery", "Prevention strategies", "Safe state analysis"],
        questionCount: 30,
        priority: "high",
        mostAskedTopic: "Banker's algorithm numericals",
      },
      {
        name: "Memory Management",
        topics: ["Paging & segmentation", "Page replacement algorithms", "Virtual memory concepts", "Thrashing & working set", "Memory allocation strategies"],
        questionCount: 35,
        priority: "high",
        mostAskedTopic: "Page replacement (LRU, FIFO, Optimal)",
      },
      {
        name: "File Systems & I/O",
        topics: ["File organization methods", "Directory structures", "Disk scheduling algorithms", "I/O subsystems", "Protection & security basics"],
        questionCount: 23,
        priority: "medium",
        mostAskedTopic: "Disk scheduling (SCAN, C-SCAN)",
      },
    ],
  },
  {
    abbreviation: "PPL",
    title: "Principles of Programming Languages (PPL)",
    topics: [
      "Language Design & Evaluation",
      "Syntax & Semantics",
      "Data Types & Expressions",
      "Subprograms & Scope",
      "OOP & Functional Paradigms",
    ],
    questions: 162,
    subtopics: 68,
    units: 5,
    coverage: "2020-24",
    semester: 3,
    externalUrl: `${BASE_URL}/PPL_Interactive_QuestionBank.html`,
    color: "#00DDAA",
    description:
      "Explores the theoretical foundations and design principles behind programming languages — from BNF grammars and attribute grammars through type systems and scoping rules to paradigm comparisons. Strong focus on comparing language features across C, Java, Python, and functional languages.",
    studyTip:
      "BNF grammar derivations and parse trees appear in almost every paper. Understand static vs dynamic scoping with examples. Compare language features across paradigms — tables comparing C, Java, Python, Haskell are very scoring. Practice writing attribute grammars.",
    difficulty: { easy: 45, medium: 78, hard: 39 },
    yearDistribution: [
      { year: "2020", count: 30 },
      { year: "2021", count: 34 },
      { year: "2022", count: 32 },
      { year: "2023", count: 35 },
      { year: "2024", count: 31 },
    ],
    unitDetails: [
      {
        name: "Language Design & Evaluation",
        topics: ["Readability, writability, reliability", "Language categories & history", "Implementation methods (compilation, interpretation)", "Von Neumann architecture influence"],
        questionCount: 22,
        priority: "low",
        mostAskedTopic: "Language evaluation criteria",
      },
      {
        name: "Syntax & Semantics",
        topics: ["BNF & EBNF grammars", "Parse trees & ambiguity", "Attribute grammars", "Operational & denotational semantics", "Lexical vs syntactic analysis"],
        questionCount: 45,
        priority: "high",
        mostAskedTopic: "BNF derivations & parse trees",
      },
      {
        name: "Data Types & Expressions",
        topics: ["Primitive & composite types", "Type checking & coercion", "Array & record types", "Pointer & reference types", "Expression evaluation & short-circuit"],
        questionCount: 35,
        priority: "medium",
        mostAskedTopic: "Type systems & type checking",
      },
      {
        name: "Subprograms & Scope",
        topics: ["Parameter passing mechanisms", "Static vs dynamic scoping", "Activation records & stack frames", "Closures & nested subprograms", "Overloading & generic subprograms"],
        questionCount: 38,
        priority: "high",
        mostAskedTopic: "Scoping rules with examples",
      },
      {
        name: "OOP & Functional Paradigms",
        topics: ["Encapsulation, inheritance, polymorphism", "Abstract classes & interfaces", "Functional programming concepts", "Lambda expressions & higher-order functions", "Logic programming basics"],
        questionCount: 22,
        priority: "medium",
        mostAskedTopic: "Paradigm comparison tables",
      },
    ],
  },
];

const _rawSubjects4th: Subject[] = [
  {
    abbreviation: "OOP",
    title: "Object Oriented Programming (with Java)",
    topics: [
      "Java Fundamentals",
      "Inheritance & Interfaces",
      "Exception Handling & Threads",
      "I/O & Collections",
      "GUI: AWT, Swing & JDBC",
    ],
    questions: 119,
    subtopics: 36,
    units: 5,
    coverage: "2021-25",
    semester: 4,
    externalUrl: `${BASE_URL}/OOP_Interactive_QuestionBank.html`,
    color: "#FF6B6B",
    description:
      "Covers Java programming from fundamentals and OOP principles through exception handling and multithreading to GUI development and database connectivity. Emphasis on writing code snippets, tracing outputs, and explaining OOP design concepts with Java-specific implementations.",
    studyTip:
      "Code output tracing questions are very common — practice tracing inheritance hierarchies and exception propagation. Write short programs for multithreading, collection framework operations, and JDBC connectivity. Interface vs abstract class comparison is asked almost every year.",
    difficulty: { easy: 35, medium: 55, hard: 29 },
    yearDistribution: [
      { year: "2021", count: 22 },
      { year: "2022", count: 25 },
      { year: "2023", count: 24 },
      { year: "2024", count: 26 },
      { year: "2025", count: 22 },
    ],
    unitDetails: [
      {
        name: "Java Fundamentals & OOP Concepts",
        topics: ["Data types, operators, control flow", "Classes, objects, constructors", "Encapsulation & access modifiers", "this keyword & static members", "Arrays & strings in Java"],
        questionCount: 28,
        priority: "high",
        mostAskedTopic: "Classes, objects & constructors",
      },
      {
        name: "Inheritance, Interfaces & Packages",
        topics: ["Single & multilevel inheritance", "Method overriding & super keyword", "Abstract classes vs interfaces", "Packages & access control", "Polymorphism (compile-time & runtime)"],
        questionCount: 30,
        priority: "high",
        mostAskedTopic: "Abstract class vs interface comparison",
      },
      {
        name: "Exception Handling & Multithreading",
        topics: ["try-catch-finally blocks", "Custom exceptions & throw/throws", "Thread creation (Thread class & Runnable)", "Thread lifecycle & synchronization", "Inter-thread communication"],
        questionCount: 25,
        priority: "high",
        mostAskedTopic: "Thread synchronization & lifecycle",
      },
      {
        name: "I/O Streams & Collections Framework",
        topics: ["Byte & character streams", "File handling operations", "List, Set, Map interfaces", "ArrayList, LinkedList, HashMap", "Iterator & Comparator patterns"],
        questionCount: 20,
        priority: "medium",
        mostAskedTopic: "Collection framework operations",
      },
      {
        name: "AWT, Swing & JDBC",
        topics: ["AWT components & layout managers", "Event handling model", "Swing components & JFrame", "JDBC architecture & drivers", "PreparedStatement & ResultSet"],
        questionCount: 16,
        priority: "medium",
        mostAskedTopic: "Event handling & JDBC connectivity",
      },
    ],
  },
  {
    abbreviation: "DAA",
    title: "Design & Analysis of Algorithms (DAA)",
    topics: [
      "Complexity Analysis",
      "Divide & Conquer",
      "Greedy Algorithms",
      "Dynamic Programming",
      "NP-Completeness",
    ],
    questions: 152,
    subtopics: 27,
    units: 5,
    coverage: "2021-25",
    semester: 4,
    externalUrl: `${BASE_URL}/DAA_Interactive_QuestionBank.html`,
    color: "#FFB347",
    description:
      "Focuses on algorithm design paradigms and complexity analysis — from asymptotic notation and recurrence relations through divide & conquer, greedy, and dynamic programming strategies to NP-completeness theory. Heavy emphasis on solving recurrences, proving correctness, and analyzing time/space complexity.",
    studyTip:
      "Master recurrence relation solving methods (Master theorem, substitution, recursion tree). Practice 0/1 Knapsack, LCS, MCM for DP and Kruskal's/Prim's for Greedy — these are exam staples. Understand NP-completeness proofs conceptually rather than memorizing them.",
    difficulty: { easy: 30, medium: 72, hard: 50 },
    yearDistribution: [
      { year: "2021", count: 28 },
      { year: "2022", count: 32 },
      { year: "2023", count: 30 },
      { year: "2024", count: 34 },
      { year: "2025", count: 28 },
    ],
    unitDetails: [
      {
        name: "Algorithm Analysis & Complexity",
        topics: ["Asymptotic notations (O, Ω, Θ)", "Recurrence relations", "Master theorem", "Space-time tradeoffs", "Amortized analysis basics"],
        questionCount: 30,
        priority: "high",
        mostAskedTopic: "Solving recurrences & Master theorem",
      },
      {
        name: "Divide & Conquer",
        topics: ["Merge sort & quick sort analysis", "Binary search variations", "Strassen's matrix multiplication", "Closest pair of points", "Max-min problem"],
        questionCount: 28,
        priority: "medium",
        mostAskedTopic: "Sorting algorithm analysis",
      },
      {
        name: "Greedy Algorithms",
        topics: ["Fractional knapsack", "Activity selection problem", "Huffman coding", "Kruskal's & Prim's MST", "Job sequencing with deadlines"],
        questionCount: 32,
        priority: "high",
        mostAskedTopic: "Kruskal's/Prim's MST problems",
      },
      {
        name: "Dynamic Programming",
        topics: ["0/1 Knapsack problem", "Longest Common Subsequence", "Matrix Chain Multiplication", "Floyd-Warshall shortest path", "Optimal BST & reliability design"],
        questionCount: 38,
        priority: "high",
        mostAskedTopic: "0/1 Knapsack & LCS",
      },
      {
        name: "Backtracking, B&B & NP-Completeness",
        topics: ["N-Queens problem", "Graph coloring", "Branch & bound (TSP, 0/1 Knapsack)", "P vs NP vs NP-Complete", "Reduction proofs & Cook's theorem"],
        questionCount: 24,
        priority: "medium",
        mostAskedTopic: "N-Queens & NP-completeness theory",
      },
    ],
  },
  {
    abbreviation: "CSA",
    title: "Computer System Architecture (CSA)",
    topics: [
      "Basic Computer Organization",
      "Computer Arithmetic",
      "Microprogrammed Control",
      "Memory Organization",
      "I/O & Pipelining",
    ],
    questions: 118,
    subtopics: 25,
    units: 5,
    coverage: "2021-25",
    semester: 4,
    externalUrl: `${BASE_URL}/CSA_Interactive_QuestionBank.html`,
    color: "#A78BFA",
    description:
      "Explores computer hardware architecture from basic computer structure and instruction set design through arithmetic algorithms and microprogramming to memory hierarchy and I/O organization. Emphasis on instruction cycle execution, cache mapping, pipelining hazards, and DMA data transfer.",
    studyTip:
      "Focus on instruction format design and RTL notation — these appear consistently. Practice Booth's algorithm for multiplication numericals. Cache mapping problems (direct, associative, set-associative) with hit/miss calculations are guaranteed questions. Understand pipeline hazard types with examples.",
    difficulty: { easy: 32, medium: 56, hard: 30 },
    yearDistribution: [
      { year: "2021", count: 22 },
      { year: "2022", count: 24 },
      { year: "2023", count: 25 },
      { year: "2024", count: 26 },
      { year: "2025", count: 21 },
    ],
    unitDetails: [
      {
        name: "Basic Computer Organization",
        topics: ["Computer registers & bus system", "Instruction formats & addressing modes", "Instruction cycle & micro-operations", "RTL notation", "Hardwired vs microprogrammed control"],
        questionCount: 26,
        priority: "high",
        mostAskedTopic: "Instruction formats & addressing modes",
      },
      {
        name: "Computer Arithmetic",
        topics: ["Fixed & floating point representation", "Addition & subtraction algorithms", "Booth's multiplication algorithm", "Restoring & non-restoring division", "IEEE 754 standard"],
        questionCount: 24,
        priority: "high",
        mostAskedTopic: "Booth's algorithm numericals",
      },
      {
        name: "Microprogrammed Control",
        topics: ["Control memory & address sequencing", "Microinstruction formats", "Horizontal vs vertical microprogramming", "Micro-operations & sequencer design", "Hardwired control comparison"],
        questionCount: 18,
        priority: "medium",
        mostAskedTopic: "Microinstruction format design",
      },
      {
        name: "Memory Organization",
        topics: ["Memory hierarchy", "Cache mapping techniques", "Cache performance & hit ratio", "Virtual memory & TLB", "Associative & interleaved memory"],
        questionCount: 30,
        priority: "high",
        mostAskedTopic: "Cache mapping & hit/miss analysis",
      },
      {
        name: "I/O Organization & Pipelining",
        topics: ["I/O interface & data transfer", "DMA controller", "Interrupt handling priority", "Pipeline stages & hazards", "Instruction-level parallelism"],
        questionCount: 20,
        priority: "medium",
        mostAskedTopic: "Pipeline hazards & DMA",
      },
    ],
  },
  {
    abbreviation: "DBMS",
    title: "Database Management System (DBMS)",
    topics: [
      "Data Models & ER Diagrams",
      "Relational Algebra & SQL",
      "Normalization",
      "Transaction Processing",
      "Concurrency & Recovery",
    ],
    questions: 87,
    subtopics: 22,
    units: 5,
    coverage: "2021-25",
    semester: 4,
    externalUrl: `${BASE_URL}/DBMS_Interactive_QuestionBank.html`,
    color: "#34D399",
    description:
      "Covers database fundamentals from conceptual modeling with ER diagrams through relational algebra and SQL query writing to normalization theory and transaction management. Questions emphasize ER-to-relational mapping, SQL query writing, functional dependency analysis, and concurrency control protocols.",
    studyTip:
      "ER diagram design and normalization (up to BCNF) are asked every year without exception. Practice writing SQL queries with joins, subqueries, and aggregate functions. Understand 2PL, timestamp ordering, and ACID properties thoroughly. Canonical cover and closure of FDs are high-scoring numerical topics.",
    difficulty: { easy: 25, medium: 42, hard: 20 },
    yearDistribution: [
      { year: "2021", count: 16 },
      { year: "2022", count: 18 },
      { year: "2023", count: 17 },
      { year: "2024", count: 19 },
      { year: "2025", count: 17 },
    ],
    unitDetails: [
      {
        name: "Introduction & Data Models",
        topics: ["Database architecture (3-schema)", "ER model & diagrams", "ER-to-relational mapping", "Enhanced ER (EER) features", "Relational model concepts"],
        questionCount: 20,
        priority: "high",
        mostAskedTopic: "ER diagram design & mapping",
      },
      {
        name: "Relational Algebra & SQL",
        topics: ["Relational algebra operations", "SQL DDL & DML commands", "Joins, subqueries, views", "Aggregate functions & GROUP BY", "Constraints & triggers"],
        questionCount: 22,
        priority: "high",
        mostAskedTopic: "SQL query writing with joins",
      },
      {
        name: "Normalization",
        topics: ["Functional dependencies", "1NF, 2NF, 3NF, BCNF", "Canonical cover & closure", "Decomposition properties", "Multivalued dependencies & 4NF"],
        questionCount: 20,
        priority: "high",
        mostAskedTopic: "Normalization up to BCNF",
      },
      {
        name: "Transaction Processing",
        topics: ["ACID properties", "Transaction states & schedules", "Serializability testing", "Log-based recovery", "Checkpointing strategies"],
        questionCount: 14,
        priority: "medium",
        mostAskedTopic: "ACID & serializability",
      },
      {
        name: "Concurrency Control & Recovery",
        topics: ["Two-phase locking (2PL)", "Timestamp ordering protocol", "Deadlock in transactions", "Recovery techniques (ARIES)", "Database security basics"],
        questionCount: 11,
        priority: "medium",
        mostAskedTopic: "2PL & timestamp ordering",
      },
    ],
  },
  {
    abbreviation: "DM",
    title: "Discrete Mathematics (DM)",
    topics: [
      "Mathematical Logic",
      "Set Theory & Relations",
      "Algebraic Structures",
      "Graph Theory",
      "Combinatorics & Recurrence",
    ],
    questions: 110,
    subtopics: 24,
    units: 5,
    coverage: "2021-25",
    semester: 4,
    externalUrl: `${BASE_URL}/DM_Interactive_QuestionBank.html`,
    color: "#F472B6",
    description:
      "Covers the mathematical foundations essential for computer science — from propositional and predicate logic through set theory, relations, and algebraic structures to graph theory and combinatorics. Problems focus on proof techniques, group/ring identification, graph algorithms, and recurrence relation solving.",
    studyTip:
      "Propositional logic proofs and equivalence tables are quick-scoring. Practice Hasse diagram construction for posets and lattice identification. In graph theory, focus on Euler/Hamilton path conditions, graph coloring, and tree properties. Solving recurrence relations using characteristic equations is a high-frequency pattern.",
    difficulty: { easy: 28, medium: 52, hard: 30 },
    yearDistribution: [
      { year: "2021", count: 20 },
      { year: "2022", count: 23 },
      { year: "2023", count: 22 },
      { year: "2024", count: 24 },
      { year: "2025", count: 21 },
    ],
    unitDetails: [
      {
        name: "Mathematical Logic",
        topics: ["Propositional logic & truth tables", "Logical equivalences & normal forms", "Predicate logic & quantifiers", "Proof methods (direct, contradiction, induction)", "Boolean algebra laws"],
        questionCount: 24,
        priority: "high",
        mostAskedTopic: "Logic equivalences & proof methods",
      },
      {
        name: "Set Theory & Relations",
        topics: ["Set operations & Venn diagrams", "Relations & properties (reflexive, symmetric, transitive)", "Equivalence relations & partitions", "Partial orders & Hasse diagrams", "Lattices & Boolean lattices"],
        questionCount: 25,
        priority: "high",
        mostAskedTopic: "Hasse diagrams & lattice properties",
      },
      {
        name: "Functions & Algebraic Structures",
        topics: ["Injection, surjection, bijection", "Function composition & inverse", "Groups, subgroups, cyclic groups", "Rings & fields", "Homomorphisms & isomorphisms"],
        questionCount: 22,
        priority: "medium",
        mostAskedTopic: "Group identification & properties",
      },
      {
        name: "Graph Theory",
        topics: ["Graph types & representations", "Euler & Hamiltonian paths/circuits", "Graph coloring & chromatic number", "Planar graphs & Kuratowski's theorem", "Trees, spanning trees, MST"],
        questionCount: 24,
        priority: "high",
        mostAskedTopic: "Euler/Hamilton conditions & coloring",
      },
      {
        name: "Combinatorics & Recurrence",
        topics: ["Permutations & combinations", "Pigeonhole principle", "Inclusion-exclusion principle", "Generating functions", "Solving recurrence relations"],
        questionCount: 15,
        priority: "medium",
        mostAskedTopic: "Recurrence relation solving",
      },
    ],
  },
];

function withComputedStats(subjects: Subject[]): Subject[] {
  return subjects.map((s) => {
    const stats = subjectStatsMap[s.abbreviation];
    if (!stats) return s;
    return {
      ...s,
      questions: stats.questions,
      subtopics: stats.subtopics,
      units: stats.units,
      coverage: stats.coverage,
      typeSplit: stats.typeSplit,
      yearDistribution: stats.yearDistribution,
    };
  });
}

export const allSubjects: Subject[] = withComputedStats([..._rawSubjects3rd, ..._rawSubjects4th]);

/** Enriched 3rd-semester subjects — stats auto-computed from questions.ts */
export const subjects3rd: Subject[] = allSubjects.filter((s) => s.semester === 3);
/** Enriched 4th-semester subjects — stats auto-computed from questions.ts */
export const subjects4th: Subject[] = allSubjects.filter((s) => s.semester === 4);

export function getSubjectByAbbreviation(abbr: string): Subject | undefined {
  return allSubjects.find(
    (s) => s.abbreviation.toLowerCase() === abbr.toLowerCase()
  );
}

export function getOtherSubjects(currentAbbr: string): Subject[] {
  return allSubjects.filter(
    (s) => s.abbreviation.toLowerCase() !== currentAbbr.toLowerCase()
  );
}
