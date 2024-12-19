const addAttribute = ($elem: HTMLElement, props: JSX.Props, prop: string) => {
  /* props의 종류에 따라 필요한 처리, 예외 케이스 더 확인되면 추가 필요 */
  switch (prop) {
    case 'styles': {
      Object.keys(props[prop]).forEach((key) => {
        ($elem.style as any)[key] = props[prop][key];
      });
      return;
    }
    case 'key':
      return;
    case 'children':
      return;
    default: {
      prop.slice(0, 2) === 'on'
        ? $elem.addEventListener(prop.slice(2).toLowerCase(), props[prop])
        : $elem.setAttribute(prop, props[prop]);
      return;
    }
  }
};

const addChildren = ($parent: HTMLElement, children: JSX.Element | JSX.Element[]) => {
  if (Array.isArray(children)) {
    // 배열이면 순회하면서 자식 요소 추가
    children.forEach((child: JSX.Element) => renderDOM($parent, child.type, child.props));
  } else {
    // 배열이 아니면 자식 요소 바로 추가
    renderDOM($parent, children.type, children.props);
  }
};

const renderHTMLElement = ($parent: HTMLElement, type: string, props: JSX.Props) => {
  const $elem = document.createElement(type);
  $parent.appendChild($elem); // DOM 요소 생성해서 추가

  if (Object.keys(props).length === 0) return; // props가 빈 객체면 바로 리턴
  if (!props.children) {
    // children이 없으면 attribute만 추가
    Object.keys(props).forEach((prop) => {
      addAttribute($elem, props, prop);
    });
  } else {
    Object.keys(props).forEach((prop) => {
      // children이면 children 추가, 없으면 attribute 추가
      prop === 'children' ? addChildren($elem, props.children) : addAttribute($elem, props, prop);
    });
  }
};

const renderFragment = ($parent: HTMLElement, props: JSX.Props) => {
  Object.keys(props).forEach((prop) => {
    if (prop !== 'key' && props[prop]) addChildren($parent, props[prop]); // Fragment의 prop이 key면 무시하기
  });
};

const renderTextNode = ($parent: HTMLElement, textContent: JSX.TextNode) => {
  $parent.textContent = String(textContent);
};

const renderDOM = ($parent: HTMLElement, type: string, props: JSX.Props) => {
  switch (type) {
    case 'textNode':
      renderTextNode($parent, props.children);
      return;
    case 'fragment':
      renderFragment($parent, props);
      return;
    default: {
      // 위 경우가 아니면 HTML DOM 요소 추가해주는 함수 실행
      renderHTMLElement($parent, type, props);
      return;
    }
  }
};

const render = (root: HTMLElement, vDom: JSX.Element) => {
  // vDom이 빈 객체면 바로 return
  if (!vDom.type) return;

  // 빈 객체가 아니면 조건에 따라 요소들 추가
  renderDOM(root, vDom.type, vDom.props);
};

export default render;
