import pdfplumber
import json

pdf_path = r"d:\Local Codebase\PPL\os.pdf"

# Extract all text from PDF
all_text = ""
with pdfplumber.open(pdf_path) as pdf:
    print(f"Total pages: {len(pdf.pages)}")
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        all_text += f"\n\n--- PAGE {i+1} ---\n\n"
        all_text += text if text else ""

# Save extracted text to file
with open(r"d:\Local Codebase\PPL\os_extracted.txt", "w", encoding="utf-8") as f:
    f.write(all_text)

print("Text extraction complete! Saved to os_extracted.txt")
print(f"\nTotal characters extracted: {len(all_text)}")
