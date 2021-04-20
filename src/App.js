import "./styles.css";
import React from "react";
import { CounterOne } from "./counterOne";
import { CounterTwo } from "./counterTwo";

export const AppContext = React.createContext();

function reducer(currState, action) {
  switch (action.type) {
    case "INC_1":
      return {
        value: currState.value + 1
      };
    case "DEC_1":
      return {
        value: currState.value - 1
      };
    default:
      return currState;
  }
}

export default function App() {
  const [counterOnestate, dispatchToCounterOne] = React.useReducer(reducer, {
    value: 0
  });

  const [counterTwostate, dispatchToCounterTwo] = React.useReducer(reducer, {
    value: 0
  });

  return (
    <AppContext.Provider
      value={{
        counter1: {
          state: counterOnestate,
          dispatch: dispatchToCounterOne
        },
        counter2: {
          state: counterTwostate,
          dispatch: dispatchToCounterTwo
        }
      }}
    >
      <div className="App">
        <CounterOne />
        <div className={"spacer"}></div>
        <CounterTwo />
      </div>
    </AppContext.Provider>
  );
}
