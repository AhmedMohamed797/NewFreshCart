import {
  faArrowLeft,
  faCartShopping,
  faShieldHalved,
  faShoppingBag,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import CartItem from "../../components/CartItem/CartItem";
import Loading from "../../components/Loading/Loading";
import { CartContext } from "./../../context/CartContext/CartContext";

export default function Cart() {
  const { cartInfo, isLoading, handleClearCart } = useContext(CartContext);
  if (isLoading) return <Loading />;

  const { numOfCartItems, data } = cartInfo;
  const { totalCartPrice, products } = data;

  return (
    <>
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Section - Cart Items */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-white p-4 shadow-md">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="rounded-lg bg-green-100 p-2">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="h-5 w-5 text-green-600"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Shopping Cart
                  </h1>

                  <p className="mt-0.5 text-sm text-gray-600">
                    {numOfCartItems || 0} items in your cart
                  </p>
                </div>
              </div>
              {/* Cart Items List */}
              {products.length > 0 ? (
                <>
                  {products.map((product) => {
                    return <CartItem key={product._id} productInfo={product} />;
                  })}
                  <button
                    onClick={handleClearCart}
                    className="btn ms-auto mt-5 block bg-red-500 font-normal text-white transition-colors duration-300 hover:bg-red-600"
                  >
                    Clear Cart
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 py-8">
                  <p>
                    Your cart is empty <FontAwesomeIcon icon={faCartShopping} />
                  </p>
                  <p>
                    You can continue shopping from{" "}
                    <Link to={"/"} className="text-primary-600">
                      Here
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-xl bg-white p-5 shadow-md">
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                Order Summary
              </h2>

              {/* Summary Items */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <span className="text-sm text-gray-600">
                    Subtotal ({numOfCartItems || 0} items)
                  </span>
                  <span className="font-semibold text-gray-900">
                    {totalCartPrice} EGP
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {products.length > 0 ? 70 : 0} EGP
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <span className="text-sm text-gray-600">Tax</span>
                  <span className="font-semibold text-gray-900">
                    {Math.trunc(totalCartPrice * 0.14)} EGP
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6 rounded-lg bg-green-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900">
                    Total
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    {Math.trunc(
                      totalCartPrice * 0.14 +
                        (products.length > 0 ? 70 : 0) +
                        totalCartPrice,
                    )}{" "}
                    EGP
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={products.length > 0 ? "/checkout" : "#"}
                  className={`w-full rounded-lg px-6 py-2.5 text-center text-sm font-semibold text-white shadow-md transition-all ${
                    products.length > 0
                      ? "bg-green-600 hover:bg-green-700 hover:shadow-green-200 active:scale-[0.98]"
                      : "cursor-not-allowed bg-gray-400"
                  }`}
                >
                  Proceed to Checkout
                </Link>

                <div className="border-b border-gray-200 pb-3">
                  <Link
                    to={"/"}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-green-600 px-6 py-2.5 text-sm font-semibold text-green-600 transition-all hover:bg-green-50 active:scale-[0.98]"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100">
                  <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="h-4 w-4 text-green-600"
                    />
                  </div>
                  <div>
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">
                      Free Delivery
                    </h3>
                    <p className="text-xs text-gray-600">
                      Orders 500 EGP or more
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100">
                  <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="h-4 w-4 text-green-600"
                    />
                  </div>
                  <div>
                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">
                      Secure Payment
                    </h3>
                    <p className="text-xs text-gray-600">
                      100% protected checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
