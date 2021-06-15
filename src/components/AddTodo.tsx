import React, { useRef } from "react";
import Todo from "../models/todo";

const AddTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault;
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
        return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Add a todo</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
