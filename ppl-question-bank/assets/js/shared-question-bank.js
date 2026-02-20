/**
 * Shared Question Bank JavaScript
 * Common functionality for all question bank pages
 * Version: 2.0.3 - Enhanced error handling & compatibility (Feb 2026)
 */

console.log('✅ Question Bank JS v2.0.3 loaded successfully');

// Storage utilities with debouncing
let saveTimeout = null;

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Debounced save - only save after user stops clicking for 500ms
function saveProgress(data, storageKey) {
    const jsonString = JSON.stringify(data);
    // Save to localStorage immediately (fast)
    localStorage.setItem(storageKey, jsonString);
    
    // Debounce cookie save (slower operation)
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        setCookie(storageKey, jsonString, 365);
    }, 500);
    
    // Dispatch custom event for cross-tab synchronization
    window.dispatchEvent(new CustomEvent('questionStatusChanged', {
        detail: { storageKey, data }
    }));
}

function loadProgress(storageKey) {
    // Try localStorage first, then cookies
    let data = localStorage.getItem(storageKey);
    if (!data) {
        data = getCookie(storageKey);
        if (data) {
            // Restore to localStorage if found in cookies
            localStorage.setItem(storageKey, data);
        }
    }
    return JSON.parse(data || '{}');
}

// Function to update all instances of a question by ID
function updateAllQuestionInstances(questionId, checked) {
    document.querySelectorAll(`.question-checkbox`).forEach(checkbox => {
        const questionItem = checkbox.closest('.question-item');
        const idElement = questionItem?.querySelector('.question-id');
        
        if (idElement && idElement.textContent === questionId) {
            checkbox.checked = checked;
            questionItem.classList.toggle('completed', checked);
        }
    });
}

// Function to update subtopic stats dynamically
function updateSubtopicStats(subtopicElement, progressData) {
    const subtopicCheckboxes = subtopicElement.querySelectorAll('.question-checkbox');
    const totalQuestions = subtopicCheckboxes.length;
    let completedQuestions = 0;
    
    subtopicCheckboxes.forEach(checkbox => {
        const questionItem = checkbox.closest('.question-item');
        const idElement = questionItem?.querySelector('.question-id');
        if (idElement && progressData[idElement.textContent] === true) {
            completedQuestions++;
        }
    });
    
    const statsDiv = subtopicElement.querySelector('.subtopic-stats');
    if (statsDiv) {
        statsDiv.textContent = `${totalQuestions} Questions | ${completedQuestions} Done`;
    }
    
    // Update subtopic checkbox state
    const subtopicCheckbox = subtopicElement.querySelector('.subtopic-checkbox');
    if (subtopicCheckbox) {
        subtopicCheckbox.checked = (completedQuestions === totalQuestions && totalQuestions > 0);
    }
}

// Function to update unit stats dynamically
function updateUnitStats(unitElement, progressData) {
    const subtopics = unitElement.querySelectorAll('.subtopic-section');
    const totalQuestions = unitElement.querySelectorAll('.question-checkbox').length;
    let completedQuestions = 0;
    
    unitElement.querySelectorAll('.question-checkbox').forEach(checkbox => {
        const questionItem = checkbox.closest('.question-item');
        const idElement = questionItem?.querySelector('.question-id');
        if (idElement && progressData[idElement.textContent] === true) {
            completedQuestions++;
        }
    });
    
    const unitInfo = unitElement.querySelector('.unit-info span');
    if (unitInfo) {
        const subtopicCount = subtopics.length;
        unitInfo.textContent = `${subtopicCount} Subtopics | ${totalQuestions} Questions | ${completedQuestions} Done`;
    }
    
    // Update unit checkbox state
    const unitCheckbox = unitElement.querySelector('.unit-checkbox');
    if (unitCheckbox) {
        unitCheckbox.checked = (completedQuestions === totalQuestions && totalQuestions > 0);
    }
}

