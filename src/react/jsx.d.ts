declare namespace JSX {
  interface IntrinsicElements {
    [tagName: string]: any; // 모든 태그를 인식할 수 있도록 와일드카드로 설정
  }

  interface ElementChildrenAttribute {
    children: {}; // children 속성의 타입을 정의
  }

  interface Element {
    tagName: string;
    props: Props;
  }
}
