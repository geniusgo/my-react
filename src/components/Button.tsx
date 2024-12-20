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

export default Button;
