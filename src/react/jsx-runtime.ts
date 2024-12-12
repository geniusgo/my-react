type DefaultProps = Record<string, any>;

type Props = {
  [key: string]: any;
  children?: JSX.Element | JSX.Element[];
};

export function jsx(tagName: string, props: Props, key: any) {
  return {
    tagName,
    props: { ...props, key },
  } as JSX.Element;
}

export function jsxs(tagName: string, props: Props, key: any) {
  return {
    tagName,
    props: { ...props, key },
  } as JSX.Element;
}
