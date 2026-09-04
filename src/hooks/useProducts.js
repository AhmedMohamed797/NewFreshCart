import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products.service";

export default function useProducts() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (data) => data.data.data,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });

  return {
    products,
    isError,
    isLoading,
    error,
  };
}
