import * as types from "../Action/actionType";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../../firebase";
import { toast } from "react-toastify";

export const add_to_basket = items => ({
  type: types.ADD_TO_BASKET,
  payload: items,
});

export const remove_to_basket = id => ({
  type: types.REMOVE_TO_BASKET,
  payload: id,
});
export const register_start = () => ({
  type: types.REGISTER_START,
});
export const register_success = user => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
export const register_fail = error => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
export const login_start = () => ({
  type: types.REGISTER_START,
});
export const login_success = user => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
export const login_fail = error => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
export const set_basket_empty = () => ({
  type: types.SET_BASKET_EMPTY,
});

export let Register_initiate = (email, password) => {
  return dispatch => {
    dispatch(register_start());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        sendEmailVerification(user);
        dispatch(register_success(user));
      })
      .catch(error => {
        dispatch(register_fail(error.message));
      });
  };
};
export let Login_initiate = (email, password) => {
  return dispatch => {
    dispatch(login_start());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login_success(user));
        window.location.assign("/");
      })
      .catch(error => {
        dispatch(login_fail(error.message));
        toast.error("Invalid Login Credentials");
        console.log(error.message);
      });
  };
};