// Core rendering functions
function createUnitSection(unitKey, unitData, progressData, storageKey, onSave) {
    const section = document.createElement('div');
    section.className = 'unit-section';
    
    const unitId = unitKey.replace(' ', '-').toLowerCase();
    const totalQuestions = Object.values(unitData.subtopics).reduce((sum, st) => sum + st.questions.length, 0);
    const completedQuestions = Object.values(unitData.subtopics).reduce((sum, st) => {
        return sum + st.questions.filter(q => progressData[q.id] === true).length;
    }, 0);

    const header = document.createElement('div');
    header.className = 'unit-header';
    header.innerHTML = `
        <div class="unit-title">
            <input type="checkbox" class="unit-checkbox" data-unit="${unitId}" ${completedQuestions === totalQuestions && totalQuestions > 0 ? 'checked' : ''}>
            <strong>${unitData.name}</strong>
        </div>
        <div class="unit-info">
            <span>${Object.keys(unitData.subtopics).length} Subtopics | ${totalQuestions} Questions | ${completedQuestions} Done</span>
            <span class="dropdown-icon">▼</span>
        </div>
    `;

    const content = document.createElement('div');
    content.className = 'unit-content';

    Object.entries(unitData.subtopics).forEach(([subtopicKey, subtopicData]) => {
        const subtopicSection = createSubtopicSection(unitKey, subtopicKey, subtopicData, progressData, storageKey, onSave);
        content.appendChild(subtopicSection);
    });

    // Unit header click - toggle unit
    header.addEventListener('click', (e) => {
        if (e.target.type !== 'checkbox') {
            header.classList.toggle('active');
            content.classList.toggle('show');
        }
    });

    // Unit checkbox - mark all questions in unit
    const unitCheckbox = header.querySelector('.unit-checkbox');
    unitCheckbox.addEventListener('click', (e) => {
        e.stopPropagation();
        const checked = e.target.checked;
        Object.values(unitData.subtopics).forEach(st => {
            st.questions.forEach(q => {
                progressData[q.id] = checked;
                // Update all instances of each question
                updateAllQuestionInstances(q.id, checked);
            });
        });
        saveProgress(progressData, storageKey);
        // Update UI without full re-render
        updateUnitVisualState(section, checked);
        updateStats(window.questionDatabase, progressData);
        
        // Update all subtopic stats in this unit
        section.querySelectorAll('.subtopic-section').forEach(subtopicElement => {
            updateSubtopicStats(subtopicElement, progressData);
        });
        // Update unit stats
        updateUnitStats(section, progressData);
    });

    section.appendChild(header);
    section.appendChild(content);
    return section;
}

function createSubtopicSection(unitKey, subtopicKey, subtopicData, progressData, storageKey, onSave) {
    const section = document.createElement('div');
    section.className = 'subtopic-section';
    
    const totalQuestions = subtopicData.questions.length;
    const completedQuestions = subtopicData.questions.filter(q => progressData[q.id] === true).length;
    const priorityIcon = subtopicData.priority === 'high' ? '⭐⭐⭐' : subtopicData.priority === 'medium' ? '⭐⭐' : '⭐';

    const header = document.createElement('div');
    header.className = 'subtopic-header';
    header.innerHTML = `
        <div class="subtopic-title">
            <input type="checkbox" class="subtopic-checkbox" data-subtopic="${unitKey}-${subtopicKey}" ${completedQuestions === totalQuestions && totalQuestions > 0 ? 'checked' : ''}>
            <span>${subtopicKey}: ${subtopicData.name} ${priorityIcon}</span>
        </div>
        <div class="subtopic-right">
            <div class="subtopic-stats">${totalQuestions} Questions | ${completedQuestions} Done</div>
            <div class="subtopic-dropdown-icon">▼</div>
        </div>
    `;

    const content = document.createElement('div');
    content.className = 'subtopic-content';

    subtopicData.questions.forEach(question => {
        const questionItem = createQuestionItem(question, progressData, storageKey, onSave);
        content.appendChild(questionItem);
    });

    // Subtopic header click - toggle subtopic
    header.addEventListener('click', (e) => {
        if (e.target.type !== 'checkbox') {
            header.classList.toggle('active');
            content.classList.toggle('show');
        }
    });

    // Subtopic checkbox - mark all questions in subtopic
    const subtopicCheckbox = header.querySelector('.subtopic-checkbox');
    subtopicCheckbox.addEventListener('click', (e) => {
        e.stopPropagation();
        const checked = e.target.checked;
        subtopicData.questions.forEach(q => {
            progressData[q.id] = checked;
            // Update all instances of each question
            updateAllQuestionInstances(q.id, checked);
        });
        saveProgress(progressData, storageKey);
        // Update UI without full re-render
        updateSubtopicVisualState(section, checked);
        updateStats(window.questionDatabase, progressData);
        
        // Update subtopic stats
        updateSubtopicStats(section, progressData);
        // Update parent unit stats
        const unitSection = section.closest('.unit-section');
        if (unitSection) {
            updateUnitStats(unitSection, progressData);
        }
    });

    section.appendChild(header);
    section.appendChild(content);
    return section;
}

