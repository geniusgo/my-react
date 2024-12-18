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
    <div className='div' id='hello'>
      <>
        <div>div</div>
      </>
      <ul className='ul'>
        <li>hi</li>
        <li>123</li>
      </ul>
    </div>
  );
};

export default App;
