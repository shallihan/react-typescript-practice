import React, { useRef } from "react";
import classes from './AddTodo.module.css';
import Todo from "../models/todo";

const AddTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Add a todo</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
