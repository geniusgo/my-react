export function createElement(type: string | Function, props: any, ...children: any[]) {
  if (typeof type === 'function') {
    return type({ ...props, children });
  }
  return {
    type,
    props: {
      ...props,
      children: [...children],
    },
  };
}

/**
 * fragment 태그면 Fragment 함수 실행
 */
export function Fragment(props: any, children: any[]) {
  return { type: 'fragment', props: { ...props, ...children } };
}
