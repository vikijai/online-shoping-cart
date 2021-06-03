import { ActionTypes } from "../actiontypes/actiontype";
const intialState = {
  products: [],
};

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
export const addtocartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, payload ];
    default:
        return state;
  }
};
export const removefromReducer=(state=[],{type,payload})=>{
  switch(type){
    case ActionTypes.REMOVE_FROM_CART:
      const index=state.product.findIndex((item)=>item.id===payload.id);
      let newcart=[...state];
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