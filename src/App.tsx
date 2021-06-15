import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((previousTodos) => {
      return previousTodos.concat(newTodo);
    })
  };
  const removeTodoHandler = (id: string) => {
    setTodos((previousTodos) => {
      return previousTodos.filter(todo => todo.id !== id);
    });
  };
  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
