/**
 * Main Application Module
 * Coordinates all components and manages application state
 */

import { StorageManager } from './core/storage.js';
import { SearchManager } from './core/search.js';
import { FilterManager } from './core/filters.js';
import { QuestionCard } from './components/questionCard.js';
import { Header } from './components/header.js';
import { Stats } from './components/stats.js';
import { Filters } from './components/filters.js';
import { showToast, debounce } from './utils/helpers.js';
import { STATUS } from './utils/constants.js';

export class QuestionBankApp {
    constructor(config = {}) {
        this.config = {
            subject: config.subject || 'Question Bank',
            storageKey: config.storageKey || 'questionBankData',
            questions: config.questions || [],
            ...config
        };

        this.storage = new StorageManager(this.config.storageKey);
        this.currentFilters = {};
        this.filteredQuestions = [];
        
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.loadQuestionStatuses();
        this.renderApp();
        this.attachEventListeners();
        this.applyFilters();
    }

    /**
     * Load question statuses from storage
     */
    loadQuestionStatuses() {
        const storedData = this.storage.getData();
        this.config.questions.forEach(question => {
            question.status = storedData[question.id] || STATUS.UNMARKED;
        });
    }

    /**
     * Render the entire application
     */
    renderApp() {
        const stats = this.storage.getStatistics(this.config.questions);
        
        // Render header
        const headerContainer = document.getElementById('headerContainer');
        if (headerContainer) {
            headerContainer.innerHTML = Header.render({
                title: this.config.subject,
                subtitle: `${this.config.questions.length} Questions`,
                showProgress: true,
                progress: stats.progress,
                stats: stats
            });
        }

        // Render stats
        const statsContainer = document.getElementById('statsContainer');
        if (statsContainer) {
            statsContainer.innerHTML = Stats.render(stats);
        }

        // Render filters
        const filtersContainer = document.getElementById('filtersContainer');
        if (filtersContainer) {
            filtersContainer.innerHTML = Filters.render({
                questions: this.config.questions,
                currentFilters: this.currentFilters
            });
        }
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Header events
        Header.attachEventListeners({
            onReset: () => this.resetProgress(),
            onExport: () => this.exportData()
        });

        // Filter events
        Filters.attachEventListeners(() => this.applyFilters());

        // Question card events
        const questionsContainer = document.getElementById('questionsContainer');
        if (questionsContainer) {
            QuestionCard.attachEventListeners(questionsContainer, (questionId, status) => {
                this.handleStatusChange(questionId, status);
            });
        }

        // Unit filter change for subtopic update
        const unitFilter = document.getElementById('unitFilter');
        if (unitFilter) {
            unitFilter.addEventListener('change', () => {
                const unitsWithSubtopics = FilterManager.getUnitsWithSubtopics(this.config.questions);
                const selectedUnit = unitFilter.value;
                Filters.updateSubtopicDropdown(unitsWithSubtopics, selectedUnit);
            });
        }
    }

    /**
     * Apply filters and render questions
     */
    applyFilters() {
        this.currentFilters = Filters.getCurrentFilters();
        
        // Start with all questions
        let filtered = [...this.config.questions];

        // Apply search
        if (this.currentFilters.search) {
            filtered = SearchManager.searchQuestions(filtered, this.currentFilters.search);
        }

        // Apply filters
        filtered = FilterManager.filterQuestions(filtered, this.currentFilters);

        // Sort questions
        filtered = FilterManager.sortQuestions(filtered, 'unit', 'asc');

        this.filteredQuestions = filtered;
        this.renderQuestions();
    }

    /**
     * Render questions
     */
    renderQuestions() {
        const questionsContainer = document.getElementById('questionsContainer');
        if (!questionsContainer) return;

        if (this.filteredQuestions.length === 0) {
            questionsContainer.innerHTML = `
                <div style="
                    text-align: center;
                    padding: 4rem 2rem;
                    color: var(--text-secondary);
                ">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                    <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No Questions Found</h3>
                    <p>Try adjusting your filters or search criteria</p>
                </div>
            `;
            return;
        }

        const html = this.filteredQuestions
            .map(question => QuestionCard.render(question))
            .join('');

        questionsContainer.innerHTML = html;

        // Update results count
        this.updateResultsCount();
    }

    /**
     * Update results count display
     */
    updateResultsCount() {
        let resultsInfo = document.getElementById('resultsInfo');
        if (!resultsInfo) {
            resultsInfo = document.createElement('div');
            resultsInfo.id = 'resultsInfo';
            resultsInfo.style.cssText = `
                text-align: center;
                padding: 1rem;
                color: var(--text-secondary);
                font-size: 0.875rem;
            `;
            const questionsContainer = document.getElementById('questionsContainer');
            if (questionsContainer) {
                questionsContainer.parentNode.insertBefore(resultsInfo, questionsContainer);
            }
        }

        const total = this.config.questions.length;
        const showing = this.filteredQuestions.length;
        
        if (showing === total) {
            resultsInfo.textContent = `Showing all ${total} questions`;
        } else {
            resultsInfo.textContent = `Showing ${showing} of ${total} questions`;
        }
    }

    /**
     * Handle question status change
     */
    handleStatusChange(questionId, status) {
        // Update storage
        this.storage.setQuestionStatus(questionId, status);

        // Update question object
        const question = this.config.questions.find(q => q.id === questionId);
        if (question) {
            question.status = status;
        }

        // Update UI
        this.updateStats();
        
        showToast('Status updated!', 'success', 1500);
    }

    /**
     * Update statistics display
     */
    updateStats() {
        const stats = this.storage.getStatistics(this.config.questions);
        
        // Update stats component
        Stats.update(stats);
        
        // Update header progress
        Header.updateProgress(stats.progress, stats);
    }

    /**
     * Reset all progress
     */
    resetProgress() {
        if (!confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            return;
        }

        this.storage.clearAllData();
        this.config.questions.forEach(q => q.status = STATUS.UNMARKED);
        
        this.renderApp();
        this.renderQuestions();
        
        showToast('Progress reset successfully!', 'success');
    }

    /**
     * Export data as JSON
     */
    exportData() {
        const data = this.storage.exportData();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.config.storageKey}-backup-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
        
        showToast('Data exported successfully!', 'success');
    }

    /**
     * Import data from JSON
     */
    importData(jsonString) {
        try {
            const success = this.storage.importData(jsonString);
            if (success) {
                this.loadQuestionStatuses();
                this.renderApp();
                this.renderQuestions();
                showToast('Data imported successfully!', 'success');
                return true;
            }
        } catch (error) {
            showToast('Failed to import data. Please check the file format.', 'danger');
            return false;
        }
    }
}
