import React, { useReducer } from "react";
import { initialState, reducer } from "./Reducers";
import { GlobalProvider } from "./ContextState";
import SowDetails from "./SowDetails";

const App = () => {
  const store = {
    sow: useReducer(reducer, initialState),
  };
  return (
    <GlobalProvider store={store}>
      <div>
        <SowDetails />
      </div>
    </GlobalProvider>
  );
};

export default App;
