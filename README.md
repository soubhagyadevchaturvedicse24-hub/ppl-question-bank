# Question Intelligence Platform 

A focused web platform analyzing **Previous Year Questions (PYQ)** across 8 university subjects, organized for evidence-based exam preparation. Built with interactive HTML question banks and a modern React/Vite UI.

---

##  Project Structure

```
 index.html                          # Main landing page (entry point)
 PPL_Interactive_QuestionBank.html   # PPL interactive question bank
 DELD_Interactive_QuestionBank.html  # DELD interactive question bank
 OS_Interactive_QuestionBank.html    # OS interactive question bank

 data/                               # Raw question database files (JS)
    PPL_qdb.js
    DELD_qdb.js
    OS_qdb.js
    OOP_qdb.js
    DAA_qdb.js
    CSA_qdb.js
    DBMS_qdb.js
    DM_qdb.js

 Figma/                              # React/Vite UI app (modern dashboard)
    src/app/
       components/                 # React components
       data/                       # TypeScript question & subject data
    package.json
    vite.config.ts
    vercel.json                     # Deploy Figma app separately

 scripts/                            # Dev/utility scripts
    extract_pdf.py                  # PDF text extraction helper
    Propmt.txt                      # Dev notes / AI prompt context

 convert-questions.js                # Converts data/*.js  Figma/src/app/data/questions.ts
 vercel.json                         # Vercel config for main static deployment
 .gitignore
```

---

##  Subjects Available

### 3rd Semester

| Subject | Code | Questions | Coverage | Interactive Page |
|---------|------|-----------|----------|-----------------|
| Digital Electronics & Logic Design | DELD | 193 | 2020–24 | [DELD_Interactive_QuestionBank.html](DELD_Interactive_QuestionBank.html) |
| Operating System | OS | 182 | 2021–23 | [OS_Interactive_QuestionBank.html](OS_Interactive_QuestionBank.html) |
| Principles of Programming Languages | PPL | 162 | 2020–24 | [PPL_Interactive_QuestionBank.html](PPL_Interactive_QuestionBank.html) |

### 4th Semester

| Subject | Code | Questions | Coverage |
|---------|------|-----------|----------|
| Object Oriented Programming (Java) | OOP | 119 | 2021–25 |
| Design & Analysis of Algorithms | DAA | 152 | 2021–25 |
| Computer System Architecture | CSA | 118 | 2021–25 |
| Database Management System | DBMS | ~120 | 2021–25 |
| Discrete Mathematics | DM | ~110 | 2021–25 |

---

##  Features

- **Interactive Question Banks** — evaluate, filter, and track questions per unit/subtopic
- **Smart Search & Filters** — by unit, priority, marks, year, frequency
- **Progress Tracking** — auto-saved via LocalStorage (1-year expiry)
- **Probability Analysis** — AI-powered exam prediction (~70–90% accuracy)
- **Priority Badges** — High / Medium / Low based on historical frequency data
- **Mobile Responsive** — works on phones and tablets
- **Modern React UI** — in `Figma/` using Vite + Tailwind + Radix UI

---

##  Deployment

### Main Static Site (HTML question banks)
Deployed via Vercel from the repository root.

- **Live URL**: https://ppl-question-bank.vercel.app
- Short-URL routes: `/ppl`, `/deld`, `/os`
- Vercel config: `vercel.json`

### React UI App (`Figma/`)
Can be deployed as a **separate** Vercel project pointed at the `Figma/` directory.

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Vercel config: `Figma/vercel.json`

---

##  Local Development

### Interactive HTML Question Banks
No build step needed — open any HTML file directly in a browser:

```bash
# Just double-click or open in browser:
index.html                          # Landing page
PPL_Interactive_QuestionBank.html   # PPL
DELD_Interactive_QuestionBank.html  # DELD
OS_Interactive_QuestionBank.html    # OS
```

### React UI App

```bash
cd Figma
npm install
npm run dev      # Dev server  http://localhost:5173
npm run build    # Production build  Figma/dist/
```

### Regenerate TypeScript Question Data
When files in `data/` are updated, regenerate the Figma app's TypeScript source:

```bash
node convert-questions.js
# Writes to: Figma/src/app/data/questions.ts
```

---

##  How to Use the Question Banks

1. Open any subject HTML page in your browser
2. Navigate through units and subtopics using the dropdown menus
3. Mark questions as **Known / Review / Unknown**
4. Use search and filters to narrow by topic, marks, year, or priority
5. The top stats bar shows overall progress at a glance
6. Progress is automatically saved — close and reopen safely

---

##  Study Tips by Subject

| Subject | Top Tip |
|---------|---------|
| DELD | K-map simplification & sequential circuit state diagrams appear every year |
| OS | Master scheduling algorithm numericals and Banker's Algorithm |
| PPL | Practice BNF derivations, parse trees, and static vs dynamic scoping |
| OOP | Trace inheritance/exception code; practice JDBC & collection framework |
| DAA | Solve recurrences with Master theorem; practice 0/1 Knapsack & LCS |

---

##  License

MIT License — free to use for educational purposes.

##  Acknowledgments

Questions compiled from official university exam papers (2020–2025).