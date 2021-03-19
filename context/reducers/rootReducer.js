import combineReducers from "react-combine-reducers";
import counterInitialState from "../initial_states/counterState";
import todoInitalState from "../initial_states/todosState";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

export const [rootReducer, initialState] = combineReducers({
  todo: [todoReducer, todoInitalState],
  counter: [counterReducer, counterInitialState]
});
