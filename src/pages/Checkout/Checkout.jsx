import {
  faCcAmex,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faCircleInfo,
  faLock,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import Loading from "../../components/Loading/Loading";
import { createOrder } from "../../services/checkout.service";
import { CartContext } from "./../../context/CartContext/CartContext";
import CheckoutSkeleton from './../../components/Skeleton/CheckoutSkeleton';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartInfo, setCartInfo, isLoading } = useContext(CartContext);

  const validationSchema = yup.object({
    paymentMethod: yup.string().required("payment method is required"),
    shippingAddress: yup.object().shape({
      details: yup.string().required("details is required"),
      phone: yup
        .string()
        .required("phone is required")
        .matches(/^(\+2)?01[0125][0-9]{8}$/, "accept only Egyptian numbers"),
      city: yup.string().required("city is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },

    validationSchema,
    onSubmit: handleCheckout,
  });

  if (isLoading) return <CheckoutSkeleton />;

  const { cartId, data } = cartInfo;
  const { totalCartPrice, products } = data;

  async function handleCheckout(values) {
    try {
      const response = await createOrder({
        paymentMethod: values.paymentMethod,
        shippingAddress: values.shippingAddress,
        cartId: cartId,
      });

      if (response.success) {
        if (response.data.session) {
          toast.success(
            "You will be redirected to safe payment gateway stripe",
          );
          setTimeout(() => {
            location.href = response.data.session.url;
          }, 2000);
        } else {
          toast.success("Order created successfully");

          setCartInfo({
            numOfCartItems: 0,
            data: {
              products: [],
              totalCartPrice: 0,
            },
          });

          setTimeout(() => {
            navigate("/account/orders");
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="bg-gray-100/50">
        <div className="container max-w-6xl py-6">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="mb-6 text-2xl font-semibold">Checkout</h1>
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="payment-method lg:col-span-8">
                <div className="payment-options mb-6 rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-xl font-semibold">Payment Method</h2>
                  <div>
                    <label
                      htmlFor="cod"
                      className={`${formik.values.paymentMethod === "cod" && "border-primary-600 bg-primary-100"} hover:border-primary-600 accent-primary-600 mt-5 flex items-center gap-4 rounded-lg border border-gray-200 p-4 transition-colors duration-200`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="cod"
                        className="size-4"
                        value="cod"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.paymentMethod === "cod"}
                      />

                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <FontAwesomeIcon
                              icon={faMoneyBill1Wave}
                              className="text-primary-600 text-2xl"
                            />
                            <div>
                              <h3 className="font-semibold">
                                Cash on delivery
                              </h3>
                              <p className="text-sm text-gray-600">
                                Pay when your order arrives
                              </p>
                            </div>
                          </div>
                          <span className="text-primary-600">
                            No extra charges
                          </span>
                        </div>

                        {formik.values.paymentMethod === "cod" && (
                          <div className="text-primary-600 bg-primary-200 border-primary-600/50 mt-3 ml-5 flex items-center gap-2 rounded-md border p-2">
                            <FontAwesomeIcon icon={faCreditCard} />
                            <p className="text-sm">
                              Please keep exact change ready for hassle-free
                              delivery
                            </p>
                          </div>
                        )}
                      </div>
                    </label>

                    <label
                      htmlFor="online"
                      className={`${formik.values.paymentMethod === "online" && "border-primary-600 bg-primary-100"} hover:border-primary-600 accent-primary-600 mt-5 flex items-center gap-4 rounded-lg border border-gray-200 p-4 transition-colors duration-200`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="online"
                        className="size-4"
                        value="online"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.paymentMethod === "online"}
                      />

                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="text-primary-600 text-2xl"
                            />
                            <div>
                              <h3 className="font-semibold">Online Payment</h3>
                              <p className="text-sm text-gray-600">
                                Pay securely with your card or digital wallet
                              </p>
                            </div>
                          </div>
                          <span className="text-primary-600">Recommended</span>
                        </div>
                        {formik.values.paymentMethod === "online" && (
                          <div className="mt-3 ml-5 flex items-center gap-2 rounded-md border border-blue-600/50 bg-blue-600/10 p-2 text-blue-600">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <p className="text-sm">
                              You will be redirected to secure payment gateway
                              to complete your transaction
                            </p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                <div className="shipping-address rounded-lg bg-white p-5 shadow-sm">
                  <h2 className="mb-4 text-xl font-semibold">
                    Shipping Address
                  </h2>
                  <div className="address flex flex-col gap-2">
                    <label htmlFor="addressDetails" className="text-sm">
                      Address Details *
                    </label>
                    <textarea
                      id="addressDetails"
                      placeholder="Enter your full address details"
                      className="input-control max-h-60 min-h-30"
                      name="shippingAddress.details"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    ></textarea>

                    {formik.errors.shippingAddress?.details &&
                      formik.touched.shippingAddress?.details && (
                        <p className="text-sm text-red-500">
                          *{formik.errors.shippingAddress?.details}
                        </p>
                      )}
                  </div>

                  <div className="mt-3 flex gap-3 *:grow">
                    <div className="phone flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="01020040020"
                        id="phone"
                        className="input-control"
                        name="shippingAddress.phone"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.shippingAddress?.phone &&
                        formik.touched.shippingAddress?.phone && (
                          <p className="text-sm text-red-500">
                            *{formik.errors.shippingAddress?.phone}
                          </p>
                        )}
                    </div>
                    <div className="city flex flex-col gap-2">
                      <label htmlFor="City" className="text-sm">
                        City *
                      </label>
                      <input
                        type="text"
                        placeholder="Cairo"
                        id="City"
                        className="input-control"
                        name="shippingAddress.city"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.shippingAddress?.city &&
                        formik.touched.shippingAddress?.city && (
                          <p className="text-sm text-red-500">
                            *{formik.errors.shippingAddress?.city}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-summary sticky top-8 h-fit rounded-lg bg-white p-6 shadow-sm lg:col-span-4">
                <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                <div className="cart-items max-h-48 space-y-3 overflow-auto border-b border-gray-500/30 p-3 pb-3">
                  {products.map((product) => {
                    return (
                      <Link
                        key={product.product.id}
                        to={`/product/${product.product.id}`}
                        className="item flex items-center gap-2 text-sm"
                      >
                        <img
                          src={product.product.imageCover}
                          alt={product.product.title}
                          className="size-12 rounded-lg object-contain"
                        />
                        <div>
                          <h3 className="line-clamp-1" title="">
                            {product.product.title}
                          </h3>
                          <span className="text-xs text-gray-500">
                            Qty: {product.count}
                          </span>
                        </div>
                        <span className="ms-auto text-center">
                          {product.price} EGP
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <ul className="space-y-3 py-3 *:flex *:items-center *:justify-between">
                  <li>
                    <span>Subtotal</span>
                    <span>{totalCartPrice} EGP</span>
                  </li>
                  <li>
                    <span>Delivery</span>
                    <span>70 EGP</span>
                  </li>
                  <li>
                    <span>Tax</span>
                    <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                  </li>
                  <li className="border-t border-gray-500/30 pt-3 font-semibold">
                    <span>Total</span>
                    <span>
                      {Math.trunc(totalCartPrice + 70 + totalCartPrice * 0.14)}{" "}
                      EGP
                    </span>
                  </li>
                </ul>

                <div className="btn-group space-y-3 *:flex *:items-center *:justify-center *:gap-2">
                  <button
                    type="submit"
                    className="btn bg-primary-600 w-full font-normal text-white"
                  >
                    <span>Proceed to payment</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <Link
                    to={"/cart"}
                    className="btn w-full border border-gray-500/20 bg-white font-normal"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Previous Step </span>
                  </Link>
                </div>

                <div className="py-5">
                  <h3 className="mb-3 font-semibold">Secure Checkout</h3>
                  <p className="text-sm text-gray-500">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-primary-600 me-1"
                    />
                    Your payment information is secure
                  </p>

                  <div className="mt-4 flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="text-2xl text-blue-700"
                    />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="text-2xl text-red-500"
                    />
                    <FontAwesomeIcon
                      icon={faCcAmex}
                      className="text-2xl text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faCcPaypal}
                      className="text-2xl text-blue-800"
                    />
                    <FontAwesomeIcon
                      icon={faCcApplePay}
                      className="text-2xl text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
