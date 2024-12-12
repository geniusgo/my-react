export function jsx(type: string, props: any, key: any) {
  createElement();
  return {
    type,
    props: { ...props, key },
  };
}

export function jsxs(type: string, props: any, key: any) {
  createElement();
  return {
    type,
    props: { ...props, key },
  };
}

export function Fragment(props: any) {
  createElement();
  return props.children;
}

function createElement() {
  console.log('hi');
}
