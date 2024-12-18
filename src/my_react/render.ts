const createDomNode = (parent: HTMLElement, type: string, props: JSX.Props) => {
  const $elem = document.createElement(type);
  parent.appendChild($elem);

  // props가 빈 객체이거나, children이 undefined면 바로 리턴하는 함수 추가
  if (Object.keys(props).length === 0) return;
  if (!props.children) return;

  [...Object.keys(props)].forEach((prop) => {
    if (prop !== 'children') {
      // children이 아니면 $elem에 속성 추가
      $elem.setAttribute(prop, props[prop]);
    } else if (Array.isArray(props[prop])) {
      // children이 배열이면 순회하면서 요소 생성
      props[prop].forEach((child: JSX.Element) => {
        createDomNode($elem, child.type, child.props);
      });
    } else {
      // children이 하나인 경우
      createDomNode($elem, props[prop].type, props[prop].props);
    }
  });
};

const render = (root: HTMLElement, vDom: JSX.Element) => {
  // vDom이 빈 객체면 바로 return
  if (vDom.type === undefined) {
    return;
  }

  // type에 따라 요소 처리
  switch (vDom.type) {
    case 'fragment':
      return;
    case 'textNode':
      return;
    default:
      createDomNode(root, vDom.type, vDom.props);
      return;
  }
};

export default render;
