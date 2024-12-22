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

const useState = <T>(init: T) => {
  // App 재호출 될 때 useState 다시 호출되더라도 관리되던 state 유지해주기
  if (isFirst) {
    state = init;
    isFirst = false;
  }

  // 외부에서 state에 직접 접근하지 못하도록 getter 함수로 처리, 즉시 실행 함수로 만들어서 값을 바로 반환
  const getState = (() => {
    return state as T;
  })();

  // 새로운 값이 들어오면 클로저로 관리되는 state 업데이트하고 리렌더링
  const setState = (newState: T) => {
    state = newState;
    rerender();
  };

  // 즉시 실행 함수 getState의 값과 setState 함수 외부로 반환
  return [getState, setState] as [T, (newState: T) => void];
};

export default useState;
