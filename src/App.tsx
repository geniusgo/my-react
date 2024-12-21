import { useState } from './my_react';

const App = () => {
  const [count, setCount] = useState(0);

  console.log(count, setCount);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default App;
