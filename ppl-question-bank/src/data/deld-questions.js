/**
 * DELD Questions Data
 * To populate with full data, run the data extraction script:
 * node scripts/extract-questions.js
 * 
 * Or manually copy questions from DELD_Interactive_QuestionBank.html
 */

// Sample data structure - replace with full data
export const deldQuestions = [
    {
        id: "Q1.1.1",
        text: "Explain number systems used in digital electronics.",
        unit: "Unit 1",
        subtopic: "Number Systems & Codes",
        year: "2023",
        marks: 8,
        frequency: 4,
        priority: "high",
        status: null
    },
    {
        id: "Q1.1.2",
        text: "Convert decimal to binary and hexadecimal.",
        unit: "Unit 1",
        subtopic: "Number Systems & Codes",
        year: "2022",
        marks: 4,
        frequency: 2,
        priority: "medium",
        status: null
    },
    // Add more questions here...
];

/**
 * HOW TO EXTRACT FULL DATA:
 * 
 * 1. Open DELD_Interactive_QuestionBank.html in a text editor
 * 2. Find the JavaScript section with the questions object
 * 3. Convert it to the format above (flat array of question objects)
 * 
 * Or use the automated extraction script:
 * Run: node scripts/extract-questions-data.js
 */
