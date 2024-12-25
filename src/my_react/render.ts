import { camelCaseToKebabCase } from 'src/utils/caseConverter';

const handleAttribute = ($elem: HTMLElement, props: JSX.Props, prop: string) => {
  /**
   * prop이 boolean으로 들어가야 하는 상황 생길 때마다 케이스 추가 필요
   */
  if (prop === 'checked') {
    const $input = $elem as HTMLInputElement;
    $input.checked = props[prop];
  }

  $elem.setAttribute(prop === 'className' ? 'class' : camelCaseToKebabCase(prop), props[prop]);
};

const addEventHandler = ($elem: HTMLElement, eventType: string, handler: (e: Event) => void) => {
  $elem.removeEventListener(eventType, handler); // 이벤트 핸들러 중복 등록 방지를 위해 먼저 지우고 달기
  $elem.addEventListener(eventType, handler);
};

const addAttribute = ($elem: HTMLElement, props: JSX.Props, prop: string) => {
  /* props의 종류에 따라 필요한 처리, 예외 케이스 더 확인되면 추가 필요 */
  switch (prop) {
    case 'key':
    case 'children':
    case 'styles': {
      Object.entries(props[prop]).forEach(([prop, value]) => {
        ($elem.style as any)[camelCaseToKebabCase(prop)] = value;
      });
      return;
    }
    default: {
      prop.startsWith('on')
        ? addEventHandler($elem, prop.slice(2).toLowerCase(), props[prop]) // on으로 시작하면 이벤트 리스너 추가
        : handleAttribute($elem, props, prop);
      return;
    }
  }
};

const addChildren = ($parent: HTMLElement, children: JSX.Element | JSX.Element[]) => {
  if (Array.isArray(children)) {
    // 배열이면 순회하면서 자식 요소 추가
    children.forEach((child) => renderDOM($parent, child.type, child.props));
  } else if (children) {
    // 배열이 아니면 자식 요소 바로 추가
    renderDOM($parent, children.type, children.props);
  }
};

const renderHTMLElement = ($parent: HTMLElement, type: string, props: JSX.Props) => {
  const $elem = document.createElement(type);
  $parent.appendChild($elem); // DOM 요소 생성해서 추가

  if (Object.keys(props).length === 0) return; // props가 빈 객체면 바로 리턴

  Object.keys(props).forEach((prop) => {
    prop === 'children' ? addChildren($elem, props.children) : addAttribute($elem, props, prop); // children이면 children 추가, 없으면 attribute 추가
  });
};

const renderFragment = ($parent: HTMLElement, props: JSX.Props) => {
  Object.entries(props).forEach(([prop, value]) => {
    if (prop !== 'key' && value) addChildren($parent, value); // Fragment의 prop이 key면 무시하기
  });
};

const renderTextNode = ($parent: HTMLElement, textContent: JSX.TextNode) => {
  const textNode = document.createTextNode(String(textContent));
  $parent.appendChild(textNode);
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
