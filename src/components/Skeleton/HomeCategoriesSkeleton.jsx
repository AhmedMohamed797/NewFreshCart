export default function HomeCategoriesSkeleton() {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            {/* Title Skeleton */}
            <div className="h-8 w-48 animate-pulse rounded bg-gray-200"></div>

            {/* View All Link Skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>

          {/* Categories Grid Skeleton */}
          <div className="grid gap-5 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col items-center gap-3 rounded-lg bg-white py-3 shadow-md"
              >
                {/* Category Image Skeleton */}
                <div className="size-15 animate-pulse rounded-full bg-gray-200"></div>

                {/* Category Name Skeleton */}
                <div className="h-5 w-20 animate-pulse rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
