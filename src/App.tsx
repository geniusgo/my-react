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
      <ul className='ul'>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default App;
