import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Todo from "./models/todo";
function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
  ];
  const addTodoHandler = (text: string) => {

  };
  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
