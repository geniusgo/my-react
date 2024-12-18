const Counter = ({ count }: { count: number }) => {
  return (
    <div className='count-container'>
      <p>{count}</p>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
