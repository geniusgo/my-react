import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    jsxFactory: 'createElement', // JSX를 변환할 때 사용할 함수명
    jsxFragment: 'Fragment', // Fragment를 변환할 때 사용할 함수명
    jsxInject: `import { createElement, Fragment } from 'src/my_react/createElement'`, // 자동으로 파일 상단에 삽입할 코드
  },
});
