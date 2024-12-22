import { TodoItemProps } from './../types/todos';
import Button from './Button';

const TodoItem = ({ title, isDone }: TodoItemProps) => {
  return (
    <div className='todo-item-container'>
      <label>
        <input type='checkbox' />
        <p className={isDone ? 'done' : ''}>{title}</p>
      </label>
      <Button text='edit' />
      <Button text='delete' />
    </div>
  );
};

export default TodoItem;
