import ProductCardSkeleton from "./ProductCardSkeleton";
export default function ProductDetailsSkeleton() {
  return (
    <>
      <section className="pt-8">
        <div className="container bg-white">
          <div className="grid grid-cols-1 gap-13 lg:grid-cols-12">
            {/* Left Side - Image Gallery Skeleton */}
            <div className="space-y-4 lg:col-span-4">
              <div className="w-full">
                {/* Main Image Skeleton */}
                <div className="mb-4 h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>

                {/* Thumbnail Images Skeleton */}
                <div className="flex gap-2">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="h-20 w-20 animate-pulse rounded-lg bg-gray-200"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Product Info Skeleton */}
            <div className="space-y-4 lg:col-span-8">
              {/* Stock Badge and Wishlist Skeleton */}
              <div className="flex items-center justify-between gap-2">
                <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200"></div>
                <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
              </div>

              {/* Title Skeleton */}
              <div className="h-9 w-3/4 animate-pulse rounded bg-gray-200"></div>

              {/* Rating Skeleton */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 animate-pulse rounded bg-gray-200"
                    ></div>
                  ))}
                </div>
                <div className="h-5 w-8 animate-pulse rounded bg-gray-200"></div>
                <div className="h-5 w-20 animate-pulse rounded bg-gray-200"></div>
              </div>

              {/* Price Skeleton */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-32 animate-pulse rounded bg-gray-200"></div>
                <div className="h-6 w-24 animate-pulse rounded bg-gray-200"></div>
                <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200"></div>
              </div>

              {/* Description Skeleton */}
              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
              </div>

              {/* Quantity Section Skeleton */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-36 animate-pulse rounded bg-gray-200"></div>
                </div>
              </div>

              {/* Action Buttons Skeleton */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <div className="h-12 flex-1 animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-12 flex-1 animate-pulse rounded-lg bg-gray-200"></div>
              </div>

              {/* Features Section Skeleton */}
              <div className="flex flex-col gap-8 border-t border-gray-100 py-5 *:flex-1 sm:flex-row sm:items-center">
                {/* Feature 1 Skeleton */}
                <div className="flex items-center gap-4 rounded-lg p-3">
                  <div className="size-12 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="space-y-2">
                    <div className="h-5 w-24 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>

                {/* Feature 2 Skeleton */}
                <div className="flex items-center gap-4 rounded-lg p-3">
                  <div className="size-12 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="space-y-2">
                    <div className="h-5 w-28 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-36 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section Skeleton */}
      <div className="container p-6">
        {/* Tab Navigation Skeleton */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-5 w-20 animate-pulse rounded bg-gray-200 py-4"
              ></div>
            ))}
          </nav>
        </div>

        {/* Tab Content Skeleton */}
        <div className="min-h-96">
          <div className="space-y-8">
            {/* Description Section */}
            <div>
              <div className="mb-4 h-7 w-32 animate-pulse rounded bg-gray-200"></div>
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200"></div>
              </div>
            </div>

            <div className="flex flex-col gap-15 xl:flex-row">
              {/* Benefits Section */}
              <div className="flex-1">
                <div className="mb-4 h-7 w-24 animate-pulse rounded bg-gray-200"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-2 mr-3 h-2 w-2 animate-pulse rounded-full bg-gray-200"></div>
                      <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details Section */}
              <div className="flex-1">
                <div className="mb-4 h-7 w-36 animate-pulse rounded bg-gray-200"></div>
                <div className="grid grid-cols-1 gap-4 gap-x-10 md:grid-cols-2">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
