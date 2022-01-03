import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useInput from "./../../Hooks/useInput";
import { Login_initiate } from "../../redux/Action/action";
import { toast } from "react-toastify";

const Login = () => {
  let dispatch = useDispatch();
  let { user } = useSelector(state => state.basketReducer);
  let [email, bindEmail, resetEmail] = useInput("");
  let [password, bindPassword, resetPassword] = useInput("");

  let handleSubmit = e => {
    e.preventDefault();
    dispatch(Login_initiate(email, password));
  };
  return (
    <section>
      <article className="flex justify-center align-middle">
        <div className="w-full max-w-xl">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-5xl font-semibold	">Login</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-extrabold mb-2 mt-6 "
                htmlFor="useremail"
              >
                Useremail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
                {...bindEmail}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-extrabold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                {...bindPassword}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            ©2022 SHOP IT Corp. All rights reserved.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Login;
