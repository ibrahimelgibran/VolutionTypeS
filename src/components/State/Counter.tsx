import { useReducer } from "react";

type CounterState = {
  count: string;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState: CounterState = { count: "0" };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "incerment":
      return { count: (parseInt(state.count) + action.payload).toString() };
    case "decrement":
      return { count: (parseInt(state.count) - action.payload).toString() };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      count: {state.count}
      <button onClick={() => dispatch({ type: "incerment", payload: 10 })}>
        incerment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        incerment 10
      </button>
    </>
  );
};
