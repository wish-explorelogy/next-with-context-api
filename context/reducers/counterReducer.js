// import { useContext } from "react";

import { COUNTER } from "../action_types/action_types";

export const counterReducer = (state, { type, payload }) => {
  switch (type) {
    case COUNTER.INCREASE:
      return state + 1;
    case COUNTER.DECREASE:
      return state - 1;
    case COUNTER.INCREASE_BY:
      return state + payload;
    default:
      throw new Error(`Unknown action: ${type}`);
  }
};

// export const CounterProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(counterReducer, 0);
//   return (
//     <CounterDispatchContext.Provider value={dispatch}>
//       <CounterStateContext.Provider value={state}>
//         {children}
//       </CounterStateContext.Provider>
//     </CounterDispatchContext.Provider>
//   );
// };
