import * as types from "../Action/actionType";

let initialState = {
  basket: [],
  loading: false,
  user: [],
  error: [],
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
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default basketReducer;
