// JSX 구문에 대한 타입 정의
declare namespace JSX {
  interface Props {
    [prop: string]: any;
  }

  interface IntrinsicElements {
    div: Props;
    h1: Props;
    h2: Props;
    h3: Props;
    p: Props;
    span: Props;
    button: Props;
    input: Props;
    form: Props;
    label: Props;
    img: Props;
    [element: string]: Props; // 모든 HTML 태그를 포괄하는 패턴
  }
}
