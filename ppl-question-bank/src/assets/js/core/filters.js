/**
 * Filtering Module
 * Handles question filtering operations
 */

export class FilterManager {
    /**
     * Filter questions based on criteria
     * @param {Array} questions - Array of questions to filter
     * @param {Object} filters - Filter criteria
     * @returns {Array} Filtered questions
     */
    static filterQuestions(questions, filters = {}) {
        let filtered = [...questions];

        // Filter by unit
        if (filters.unit && filters.unit !== 'all') {
            filtered = filtered.filter(q => q.unit === filters.unit);
        }

        // Filter by subtopic
        if (filters.subtopic && filters.subtopic !== 'all') {
            filtered = filtered.filter(q => q.subtopic === filters.subtopic);
        }

        // Filter by year
        if (filters.year && filters.year !== 'all') {
            filtered = filtered.filter(q => q.year === filters.year);
        }

        // Filter by marks
        if (filters.marks && filters.marks !== 'all') {
            filtered = filtered.filter(q => q.marks === parseInt(filters.marks));
        }

        // Filter by priority
        if (filters.priority && filters.priority !== 'all') {
            filtered = filtered.filter(q => q.priority === filters.priority);
        }

        // Filter by status (known/review/unknown)
        if (filters.status && filters.status !== 'all') {
            filtered = filtered.filter(q => q.status === filters.status);
        }

        // Filter by frequency
        if (filters.minFrequency) {
            filtered = filtered.filter(q => 
                (q.frequency || 1) >= parseInt(filters.minFrequency)
            );
        }

        return filtered;
    }

    /**
     * Get unique values for a field
     * @param {Array} questions - Array of questions
     * @param {string} field - Field name
     * @returns {Array} Sorted unique values
     */
    static getUniqueValues(questions, field) {
        const values = new Set();
        questions.forEach(q => {
            if (q[field]) {
                values.add(q[field]);
            }
        });
        return Array.from(values).sort();
    }

    /**
     * Get units with their subtopics
     * @param {Array} questions - Array of questions
     * @returns {Object} Units mapped to subtopics
     */
    static getUnitsWithSubtopics(questions) {
        const unitsMap = {};
        
        questions.forEach(q => {
            if (!unitsMap[q.unit]) {
                unitsMap[q.unit] = new Set();
            }
            if (q.subtopic) {
                unitsMap[q.unit].add(q.subtopic);
            }
        });

        // Convert Sets to sorted arrays
        Object.keys(unitsMap).forEach(unit => {
            unitsMap[unit] = Array.from(unitsMap[unit]).sort();
        });

        return unitsMap;
    }

    /**
     * Sort questions
     * @param {Array} questions - Array of questions to sort
     * @param {string} sortBy - Field to sort by
     * @param {string} order - Sort order ('asc' or 'desc')
     * @returns {Array} Sorted questions
     */
    static sortQuestions(questions, sortBy = 'unit', order = 'asc') {
        const sorted = [...questions];
        
        sorted.sort((a, b) => {
            let aVal = a[sortBy];
            let bVal = b[sortBy];

            // Handle numeric values
            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return order === 'asc' ? aVal - bVal : bVal - aVal;
            }

            // Handle string values
            aVal = String(aVal || '').toLowerCase();
            bVal = String(bVal || '').toLowerCase();

            if (order === 'asc') {
                return aVal.localeCompare(bVal);
            } else {
                return bVal.localeCompare(aVal);
            }
        });

        return sorted;
    }

    /**
     * Get filter summary
     * @param {Object} filters - Active filters
     * @returns {string} Human-readable summary
     */
    static getFilterSummary(filters) {
        const parts = [];

        if (filters.unit && filters.unit !== 'all') {
            parts.push(`Unit: ${filters.unit}`);
        }
        if (filters.subtopic && filters.subtopic !== 'all') {
            parts.push(`Subtopic: ${filters.subtopic}`);
        }
        if (filters.year && filters.year !== 'all') {
            parts.push(`Year: ${filters.year}`);
        }
        if (filters.marks && filters.marks !== 'all') {
            parts.push(`Marks: ${filters.marks}`);
        }
        if (filters.priority && filters.priority !== 'all') {
            parts.push(`Priority: ${filters.priority}`);
        }
        if (filters.status && filters.status !== 'all') {
            parts.push(`Status: ${filters.status}`);
        }

        return parts.length > 0 ? parts.join(' • ') : 'No filters applied';
    }
}
