/**
 * 일반 태그이거나 함수형 컴포넌트면 createElement 함수 실행
 */
export const createElement = (type: string | Function, props: JSX.Props, ...children: any[]) => {
  // 함수형 컴포넌트면 props랑 전개한 children 내려줘서 재귀적으로 createElement 실행
  if (typeof type === 'function') {
    return type(props, ...children);
  }

  return {
    type,
    props: {
      ...props,
      children:
        children.length === 1 // children이 하나만 있으면 배열 말고 객체로 처리
          ? validTextNode(children[0])
          : children.map((child) => validTextNode(child)), // children이 여러개면 배열로 묶어서 처리
    },
  };
};

/**
 * leaf 노드에 있는 텍스트 노드면 type: createTextNode로 처리
 */
const validTextNode = (child: any) => {
  if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
    return createTextNode(child);
  }
  return child;
};

/**
 * leaf 노드에 있는 값이 string, number, boolean이면 textNode로 표시
 */
const createTextNode = (child: string | number | boolean) => {
  return { type: 'textNode', children: child };
};

/**
 * fragment 태그면 Fragment 함수 자동으로 실행
 */
export const Fragment = (props: any, ...children: any[]) => {
  return { type: 'fragment', props: { ...props, children: [...children] } };
};
