import "./TodoForm.css";
import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const onFormSubmit = () => {};
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
