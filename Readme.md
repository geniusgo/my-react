# Week 2. `render` 함수와 `useState` 만들기

- 목표: 리액트의 `render` 함수와 `useState` 훅의 동작으로 구현한다.
- 구현 요구사항 정리:
  - `render` 함수:
    - `render` 함수를 만든다.
    - 매개 변수로 `div#root` 태그 요소와 Vritual DOM 객체를 받는다.
    - Virtual DOM 객체를 깊이를 따라 재귀적으로 순회한다.
    - `type`의 태그 유형에 따라 HTML 요소를 만들고 위계에 따라 연결한다.
      - `textNode`: `$elem.textContent`로 값 추가
      - `fragment`:
    - 만들어진 HTML DOM 트리를 `div#root`에 연결한다.
    - 예외 사항 처리
      - Virtual DOM 객체가 빈 객체일 경우
        - 바로 반환
      - 배열 메서드를 처리할 경우
        - `key`가 props로 전달되면 해당 값은 DOM엔 표시하지 않는다.
        - 배열 렌더링을 하면 `children`에 중첩 배열이 들어올 수 있기 때문에, `children`을 먼저 `flat(Infinity)`로 처리해준다(createElement에 해당 코드 추가)
      - `props`에 `styles`로 인라인 스타일이 적용된 경우
        - 객체의 키를 순회하면서 `$elem.style.{스타일}`에 값을 수동으로 넣어준다.
      - `props`에 이벤트 핸들러가 올 경우
        - prefix가 `on`일 경우를 확인해서 `$elem.addEventListener`로 이벤트 핸들러를 별도로 등록해준다.
        - DOM에는 `props`로 전달된 핸들러를 표시하지 않는다.
  - `useState` 함수
    - 초기값을 매개 변수로 받는다.
      - 초기값을 받아서 처음 상태에 저장되도록 해준다.
    - 상태를 나타내는 변수를 만들어준다.
      - 외부에서 상태에 직접 접근해서 수정하지 못하도록 처리한다.
      - `useState`가 여러 번 호출되는 경우 관리되는 `state`의 참조가 각각 다르게 생성될 수 있도록 한다.
      - `useState`가 반환하는 값이 함수가 돼어서 `useState` 내부에 정의한 `states`가 클로저로 관리되게 한다.
      - `states`는 모든 `useState` 구문의 상태 값들 전부를 기억하고 있어야 한다.
    - 상태를 외부로 반환할 땐 값을 그대로 반환하는 게 아니라 `getState` 함수를 반환해서 원본 상태에 직접 접근할 수 없도록 한다.
      - `getState`를 즉시 실행 함수로 처리해서 반환된 값이 외부에 전달되도록 한다.
      - `setState`를 이용하지 않고 값을 변경하려고 하면 값에 대한 참조가 달라지도록 만든다.
    - 상태를 변경해주는 `setState` 함수를 만들어준다.
      - 클로저인 상태의 값 변경은 `setState`로만 가능하게 한다.
      - `setState`로 값이 변경되면 루트 노드부터 시작해 전체 DOM이 다시 렌더링되도록 한다(diffing은 일단 제외하고 구현)
    - `state`의 값을 조회해주는 get 함수와 값의 재설정과 리렌더링을 처리해주는 set 함수를 외부로 반환해준다.
