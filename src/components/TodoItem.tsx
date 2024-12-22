import { TodoItemProps } from './../types/todos';
import Button from './Button';

const TodoItem = ({ id, title, isDone, onToggle, onDelete }: TodoItemProps) => {
  const toggle = isDone ? 'checked' : '';

  return (
    <div className='todo-item-container'>
      <label htmlFor={`todo-${id}`} onClick={() => onToggle!(id)}>
        <input id={`todo-${id}`} type='checkbox' checked={isDone} />
        <p className={isDone ? 'done' : ''}>{title}</p>
      </label>
      <Button text='delete' type='click' id={id} onClick={onDelete} />
    </div>
  );
};

export default TodoItem;
