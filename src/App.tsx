import { useState } from 'react'
import Nav from './nav';
import Form from './form';
import ToDoDisplay from './tododisplay';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTodos([...todos, task]);
  };

  return (
    <div>
      <Nav />
      <Form addTask={addTask} />
      <ToDoDisplay tasks={todos} />
    </div>
  );
};

export default App
