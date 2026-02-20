# Question Intelligence Platform

> A modern, modular, and scalable question bank system for exam preparation

## 📁 Project Structure

```
ppl-question-bank/
├── public/
│   └── index.html                 # Landing page
│
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── variables.css      # CSS custom properties
│   │   │   ├── base.css           # Reset & base styles
│   │   │   └── components.css     # Reusable UI components
│   │   │
│   │   └── js/
│   │       ├── core/
│   │       │   ├── storage.js     # LocalStorage management
│   │       │   ├── filters.js     # Filtering logic
│   │       │   └── search.js      # Search functionality
│   │       │
│   │       ├── components/
│   │       │   ├── questionCard.js
│   │       │   ├── header.js
│   │       │   ├── stats.js
│   │       │   └── filters.js
│   │       │
│   │       ├── utils/
│   │       │   ├── helpers.js     # Utility functions
│   │       │   └── constants.js   # App constants
│   │       │
│   │       └── app.js             # Main application controller
│   │
│   ├── data/
│   │   ├── ppl-questions.js       # PPL questions dataset
│   │   ├── deld-questions.js      # DELD questions dataset
│   │   └── os-questions.js        # OS questions dataset
│   │
│   └── pages/
│       ├── ppl.html               # PPL question bank
│       ├── deld.html              # DELD question bank
│       └── os.html                # OS question bank
│
├── scripts/
│   ├── extract_pdf.py             # PDF extraction script
│   └── extract-questions-data.js  # Data extraction helper
│
├── source-pdfs/                   # Original PDF sources
│   ├── PPL.pdf
│   ├── DELD.pdf
│   ├── os.pdf
│   └── smart.pdf
│
├── docs/                          # Documentation
│   ├── README.md
│   ├── CLEANUP_SUMMARY.md
│   ├── DELD_UPDATE_SUMMARY.md
│   ├── DEPLOYMENT.md
│   └── Propmt.txt
│
├── .gitignore
└── vercel.json
```

## 🎯 Architecture Overview

### Modular Design Principles

1. **Separation of Concerns**
   - CSS: Variables, Base, Components in separate files
   - JS: Core logic, Components, Utilities in separate modules
   - Data: Question datasets separate from logic

2. **Reusability**
   - All components are reusable across subjects
   - Single template system for all question banks
   - Shared styles and utilities

3. **Maintainability**
   - Clear file organization
   - Well-documented code
   - Consistent naming conventions
   - No code duplication

4. **Scalability**
   - Easy to add new subjects
   - Easy to add new features
   - Modular component system
   - Data-driven architecture

## 🚀 Getting Started

### Local Development

1. **Start a local server:**
   ```bash
   python -m http.server 8080
   ```

2. **Open in browser:**
   ```
   http://localhost:8080/public/
   ```

### Adding a New Subject

1. **Create data file:**
   ```javascript
   // src/data/subject-questions.js
   export const subjectQuestions = [
     {
       id: "Q1.1.1",
       text: "Question text",
       unit: "Unit 1",
       subtopic: "Topic name",
       year: "2023",
       marks: 8,
       frequency: 3,
       priority: "high",
       status: null
     },
     // ... more questions
   ];
   ```

2. **Create page file:**
   ```html
   <!-- src/pages/subject.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <title>Subject Question Bank</title>
       <link rel="stylesheet" href="../assets/css/variables.css">
       <link rel="stylesheet" href="../assets/css/base.css">
       <link rel="stylesheet" href="../assets/css/components.css">
   </head>
   <body>
       <div id="headerContainer"></div>
       <div class="main-content">
           <div id="statsContainer"></div>
           <div id="filtersContainer"></div>
           <div id="questionsContainer"></div>
       </div>
       
       <script type="module">
           import { QuestionBankApp } from '../assets/js/app.js';
           import { subjectQuestions } from '../data/subject-questions.js';
           
           new QuestionBankApp({
               subject: 'Subject Name',
               storageKey: 'subjectQuestionData',
               questions: subjectQuestions
           });
       </script>
   </body>
   </html>
   ```

3. **Add to homepage:**
   Edit `public/index.html` to add a new subject card.

## 📦 Core Modules

### Storage Manager (`src/assets/js/core/storage.js`)
Handles all localStorage operations:
- Get/set question status
- Calculate statistics
- Import/export data
- Clear progress

### Filter Manager (`src/assets/js/core/filters.js`)
Manages question filtering:
- Filter by unit, subtopic, year, marks, priority, status
- Sort questions
- Get unique values
- Generate filter summaries

