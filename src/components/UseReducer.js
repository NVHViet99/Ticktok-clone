import React, { useReducer } from "react";

// Initial state
const initialState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION: {
      if (state >= 5) return state;
      return state + 1;
    }
    case DOWN_ACTION: {
      if (state <= 0) return state;
      return state - 1;
    }

    default:
      throw new Error("Invalid action");
  }
};

function UseReducer(props) {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      </div>

      {count}
    </div>
  );
}

export default UseReducer;
