import { createElement, Fragment } from './createElement';

const App = () => {
  return (
    <>
      <div id='app'>
        <>nice</>
        <h1 id='h1' style={{ color: 'red' }}>
          Hello, world!
        </h1>
        <p className='p-tag'>This is a custom createElement implementation.</p>
        <Button />
      </div>
    </>
  );
};

const Button = () => {
  return (
    <div className='button-container'>
      <button></button>
    </div>
  );
};

console.log(JSON.stringify(App(), null, 2));
