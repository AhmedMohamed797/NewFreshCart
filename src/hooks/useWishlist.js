import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  addProductToWishlist,
  getWishlistProducts,
  removeProductFromWishlist,
} from "../services/wishlist.service";

export default function useWishlist() {
  const {
    data: wishlistProducts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlistProducts(),
    select: (data) => data.data.data,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 15,
  });

  return { wishlistProducts, isError, isLoading, error, refetch };
}

export function useAddProductToWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId) => addProductToWishlist(productId),
    onSuccess: (response) => {
      toast.success(response.data.message);
      // Refetch GET /wishlist → populated data replaces the cache
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useRemoveProductFromWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId) => removeProductFromWishlist(productId),
    onSuccess: (response) => {
      toast.success(response.data.message);
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
