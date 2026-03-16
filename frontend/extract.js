const fs = require('fs');
const path = require('path');

const pageTsxPath = path.join(__dirname, 'src', 'app', 'page.tsx');
const outputPath = path.join(__dirname, 'src', 'components', 'SharedLandingContent.tsx');

const lines = fs.readFileSync(pageTsxPath, 'utf8').split('\n');

const out = [];

// Header
out.push('"use client";');
out.push('');
out.push('import { useState } from "react";');
out.push('import { useTranslation } from "@/lib/i18n";');
out.push('');

// SVGs and static variables (lines 10 to 296 in original, zero-indexed 9 to 295)
out.push(...lines.slice(9, 296));

// Component start
out.push('export default function SharedLandingContent() {');
out.push('  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);');
out.push('  const { t } = useTranslation();');
out.push('');

// state (lines 304 to 319, zero-indexed 303 to 318)
out.push(...lines.slice(303, 319));

out.push('  return (');
out.push('    <>');

// JSX (lines 364 to 1598, zero-indexed 363 to 1597)
out.push(...lines.slice(363, 1598));

out.push('    </>');
out.push('  );');
out.push('}');

fs.writeFileSync(outputPath, out.join('\n'));
console.log('SharedLandingContent.tsx created successfully.');
