import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/categories.service";

export default function useCategories() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    select: (data) => data.data.data,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 15,
  });

  return {
    categories,
    isError,
    isLoading,
    error,
    refetch,
  };
}
