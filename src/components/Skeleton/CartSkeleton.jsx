import CartItemSkeleton from "./CartItemSkeleton";

export default function CartSkeleton() {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Section - Cart Items */}
        <div className="lg:col-span-2">
          <div className="animate-pulse rounded-xl bg-white p-4 shadow-md">
            {/* Header */}
            <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="rounded-lg bg-gray-200 p-2">
                <div className="h-5 w-5"></div>
              </div>
              <div className="space-y-2">
                <div className="h-8 w-32 rounded bg-gray-200"></div>
                <div className="h-4 w-24 rounded bg-gray-200"></div>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <CartItemSkeleton key={item} />
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-5 flex justify-end">
              <div className="h-10 w-32 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 animate-pulse rounded-xl bg-white p-5 shadow-md">
            {/* Title */}
            <div className="mb-4 h-6 w-32 rounded bg-gray-200"></div>

            {/* Summary Items */}
            <div className="mb-6 space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                >
                  <div className="h-4 w-24 rounded bg-gray-200"></div>
                  <div className="h-4 w-16 rounded bg-gray-200"></div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mb-6 rounded-lg bg-green-50 p-4">
              <div className="flex items-center justify-between">
                <div className="h-5 w-16 rounded bg-gray-200"></div>
                <div className="h-6 w-24 rounded bg-gray-200"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="h-10 w-full rounded bg-gray-200"></div>
              <div className="border-b border-gray-200 pb-3">
                <div className="h-10 w-full rounded bg-gray-200"></div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-6 space-y-3">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
                >
                  <div className="size-10 rounded-full bg-gray-200"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-24 rounded bg-gray-200"></div>
                    <div className="h-3 w-32 rounded bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
