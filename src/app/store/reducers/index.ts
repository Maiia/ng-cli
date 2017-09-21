// reducers
import { counterReducer } from "./counter.reducer";
import { loginReducer } from "./login.reducer";

export const rootReducer = {
  counter: counterReducer,
  login: loginReducer
};