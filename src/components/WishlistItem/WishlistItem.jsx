import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext/CartContext";
import { useRemoveProductFromWishlist } from "../../hooks/useWishlist";
import { calcDiscount } from "./../../utils/calc-discount";
import Rating from "./../Rating/Rating";

export default function WishlistItem({ productInfo }) {
  const {
    id,
    category,
    imageCover,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
    title,
  } = productInfo;

  const { addingProductToCart } = useContext(CartContext);
  const { mutate: handleRemoveProductFromWishlist, isPending: isRemoving } =
    useRemoveProductFromWishlist();

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-md sm:flex-row">
      {/* Product Image */}
      <div className="shrink-0">
        <Link to={`/products/${id}`} className="block">
          <img
            src={imageCover}
            alt={title}
            className="h-24 w-24 rounded-lg object-contain sm:h-32 sm:w-32"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          {/* Category and Title */}
          <div>
            <span className="text-sm text-gray-500">{category.name}</span>
            <h3 className="font-medium text-gray-900">{title}</h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Rating rating={ratingsAverage} />
            <div className="text-sm text-gray-600">
              <span>{ratingsAverage}</span>
              <span className="ml-1">({ratingsQuantity})</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-primary-600 text-lg font-semibold">
              {priceAfterDiscount ? priceAfterDiscount : price} EGP
            </span>

            <>
              {priceAfterDiscount && (
                <>
                  <del className="text-sm text-gray-500">{price} EGP</del>
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                    -{calcDiscount({ price, priceAfterDiscount })}%
                  </span>
                </>
              )}
            </>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-2 pt-2 *:w-full md:flex-row md:*:w-fit">
          <button
            onClick={() => addingProductToCart(id)}
            className="bg-primary-600 hover:bg-primary-700 flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            type="button"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to Cart
          </button>

          <Link
            to={`/products/${id}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faEye} />
            View Details
          </Link>

          <button
            onClick={() => handleRemoveProductFromWishlist(id)}
            disabled={isRemoving}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
            type="button"
          >
            <FontAwesomeIcon icon={faTrash} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
