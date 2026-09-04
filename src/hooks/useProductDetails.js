import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/products.service";

export default function useProductDetails(id) {
  const {
    data: productDetails,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductById({ id }),
    select: (data) => data.data.data,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });

  return {
    productDetails,
    isError,
    isLoading,
    error,
    refetch,
  };
}
