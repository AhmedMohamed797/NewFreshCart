import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import reviewImg from "../../assets/imgs/review-author.png";
import { sendDataToSignUp } from "../../services/auth.service.js";
import { checkPasswordStrength } from "../../utils/validation.js";
import PageMetaTags from "../PageMetaTag/PageMetaTag";

export default function Signup() {
  const Navigate = useNavigate();
  const [isExistError, setIsExistError] = useState(null);

  const passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm;
  const phoneRegex = /^01[0125][0-9]{8}$/gm;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Username is required")
      .min(3, "User name must be at least 3 chars"),

    email: yup
      .string()
      .required("Email is required")
      .email("Email address is invalid"),

    password: yup
      .string()
      .required("Password is required")
      .matches(
        passRegex,
        "Password must be At least one upper case English letter, At least one lower case English letter,  At least one digit, At least one special character or space,Minimum eight in length",
      ),

    rePassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must be the same"),

    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegex, "Only accept Egyptian numbers"),

    terms: yup.boolean().oneOf([true], "You must agree our terms!"),
  });

  async function handleSubmit(values) {
    try {
      const response = await sendDataToSignUp(values);

      if (response.success) {
        toast("User Registered Successfully!!");
        setTimeout(() => {
          Navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setIsExistError(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },

    validationSchema,
    onSubmit: handleSubmit,
  });

  const passwordFeedback = checkPasswordStrength(formik.values.password);

  return (
    <>
      <PageMetaTags
        title="Signup | FreshCart"
        description="FreshCart - Create your account to start shopping. Join thousands of happy customers and enjoy fresh grocery delivery."
      />
      <main className="py-12">
        <div className="container grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden space-y-8 py-7 lg:block">
            <div className="welcome-msg">
              <h2 className="text-4xl font-bold">
                Welcome to <span className="text-primary-600">FreshCart</span>
              </h2>
              <p className="text-md mt-2 font-medium">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep
              </p>
            </div>

            <ul className="space-y-5 *:flex *:items-center *:gap-3">
              <li>
                <div className="icon bg-primary-300 text-primary-700 flex size-12 items-center justify-center rounded-full text-xl">
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                </div>
                <div className="content">
                  <h3 className="font-bold">Premium Quality</h3>
                  <p className="text-gray-600">
                    Premium quality products sourced from trusted suppliers
                  </p>
                </div>
              </li>

              <li>
                <div className="icon bg-primary-300 text-primary-700 flex size-12 items-center justify-center rounded-full text-xl">
                  <FontAwesomeIcon icon="fa-solid fa-truck-fast" />{" "}
                </div>
                <div className="content">
                  <h3 className="font-bold">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>

              <li>
                <div className="icon bg-primary-300 text-primary-700 flex size-12 items-center justify-center rounded-full text-xl">
                  <FontAwesomeIcon icon="fa-solid fa-shield-halved" />{" "}
                </div>
                <div className="content">
                  <h3 className="font-bold">Secure Shopping</h3>
                  <p className="text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>

            <div className="review rounded-xl bg-white p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <img
                  src={reviewImg}
                  className="size-12 rounded-full"
                  alt="Sarah Jonson Profile Img"
                />
                <div>
                  <h3>Sarah Jonson</h3>
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-yellow-400"
                  />
                </div>
              </div>
              <blockquote className="mt-3 text-gray-700 italic">
                <p>
                  "FreshCart has transformed my shopping experience. The quality
                  of the products is outstanding, and the delivery is always on
                  time. Highly recommend!"
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 rounded-xl px-3 py-7 shadow-xl sm:px-9">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Create Your Account</h2>
              <p className="pt-1">Start your fresh journey with us today</p>
            </div>

            <div className="flex flex-col gap-2 *:flex *:w-full *:items-center *:justify-center *:gap-2 *:hover:bg-gray-100 md:flex-row">
              <button className="btn border border-gray-400/40 bg-transparent">
                <FontAwesomeIcon
                  icon="fa-brands fa-google"
                  className="text-red-500"
                />
                <span>Google</span>
              </button>
              <button className="btn border border-gray-400/40 bg-transparent">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook-f"
                  className="text-blue-600"
                />
                <span>Facebook</span>
              </button>
            </div>

            <div className="relative h-0.5 w-full bg-gray-300/30">
              <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-white px-4">
                or
              </span>
            </div>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="name flex flex-col gap-1">
                <label htmlFor="name">Name*</label>
                <input
                  className="input-control"
                  type="text"
                  id="name"
                  placeholder="Ali"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm text-red-500">*{formik.errors.name}</p>
                )}
              </div>

              <div className="email flex flex-col gap-1">
                <label htmlFor="email">Email*</label>
                <input
                  className="input-control"
                  type="email"
                  id="email"
                  placeholder="ali@gmail.com"
                  name="email"
                  onChange={(e) => {
                    setIsExistError("");
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500">*{formik.errors.email}</p>
                )}
                {isExistError && (
                  <p className="text-red-500">*{isExistError}</p>
                )}
              </div>

              <div className="password flex flex-col gap-1">
                <label htmlFor="password">Password*</label>
                <input
                  className="input-control"
                  type="password"
                  id="password"
                  placeholder="Create a strong password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.values.password && (
                  <div className="password-strength flex items-center gap-2">
                    <div className="bar h-1 w-full overflow-hidden rounded-xl bg-gray-200">
                      <div
                        className={`progress h-full ${passwordFeedback.background} ${passwordFeedback.width} `}
                      ></div>
                    </div>
                    <span className="text-sm text-nowrap">
                      {passwordFeedback.text}
                    </span>
                  </div>
                )}

                {formik.touched.password && formik.errors.password && (
                  <p className="text-sm text-red-500">
                    *{formik.errors.password}
                  </p>
                )}
              </div>

              <div className="rePassword flex flex-col gap-1">
                <label htmlFor="rePassword">Confirm Password*</label>
                <input
                  className="input-control"
                  type="password"
                  id="rePassword"
                  placeholder="Confirm your password"
                  name="rePassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="text-sm text-red-500">
                    *{formik.errors.rePassword}
                  </p>
                )}
              </div>

              <div className="phone flex flex-col gap-1">
                <label htmlFor="phone">Phone*</label>
                <input
                  className="input-control"
                  type="tel"
                  id="phone"
                  placeholder="+20 10 9751 4862"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-sm text-red-500">*{formik.errors.phone}</p>
                )}
              </div>

              <div className="terms">
                <div className="flex items-center gap-2">
                  <input
                    className="accent-primary-600 size-4"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link to={"/terms"} className="text-primary-500 underline">
                      Terms Of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-primary-500 underline"
                      to={"/privacy-policy"}
                    >
                      Privacy Policy
                    </Link>{" "}
                    *
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-sm text-red-500">*{formik.errors.terms}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn bg-primary-600 hover:bg-primary-700 flex w-full items-center justify-center gap-2 text-white"
              >
                <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                <span>Create My Account</span>
              </button>
            </form>

            <p className="border-t border-gray-400/40 pt-5 text-center">
              Already have an account?
              <Link className="text-primary-600 underline" to={"/login"}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
