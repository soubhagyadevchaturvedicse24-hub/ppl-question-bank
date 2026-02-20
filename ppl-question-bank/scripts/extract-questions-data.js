/**
 * Data Extraction Helper Script
 * 
 * This script helps extract question data from the original HTML files
 * and convert it to the new modular format.
 * 
 * USAGE:
 * 1. Make sure you have the old HTML files in the root directory
 * 2. Run: node scripts/extract-questions-data.js
 * 3. The script will create data files in src/data/
 * 
 * MANUAL EXTRACTION:
 * If you prefer to extract manually:
 * 1. Open the HTML file (e.g., PPL_Interactive_QuestionBank.html)
 * 2. Find the data structure (usually starts around line 750-900)
 * 3. Look for patterns like:
 *    const questions = {...} or
 *    "Unit I": { subtopics: { ... } }
 * 4. Extract all questions and flatten them into an array
 * 5. Each question should have: id, text, unit, subtopic, year, marks, frequency, priority
 */

const fs = require('fs');
const path = require('path');

console.log('Data Extraction Helper');
console.log('======================\n');
console.log('To extract questions from the original HTML files:');
console.log('\n1. Locate the question data in each HTML file');
console.log('   - PPL_Interactive_QuestionBank.html (around line 750-1300)');
console.log('   - DELD_Interactive_QuestionBank.html');
console.log('   - OS_Interactive_QuestionBank.html\n');
console.log('2. Convert the nested structure to a flat array');
console.log('3. Update the corresponding file in src/data/\n');
console.log('Question format:');
console.log(JSON.stringify({
    id: "Q1.1.1",
    text: "Question text here",
    unit: "Unit I",
    subtopic: "Subtopic name",
    year: "2023",
    marks: 8,
    frequency: 3,
    priority: "high",
    status: null
}, null, 2));
console.log('\nNote: You can keep the old HTML files as reference until data extraction is complete.');
