import { ButtonProps } from 'src/types/todos';

const Button = ({ text, type, id, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={() => onClick!(id)}>
      {text}
    </button>
  );
};

export default Button;
