export interface Props {
  [prop: string]: any;
  children?: JSX.Element | JSX.Element[] | string | number | boolean | null | undefined;
  key?: string | number;
}

export function jsx(tagName: string, props: Props, key: string | number) {
  return createElement(tagName, props, key);
}

export function jsxs(tagName: string, props: Props, key: string | number) {
  return createElement(tagName, props, key);
}

function createElement(tagName: string, props: Props, key: string | number) {
  return {
    tagName,
    props: { ...props, key },
  } as JSX.Element;
}
