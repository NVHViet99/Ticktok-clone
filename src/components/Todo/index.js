import React, { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import logger from "./logger";
import reducer, { initialState } from "./reducer";

function TodoReducer(props) {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>TodoList</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter your job ..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      {jobs.map((job, index) => (
        <li key={index}>
          {job}
          <span
            onClick={() => {
              dispatch(deleteJob(index));
            }}
          >
            &times;
          </span>
        </li>
      ))}
    </div>
  );
}

export default TodoReducer;
