/**
 * leaf 노드에 있는 텍스트 노드면 type: createTextNode로 처리
 */
const createNode = (child: any) => {
  if (typeof child === 'string' || typeof child === 'number') {
    return createTextNode(child);
  }
  return child;
};

/**
 * leaf 노드에 있는 값이 string, number, boolean이면 textNode로 표시
 */
const createTextNode = (child: string | number) => {
  return { type: 'textNode', children: child };
};

/**
 * children nodes를 만들어내는 함수
 */
const createChildrenNode = (children: any[]) => {
  return children.length === 1
    ? createNode(children[0])
    : children.map((child) => createNode(child));
};

/**
 * 일반 태그이거나 함수형 컴포넌트면 createElement 함수 실행
 */
export const createElement = (type: string | Function, props: JSX.Props, ...children: any[]) => {
  // 함수형 컴포넌트면 props랑 전개한 children 내려줘서 재귀적으로 createElement 실행
  if (typeof type === 'function') {
    // 첫 글자가 대문자가 아니면 함수형 컴포넌트가 아니기 때문에 에러 발생
    if (type.name[0] !== type.name[0].toUpperCase()) {
      throw new Error('일반 함수는 JSX 구문으로 사용될 수 없습니다');
    }

    return type(props, ...children);
  }

  /* return 값이 JSX가 아닐 경우도 에러를 발생시켜야 하지만, 타입 정의 이슈로 일단 생략 */

  return {
    type,
    props: {
      ...props,
      children: createChildrenNode(children),
    },
  };
};

/**
 * fragment 태그면 Fragment 함수 자동으로 실행
 */
export const Fragment = (props: any, ...children: any[]) => {
  return {
    type: 'fragment',
    props: {
      ...props,
      children: createChildrenNode(children),
    },
  };
};
