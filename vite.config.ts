// vite.config.js 또는 vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

// vite.config.ts 파일의 경로를 확인
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    jsx: 'transform',
    jsxDev: false,
    jsxImportSource: 'src/my_react',
    jsxFactory: 'createElement', // JSX를 변환할 때 사용할 함수명
    jsxFragment: 'Fragment', // Fragment를 변환할 때 사용할 함수명
    jsxInject: `import { createElement, Fragment } from 'src/my_react/createElement'`, // 자동으로 파일 상단에 삽입할 코드
  },
});
