import React from "react";
import { Provider } from "react-redux";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    </Provider>
  );
};

export default App;