function createQuestionItem(question, progressData, storageKey, onSave) {
    try {
        const item = document.createElement('div');
        item.className = 'question-item' + (progressData[question.id] ? ' completed' : '');

        const header = document.createElement('div');
        header.className = 'question-header';

    const leftSection = document.createElement('div');
    leftSection.className = 'question-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'question-checkbox';
    checkbox.checked = progressData[question.id] || false;

    checkbox.addEventListener('change', (e) => {
        const questionId = question.id;
        const checked = e.target.checked;
        
        // Update progress data
        progressData[questionId] = checked;
        
        // Save progress
        saveProgress(progressData, storageKey);
        
        // Update ALL instances of this question on the page
        updateAllQuestionInstances(questionId, checked);
        
        // Update stats without re-rendering entire page
        updateStats(window.questionDatabase, progressData);
        
        // Update subtopic stats
        const subtopicSection = checkbox.closest('.subtopic-section');
        if (subtopicSection) {
            updateSubtopicStats(subtopicSection, progressData);
        }
        
        // Update parent unit stats
        const unitSection = checkbox.closest('.unit-section');
        if (unitSection) {
            updateUnitStats(unitSection, progressData);
        }
    });

    const questionId = document.createElement('div');
    questionId.className = 'question-id';
    questionId.textContent = question.id;

    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.text;

    leftSection.appendChild(checkbox);
    leftSection.appendChild(questionId);
    leftSection.appendChild(questionText);

    const rightSection = document.createElement('div');
    rightSection.className = 'question-right';
    
    const meta = document.createElement('div');
    meta.className = 'question-meta';
    
    // Support both formats: question.meta.X and question.X
    const metadata = question.meta || question;
    
    // Priority badge (highest priority at top)
    if (metadata.priority === 'highest') {
        meta.innerHTML += `<span class="meta-badge badge-high" title="Highest Priority Question">⭐ HIGH</span>`;
    } else if (metadata.priority === 'high') {
        meta.innerHTML += `<span class="meta-badge badge-priority-high" title="High Priority">HIGH</span>`;
    } else if (metadata.priority === 'medium') {
        meta.innerHTML += `<span class="meta-badge badge-priority-medium" title="Medium Priority">MED</span>`;
    }
    
    // Frequency/Repeat count badge
    if (metadata.frequency && metadata.frequency > 1) {
        meta.innerHTML += `<span class="meta-badge badge-repeat" title="Asked ${metadata.frequency} times">${metadata.frequency}×</span>`;
    }
    
    // Marks badge
    if (metadata.marks) {
        meta.innerHTML += `<span class="meta-badge badge-marks" title="${metadata.marks} marks">${metadata.marks}M</span>`;
    }
    
    // Year chips with overflow handling (max 3 years, rest as +N)
    const MAX_YEAR_CHIPS = 3;
    let years = [];
    
    if (metadata.year) {
        years.push(metadata.year);
    }
    if (metadata.years && Array.isArray(metadata.years)) {
        years = [...years, ...metadata.years];
    }
    
    // Remove duplicates and sort
    years = [...new Set(years)].sort().reverse();
    
    if (years.length > 0) {
        const visibleYears = years.slice(0, MAX_YEAR_CHIPS);
        const hiddenYears = years.slice(MAX_YEAR_CHIPS);
        
        visibleYears.forEach(year => {
            meta.innerHTML += `<span class="meta-badge badge-year" title="Year ${year}">${year}</span>`;
        });
        
        if (hiddenYears.length > 0) {
            const allYears = years.join(', ');
            meta.innerHTML += `<span class="meta-badge badge-overflow" title="Also in: ${hiddenYears.join(', ')}">+${hiddenYears.length}</span>`;
        }
    }

    rightSection.appendChild(meta);
    header.appendChild(leftSection);
    header.appendChild(rightSection);
    item.appendChild(header);
    return item;
    } catch (error) {
        console.error('❌ Error creating question item:', question.id, error);
        return document.createElement('div'); // Return empty div to prevent breaking
    }
}

// Helper functions to update visual state without full re-render
function updateUnitVisualState(unitSection, checked) {
    // Update all question checkboxes and visual states within this unit
    unitSection.querySelectorAll('.question-checkbox').forEach(cb => {
        cb.checked = checked;
        const questionItem = cb.closest('.question-item');
        if (checked) {
            questionItem.classList.add('completed');
        } else {
            questionItem.classList.remove('completed');
        }
    });
    
    // Update all subtopic checkboxes
    unitSection.querySelectorAll('.subtopic-checkbox').forEach(cb => {
        cb.checked = checked;
    });
}

