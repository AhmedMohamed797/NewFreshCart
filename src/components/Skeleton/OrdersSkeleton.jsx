export default function OrdersSkeleton() {
  return (
    <>
      <section>
        <h2 className="mb-3 text-xl font-bold">My Orders</h2>

        {/* Skeleton Order Cards */}
        {[1, 2].map((index) => (
          <div key={index} className="overflow-x-auto">
            <div className="mb-3 min-w-200">
              {/* Order Header Skeleton */}
              <div className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-100/70 p-4">
                {/* header-title skeleton */}
                <div className="flex gap-5">
                  <div className="space-y-2">
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-300"></div>
                    <div className="h-3 w-16 animate-pulse rounded bg-gray-300"></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-6 w-12 animate-pulse rounded-md bg-gray-300"></div>
                  </div>
                </div>

                {/* header btns skeleton */}
                <div>
                  <ul className="flex items-center gap-4">
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-300"></div>
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-300"></div>
                  </ul>
                </div>
              </div>

              {/* Order Card Item Skeleton */}
              <div className="flex min-w-200 items-center justify-between rounded-md border border-gray-300 p-4">
                {/* Order img skeleton */}
                <div className="flex items-center gap-4">
                  {/* Product images skeleton */}
                  <div className="relative">
                    <div className="size-17 animate-pulse rounded bg-gray-300"></div>
                    <div className="absolute top-0 right-0 size-5 translate-x-1/2 -translate-y-1/2 animate-pulse rounded-md bg-gray-400"></div>
                  </div>
                  <div className="relative">
                    <div className="size-17 animate-pulse rounded bg-gray-300"></div>
                    <div className="absolute top-0 right-0 size-5 translate-x-1/2 -translate-y-1/2 animate-pulse rounded-md bg-gray-400"></div>
                  </div>

                  <div className="flex flex-col space-y-1 border-l border-gray-500 ps-5">
                    <div className="h-3 w-10 animate-pulse rounded bg-gray-300"></div>
                    <div className="h-4 w-14 animate-pulse rounded bg-gray-300"></div>
                  </div>
                </div>

                {/* Order Amount Skeleton */}
                <div className="flex flex-col space-y-1">
                  <div className="h-3 w-20 animate-pulse rounded bg-gray-300"></div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-300"></div>
                </div>

                {/* Order Direction Skeleton */}
                <div className="flex flex-col space-y-1 border-r border-gray-300 pe-4">
                  <div className="h-3 w-18 animate-pulse rounded bg-gray-300"></div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-300"></div>
                  <div className="h-3 w-20 animate-pulse rounded bg-gray-300"></div>
                </div>

                {/* Order Actions Skeleton */}
                <div className="flex flex-col items-end gap-2">
                  <div className="h-8 w-24 animate-pulse rounded bg-gray-300"></div>
                  <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
