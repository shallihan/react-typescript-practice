import React, { useState } from "react";
import Todo from "../../models/todo";

type TodosContextObject = {
items: Todo[];
addTodo: (text: string) => void;
removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((previousTodos) => {
      return previousTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id);
    });
  };
  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
