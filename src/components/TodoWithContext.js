import React from "react";
import { actions, useStore } from "./store";
import Context from "./store/Context";

function TodoWithContext(props) {
  const [state, dispatch] = useStore(Context);
  const { todos, todoInput } = state;

  const handleAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
  };

  const handleDeleteTodo = (index) => {
    dispatch(actions.deleteTodo(index));
    console.log(index);
  };

  return (
    <div>
      <input
        value={todoInput}
        placeholder="enter todo"
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo, index) => (
        <div key={index} style={{ display: "flex" }}>
          <li>{todo}</li>
          <span
            onClick={() => {
              handleDeleteTodo(index);
            }}
          >
            &times;
          </span>
        </div>
      ))}
    </div>
  );
}

export default TodoWithContext;