### Search Manager (`src/assets/js/core/search.js`)
Handles search functionality:
- Search across question text, subtopic, unit
- Highlight search terms
- Generate search suggestions

### Components

#### QuestionCard Component (`src/assets/js/components/questionCard.js`)
- Renders individual question cards
- Handles status buttons (Known/Review/Unknown)
- Displays question metadata

#### Header Component (`src/assets/js/components/header.js`)
- Displays page header with progress bar
- Shows statistics
- Reset and export buttons

#### Stats Component (`src/assets/js/components/stats.js`)
- Renders statistics grid
- Shows progress metrics
- Donut chart visualization

#### Filters Component (`src/assets/js/components/filters.js`)
- Renders filter controls
- Handles filter changes
- Updates dependent dropdowns

## 🎨 Styling System

### CSS Variables (`src/assets/css/variables.css`)
Centralized design tokens:
- Colors (glass morphism, accent, status)
- Spacing (xs, sm, md, lg, xl, 2xl)
- Typography (font sizes, family)
- Effects (blur, transitions, shadows)
- Z-index layers

### Base Styles (`src/assets/css/base.css`)
- CSS reset
- Typography defaults
- Utility classes
- Scrollbar styling

### Components (`src/assets/css/components.css`)
- Header, Cards, Buttons
- Badges, Inputs, Selects
- Question cards, Stats, Filters
- Loading states, Toasts
- Responsive design

## 🔧 Utility Functions

### Helpers (`src/assets/js/utils/helpers.js`)
- `debounce()` - Debounce function calls
- `throttle()` - Throttle function calls
- `showToast()` - Display notifications
- `copyToClipboard()` - Copy text
- `downloadJSON()` - Export data
- `scrollToElement()` - Smooth scrolling
- And more...

### Constants (`src/assets/js/utils/constants.js`)
- Status types and colors
- Priority levels
- Subject information
- Sort options
- Error/success messages

## 📊 Data Format

Questions should follow this structure:

```javascript
{
  id: "Q1.1.1",           // Unique identifier
  text: "Question text",   // Question content
  unit: "Unit I",          // Unit name
  subtopic: "Topic",       // Subtopic name
  year: "2023",            // Year of exam
  marks: 8,                // Marks allocation
  frequency: 3,            // How many times asked
  priority: "high",        // Priority level
  status: null             // Current status (null, "known", "review", "unknown")
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect settings from `vercel.json`
3. Deploy!

### Manual Deployment

1. Build is not required (static site)
2. Upload all files to your hosting
3. Ensure server can serve:
   - `/` → `public/index.html`
   - `/ppl` → `src/pages/ppl.html`
   - `/deld` → `src/pages/deld.html`
   - `/os` → `src/pages/os.html`

## 🔄 Migration from Old Structure

The old HTML files contained:
- Inline CSS (700+ lines each)
- Inline JavaScript (500+ lines each)
- Embedded question data (1000+ lines each)
- Duplicated code across files

**New structure benefits:**
- Single source of truth for styles
- Reusable components
- Separated concerns
- Much smaller file sizes
- Easy to maintain and extend

**Old files preserved in root for reference:**
- `PPL_Interactive_QuestionBank.html`
- `DELD_Interactive_QuestionBank.html`
- `OS_Interactive_QuestionBank.html`

**To complete migration:**
1. Extract question data from old HTML files (see `scripts/extract-questions-data.js`)
2. Populate data files in `src/data/`
3. Test thoroughly
4. Remove old HTML files

## 🧪 Testing

Test checklist:
- [ ] All pages load correctly
- [ ] Filters work properly
- [ ] Search functionality works
- [ ] Question status saves to localStorage
- [ ] Progress tracking updates
- [ ] Export/import works
- [ ] Reset functionality works
- [ ] Responsive on mobile
- [ ] All links work

## 📝 Code Style

- **JavaScript**: ES6+ modules, consistent naming
- **CSS**: BEM-like naming, mobile-first
- **HTML**: Semantic, accessible
- **Comments**: JSDoc style for functions

## 🤝 Contributing

1. Follow the existing code style
2. Keep components modular and reusable
3. Document new features
4. Test on multiple devices
5. Update README if needed

## 📄 License

MIT License - Feel free to use for educational purposes

## 👨‍💻 Maintainer

Built for students, by students.

---

**Note:** This is a complete refactor focused on maintainability, scalability, and clean architecture. The old monolithic HTML files have been separated into modular, reusable components following modern best practices.
