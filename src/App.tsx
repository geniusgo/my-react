import Counter from './components/Counter';
import Button from './components/Button';

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
        <Counter count={count} />
        <Button onIncrease={handleIncrease} onDecrease={handleDecrease} />
      </div>
    </>
  );
};

export default App;
