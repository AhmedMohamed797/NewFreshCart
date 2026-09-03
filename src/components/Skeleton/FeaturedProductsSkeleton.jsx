import ProductCardSkeleton from "./ProductCardSkeleton";

export default function FeaturedProductsSkeleton() {
  return (
    <>
      <section className="p-8">
        <div className="container">
          {/* Title Skeleton */}
          <div className="mb-6 h-8 w-48 animate-pulse rounded bg-gray-200"></div>

          {/* Products Grid Skeleton */}
          <div className="grid gap-5 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(10)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
