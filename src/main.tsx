import App from './App';
import render from './my_react/render';

const $app = document.getElementById('app');

if ($app instanceof HTMLElement) {
  render($app, App());
  console.log($app);
  console.log(JSON.stringify(App(), null, 2));
}
