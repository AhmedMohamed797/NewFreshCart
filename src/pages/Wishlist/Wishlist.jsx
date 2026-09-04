import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import useWishlist from "../../hooks/useWishlist";
import PageMetaTags from "../PageMetaTag/PageMetaTag";
import ErrorState from "./../../components/ErrorState/ErrorState";
import WishlistSkeleton from "./../../components/Skeleton/WishlistSkeleton";

export default function Wishlist() {
  const { wishlistProducts, isError, isLoading, error, refetch } =
    useWishlist();

  if (isLoading) return <WishlistSkeleton />;

  if (isError)
    return (
      <ErrorState
        title="We couldn't load your wishlist products"
        message={error?.message}
        onRetry={refetch}
      />
    );

  return (
    <>
      <PageMetaTags
        title="Wishlist | FreshCart"
        description="FreshCart - View and manage your wishlist. Save your favorite products and never miss out on deals."
      />
      <div>
        <div className="grid">
          {/* Left Section - Wishlist Items */}
          <div className="">
            <div className="rounded-xl bg-white">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="rounded-lg bg-red-100 p-2">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="h-5 w-5 text-red-600"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    My Wishlist
                  </h1>
                  <p className="mt-0.5 text-sm text-gray-600">
                    {wishlistProducts.length} items in your wishlist
                  </p>
                </div>
              </div>

              {/* Wishlist Items List */}

              <div className="space-y-4">
                {wishlistProducts.map((product) => {
                  return (
                    <WishlistItem key={product.id} productInfo={product} />
                  );
                })}

                {wishlistProducts.length === 0 && (
                  <div className="flex flex-col items-center justify-center gap-3 py-8">
                    <p>
                      Your wishlist is empty
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="text-red-500"
                      />
                    </p>
                    <p>
                      You can continue shopping from
                      <Link to={"/"} className="text-primary-600">
                        Here
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
