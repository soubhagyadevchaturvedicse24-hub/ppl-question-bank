/**
 * LocalStorage Management Module
 * Handles all localStorage operations for question tracking
 */

export class StorageManager {
    constructor(storageKey = 'questionBankData') {
        this.storageKey = storageKey;
    }

    /**
     * Get all stored data
     * @returns {Object} Stored data or empty object
     */
    getData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : {};
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return {};
        }
    }

    /**
     * Save data to localStorage
     * @param {Object} data - Data to save
     * @returns {boolean} Success status
     */
    setData(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error writing to localStorage:', error);
            return false;
        }
    }

    /**
     * Get question status (known/review/unknown)
     * @param {string} questionId - Question ID
     * @returns {string|null} Status or null
     */
    getQuestionStatus(questionId) {
        const data = this.getData();
        return data[questionId] || null;
    }

    /**
     * Set question status
     * @param {string} questionId - Question ID
     * @param {string} status - Status (known/review/unknown)
     * @returns {boolean} Success status
     */
    setQuestionStatus(questionId, status) {
        const data = this.getData();
        data[questionId] = status;
        return this.setData(data);
    }

    /**
     * Remove question status
     * @param {string} questionId - Question ID
     * @returns {boolean} Success status
     */
    removeQuestionStatus(questionId) {
        const data = this.getData();
        delete data[questionId];
        return this.setData(data);
    }

    /**
     * Clear all stored data
     * @returns {boolean} Success status
     */
    clearAllData() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }

    /**
     * Get statistics about question statuses
     * @param {Array} questions - Array of all questions
     * @returns {Object} Statistics object
     */
    getStatistics(questions) {
        const data = this.getData();
        const stats = {
            total: questions.length,
            known: 0,
            review: 0,
            unknown: 0,
            unmarked: 0
        };

        questions.forEach(q => {
            const status = data[q.id];
            if (status === 'known') stats.known++;
            else if (status === 'review') stats.review++;
            else if (status === 'unknown') stats.unknown++;
            else stats.unmarked++;
        });

        stats.progress = stats.total > 0 
            ? Math.round(((stats.known + stats.review + stats.unknown) / stats.total) * 100)
            : 0;

        return stats;
    }

    /**
     * Export data as JSON
     * @returns {string} JSON string of stored data
     */
    exportData() {
        return JSON.stringify(this.getData(), null, 2);
    }

    /**
     * Import data from JSON string
     * @param {string} jsonString - JSON string to import
     * @returns {boolean} Success status
     */
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            return this.setData(data);
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }
}
