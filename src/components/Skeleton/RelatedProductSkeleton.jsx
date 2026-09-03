import ProductCardSkeleton from "./ProductCardSkeleton";

export default function RelatedProductSkeleton() {
  return (
    <>
      {/* Related Products Section Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-8 w-48 animate-pulse rounded bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
            </div>
          </div>

          {/* Related Products Grid */}
          <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(5)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
