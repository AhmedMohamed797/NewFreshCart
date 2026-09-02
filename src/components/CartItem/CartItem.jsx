import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext/CartContext";
import Rating from "./../Rating/Rating";

export default function CartItem({ productInfo }) {
  const { count, price, product } = productInfo;
  const { category, id, imageCover, ratingsAverage, title } = product;

  const { handleRemoveItemFromCart, handleUpdateCount } =
    useContext(CartContext);

  return (
    <>
      {/* Cart Items */}
      <div className="space-y-6">
        <div
          className={`mb-2 flex flex-col rounded-lg border border-gray-200 bg-white p-2 transition-all hover:border-green-200 hover:shadow-lg md:flex-row md:items-center md:justify-between`}
        >
          <div className="flex items-center gap-4">
            {/* Product Image */}
            <div className="shrink-0 overflow-hidden rounded-lg">
              <img
                src={imageCover}
                alt={title}
                className="size-15 transform object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="mb-1 cursor-pointer text-base font-medium text-gray-900 hover:text-green-600 md:w-90">
                <Link to={`/products/${id}`} className="line-clamp-1">
                  {title}
                </Link>
              </h3>
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-gray-500 hover:text-green-600">
                  {category.name}
                </p>
                <div className="flex items-center gap-1 text-xs">
                  <Rating rating={ratingsAverage} />
                  <span className="font-medium text-amber-500">
                    {ratingsAverage}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  handleUpdateCount({ id, count: count - 1 });
                }}
                className="rounded-md border border-green-200 p-1 transition-all hover:border-green-300 hover:bg-green-50 active:scale-95"
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  className="h-3 w-3 text-green-600"
                />
              </button>
              <span className="w-10 text-center text-base font-medium text-gray-900">
                {count}
              </span>
              <button
                onClick={() => {
                  handleUpdateCount({ id, count: count + 1 });
                }}
                className="rounded-md border border-green-200 p-1 transition-all hover:border-green-300 hover:bg-green-50 active:scale-95"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-3 w-3 text-green-600"
                />
              </button>
            </div>

            <div className="flex w-30 items-center justify-center gap-1">
              {/* Total Price */}
              <div className="text-right">
                <p className="text-base font-semibold text-nowrap text-green-600">
                  {price} EGP
                </p>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => {
                  handleRemoveItemFromCart({ id });
                }}
                className="rounded-md p-2 text-red-500 transition-all hover:bg-red-50 hover:text-red-600 active:scale-95"
              >
                <FontAwesomeIcon icon={faTrash} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
