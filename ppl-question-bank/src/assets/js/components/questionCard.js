/**
 * Question Card Component
 * Renders individual question cards with status tracking
 */

import { STATUS, STATUS_LABELS, STATUS_COLORS } from '../utils/constants.js';
import { sanitizeHTML } from '../utils/helpers.js';

export class QuestionCard {
    /**
     * Render a question card
     * @param {Object} question - Question data
     * @param {Function} onStatusChange - Callback when status changes
     * @returns {string} HTML string
     */
    static render(question, onStatusChange = null) {
        const { id, text, unit, subtopic, year, marks, frequency, priority, status } = question;

        return `
            <div class="question-card" data-question-id="${id}" data-status="${status || STATUS.UNMARKED}">
                <div class="question-header">
                    <div class="question-meta">
                        ${unit ? `<span class="badge badge-info">${sanitizeHTML(unit)}</span>` : ''}
                        ${subtopic ? `<span class="badge badge-primary">${sanitizeHTML(subtopic)}</span>` : ''}
                        ${year ? `<span class="badge" style="background: rgba(96, 165, 250, 0.2); color: #60a5fa;">${year}</span>` : ''}
                        ${marks ? `<span class="badge" style="background: rgba(52, 211, 153, 0.2); color: #34d399;">${marks}M</span>` : ''}
                        ${frequency > 1 ? `<span class="badge" style="background: rgba(251, 191, 36, 0.2); color: #fbbf24;">Asked ${frequency}×</span>` : ''}
                    </div>
                    ${priority ? QuestionCard.renderPriorityBadge(priority) : ''}
                </div>
                
                <div class="question-text">${text || 'No question text available'}</div>
                
                <div class="question-actions">
                    ${QuestionCard.renderStatusButtons(id, status)}
                </div>
            </div>
        `;
    }

    /**
     * Render priority badge
     * @param {string} priority - Priority level
     * @returns {string} HTML string
     */
    static renderPriorityBadge(priority) {
        const colors = {
            high: 'var(--danger)',
            medium: 'var(--warning)',
            low: 'var(--info)'
        };
        const labels = {
            high: '⭐⭐⭐ High',
            medium: '⭐⭐ Medium',
            low: '⭐ Low'
        };
        return `<span class="badge" style="background: rgba(248, 113, 113, 0.2); color: ${colors[priority] || colors.low};">${labels[priority] || labels.low}</span>`;
    }

    /**
     * Render status buttons
     * @param {string} id - Question ID
     * @param {string} currentStatus - Current status
     * @returns {string} HTML string
     */
    static renderStatusButtons(id, currentStatus) {
        const buttons = [
            { status: STATUS.KNOWN, label: '✓ Known', color: STATUS_COLORS[STATUS.KNOWN] },
            { status: STATUS.REVIEW, label: '↻ Review', color: STATUS_COLORS[STATUS.REVIEW] },
            { status: STATUS.UNKNOWN, label: '✗ Unknown', color: STATUS_COLORS[STATUS.UNKNOWN] }
        ];

        return buttons.map(btn => {
            const isActive = currentStatus === btn.status;
            return `
                <button 
                    class="btn btn-sm status-btn ${isActive ? 'active' : ''}" 
                    data-question-id="${id}"
                    data-status="${btn.status}"
                    style="
                        ${isActive ? `background: ${btn.color}; color: white;` : 'background: var(--glass-bg); color: var(--text-secondary);'}
                        border: 1px solid ${isActive ? btn.color : 'var(--glass-border)'};
                    "
                >
                    ${btn.label}
                </button>
            `;
        }).join('');
    }

    /**
     * Attach event listeners to question cards
     * @param {HTMLElement} container - Container element
     * @param {Function} onStatusChange - Callback when status changes
     */
    static attachEventListeners(container, onStatusChange) {
        if (!container) return;

        container.addEventListener('click', (e) => {
            const btn = e.target.closest('.status-btn');
            if (!btn) return;

            const questionId = btn.dataset.questionId;
            const status = btn.dataset.status;
            const card = btn.closest('.question-card');

            if (!questionId || !status || !card) return;

            // Remove active class from all buttons in this card
            card.querySelectorAll('.status-btn').forEach(b => {
                b.classList.remove('active');
                b.style.background = 'var(--glass-bg)';
                b.style.color = 'var(--text-secondary)';
                b.style.border = '1px solid var(--glass-border)';
            });

            // Add active class to clicked button
            btn.classList.add('active');
            btn.style.background = STATUS_COLORS[status];
            btn.style.color = 'white';
            btn.style.border = `1px solid ${STATUS_COLORS[status]}`;

            // Update card data attribute
            card.dataset.status = status;

            // Call the callback
            if (typeof onStatusChange === 'function') {
                onStatusChange(questionId, status);
            }
        });
    }
}
