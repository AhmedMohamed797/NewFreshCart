import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsContext";
import ProductCard from "./../ProductCard/ProductCard";
import FeaturedProductsSkeleton from "./../Skeleton/FeaturedProductsSkeleton";

export default function FeaturedProducts() {
  const { products, isLoading } = useContext(ProductsContext);

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="mb-5 text-2xl font-bold">Featured Products</h2>
          <div className="grid gap-5 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
