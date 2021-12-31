import * as types from "../Action/actionType";

let initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_BASKET:
      const newBasket = [...state.basket, action.payload];
      return {
        ...state,
        basket: newBasket,
      };
    case types.REMOVE_TO_BASKET:
      const updateCart = [...state.basket];
      const index = state.basket.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        updateCart.splice(index, 1);
      }
      return {
        ...state,
        basket: updateCart,
      };

    default:
      return state;
  }
};
export default basketReducer;
