import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import loginImg from "../../assets/imgs/login-img.png";
import { TokenContext } from "../../context/TokenContext/TokenContext";
import { sendDataToLogin } from "../../services/auth.service";

export default function Login() {
  const Navigate = useNavigate();
  const [isExistError, setIsExistError] = useState(null);
  const [isPassShown, setIsPassShown] = useState(false);
  const { setToken } = useContext(TokenContext);
  const location = useLocation();

  const emailRegex =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gm;

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Invalid email address"),

    password: yup.string().required("Password is required"),
  });

  async function handleSignin(values) {
    try {
      const response = await sendDataToLogin(values);

      if (response.success) {
        toast("Welcome Back!");

        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          Navigate(location?.state?.from || "/");
        }, 2500);
      }
    } catch (error) {
      setIsExistError(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,
    onSubmit: handleSignin,
  });

  function handleChange(e) {
    setIsExistError("");
    formik.handleChange(e);
  }

  return (
    <>
      <main className="min-h-screen py-12">
        <div className="container grid items-center lg:grid-cols-2 xl:px-20">
          {/* Left Side */}
          <div className="mx-auto hidden w-10/12 space-y-7 rounded-3xl lg:block">
            <div className="h-80 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={loginImg}
                className="h-full w-full scale-105 object-cover object-center"
                alt="Login Img"
              />
            </div>

            <h2 className="text-center text-2xl font-bold">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>

            <p className="text-center text-gray-600">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>

            <ul className="text-primary-700 flex justify-center gap-7 text-sm *:flex *:items-center *:gap-2">
              <li>
                <FontAwesomeIcon icon="fa-solid fa-truck-fast" />
                <span>Free Delivery</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-shield-halved" />
                <span>Secure Payment</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-clock" />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="space-y-8 rounded-2xl bg-white/90 px-4 py-10 shadow-xl sm:px-10">
            <div className="space-y-1 text-center">
              <h2 className="text-3xl font-extrabold">
                <span className="text-primary-600">Fresh</span>Cart
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700">
                Welcome Back!
              </h3>
              <p className="text-gray-500">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

            <div className="flex flex-col gap-3 *:flex *:w-full *:items-center *:justify-center *:gap-2 *:rounded-lg *:border *:border-gray-300 *:bg-white *:py-2 *:transition-colors *:duration-200 *:hover:bg-gray-100">
              <button>
                <FontAwesomeIcon
                  icon="fa-brands fa-google"
                  className="text-red-500"
                />
                <span>Continue With Google</span>
              </button>
              <button>
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  className="text-blue-600"
                />
                <span>Continue With Facebook</span>
              </button>
            </div>

            <div className="relative h-0.5 w-full bg-gray-200">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-center text-xs font-semibold text-gray-400">
                OR CONTINUE WITH EMAIL
              </span>
            </div>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="email flex flex-col gap-1">
                <label htmlFor="email" className="font-bold text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <input
                    className="input-control w-full ps-10"
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FontAwesomeIcon
                    icon="fa-solid fa-envelope"
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400"
                  />
                </div>

                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    *{formik.errors.email}
                  </p>
                )}
              </div>

              <div className="password flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="flex items-center justify-between font-bold text-gray-700"
                >
                  <span>Password</span>
                  <span className="text-primary-500 font-normal">
                    <Link to={"/forget-password"} tabIndex={-1}>
                      Forget Password?
                    </Link>
                  </span>
                </label>
                <div className="relative">
                  <input
                    className="input-control w-full ps-10"
                    type={isPassShown ? "text" : "password"}
                    id="password"
                    placeholder="Enter Your Password"
                    name="password"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {isPassShown ? (
                    <FontAwesomeIcon
                      icon="fa-regular fa-eye"
                      className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-lg text-gray-600"
                      onClick={() => setIsPassShown(!isPassShown)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-regular fa-eye-slash"
                      className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-lg text-gray-600"
                      onClick={() => setIsPassShown(!isPassShown)}
                    />
                  )}

                  <FontAwesomeIcon
                    icon="fa-solid fa-lock"
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400"
                  />
                </div>

                {formik.touched.password && formik.errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    *{formik.errors.password}
                  </p>
                )}

                {isExistError && (
                  <p className="mt-1 text-sm text-red-500">*{isExistError}</p>
                )}
              </div>

              <div className="keepSignin">
                <div className="flex items-center gap-2">
                  <input
                    className="accent-primary-600 size-4"
                    type="checkbox"
                    id="keepSignin"
                  />
                  <label htmlFor="keepSignin">Keep me signed in</label>
                </div>
              </div>

              <button
                type="submit"
                className="btn bg-primary-600 hover:bg-primary-700 flex w-full items-center justify-center gap-2 text-lg text-white shadow-md"
              >
                <span>Sign In</span>
              </button>
            </form>

            <p className="border-t border-gray-200 pt-5 text-center text-gray-600">
              New to FreshCart?
              <Link
                className="text-primary-600 ml-2 font-semibold underline"
                to={"/signup"}
              >
                Create An Account
              </Link>
            </p>

            <ul className="mt-4 flex justify-center gap-6 text-[12px] text-gray-500 *:flex *:items-center *:gap-2 sm:text-sm">
              <li>
                <FontAwesomeIcon icon="fa-solid fa-lock" />
                <span>SSL Secured</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-people-group" />
                <span>50K+ Users</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <span>4.9 Rating</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
