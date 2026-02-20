/**
 * Filters Component
 * Renders filter controls and handles filter changes
 */

import { FilterManager } from '../core/filters.js';

export class Filters {
    /**
     * Render filter bar
     * @param {Object} config - Filter configuration
     * @returns {string} HTML string
     */
    static render(config = {}) {
        const { questions = [], currentFilters = {} } = config;
        const unitsWithSubtopics = FilterManager.getUnitsWithSubtopics(questions);
        const years = FilterManager.getUniqueValues(questions, 'year');
        const marks = FilterManager.getUniqueValues(questions, 'marks');

        return `
            <div class="filter-bar">
                ${Filters.renderSearchInput(currentFilters.search)}
                ${Filters.renderUnitFilter(unitsWithSubtopics, currentFilters.unit)}
                ${Filters.renderSubtopicFilter(unitsWithSubtopics, currentFilters.unit, currentFilters.subtopic)}
                ${Filters.renderYearFilter(years, currentFilters.year)}
                ${Filters.renderMarksFilter(marks, currentFilters.marks)}
                ${Filters.renderStatusFilter(currentFilters.status)}
                ${Filters.renderClearButton()}
            </div>
        `;
    }

    /**
     * Render search input
     * @param {string} value - Current search value
     * @returns {string} HTML string
     */
    static renderSearchInput(value = '') {
        return `
            <div class="filter-group" style="flex: 2;">
                <label class="filter-label">Search</label>
                <input 
                    type="text" 
                    id="searchInput" 
                    class="input" 
                    placeholder="Search questions..."
                    value="${value || ''}"
                >
            </div>
        `;
    }

    /**
     * Render unit filter
     * @param {Object} unitsWithSubtopics - Units mapped to subtopics
     * @param {string} selected - Selected unit
     * @returns {string} HTML string
     */
    static renderUnitFilter(unitsWithSubtopics, selected = 'all') {
        const units = Object.keys(unitsWithSubtopics).sort();
        return `
            <div class="filter-group">
                <label class="filter-label">Unit</label>
                <select id="unitFilter" class="select">
                    <option value="all" ${selected === 'all' ? 'selected' : ''}>All Units</option>
                    ${units.map(unit => `
                        <option value="${unit}" ${selected === unit ? 'selected' : ''}>${unit}</option>
                    `).join('')}
                </select>
            </div>
        `;
    }

    /**
     * Render subtopic filter
     * @param {Object} unitsWithSubtopics - Units mapped to subtopics
     * @param {string} selectedUnit - Selected unit
     * @param {string} selectedSubtopic - Selected subtopic
     * @returns {string} HTML string
     */
    static renderSubtopicFilter(unitsWithSubtopics, selectedUnit = 'all', selectedSubtopic = 'all') {
        const subtopics = selectedUnit !== 'all' ? unitsWithSubtopics[selectedUnit] || [] : [];
        
        return `
            <div class="filter-group">
                <label class="filter-label">Subtopic</label>
                <select id="subtopicFilter" class="select" ${subtopics.length === 0 ? 'disabled' : ''}>
                    <option value="all">All Subtopics</option>
                    ${subtopics.map(subtopic => `
                        <option value="${subtopic}" ${selectedSubtopic === subtopic ? 'selected' : ''}>${subtopic}</option>
                    `).join('')}
                </select>
            </div>
        `;
    }

    /**
     * Render year filter
     * @param {Array} years - Available years
     * @param {string} selected - Selected year
     * @returns {string} HTML string
     */
    static renderYearFilter(years = [], selected = 'all') {
        return `
            <div class="filter-group">
                <label class="filter-label">Year</label>
                <select id="yearFilter" class="select">
                    <option value="all" ${selected === 'all' ? 'selected' : ''}>All Years</option>
                    ${years.map(year => `
                        <option value="${year}" ${selected === year ? 'selected' : ''}>${year}</option>
                    `).join('')}
                </select>
            </div>
        `;
    }

