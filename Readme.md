# Week 2. `render` 함수와 `useState` 만들기

- 목표: 리액트의 `render` 함수와 `useState` 훅의 동작으로 구현한다.
- 구현 요구사항 정리:
  - `render` 함수:
    - `render` 함수를 만든다.
    - 매개 변수로 `div#root` 태그 요소와 Vritual DOM 객체를 받는다.
    - Virtual DOM 객체를 깊이를 따라 재귀적으로 순회한다.
    - `type`의 태그 유형에 따라 HTML 요소를 만들고 위계에 따라 연결한다.
    - 만들어진 HTML DOM 트리를 `div#root`에 연결한다.
