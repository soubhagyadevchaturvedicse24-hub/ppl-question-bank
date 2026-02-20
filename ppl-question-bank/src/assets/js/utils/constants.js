/**
 * Application Constants
 * Central location for all constant values
 */

// Status Types
export const STATUS = {
    KNOWN: 'known',
    REVIEW: 'review',
    UNKNOWN: 'unknown',
    UNMARKED: 'unmarked'
};

// Status Colors
export const STATUS_COLORS = {
    [STATUS.KNOWN]: '#34d399',
    [STATUS.REVIEW]: '#fbbf24',
    [STATUS.UNKNOWN]: '#f87171',
    [STATUS.UNMARKED]: 'rgba(255, 255, 255, 0.35)'
};

// Status Labels
export const STATUS_LABELS = {
    [STATUS.KNOWN]: 'Known',
    [STATUS.REVIEW]: 'Review',
    [STATUS.UNKNOWN]: 'Unknown',
    [STATUS.UNMARKED]: 'Unmarked'
};

// Priority Levels
export const PRIORITY = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'
};

// Priority Colors
export const PRIORITY_COLORS = {
    [PRIORITY.HIGH]: '#f87171',
    [PRIORITY.MEDIUM]: '#fbbf24',
    [PRIORITY.LOW]: '#60a5fa'
};

// Priority Labels
export const PRIORITY_LABELS = {
    [PRIORITY.HIGH]: 'High Priority',
    [PRIORITY.MEDIUM]: 'Medium Priority',
    [PRIORITY.LOW]: 'Low Priority'
};

// Subject Information
export const SUBJECTS = {
    PPL: {
        code: 'PPL',
        name: 'Principles of Programming Languages',
        fullName: 'Principles of Programming Languages',
        icon: '💻',
        color: '#38bdf8'
    },
    DELD: {
        code: 'DELD',
        name: 'Digital Electronics & Logic Design',
        fullName: 'Digital Electronics & Logic Design',
        icon: '⚡',
        color: '#818cf8'
    },
    OS: {
        code: 'OS',
        name: 'Operating System',
        fullName: 'Operating System',
        icon: '🖥️',
        color: '#34d399'
    }
};

// Sort Options
export const SORT_OPTIONS = {
    UNIT: 'unit',
    YEAR: 'year',
    MARKS: 'marks',
    FREQUENCY: 'frequency',
    PRIORITY: 'priority'
};

// Sort Order
export const SORT_ORDER = {
    ASC: 'asc',
    DESC: 'desc'
};

// LocalStorage Keys
export const STORAGE_KEYS = {
    PPL: 'pplQuestionData',
    DELD: 'deldQuestionData',
    OS: 'osQuestionData',
    PREFERENCES: 'userPreferences'
};

// Default Preferences
export const DEFAULT_PREFERENCES = {
    theme: 'dark',
    itemsPerPage: 10,
    defaultSort: SORT_OPTIONS.UNIT,
    defaultSortOrder: SORT_ORDER.ASC,
    showMarked: true,
    showUnmarked: true
};

// Marks Options
export const MARKS_OPTIONS = [2, 4, 6, 8, 10, 12, 14, 16];

// Items Per Page Options
export const ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100];

// Animation Durations (in milliseconds)
export const ANIMATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500
};

// Breakpoints
export const BREAKPOINTS = {
    MOBILE: 480,
    TABLET: 768,
    DESKTOP: 1024,
    WIDE: 1280
};

// API Endpoints (if needed in future)
export const API_ENDPOINTS = {
    BASE_URL: '/api',
    QUESTIONS: '/api/questions',
    EXPORT: '/api/export',
    IMPORT: '/api/import'
};

// File Size Limits
export const FILE_SIZE = {
    MAX_IMPORT_SIZE: 5 * 1024 * 1024, // 5MB
    MAX_EXPORT_SIZE: 10 * 1024 * 1024 // 10MB
};

// Regex Patterns
export const REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    URL: /^https?:\/\/.+/,
    NUMBER: /^\d+$/,
    MARKS: /^[0-9]{1,2}$/
};

// Error Messages
export const ERROR_MESSAGES = {
    STORAGE_FAILED: 'Failed to save data. Please check your browser settings.',
    INVALID_DATA: 'Invalid data format. Please check your input.',
    NETWORK_ERROR: 'Network error. Please check your connection.',
    NOT_FOUND: 'The requested resource was not found.',
    GENERIC: 'An unexpected error occurred. Please try again.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
    SAVED: 'Data saved successfully!',
    EXPORTED: 'Data exported successfully!',
    IMPORTED: 'Data imported successfully!',
    CLEARED: 'Data cleared successfully!',
    COPIED: 'Copied to clipboard!'
};
