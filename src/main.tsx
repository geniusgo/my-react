import { createElement } from './createElement';

const element = (
  <div id='app'>
    <h1>Hello, world!</h1>
    <p>This is a custom createElement implementation.</p>
  </div>
);

console.log(JSON.stringify(element, null, 2));
