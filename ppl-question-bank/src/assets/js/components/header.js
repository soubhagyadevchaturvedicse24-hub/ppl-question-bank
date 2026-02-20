/**
 * Header Component
 * Renders the page header with progress tracking
 */

export class Header {
    /**
     * Render header
     * @param {Object} config - Header configuration
     * @returns {string} HTML string
     */
    static render(config = {}) {
        const {
            title = 'Question Bank',
            subtitle = '',
            showProgress = true,
            progress = 0,
            stats = null
        } = config;

        return `
            <header class="header">
                <div class="header-left">
                    <div class="header-title">${title}</div>
                    ${subtitle ? `<div class="header-subtitle">${subtitle}</div>` : ''}
                </div>
                
                ${showProgress ? Header.renderProgress(progress, stats) : ''}
                
                <div class="header-actions">
                    <button class="btn btn-secondary btn-sm" id="resetBtn" title="Reset Progress">
                        <span>↻</span> Reset
                    </button>
                    <button class="btn btn-secondary btn-sm" id="exportBtn" title="Export Data">
                        <span>⬇</span> Export
                    </button>
                    <a href="/" class="btn btn-secondary btn-sm" title="Home">
                        <span>⌂</span> Home
                    </a>
                </div>
            </header>
        `;
    }

    /**
     * Render progress bar
     * @param {number} progress - Progress percentage
     * @param {Object} stats - Statistics object
     * @returns {string} HTML string
     */
    static renderProgress(progress = 0, stats = null) {
        const percentage = Math.min(Math.max(progress, 0), 100);
        
        let progressText = `${percentage}% Complete`;
        if (stats) {
            progressText = `${stats.known + stats.review + stats.unknown} of ${stats.total} questions marked`;
        }

        return `
            <div class="header-progress">
                <div class="header-progress-bar">
                    <div class="header-progress-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="header-progress-text">${progressText}</div>
            </div>
        `;
    }

    /**
     * Update progress dynamically
     * @param {number} progress - New progress percentage
     * @param {Object} stats - Statistics object
     */
    static updateProgress(progress, stats = null) {
        const progressBar = document.querySelector('.header-progress-fill');
        const progressText = document.querySelector('.header-progress-text');

        if (progressBar) {
            progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
        }

        if (progressText && stats) {
            progressText.textContent = `${stats.known + stats.review + stats.unknown} of ${stats.total} questions marked`;
        }
    }

    /**
     * Attach event listeners
     * @param {Object} callbacks - Event callbacks
     */
    static attachEventListeners(callbacks = {}) {
        const { onReset, onExport } = callbacks;

        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn && typeof onReset === 'function') {
            resetBtn.addEventListener('click', onReset);
        }

        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn && typeof onExport === 'function') {
            exportBtn.addEventListener('click', onExport);
        }
    }
}
