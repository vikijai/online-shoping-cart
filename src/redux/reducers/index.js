import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,addtocartReducer } from "./Productreducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart:addtocartReducer,

});
export default reducers;