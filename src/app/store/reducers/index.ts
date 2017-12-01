// reducers
import { counterReducer } from "./counter.reducer";
import { loginReducer } from "./login.reducer";
import { productsReducer } from "./products.reducer";
import { errorReducer } from "./error.reducer";

export const rootReducer = {
  counter: counterReducer,
  login: loginReducer,
  products: productsReducer,
  error: errorReducer
}