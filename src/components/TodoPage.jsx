import { React, Fragment } from "react";
import InputTodo from "./Todo/InputTodo";
import ListTodos from "./Todo/ListTodo";

const TodoPage = () => {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
      <div className="container">
        <ListTodos />
      </div>
    </Fragment>
  );
};

export default TodoPage;
