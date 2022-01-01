import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Register_initiate } from "../../redux/Action/action";
import useInput from "./../../Hooks/useInput";

const SignUp = () => {
  let dispatch = useDispatch();
  let [name, bindName, resetName] = useInput("");
  let [lastName, bindLastName, resetLastName] = useInput("");
  let [email, bindEmail, resetEmail] = useInput("");
  let [password, bindPassword, resetPassword] = useInput("");
  let [password1, bindPassword1, resetPassword1] = useInput("");
  let handleSubmit = e => {
    e.preventDefault();
    if (password == password1) {
      dispatch(Register_initiate(email, password));
      toast.success("successfully user Registered");
      toast.info(`verification email has been send to ${email}`);
    } else {
      toast.error("Incorrect Password");
    }
    resetName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetPassword1();
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12 ">
        {/* Row */}
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          {/* Col */}
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                'url("https://format-com-cld-res.cloudinary.com/image/private/s--1fnMlqVh--/c_limit,g_center,h_900,w_65535/fl_keep_iptc.progressive,q_95/v1/abca11d01d23022f0a143b08736e5f91/NAMASTE_SIDE_VIEW.jpg")',
            }}
          />
          {/* Col */}
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    {...bindName}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    {...bindLastName}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...bindEmail}
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    {...bindPassword}
                  />
                  <p className="text-xs italic text-red-500">
                    Please choose a password.
                  </p>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="c_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                    {...bindPassword1}
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <Link
                  to="/login"
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html"
                >
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
