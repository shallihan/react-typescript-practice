import React, { useRef, useContext } from "react";
import { TodosContext } from "./store/todos-context";
import classes from "./AddTodo.module.css";
import Todo from "../models/todo";

const AddTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  let todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Enter a new task:</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add new task</button>
    </form>
  );
};

export default AddTodo;
