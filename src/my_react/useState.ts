import App from 'src/App';
import render from './render';

let isFirst = true;
let state: unknown;

/* DOM 전체를 리렌더링, diffing은 다음에 구현해보기 */
const rerender = () => {
  const $app = document.getElementById('app');
  if ($app instanceof HTMLElement) {
    $app.innerHTML = '';
    render($app, App()); // 이후 Diffing 알고리즘 구현하는 로직 추가할 땐 App을 import해와서 인자로 전달하는 게 아니라, vDOM을 diffing해서 변경 필요한 곳만 전달하는 게 필요
  }
};

// 즉시 실행 함수를 반환해서 states와 cursor를 클로저로 관리
const useState = (() => {
  // useState의 실행 순서에 따라 정의된 상태들 배열로 관리
  const states: unknown[] = [];
  let cursor = 0;

  return <T>(init: T | (() => T)) => {
    let currentCursor = cursor;
    cursor += 1;

    // states[cursor]가 undefined면 초기화
    if (!states[currentCursor]) {
      states[currentCursor] = typeof init === 'function' ? (init as () => T)() : init;
    }

    // 즉시 실행 함수로 필요한 상태 값 반환, state에 직접 접근 못하도록 getState로 래핑해서 내려보내기
    const getState = () => {
      return states[currentCursor] as T;
    };

    const setState = (newState: T) => {
      states[currentCursor] = newState;
      cursor = 0; // 상태 업데이트 후 리렌더링 될 때 useState도 다시 처음부터 재실행
      rerender();
    };

    // getState의 실행 결과와 setState 함수를 반환
    return [getState(), setState] as [T, (newState: T) => void];
  };
})();

export default useState;
