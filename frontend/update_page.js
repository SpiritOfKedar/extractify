const fs = require('fs');
const path = require('path');

const pageTsxPath = path.join(__dirname, 'src', 'app', 'page.tsx');
const lines = fs.readFileSync(pageTsxPath, 'utf8').split('\n');

const out = [];

// Imports (lines 1 to 9, zero-indexed 0 to 8)
for (let i = 0; i < 9; i++) {
  out.push(lines[i]);
  if (i === 8) { // After imports
    out.push('import SharedLandingContent from "@/components/SharedLandingContent";');
  }
}

// Skip 9 to 295 (SVGs)

// Lines 296 to 302 (Desktop function and early states, zero-indexed 297 to 302)
for (let i = 297; i < 303; i++) {
  out.push(lines[i]);
}

// Skip 303 to 318 (faqItems and comparisonRows)

// Lines 319 to 362 (handleLandingSubmit and start of return, zero-indexed 320 to 362)
for (let i = 320; i < 363; i++) {
  out.push(lines[i]);
}

// Replace the huge block with the component
out.push('        <SharedLandingContent />');

// Lines 1598 to end (closing tags)
for (let i = 1598; i < lines.length; i++) {
  out.push(lines[i]);
}

fs.writeFileSync(pageTsxPath, out.join('\n'));
console.log('page.tsx updated successfully.');
