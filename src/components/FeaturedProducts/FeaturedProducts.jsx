import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import Loading from "../Loading/Loading";
import ProductCard from "./../ProductCard/ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await getProducts();

        if (response.success) {
          setIsLoading(false);
          setProducts(response.data.data);
        }
      } catch (error) {
        setIsLoading(true);
        console.log(error);
      }
    }

    getAllProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
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