function updateSubtopicVisualState(subtopicSection, checked) {
    // Update all question checkboxes and visual states within this subtopic
    subtopicSection.querySelectorAll('.question-checkbox').forEach(cb => {
        cb.checked = checked;
        const questionItem = cb.closest('.question-item');
        if (checked) {
            questionItem.classList.add('completed');
        } else {
            questionItem.classList.remove('completed');
        }
    });
}

function getTotalQuestions(questionDatabase) {
    if (!questionDatabase) {
        console.error('❌ getTotalQuestions: questionDatabase is undefined');
        return 0;
    }
    
    let total = 0;
    Object.values(questionDatabase).forEach(unitData => {
        if (unitData && unitData.subtopics) {
            Object.values(unitData.subtopics).forEach(subtopicData => {
                if (subtopicData && subtopicData.questions) {
                    total += subtopicData.questions.length;
                }
            });
        }
    });
    return total;
}

function updateStats(questionDatabase, progressData) {
    if (!questionDatabase) {
        console.error('❌ updateStats: questionDatabase is undefined');
        return;
    }
    
    const totalQuestions = getTotalQuestions(questionDatabase);
    const completedQuestions = Object.values(progressData || {}).filter(v => v === true).length;
    const percent = totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;

    // Update header stats
    const totalQuestionsEl = document.getElementById('totalQuestions');
    const completedQuestionsEl = document.getElementById('completedQuestions');
    const progressPercentEl = document.getElementById('progressPercent');
    
    if (totalQuestionsEl) totalQuestionsEl.textContent = totalQuestions;
    if (completedQuestionsEl) completedQuestionsEl.textContent = completedQuestions;
    if (progressPercentEl) progressPercentEl.textContent = percent + '%';

    // Update header progress bar and text
    const progressFill = document.getElementById('headerProgressFill');
    const progressText = document.getElementById('headerProgressText');
    if (progressFill) progressFill.style.width = percent + '%';
    if (progressText) progressText.textContent = `${completedQuestions} of ${totalQuestions} completed`;
}

// Filter and search functionality
function setupFilters(questionDatabase, onFilter) {
    document.getElementById('searchBox').addEventListener('input', onFilter);
    document.getElementById('unitFilter').addEventListener('change', onFilter);
    document.getElementById('priorityFilter').addEventListener('change', onFilter);
    document.getElementById('yearFilter').addEventListener('change', onFilter);
}

function applyFilters(questionDatabase) {
    const search = document.getElementById('searchBox').value.toLowerCase();
    const unitFilter = document.getElementById('unitFilter').value;
    const priorityFilter = document.getElementById('priorityFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;

    document.querySelectorAll('.unit-section').forEach((unitSection, idx) => {
        const unitKey = Object.keys(questionDatabase)[idx];
        const showUnit = unitFilter === 'all' || unitFilter === unitKey;

        let unitHasResults = false;

        unitSection.querySelectorAll('.subtopic-section').forEach(subtopicSection => {
            let subtopicHasResults = false;

            subtopicSection.querySelectorAll('.question-item').forEach(questionItem => {
                const text = questionItem.textContent.toLowerCase();
                const matchesSearch = search === '' || text.includes(search);

                let matchesPriority = true;
                const hasMeta = questionItem.querySelector('.badge-high');
                if (priorityFilter === 'high' && !hasMeta) matchesPriority = false;
                
                let matchesYear = true;
                if (yearFilter !== 'all') {
                    matchesYear = text.includes(yearFilter);
                }
                
                if (matchesSearch && matchesPriority && matchesYear && showUnit) {
                    questionItem.style.display = 'block';
                    subtopicHasResults = true;
                    unitHasResults = true;
                } else {
                    questionItem.style.display = 'none';
                }
            });

            subtopicSection.style.display = subtopicHasResults ? 'block' : 'none';
        });

        unitSection.style.display = unitHasResults ? 'block' : 'none';
    });

    // Auto-expand if filtering
    if (search !== '' || unitFilter !== 'all' || priorityFilter !== 'all' || yearFilter !== 'all') {
        document.querySelectorAll('.unit-header').forEach(h => {
            if (h.parentElement.style.display !== 'none') {
                h.classList.add('active');
                h.nextElementSibling.classList.add('show');
            }
        });
        document.querySelectorAll('.subtopic-header').forEach(h => {
            if (h.parentElement.style.display !== 'none') {
                h.classList.add('active');
                h.nextElementSibling.classList.add('show');
            }
        });
    }
}

// Control button utilities
function setupControls(progressData, storageKey, onRender) {
    document.getElementById('expandAll').addEventListener('click', () => {
        document.querySelectorAll('.unit-header').forEach(h => {
            h.classList.add('active');
            h.nextElementSibling.classList.add('show');
        });
        document.querySelectorAll('.subtopic-header').forEach(h => {
            h.classList.add('active');
            h.nextElementSibling.classList.add('show');
        });
    });

    document.getElementById('collapseAll').addEventListener('click', () => {
        document.querySelectorAll('.unit-header').forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('show');
        });
        document.querySelectorAll('.subtopic-header').forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('show');
        });
    });

    document.getElementById('resetProgress').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            // Clear progress data
            for (let key in progressData) {
                delete progressData[key];
            }
            saveProgress(progressData, storageKey);
            if (onRender) onRender();
        }
    });
}

