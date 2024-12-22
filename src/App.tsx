import { useState } from './my_react';
import { TodoItemType } from './types/todos';
import { Input, TodoItem } from './components';

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { id: 0, title: 'todo 1', isDone: false },
    { id: 1, title: 'todo 2', isDone: false },
    { id: 2, title: 'todo 3', isDone: false },
  ]);
  const [id, setId] = useState(3);

  const handleTodoCreate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setTodos([...todos, { id, title: target.value, isDone: false }]);
    setId(id + 1);
  };

  const handleTodoToggle = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const handleTodoDelete = (id: number) => {
    console.log(todos.filter((todo) => todo.id !== id));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='todo-lists-container'>
      <section>
        <Input placeholder='할 일을 입력하세요' onChange={handleTodoCreate} />
      </section>
      <section>
        <div className='todo-items-container'>
          {todos.map((todo) => {
            return (
              <div>
                <TodoItem {...todo} onToggle={handleTodoToggle} onDelete={handleTodoDelete} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
