/**
 * Statistics Component
 * Renders statistics cards and summaries
 */

import { STATUS_COLORS, STATUS_LABELS } from '../utils/constants.js';

export class Stats {
    /**
     * Render statistics grid
     * @param {Object} stats - Statistics data
     * @returns {string} HTML string
     */
    static render(stats = {}) {
        const {
            total = 0,
            known = 0,
            review = 0,
            unknown = 0,
            unmarked = 0,
            progress = 0
        } = stats;

        return `
            <div class="stats-grid">
                ${Stats.renderStatCard('Total Questions', total, '#60a5fa', '📚')}
                ${Stats.renderStatCard('Known', known, STATUS_COLORS.known, '✓')}
                ${Stats.renderStatCard('Need Review', review, STATUS_COLORS.review, '↻')}
                ${Stats.renderStatCard('Unknown', unknown, STATUS_COLORS.unknown, '✗')}
                ${Stats.renderStatCard('Progress', `${progress}%`, '#818cf8', '📊')}
            </div>
        `;
    }

    /**
     * Render individual stat card
     * @param {string} label - Card label
     * @param {string|number} value - Card value
     * @param {string} color - Card color
     * @param {string} icon - Card icon
     * @returns {string} HTML string
     */
    static renderStatCard(label, value, color, icon = '') {
        return `
            <div class="stat-card">
                <div class="stat-icon" style="font-size: 2rem; margin-bottom: 0.5rem;">${icon}</div>
                <div class="stat-value" style="color: ${color};">${value}</div>
                <div class="stat-label">${label}</div>
            </div>
        `;
    }

    /**
     * Render compact statistics summary
     * @param {Object} stats - Statistics data
     * @returns {string} HTML string
     */
    static renderCompact(stats = {}) {
        const {
            total = 0,
            known = 0,
            review = 0,
            unknown = 0
        } = stats;

        return `
            <div class="stats-compact" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 1rem 0;">
                ${Stats.renderCompactItem('Known', known, STATUS_COLORS.known)}
                ${Stats.renderCompactItem('Review', review, STATUS_COLORS.review)}
                ${Stats.renderCompactItem('Unknown', unknown, STATUS_COLORS.unknown)}
                ${Stats.renderCompactItem('Total', total, '#60a5fa')}
            </div>
        `;
    }

    /**
     * Render compact stat item
     * @param {string} label - Item label
     * @param {number} value - Item value
     * @param {string} color - Item color
     * @returns {string} HTML string
     */
    static renderCompactItem(label, value, color) {
        return `
            <div class="stat-item" style="
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 1rem;
                background: var(--glass-bg);
                border: 1px solid var(--glass-border);
                border-radius: var(--radius-md);
            ">
                <span style="font-weight: 700; font-size: 1.25rem; color: ${color};">${value}</span>
                <span style="font-size: 0.875rem; color: var(--text-secondary);">${label}</span>
            </div>
        `;
    }

    /**
     * Update statistics dynamically
     * @param {Object} newStats - New statistics data
     */
    static update(newStats) {
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            statsGrid.innerHTML = Stats.render(newStats).replace(/<div class="stats-grid">|<\/div>$/g, '');
        }

        const statsCompact = document.querySelector('.stats-compact');
        if (statsCompact) {
            statsCompact.innerHTML = Stats.renderCompact(newStats).replace(/<div class="stats-compact"[^>]*>|<\/div>$/g, '');
        }
    }

    /**
     * Render progress donut chart (SVG)
     * @param {Object} stats - Statistics data
     * @param {number} size - Chart size
     * @returns {string} SVG HTML string
     */
    static renderDonutChart(stats = {}, size = 200) {
        const { known = 0, review = 0, unknown = 0, total = 1 } = stats;
        
        const knownPercent = (known / total) * 100;
        const reviewPercent = (review / total) * 100;
        const unknownPercent = (unknown / total) * 100;

        const radius = size / 2 - 10;
        const circumference = 2 * Math.PI * radius;
        
        const knownStroke = (knownPercent / 100) * circumference;
        const reviewStroke = (reviewPercent / 100) * circumference;
        const unknownStroke = (unknownPercent / 100) * circumference;

        return `
            <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <circle cx="${size/2}" cy="${size/2}" r="${radius}" 
                    fill="none" stroke="var(--glass-border)" stroke-width="20"/>
                
                <circle cx="${size/2}" cy="${size/2}" r="${radius}"
                    fill="none" stroke="${STATUS_COLORS.known}" stroke-width="20"
                    stroke-dasharray="${knownStroke} ${circumference}"
                    transform="rotate(-90 ${size/2} ${size/2})"/>
                
                <circle cx="${size/2}" cy="${size/2}" r="${radius}"
                    fill="none" stroke="${STATUS_COLORS.review}" stroke-width="20"
                    stroke-dasharray="${reviewStroke} ${circumference}"
                    stroke-dashoffset="${-knownStroke}"
                    transform="rotate(-90 ${size/2} ${size/2})"/>
                
                <circle cx="${size/2}" cy="${size/2}" r="${radius}"
                    fill="none" stroke="${STATUS_COLORS.unknown}" stroke-width="20"
                    stroke-dasharray="${unknownStroke} ${circumference}"
                    stroke-dashoffset="${-(knownStroke + reviewStroke)}"
                    transform="rotate(-90 ${size/2} ${size/2})"/>
                
                <text x="${size/2}" y="${size/2}" text-anchor="middle" dy="0.3em"
                    style="font-size: ${size/5}px; font-weight: 700; fill: var(--text-primary);">
                    ${Math.round((known + review + unknown) / total * 100)}%
                </text>
            </svg>
        `;
    }
}
