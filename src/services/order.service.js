import { apiClient } from "./api.client";

export async function getAllOrder({ userId }) {
  const options = {
    url: `/orders/user/${userId}`,
    method: "GET",
  };

  const response = await apiClient.request(options);
  return response;
}
