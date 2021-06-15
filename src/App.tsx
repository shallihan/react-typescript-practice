import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import TodosContextProvider from "./components/store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <AddTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
