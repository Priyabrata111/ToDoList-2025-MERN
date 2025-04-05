import "./TodoForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));
  };
  const onInputChange = (e) => {
    //console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="input"
        placeholder="  Enter new task into your to do list..."
        onChange={onInputChange}
      ></input>
    </form>
  );
};

export default TodoForm;
