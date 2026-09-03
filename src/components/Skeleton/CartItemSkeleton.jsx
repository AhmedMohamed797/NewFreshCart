export default function CartItemSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="mb-2 flex flex-col rounded-lg border border-gray-200 bg-white p-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {/* Product Image Skeleton */}
          <div className="size-15 shrink-0 rounded-lg bg-gray-200"></div>

          {/* Product Details Skeleton */}
          <div className="flex-1 space-y-3">
            {/* Title Skeleton */}
            <div className="h-5 w-3/4 rounded bg-gray-200"></div>

            {/* Category Skeleton */}
            <div className="h-4 w-1/3 rounded bg-gray-200"></div>

            {/* Rating Skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-20 rounded bg-gray-200"></div>
              <div className="h-4 w-8 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          {/* Quantity Controls Skeleton */}
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-gray-200"></div>
            <div className="h-6 w-10 rounded bg-gray-200"></div>
            <div className="size-8 rounded-md bg-gray-200"></div>
          </div>

          <div className="flex w-30 items-center justify-center gap-1">
            {/* Price Skeleton */}
            <div className="h-6 w-20 rounded bg-gray-200"></div>
            {/* Delete Button Skeleton */}
            <div className="size-9 rounded-md bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
