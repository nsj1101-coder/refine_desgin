const fs = require('fs');
const content = fs.readFileSync('src/imports/Main01.tsx', 'utf8');
const lines = content.split('\n');
lines[1166] = `      <p className="font-['Pretendard:Regular',sans-serif] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] cursor-pointer hover:text-white transition-colors">네이버 예약</p>`;
lines[980] = '      <p className="font-[\'Pretendard:Regular\',sans-serif] min-w-full relative shrink-0 text-[#d80027] text-[17px] w-[min-content] whitespace-pre-wrap">{`휴진 (Closed)  일요일 / 공휴일  (sun/public holiday)`}</p>';
fs.writeFileSync('src/imports/Main01.tsx', lines.join('\n'));