// Initialize question bank
function initializeQuestionBank(questionDatabase, storageKey) {
    console.log(`🚀 Initializing Question Bank: ${storageKey}`);
    console.log(`📊 Units: ${Object.keys(questionDatabase || {}).length}`);
    
    if (!questionDatabase || Object.keys(questionDatabase).length === 0) {
        console.error('❌ questionDatabase is empty or undefined!');
        return;
    }
    
    // Store globally for access in update functions
    window.questionDatabase = questionDatabase;
    
    // Load progress
    const progressData = loadProgress(storageKey);
    
    // Render function
    function renderQuestionBank() {
        const container = document.getElementById('questionBank');
        if (!container) {
            console.error('❌ Container #questionBank not found!');
            return;
        }
        
        console.log('🎨 Rendering question bank...');
        container.innerHTML = '';

        Object.entries(questionDatabase).forEach(([unitKey, unitData]) => {
            const unitSection = createUnitSection(unitKey, unitData, progressData, storageKey, () => {
                // Only update stats, don't re-render
                updateStats(questionDatabase, progressData);
            });
            container.appendChild(unitSection);
        });

        updateStats(questionDatabase, progressData);
        const totalQuestions = getTotalQuestions(questionDatabase);
        console.log(`✅ Rendered ${Object.keys(questionDatabase).length} units with ${totalQuestions} total questions`);
    }
    
    // Setup controls and filters
    setupControls(progressData, storageKey, renderQuestionBank);
    
    // Debounced filter for better performance
    let filterTimeout = null;
    const debouncedFilter = () => {
        if (filterTimeout) clearTimeout(filterTimeout);
        filterTimeout = setTimeout(() => {
            requestAnimationFrame(() => applyFilters(questionDatabase));
        }, 150);
    };
    
    setupFilters(questionDatabase, debouncedFilter);
    
    // Initial render
    renderQuestionBank();
    
    // Auto-expand first unit on load
    setTimeout(() => {
        const firstUnit = document.querySelector('.unit-header');
        if (firstUnit) {
            firstUnit.classList.add('active');
            firstUnit.nextElementSibling.classList.add('show');
        }
    }, 100);
    
    // Listen for storage changes (cross-tab synchronization)
    window.addEventListener('storage', (e) => {
        if (e.key === storageKey && e.newValue) {
            console.log('🔄 Syncing progress from another tab...');
            const newProgressData = JSON.parse(e.newValue);
            
            // Update progressData
            Object.keys(newProgressData).forEach(key => {
                progressData[key] = newProgressData[key];
            });
            
            // Update all checkboxes to reflect new state
            Object.keys(newProgressData).forEach(questionId => {
                updateAllQuestionInstances(questionId, newProgressData[questionId]);
            });
            
            // Update stats
            updateStats(questionDatabase, progressData);
            
            // Update all subtopic and unit stats
            document.querySelectorAll('.subtopic-section').forEach(subtopicElement => {
                updateSubtopicStats(subtopicElement, progressData);
            });
            document.querySelectorAll('.unit-section').forEach(unitElement => {
                updateUnitStats(unitElement, progressData);
            });
        }
    });
    
    // Listen for custom events (same-page synchronization)
    window.addEventListener('questionStatusChanged', (e) => {
        if (e.detail.storageKey === storageKey) {
            console.log('🔄 Syncing progress within page...');
            // Update stats to reflect any changes
            updateStats(questionDatabase, progressData);
            
            // Update all subtopic and unit stats
            document.querySelectorAll('.subtopic-section').forEach(subtopicElement => {
                updateSubtopicStats(subtopicElement, progressData);
            });
            document.querySelectorAll('.unit-section').forEach(unitElement => {
                updateUnitStats(unitElement, progressData);
            });
        }
    });
    
    return { progressData, renderQuestionBank };
}
