/**
 * leaf 노드에 있는 텍스트 노드면 type: createTextNode로 처리
 */
const createNode = (child: any): JSX.TextNode | JSX.Element => {
  if (typeof child === 'string' || typeof child === 'number') {
    return createTextNode(child);
  }
  return child;
};

/**
 * leaf 노드에 있는 값이 string, number, boolean이면 textNode로 표시
 */
const createTextNode = (child: string | number): JSX.TextNode => {
  return { type: 'textNode', props: { children: child } };
};

/**
 * children nodes를 만들어내는 함수
 */
const createChildrenNode = (children: any[]): JSX.Children => {
  // children이 하나도 없을 시 children 값을 가지지 않도록 처리
  switch (children.length) {
    case 0:
      return;
    case 1:
      return createNode(children[0]);
    default:
      return children.map((child) => createNode(child));
  }
};

/**
 * 일반 태그이거나 함수형 컴포넌트면 createElement 함수 실행
 */
export const createElement = (
  type: string | Function,
  props: JSX.Props,
  ...children: any[]
): JSX.Element => {
  // 함수형 컴포넌트면 props랑 전개한 children 내려줘서 재귀적으로 createElement 실행
  if (typeof type === 'function') {
    return type(props, ...children);
  }

  // HTML 표준 태그가 아닌데 태그로 사용된 경우 에러 발생시키기
  if (document.createElement(type) instanceof HTMLUnknownElement) {
    throw new Error('정확한 HTML 태그를 사용해 주세요');
  }

  return {
    type,
    props: {
      ...props,
      children: createChildrenNode(children.flat(Infinity)), // children에 배열이 중첩돼서 들어오면 flat 해주기(e.g. 배열 렌더링)
    },
  };
};

/**
 * fragment 태그면 Fragment 함수 자동으로 실행
 */
export const Fragment = (props: any, ...children: any[]): JSX.Fragment => {
  return {
    type: 'fragment',
    props: {
      ...props,
      children: createChildrenNode(children),
    },
  };
};
