const addFragment = ($parent: HTMLElement, props: JSX.Props) => {
  // props는 key 아니면 children만 들어올 수 있음
  [...Object.keys(props)].forEach((prop) => {
    if (prop !== 'key' && Array.isArray(props[prop].children)) {
      props[prop].children.forEach((child: JSX.Element) =>
        addDomNode($parent, child.type, child.props)
      );
    } else if (prop !== 'key') {
      addDomNode($parent, props[prop].type, props[prop].children);
    }
  });
};

const addTextNode = ($parent: HTMLElement, textContent: JSX.TextNode) => {
  $parent.textContent = String(textContent);
};

// child 추가 함수, child가 1개일 때랑 2개 이상일 때 분기 처리
const addChildNode = ($parent: HTMLElement, props: JSX.Props) => {
  if (Array.isArray(props.children)) {
    props.children.forEach((child: JSX.Element) => addDomNode($parent, child.type, child.props));
  } else {
    addDomNode($parent, props.children.type, props.children.props);
  }
};

// attribute 추가 함수
const addAttribute = ($parent: HTMLElement, props: JSX.Props, prop: string) => {
  $parent.setAttribute(prop, props[prop]);
};

const addDomNode = ($parent: HTMLElement, type: string, props: JSX.Props) => {
  // type이 textNode면 textContent 추가
  if (type === 'textNode') {
    addTextNode($parent, props.children);
    return;
  }
  // type이 fragment면 바로 하위 요소 추가
  if (type === 'fragment') {
    addFragment($parent, props);
    return;
  }

  const $elem = document.createElement(type);
  $parent.appendChild($elem); // DOM 요소 생성해서 바로 추가

  if (Object.keys(props).length === 0) return; // props가 빈 객체면 바로 리턴
  if (!props.children) return; // children이 undefined면 바로 리턴

  [...Object.keys(props)].forEach((prop) => {
    prop === 'children' ? addChildNode($elem, props) : addAttribute($elem, props, prop); // prop이 children이면 child node 추가, children이 아니면 setAttribute 실행
  });
};

const render = (root: HTMLElement, vDom: JSX.Element) => {
  // vDom이 빈 객체면 바로 return
  if (!vDom.type) return;

  // type에 따라 요소 처리
  switch (vDom.type) {
    case 'fragment':
      addFragment(root, vDom.props);
      return;
    case 'textNode':
      addTextNode(root, vDom.props.children as JSX.TextNode);
      return;
    default:
      addDomNode(root, vDom.type, vDom.props);
      return;
  }
};

export default render;
