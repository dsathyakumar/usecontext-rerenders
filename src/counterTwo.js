// import react from "react";
import { AppContext } from "./App";
import { useContext } from "react";

export const CounterTwo = function (props) {
  console.log(`Rendering <counterTwo/>`);

  const appContext = useContext(AppContext);

  function inc(evt) {
    appContext["counter2"].dispatch({ type: "INC_1" });
  }

  function dec(evt) {
    appContext["counter2"].dispatch({ type: "DEC_1" });
  }

  return (
    <div>
      <div>Counter Value: {appContext["counter2"].state.value}</div>
      <div>
        <button onClick={inc}>Increment One</button>
        <button onClick={dec}>Decrement One</button>
      </div>
    </div>
  );
};
