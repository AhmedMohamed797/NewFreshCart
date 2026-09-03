import ProductCardSkeleton from "./ProductCardSkeleton";

export default function HomeDealsSkeleton() {
  return (
    <>
      <section className="pt-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
            <div>
              {/* Title Skeleton */}
              <div className="mb-2 h-8 w-40 animate-pulse rounded bg-gray-200"></div>

              {/* Timer Section Skeleton */}
              <div className="flex items-center gap-4">
                <div className="h-5 w-24 animate-pulse rounded bg-gray-200"></div>
                <div className="counter flex items-center gap-2 *:flex *:items-center *:justify-center">
                  <div className="size-7 animate-pulse rounded-md bg-gray-200"></div>
                  <span className="h-4 w-2 animate-pulse rounded bg-gray-200"></span>
                  <div className="size-7 animate-pulse rounded-md bg-gray-200"></div>
                  <span className="h-4 w-2 animate-pulse rounded bg-gray-200"></span>
                  <div className="size-7 animate-pulse rounded-md bg-gray-200"></div>
                </div>
              </div>
            </div>

            {/* View All Link Skeleton */}
            <div className="flex items-center gap-3">
              <div className="h-5 w-28 animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>

          {/* Products Grid Skeleton */}
          <div className="grid gap-5 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(5)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
