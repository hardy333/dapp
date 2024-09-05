import { Route, Routes } from "react-router-dom";
import Todos from "../pages/todos/Todos";
import TodosCompleted from "../pages/todos-completed/TodosCompleted";

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/completed" element={<TodosCompleted />} />
    </Routes>
  );
};

export default RoutesTree;
