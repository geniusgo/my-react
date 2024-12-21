import App from 'src/App';
import render from './render';

let isFirst = true;
let state: unknown;

/* DOM 전체를 리렌더링, diffing은 다음에 구현해보기 */
const rerender = () => {
  const $app = document.getElementById('app');
  if ($app instanceof HTMLElement) {
    $app.innerHTML = '';
    render($app, App()); // App을 항상 최상위 컴포넌트라고 전제하는 것 같아서, 이 부분이 덜 좋아 보임 고민해보고 수정 예정
  }
};

const useState = <T>(init: T) => {
  if (isFirst) {
    state = init;
    isFirst = false;
  }

  const getState = (() => {
    return state as T;
  })();

  const setState = (newState: T) => {
    state = newState;
    rerender();
  };

  return [getState, setState] as [T, (newState: T) => void];
};

export default useState;
