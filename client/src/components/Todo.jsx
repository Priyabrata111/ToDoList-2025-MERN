const Todo = ({ todo }) => {
  return (
    <li>
      <span>{todo.data}</span>
      <span>
        <i className="fas fa-trash" />
        <span>
          <i className="fas fa-pen" />
        </span>
      </span>
    </li>
  );
};

export default Todo;
