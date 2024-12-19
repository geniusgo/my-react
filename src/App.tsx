import Counter from './components/Counter';
import Button from './components/Button';

const App = () => {
  let count = 0;
  const arr = [1, 2, 3, 4, 5];

  const handleIncrease = () => {
    count += 1;
  };

  const handleDecrease = () => {
    count -= 1;
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  };

  return (
    <div className='div' id='hello'>
      <h1>render 함수 구현</h1>
      <p></p>
      <input type='text' className='input-tag' onChange={handleChange} />
      <></>
      <>
        <div styles={{ color: 'red', 'font-size': '32px' }}>div</div>
        <div>div</div>
      </>
      {arr.map((num) => (
        <div key={num}>{num}</div>
      ))}
      <div>temp</div>
      <ul className='ul'>
        <li>hi</li>
        <li>123</li>
      </ul>
    </div>
  );
};

export default App;
