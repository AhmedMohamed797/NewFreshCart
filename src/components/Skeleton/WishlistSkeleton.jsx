import WishlistItemSkeleton from "./WishlistItemSkeleton";

export default function WishlistSkeleton() {
  return (
    <div className="">
      <div className="grid">
        {/* Left Section - Wishlist Items Skeleton */}
        <div className="">
          <div className="rounded-xl bg-white p-4 shadow-md">
            {/* Header Skeleton */}
            <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="animate-pulse rounded-lg bg-gray-200 p-2">
                <div className="h-5 w-5 animate-pulse rounded bg-gray-300"></div>
              </div>
              <div className="space-y-2">
                <div className="h-8 w-32 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-40 animate-pulse rounded bg-gray-200"></div>
              </div>
            </div>

            {/* Wishlist Items List Skeleton */}
            <div className="space-y-4">
              {/* Multiple skeleton items */}
              {[...Array(2)].map((_, index) => (
                <WishlistItemSkeleton key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
