/**
 * OS Questions Data
 * To populate with full data, run the data extraction script:
 * node scripts/extract-questions.js
 * 
 * Or manually copy questions from OS_Interactive_QuestionBank.html
 */

// Sample data structure - replace with full data
export const osQuestions = [
    {
        id: "Q1.1.1",
        text: "What is an operating system? Explain its functions.",
        unit: "Unit 1",
        subtopic: "Introduction to OS",
        year: "2023",
        marks: 8,
        frequency: 5,
        priority: "high",
        status: null
    },
    {
        id: "Q1.1.2",
        text: "Describe different types of operating systems.",
        unit: "Unit 1",
        subtopic: "Introduction to OS",
        year: "2022",
        marks: 4,
        frequency: 3,
        priority: "medium",
        status: null
    },
    // Add more questions here...
];

/**
 * HOW TO EXTRACT FULL DATA:
 * 
 * 1. Open OS_Interactive_QuestionBank.html in a text editor
 * 2. Find the JavaScript section with the questions object
 * 3. Convert it to the format above (flat array of question objects)
 * 
 * Or use the automated extraction script:
 * Run: node scripts/extract-questions-data.js
 */
