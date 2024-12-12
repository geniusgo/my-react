declare namespace JSX {
  interface IntrinsicElements {
    div: any;
    span: any;
    h1: any;
    p: any;
    button: any;
  }

  interface ElementChildrenAttribute {
    children: {};
  }

  type Element = {
    type: string;
    props: any;
  };
}
