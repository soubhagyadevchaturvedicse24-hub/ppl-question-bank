import re
import json
from collections import defaultdict

# Read the HTML file
with open('PPL_Complete_All_Units_Questions.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract all questions with their metadata
questions = []
question_pattern = r'<div class="question">(.*?)</div>\s*</div>\s*</div>'
matches = re.finditer(question_pattern, html_content, re.DOTALL)

for match in matches:
    question_html = match.group(1)
    
    # Extract question number
    q_num_match = re.search(r'<div class="question-number">(Q\d+\.\d+\.\d+)</div>', question_html)
    if not q_num_match:
        continue
    q_num = q_num_match.group(1)
    
    # Extract question text
    q_text_match = re.search(r'<div class="question-text">(.*?)</div>', question_html, re.DOTALL)
    if not q_text_match:
        continue
    q_text = re.sub(r'<.*?>', '', q_text_match.group(1)).strip()
    
    # Extract metadata
    meta_html = re.search(r'<div class="question-meta">(.*?)</div>', question_html, re.DOTALL)
    meta_text = meta_html.group(1) if meta_html else ''
    
    # Extract frequency (how many times asked)
    frequency = 0
    freq_match = re.search(r'ASKED (\d+)X|Asked (\d+) times', meta_text, re.IGNORECASE)
    if freq_match:
        frequency = int(freq_match.group(1) or freq_match.group(2))
    
    # Extract marks
    marks = 0
    marks_match = re.search(r'(\d+)\s*marks', meta_text, re.IGNORECASE)
    if marks_match:
        marks = int(marks_match.group(1))
    
    # Extract years
    years = re.findall(r'20\d\d\([A-Z]+\)', meta_text)
    
    # Determine unit
    unit_num = int(q_num[1])
    
    # Calculate probability based on historical data
    probability = calculate_probability(frequency, marks, years, meta_text)
    
    questions.append({
        'id': q_num,
        'number': q_num,
        'text': q_text,
        'unit': unit_num,
        'frequency': frequency,
        'marks': marks,
        'years': years,
        'probability': probability,
        'priority': 'high' if probability >= 70 else 'medium' if probability >= 50 else 'low',
        'meta': meta_text
    })

def calculate_probability(frequency, marks, years, meta_text):
    """
    Calculate probability based on multiple factors:
    - Frequency (how many times asked): 0-40 points
    - Recency (how recent): 0-25 points
    - Marks (importance): 0-15 points
    - Pattern consistency: 0-20 points
    """
    score = 0
    
    # Frequency score (max 40 points)
    if frequency >= 7:
        score += 40
    elif frequency >= 6:
        score += 35
    elif frequency >= 5:
        score += 30
    elif frequency >= 4:
        score += 25
    elif frequency >= 3:
        score += 20
    elif frequency >= 2:
        score += 15
    elif frequency >= 1:
        score += 10
    
    # Recency score (max 25 points)
    if any('2024' in y for y in years):
        score += 25
    elif any('2023' in y for y in years):
        score += 20
    elif any('2022' in y for y in years):
        score += 15
    elif any('2021' in y for y in years):
        score += 10
    
    # Marks score (max 15 points)
    if marks >= 12:
        score += 15
    elif marks >= 8:
        score += 12
    elif marks >= 4:
        score += 8
    
    # Pattern/Keyword bonus (max 20 points)
    keywords_high = ['highest', 'most frequent', 'almost every year', 'dominant', 'foundation', 'core', 'critical']
    keywords_medium = ['important', 'key', 'essential', 'very high']
    
    meta_lower = meta_text.lower()
    if any(kw in meta_lower for kw in keywords_high):
        score += 20
    elif any(kw in meta_lower for kw in keywords_medium):
        score += 10
    
    # Convert to percentage (max score = 100)
    return min(score, 100)

# Sort by probability
questions.sort(key=lambda x: x['probability'], reverse=True)

# Save to JSON
with open('questions_data.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(questions)} questions")
print(f"Top 10 highest probability questions:")
for i, q in enumerate(questions[:10], 1):
    print(f"{i}. {q['number']}: {q['probability']}% - {q['text'][:60]}...")
