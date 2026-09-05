import { apiClient } from "./api.client";

export async function getAddresses() {
  const options = {
    url: `/addresses`,
    method: "GET",
  };

  const response = await apiClient.request(options);
  return response;
}

export async function createNewAddress(address) {
  const options = {
    url: `/addresses`,
    method: "POST",
    data: address,
  };

  const response = await apiClient.request(options);
  return response;
}

export async function removeAddress(id) {
  const options = {
    url: `/addresses/${id}`,
    method: "DELETE",
  };

  const response = await apiClient.request(options);
  return response;
}
