/**
 * Search Functionality Module
 * Handles question search operations
 */

export class SearchManager {
    /**
     * Search questions by text
     * @param {Array} questions - Array of questions to search
     * @param {string} searchTerm - Search term
     * @returns {Array} Filtered questions
     */
    static searchQuestions(questions, searchTerm) {
        if (!searchTerm || searchTerm.trim() === '') {
            return questions;
        }

        const term = searchTerm.toLowerCase().trim();
        
        return questions.filter(question => {
            // Search in question text
            if (question.text && question.text.toLowerCase().includes(term)) {
                return true;
            }

            // Search in subtopic
            if (question.subtopic && question.subtopic.toLowerCase().includes(term)) {
                return true;
            }

            // Search in unit
            if (question.unit && question.unit.toLowerCase().includes(term)) {
                return true;
            }

            // Search in year
            if (question.year && question.year.includes(term)) {
                return true;
            }

            // Search in marks
            if (question.marks && question.marks.toString().includes(term)) {
                return true;
            }

            return false;
        });
    }

    /**
     * Highlight search term in text
     * @param {string} text - Text to highlight
     * @param {string} searchTerm - Term to highlight
     * @returns {string} HTML string with highlighted terms
     */
    static highlightSearchTerm(text, searchTerm) {
        if (!searchTerm || searchTerm.trim() === '') {
            return text;
        }

        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    }

    /**
     * Get search suggestions based on input
     * @param {Array} questions - Array of questions
     * @param {string} searchTerm - Partial search term
     * @param {number} limit - Maximum suggestions to return
     * @returns {Array} Array of suggestions
     */
    static getSearchSuggestions(questions, searchTerm, limit = 5) {
        if (!searchTerm || searchTerm.trim() === '') {
            return [];
        }

        const term = searchTerm.toLowerCase().trim();
        const suggestions = new Set();

        questions.forEach(question => {
            if (suggestions.size >= limit) return;

            // Add subtopic if matches
            if (question.subtopic && question.subtopic.toLowerCase().includes(term)) {
                suggestions.add(question.subtopic);
            }

            // Add unit if matches
            if (question.unit && question.unit.toLowerCase().includes(term)) {
                suggestions.add(question.unit);
            }
        });

        return Array.from(suggestions).slice(0, limit);
    }
}
