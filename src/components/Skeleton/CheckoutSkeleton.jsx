export default function CheckoutSkeleton() {
  return (
    <>
      <section className="bg-gray-100/50">
        <div className="container max-w-6xl py-6">
          {/* Page Title Skeleton */}
          <div className="mb-6 h-8 w-32 animate-pulse rounded bg-gray-200"></div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Section - Payment & Shipping */}
            <div className="payment-method lg:col-span-8">
              {/* Payment Method Section */}
              <div className="payment-options mb-6 rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-6 h-7 w-40 animate-pulse rounded bg-gray-200"></div>

                <div className="space-y-5">
                  {/* Payment Option 1 Skeleton */}
                  <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
                    <div className="size-4 animate-pulse rounded-full bg-gray-200"></div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
                          <div>
                            <div className="mb-1 h-5 w-32 animate-pulse rounded bg-gray-200"></div>
                            <div className="h-4 w-48 animate-pulse rounded bg-gray-200"></div>
                          </div>
                        </div>
                        <div className="h-4 w-28 animate-pulse rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Option 2 Skeleton */}
                  <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
                    <div className="size-4 animate-pulse rounded-full bg-gray-200"></div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
                          <div>
                            <div className="mb-1 h-5 w-36 animate-pulse rounded bg-gray-200"></div>
                            <div className="h-4 w-56 animate-pulse rounded bg-gray-200"></div>
                          </div>
                        </div>
                        <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address Section */}
              <div className="shipping-address rounded-lg bg-white p-5 shadow-sm">
                <div className="mb-4 h-7 w-44 animate-pulse rounded bg-gray-200"></div>

                <div className="address flex flex-col gap-2">
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-24 w-full animate-pulse rounded bg-gray-200"></div>
                </div>

                <div className="mt-3 flex gap-3 *:grow">
                  <div className="phone flex flex-col gap-2">
                    <div className="h-4 w-28 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-10 w-full animate-pulse rounded bg-gray-200"></div>
                  </div>
                  <div className="city flex flex-col gap-2">
                    <div className="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-10 w-full animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Order Summary */}
            <div className="order-summary sticky top-8 h-fit rounded-lg bg-white p-6 shadow-sm lg:col-span-4">
              <div className="mb-4 h-7 w-36 animate-pulse rounded bg-gray-200"></div>

              {/* Cart Items Skeleton */}
              <div className="cart-items max-h-48 space-y-3 border-b border-gray-500/30 p-3 pb-3">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="item flex items-center gap-2">
                    <div className="size-12 animate-pulse rounded-lg bg-gray-200"></div>
                    <div className="flex-1">
                      <div className="mb-1 h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
                      <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
                    </div>
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                  </div>
                ))}
              </div>

              {/* Price Summary Skeleton */}
              <div className="space-y-3 py-3">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                  </div>
                ))}
              </div>

              {/* Buttons Skeleton */}
              <div className="btn-group space-y-3">
                <div className="h-12 w-full animate-pulse rounded bg-gray-200"></div>
                <div className="h-12 w-full animate-pulse rounded bg-gray-200"></div>
              </div>

              {/* Security Section Skeleton */}
              <div className="py-5">
                <div className="mb-3 h-5 w-32 animate-pulse rounded bg-gray-200"></div>
                <div className="mb-4 h-4 w-48 animate-pulse rounded bg-gray-200"></div>

                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="h-6 w-6 animate-pulse rounded bg-gray-200"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
