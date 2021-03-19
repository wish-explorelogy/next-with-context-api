// import { useReducer, createContext, useContext } from "react";

import { TODO } from "../action_types/action_types";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TODO.ADD:
      return state;

    default:
      return state;
  }
};
