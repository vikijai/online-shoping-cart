import { ActionTypes } from "../actiontypes/actiontype";
const intialState = {
  products: [],
};
const addtocart=[];

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductsReducer = (state = [], { type, payload }) => {
  //console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const addtocartReducer = (state = addtocart, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, payload];
      case ActionTypes.REMOVE_FROM_CART:
        // console.log(state)
        const index=state.findIndex((item)=>item.id===payload.id);
        // console.log("index-",index)
        let newcart=[...state];
        //console.log("newcart-",newcart)
        if(index>=0){
          newcart.splice(index,1);
        }
        else{
          console.warn(`cant remove`);
        }
        return state=newcart;  
        default:
          return state;
        }
      };
