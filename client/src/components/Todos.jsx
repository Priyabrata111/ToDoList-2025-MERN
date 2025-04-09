import { getAllTodos } from "../redux/actions/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return <div>Hello from todos</div>;
};
export default Todos;
