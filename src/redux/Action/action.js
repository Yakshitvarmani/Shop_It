import * as types from "../Action/actionType";

export const add_to_basket = items => ({
  type: types.ADD_TO_BASKET,
  payload: items,
});

export const remove_to_basket = id => ({
  type: types.REMOVE_TO_BASKET,
  payload: id,
});
