import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContext/TokenContext";
import { getAllOrder } from "../services/order.service";

export default function useOrders() {
  const { userInfo } = useContext(TokenContext);

  const {
    data: orders,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["orders", userInfo?.id],
    queryFn: () => getAllOrder({ userId: userInfo.id }),
    select: (data) => data.data,
    enabled: !!userInfo?.id,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 15,
  });

  return {
    orders,
    isError,
    isLoading,
    error,
    refetch,
  };
}
