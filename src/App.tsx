import { useState } from './my_react';
import { TodoItemProps } from './types/todos';
import { Input, TodoItem } from './components';

const App = () => {
  const [todos, setTodos] = useState<TodoItemProps[] | []>([
    { title: 'todo 1', isDone: false },
    { title: 'todo 2', isDone: false },
    { title: 'todo 3', isDone: false },
  ]);

  const handleTodoCreate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setTodos([...todos, { title: target.value, isDone: false }]);
  };

  return (
    <div className='todo-lists-container'>
      <section>
        <Input placeholder='할 일을 입력하세요' onChange={handleTodoCreate} />
      </section>
      <section>
        <div className='todo-items-container'>
          {todos.map((todo) => {
            return <TodoItem {...todo} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
