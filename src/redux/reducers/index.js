import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./Productreducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;