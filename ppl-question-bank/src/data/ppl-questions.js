/**
 * PPL Questions Data
 * To populate with full data, run the data extraction script:
 * node scripts/extract-questions.js
 * 
 * Or manually copy questions from PPL_Interactive_QuestionBank.html (line ~750-1300)
 */

// Sample data structure - replace with full data
export const pplQuestions = [
    {
        id: "Q1.1.1",
        text: "What is a programming language? Explain its purpose and importance.",
        unit: "Unit I",
        subtopic: "Introduction to Programming Languages",
        year: "2023",
        marks: 8,
        frequency: 3,
        priority: "high",
        status: null
    },
    {
        id: "Q1.1.2",
        text: "Differentiate between high-level and low-level programming languages.",
        unit: "Unit I",
        subtopic: "Introduction to Programming Languages",
        year: "2022",
        marks: 4,
        frequency: 2,
        priority: "medium",
        status: null
    },
    // Add more questions here...
    // Import the full dataset from the original HTML file
];

/**
 * HOW TO EXTRACT FULL DATA:
 * 
 * 1. Open PPL_Interactive_QuestionBank.html in a text editor
 * 2. Find the JavaScript section with the questions object (around line 750-1300)
 * 3. Copy the entire data structure
 * 4. Convert it to the format above:
 *    - Each question should be a flat object
 *    - Include: id, text, unit, subtopic, year, marks, frequency, priority
 *    - Set status to null (it will be loaded from storage)
 * 
 * Or use the automated extraction script:
 * Run: node scripts/extract-questions-data.js
 */
