import React, { createContext } from "react";

const StateWrapContext = createContext();
const StateConsumer = StateWrapContext.Consumer;
const ActionsWrapContext = createContext();
const ActionsConsumer = ActionsWrapContext.Consumer;

const mergeStores = (store) => {
  const state = Object.keys(store).reduce(
    (acc, key) => ({ ...acc, [key]: store[key][0] }),
    {}
  );
  const dispatch = (action) =>
    Object.keys(store)
      .map((key) => store[key][1])
      .forEach((fn) => fn(action));
  return [state, dispatch];
};

export const GlobalProvider = ({ children, store }) => {
  const [state, dispatch] = mergeStores(store);

  return (
    <ActionsWrapContext.Provider value={dispatch}>
      <StateWrapContext.Provider value={state}>
        {children}
      </StateWrapContext.Provider>
    </ActionsWrapContext.Provider>
  );
};

export const useData = (Component) => {
  const Data = ({ ...rest }) => {
    return (
      <ActionsConsumer>
        {(dispatch) => (
          <StateConsumer>
            {(state) => (
              <Component store={state} dispatch={dispatch} {...rest} />
            )}
          </StateConsumer>
        )}
      </ActionsConsumer>
    );
  };
  return class extends React.Component {
    render() {
      return <Data {...this.props} />;
    }
  };
};
