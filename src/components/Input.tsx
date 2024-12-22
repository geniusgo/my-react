import { InputProps } from './../types/todos';
import Button from './Button';

const Input = ({ placeholder, onChange }: InputProps) => {
  return (
    <form className='input-container'>
      <input type='text' placeholder={placeholder} onChange={onChange} />
      <Button text='submit' type='submit' />
    </form>
  );
};

export default Input;
