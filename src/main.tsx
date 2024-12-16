import { createElement, Fragment } from './createElement';

const App = () => {
  let count = 0;

  const handleIncrease = () => {
    count += 1;
  };

  const handleDecrease = () => {
    count -= 1;
  };

  return (
    <>
      <div></div>
      <div>
        <h1>Counter</h1>
        <temp />
        <Counter count={count} />
        <Button onIncrease={handleIncrease} onDecrease={handleDecrease} />
      </div>
    </>
  );
};

const temp = () => {
  return <div></div>;
};

const Counter = ({ count }: { count: number }) => {
  return (
    <div className='count-container'>
      <p>{count}</p>
      <p>{count}</p>
    </div>
  );
};

const Button = ({ onIncrease, onDecrease }: { onIncrease: () => void; onDecrease: () => void }) => {
  return (
    <div className='button-container'>
      <button className='increase' onClick={onIncrease}>
        +
      </button>
      <button className='decrease' onClick={onDecrease}>
        -
      </button>
    </div>
  );
};

console.log(JSON.stringify(App(), null, 2));
