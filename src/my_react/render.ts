/**
 * - 함수 이름에 대해 추가적으로 고민해보기
 * - fragment에 props로 key가 들어오면 어떻게 처리할지
 * - 뿐만 아니라, props에 key가 들어오는 경우엔 모든 요소에서 DOM에 추가하지 않도록 하는 걸 고려해보기
 */

const addChildrenNode = ($parent: HTMLElement, children: JSX.Element | JSX.Element[]) => {
  if (Array.isArray(children)) {
    children.forEach((child: JSX.Element) => addNode($parent, child.type, child.props));
  } else {
    addNode($parent, children.type, children.props);
  }
};

// child 추가 함수
const addChildren = ($parent: HTMLElement, props: JSX.Props) => {
  addChildrenNode($parent, props.children);
};

const addFragment = ($parent: HTMLElement, props: JSX.Props) => {
  [...Object.keys(props)].forEach((prop) => {
    /* fragment에 props로 key가 올 땐 어떻게 처리해야 하는지 추가로 확인해보기 */
    prop === 'key' ? '' : addChildrenNode($parent, props[prop]);
  });
};

const addTextNode = ($parent: HTMLElement, textContent: JSX.TextNode) => {
  $parent.textContent = String(textContent);
};

// attribute 추가 함수
const addAttribute = ($parent: HTMLElement, props: JSX.Props, prop: string) => {
  $parent.setAttribute(prop, props[prop]);
};

const addDomNode = ($parent: HTMLElement, type: string, props: JSX.Props) => {
  const $elem = document.createElement(type);
  $parent.appendChild($elem); // DOM 요소 생성해서 바로 추가

  // prop이 children이면 child node 추가, children이 아니면 setAttribute 실행
  [...Object.keys(props)].forEach((prop) => {
    prop === 'children' ? addChildren($elem, props) : addAttribute($elem, props, prop);
  });
};

const addNode = ($parent: HTMLElement, type: string, props: JSX.Props) => {
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
  if (Object.keys(props).length === 0) return; // props가 빈 객체면 바로 리턴
  if (!props.children) return; // children이 undefined면 바로 리턴

  // 위 경우가 아니면 HTML DOM 요소 추가해주는 함수 실행
  addDomNode($parent, type, props);
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
      addNode(root, vDom.type, vDom.props);
      return;
  }
};

export default render;
