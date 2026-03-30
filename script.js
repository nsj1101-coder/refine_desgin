const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/app/pages');
const mainFile = path.join(__dirname, '../src/imports/Main01.tsx');

const allFiles = [...fs.readdirSync(pagesDir).map(f => path.join(pagesDir, f)), mainFile];

allFiles.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. All huge text (Hero Titles) > 50px should be Bold
  // Matches classNames containing text-[50px] or larger, ensures it has font-bold
  content = content.replace(/className="([^"]*text-\[(?:[5-9]\d|1\d\d)px\][^"]*)"/g, (match, classes) => {
    if (!classes.includes('font-bold') && !classes.includes('font-semibold')) {
      classes = classes.replace(/font-light|font-normal|font-medium/g, '').replace(/\s+/g, ' ') + ' font-bold';
    }
    return `className="${classes.trim()}"`;
  });

  // 2. Medium-large text (Section Titles) 24px - 48px should be Semibold
  content = content.replace(/className="([^"]*text-\[(?:2[4-9]|[3-4]\d)px\][^"]*)"/g, (match, classes) => {
    if (!classes.includes('font-semibold') && !classes.includes('font-bold')) {
      classes = classes.replace(/font-light|font-normal/g, '').replace(/\s+/g, ' ') + ' font-semibold';
    }
    // Downgrade excessively bold to semibold for these
    if (classes.includes('font-bold') && !file.includes('Main01.tsx')) {
       classes = classes.replace(/font-bold/g, 'font-semibold');
    }
    return `className="${classes.trim()}"`;
  });

  // 3. Small label English text tracking-[2px]+ should be Medium
  content = content.replace(/className="([^"]*tracking-\[[2-9]px\][^"]*)"/g, (match, classes) => {
    if (!classes.includes('font-medium') && !classes.includes('font-semibold') && !classes.includes('font-bold')) {
      classes = classes.replace(/font-light|font-normal/g, '').replace(/\s+/g, ' ') + ' font-medium';
    }
    return `className="${classes.trim()}"`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', path.basename(file));
  }
});
