import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import { ProductsContext } from "./ProductsContext";

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();

        if (response.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading, isError, error }}>
      {children}
    </ProductsContext.Provider>
  );
}
