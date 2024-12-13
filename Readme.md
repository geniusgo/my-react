# 커스텀 createElement 만들기

- 목표:

  - JSX 구문이 직접 만든 `createElement` 함수로 처리되게 config 설정을 한다.
  - `createElement` 실행 결과 Virtual DOM으로 관리될 자바스크립트 객체를 반환한다.

- 구현 요구사항 정리:

  - [v] Babel과 Typescript config 설정으로 JSX 구문에 대한 트랜스파일 시 직접 만든 `createElement`가 실행되도록 한다.
    - [v] 바닐라 Typescript로 JSX 구문을 처리할 수 있게 설정한다.
    - [v] JSX 구문을 자바스크립트로 변환할 시 `createElement` 또는 `jsx` `jsxs` 내장 함수들이 사용되지 않고, 직접 만든 `createElement` 함수가 사용되도록 한다.
    - [] `createElement`에서 받는 인자들의 타입을 정의한다.
  - [] `type`, `props`, `children`을 인자로 받아서 DOM의 위계를 표현한 자바스크립트 객체(Virtual DOM)를 반환하게 `createElement`를 만든다.
    - `type`에는 HTML 태그 또는 함수가 들어올 수 있다.
      - HTML 태그가 아닌데 태그 형식으로 들어오면 에러를 뱉는다.
      - 함수 형식의 `type`이 들어왔는데 첫 글자가 대문자가 아니면 에러를 뱉는다.
      - 함수 형식의 `type`이 들어오면, 함수의 반환값으로 정의된 JSX 구문이 상위의 `children`에 nesting 되도록 한다.
      - Fragment가 들어올 땐 그에 맞는 처리를 해준다.
    - `props`는 객체 형태로 값을 받고, 요소의 속성과 값을 프로퍼티-값으로 가진다.
      - HTML 태그 형식일 때 `props`는 실제 해당 HTML 요소가 가질 수 있는 속성이어야 한다.
      - `props` 중 시작이 `on`으로 되는 건 이벤트 핸들러다.
    - `children`에는 두 개 이상의 요소가 올 수 있으며, 배열로 저장된다.
    - `children`이 하나더라도 길이가 1인 배열에 값을 저장한다(실제론 `jsx`일 때랑 `jsxs`일 때 구분이 되는 것 같지만, 구현할 땐 배열을 기본으로 한다).
