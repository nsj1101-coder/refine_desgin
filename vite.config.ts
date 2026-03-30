import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function fixTextPlugin() {
  return {
    name: 'fix-text-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('Main01.tsx')) {
        let newCode = code.replace(/<p className="font-\['Pretendard:Regular',sans-serif\] not-italic relative shrink-0 text-\[15px\] text-\[rgba\(255,255,255,0\.8\)\] cursor-pointer hover:text-white transition-colors">[^<]*이버 예약<\/p>/g, '<p className="font-[\'Pretendard:Regular\',sans-serif] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] cursor-pointer hover:text-white transition-colors">네이버 예약</p>');
        newCode = newCode.replace(/\{\`휴진 \(Closed\)[^\`]*\`\}/g, '{`휴진 (Closed)  일요일 / 공휴일  (sun/public holiday)`}');
        return newCode;
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    fixTextPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
