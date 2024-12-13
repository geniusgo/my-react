declare namespace JSX {
  interface IntrinsicElements {
    div: any;
    span: any;
    h1: any;
    p: any;
    button: any;
    input: any;
    [element: string]: any; // 모든 HTML 태그를 포괄하는 패턴
  }
}
