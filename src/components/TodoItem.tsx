import { TodoItemProps } from './../types/todos';
import Button from './Button';

const TodoItem = ({ id, title, isDone, onClick }: TodoItemProps) => {
  const toggle = isDone ? 'checked' : '';

  return (
    <div className='todo-item-container'>
      <label htmlFor={`todo-${id}`} onClick={() => onClick!(id)}>
        <input id={`todo-${id}`} type='checkbox' checked={isDone} />
        <p className={isDone ? 'done' : ''}>{title}</p>
      </label>
      <Button text='edit' />
      <Button text='delete' />
    </div>
  );
};

export default TodoItem;
