import { createContext, useReducer } from "react";
import { initialState, rootReducer } from "./reducers/rootReducer";

export const RootContext = createContext({});

export const RootProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};
