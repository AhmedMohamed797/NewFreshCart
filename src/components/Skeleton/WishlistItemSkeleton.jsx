export default function WishlistItemSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md sm:flex-row">
      {/* Product Image Skeleton */}
      <div className="flex-shrink-0">
        <div className="h-24 w-24 rounded-lg bg-gray-200 animate-pulse sm:h-32 sm:w-32"></div>
      </div>

      {/* Product Details Skeleton */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          {/* Category and Title Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Rating Skeleton */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Price Skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Actions Skeleton */}
        <div className="flex flex-col items-center gap-2 pt-2 *:w-full md:flex-row md:*:w-fit">
          <div className="h-10 w-full md:w-32 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-10 w-full md:w-32 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-10 w-full md:w-24 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}