    /**
     * Render marks filter
     * @param {Array} marks - Available marks
     * @param {string} selected - Selected marks
     * @returns {string} HTML string
     */
    static renderMarksFilter(marks = [], selected = 'all') {
        return `
            <div class="filter-group">
                <label class="filter-label">Marks</label>
                <select id="marksFilter" class="select">
                    <option value="all" ${selected === 'all' ? 'selected' : ''}>All Marks</option>
                    ${marks.map(mark => `
                        <option value="${mark}" ${selected == mark ? 'selected' : ''}>${mark}M</option>
                    `).join('')}
                </select>
            </div>
        `;
    }

    /**
     * Render status filter
     * @param {string} selected - Selected status
     * @returns {string} HTML string
     */
    static renderStatusFilter(selected = 'all') {
        return `
            <div class="filter-group">
                <label class="filter-label">Status</label>
                <select id="statusFilter" class="select">
                    <option value="all" ${selected === 'all' ? 'selected' : ''}>All Status</option>
                    <option value="known" ${selected === 'known' ? 'selected' : ''}>✓ Known</option>
                    <option value="review" ${selected === 'review' ? 'selected' : ''}>↻ Review</option>
                    <option value="unknown" ${selected === 'unknown' ? 'selected' : ''}>✗ Unknown</option>
                    <option value="unmarked" ${selected === 'unmarked' ? 'selected' : ''}>Unmarked</option>
                </select>
            </div>
        `;
    }

    /**
     * Render clear filters button
     * @returns {string} HTML string
     */
    static renderClearButton() {
        return `
            <div class="filter-group" style="justify-content: flex-end; min-width: auto;">
                <label class="filter-label" style="opacity: 0;">Clear</label>
                <button id="clearFilters" class="btn btn-secondary">
                    Clear Filters
                </button>
            </div>
        `;
    }

    /**
     * Attach event listeners
     * @param {Function} onChange - Callback when filters change
     */
    static attachEventListeners(onChange) {
        if (typeof onChange !== 'function') return;

        const searchInput = document.getElementById('searchInput');
        const unitFilter = document.getElementById('unitFilter');
        const subtopicFilter = document.getElementById('subtopicFilter');
        const yearFilter = document.getElementById('yearFilter');
        const marksFilter = document.getElementById('marksFilter');
        const statusFilter = document.getElementById('statusFilter');
        const clearButton = document.getElementById('clearFilters');

        // Search input with debounce
        if (searchInput) {
            let debounceTimer;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => onChange(), 300);
            });
        }

        // Unit filter
        if (unitFilter) {
            unitFilter.addEventListener('change', onChange);
        }

        // Other filters
        [subtopicFilter, yearFilter, marksFilter, statusFilter].forEach(filter => {
            if (filter) {
                filter.addEventListener('change', onChange);
            }
        });

        // Clear button
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                if (unitFilter) unitFilter.value = 'all';
                if (subtopicFilter) subtopicFilter.value = 'all';
                if (yearFilter) yearFilter.value = 'all';
                if (marksFilter) marksFilter.value = 'all';
                if (statusFilter) statusFilter.value = 'all';
                onChange();
            });
        }
    }

    /**
     * Get current filter values
     * @returns {Object} Current filter values
     */
    static getCurrentFilters() {
        return {
            search: document.getElementById('searchInput')?.value || '',
            unit: document.getElementById('unitFilter')?.value || 'all',
            subtopic: document.getElementById('subtopicFilter')?.value || 'all',
            year: document.getElementById('yearFilter')?.value || 'all',
            marks: document.getElementById('marksFilter')?.value || 'all',
            status: document.getElementById('statusFilter')?.value || 'all'
        };
    }

    /**
     * Update subtopic dropdown based on selected unit
     * @param {Object} unitsWithSubtopics - Units mapped to subtopics
     * @param {string} selectedUnit - Selected unit
     */
    static updateSubtopicDropdown(unitsWithSubtopics, selectedUnit) {
        const subtopicFilter = document.getElementById('subtopicFilter');
        if (!subtopicFilter) return;

        const subtopics = selectedUnit !== 'all' ? unitsWithSubtopics[selectedUnit] || [] : [];
        
        subtopicFilter.disabled = subtopics.length === 0;
        subtopicFilter.innerHTML = `
            <option value="all">All Subtopics</option>
            ${subtopics.map(subtopic => `
                <option value="${subtopic}">${subtopic}</option>
            `).join('')}
        `;
    }
}
