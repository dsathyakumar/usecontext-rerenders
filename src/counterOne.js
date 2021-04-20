// import react from "react";
import { AppContext } from "./App";
import { useContext } from "react";

export const CounterOne = function (props) {
  console.log(`Rendering <counterOne/>`);

  const appContext = useContext(AppContext);

  function inc(evt) {
    appContext["counter1"].dispatch({ type: "INC_1" });
  }

  function dec(evt) {
    appContext["counter1"].dispatch({ type: "DEC_1" });
  }

  return (
    <div>
      <div>Counter Value: {appContext["counter1"].state.value}</div>
      <div>
        <button onClick={inc}>Increment One</button>
        <button onClick={dec}>Decrement One</button>
      </div>
    </div>
  );
};
