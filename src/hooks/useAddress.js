import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  createNewAddress,
  getAddresses,
  removeAddress,
} from "../services/address.service";

export default function useAddress() {
  const {
    data: addresses,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddresses,
    select: (data) => data.data.data,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });

  return {
    addresses,
    isError,
    isLoading,
    error,
    refetch,
  };
}

export function useAddNewAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (address) => createNewAddress(address),
    onSuccess: (response) => {
      toast.success(response.data.message);
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
  });
}

export function useRemoveAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => removeAddress(id),
    onSuccess: (response) => {
      toast.success(response.data.message);
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
  });
}
