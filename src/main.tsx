import App from './App';
import { render } from './my_react';

const $app = document.getElementById('app');

if ($app instanceof HTMLElement) {
  render($app, App());
}
