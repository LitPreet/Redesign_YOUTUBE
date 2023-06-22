import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Youtube from "../images/yt-logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = ({ onSignUp }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const hanleSubmission = () => {
    if (!value.name || !value.email || !value.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: value.name,
        });
        navigate("/");
        onSignUp();
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-24  mr-2" src={Youtube} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Walter white"
                  required=""
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required=""
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, pass: e.target.value }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="ml-0 text-sm ">
                    {errorMsg && (
                      <p className="flex item-center justify-center font-semibold bg-white px-3 py-2 rounded-md dark:text-red-600">
                        {errorMsg}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                onClick={hanleSubmission}
                disabled={submitButtonDisable}
                className="w-full bg-red-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-75"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-300 dark:text-gray-300">
                Already have an account ?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-white"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
