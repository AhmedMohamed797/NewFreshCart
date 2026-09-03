export default function ProductCardSkeleton() {
  return (
    <>
      <div className="card relative overflow-hidden rounded-xl bg-white shadow-lg">
        {/* Product Image Skeleton */}
        <div>
          <div className="mx-auto h-60 animate-pulse bg-gray-200"></div>
        </div>

        <div className="content space-y-2 p-4">
          {/* Category and Title Skeleton */}
          <div className="head-content space-y-2">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </div>

          {/* Rating Skeleton */}
          <div className="rating flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-4 animate-pulse rounded bg-gray-200"
                ></div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="h-4 w-8 animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>

          {/* Price and Add Button Skeleton */}
          <div className="flex items-center justify-between">
            <div className="price flex items-center gap-2">
              <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
            </div>

            <div className="size-9 animate-pulse rounded-full bg-gray-200"></div>
          </div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="absolute top-4 right-4 flex flex-col gap-4">
          <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
          <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Discount Badge Skeleton */}
        <div className="absolute top-4 left-4 h-6 w-12 animate-pulse rounded-md bg-gray-200"></div>
      </div>
    </>
  );
}
