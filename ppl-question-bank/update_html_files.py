#!/usr/bin/env python3
"""
Script to update all question bank HTML files to use shared CSS and JS
"""

import re
import os

def update_html_file(filepath, storage_key):
    """Update a single HTML file to use shared CSS and JS"""
    print(f"Processing {os.path.basename(filepath)}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Step 1: Replace <style>...</style> with link to shared CSS
    # Find the style tag and everything until </style>
    style_pattern = r'<style>.*?</style>'
    css_link = '<link rel="stylesheet" href="assets/css/shared-question-bank.css">'
    content = re.sub(style_pattern, css_link, content, flags=re.DOTALL)
    
    # Step 2: Add shared JS script before the inline script, and simplify the inline script
    # Find where questionDatabase ends
    # The pattern: const questionDatabase = { ... };
    # Then replace everything after it until </script> with just the init call
    
    # Find the script tag that contains questionDatabase
    script_pattern = r'(<script>)(.*?)(const questionDatabase = \{.*?\n\s*\};)(.*?)(</script>)'
    
    def replace_script(match):
        script_start = match.group(1)  # <script>
        before_db = match.group(2)      # Any content before questionDatabase
        db_content = match.group(3)     # The questionDatabase definition
        after_db = match.group(4)       # All the functions after questionDatabase
        script_end = match.group(5)     # </script>
        
        # Build the new script section
        shared_script = f'\n    <!-- Shared Question Bank JavaScript -->\n    <script src="assets/js/shared-question-bank.js"></script>\n\n    <!-- Page-specific Data and Initialization -->\n    '
        new_inline_script = f'{script_start}\n{db_content}\n\n        // Initialize the question bank using shared library\n        initializeQuestionBank(questionDatabase, \'{storage_key}\');\n    {script_end}'
        
        return shared_script + new_inline_script
    
    content = re.sub(script_pattern, replace_script, content, flags=re.DOTALL)
    
    # Only write if content actually changed
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ Updated {os.path.basename(filepath)}")
        return True
    else:
        print(f"  - No changes needed for {os.path.basename(filepath)}")
        return False

def main():
    """Update all HTML files"""
    base_dir = r"d:\Local Codebase\New UI Q.B\ppl-question-bank"
    
    files_to_update = [
        ('DELD_Interactive_QuestionBank.html', 'DELD_question_progress'),
        ('OS_Interactive_QuestionBank.html', 'OS_question_progress'),
        ('OOP_Interactive_QuestionBank.html', 'OOP_question_progress'),
        ('DAA_Interactive_QuestionBank.html', 'DAA_question_progress'),
        ('CSA_Interactive_QuestionBank.html', 'CSA_question_progress'),
        ('DBMS_Interactive_QuestionBank.html', 'DBMS_question_progress'),
        ('DM_Interactive_QuestionBank.html', 'DM_question_progress'),
    ]
    
    updated_count = 0
    for filename, storage_key in files_to_update:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            if update_html_file(filepath, storage_key):
                updated_count += 1
        else:
            print(f"  ✗ File not found: {filename}")
    
    print(f"\nCompleted! Updated {updated_count} files.")

if __name__ == '__main__':
    main()
