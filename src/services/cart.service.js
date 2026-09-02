import { apiClient } from "./api.client";

export async function addProductToCart({ id }) {
  const options = {
    url: "/cart",
    method: "POST",
    data: {
      productId: id,
    },
  };

  const response = await apiClient.request(options);
  return response;
}

export async function getCartItems() {
  const options = {
    url: "/cart",
    method: "GET",
  };

  const response = await apiClient.request(options);
  return response;
}

export async function removeItemFromCart({ id }) {
  const options = {
    url: `/cart/${id}`,
    method: "DELETE",
  };

  const response = await apiClient.request(options);
  return response;
}

export async function updateCartItemCount({ id, count }) {
  const options = {
    url: `/cart/${id}`,
    method: "PUT",
    data: {
      count: count,
    },
  };

  const response = await apiClient.request(options);
  return response;
}

export async function clearCart() {
  const options = {
    url: `/cart`,
    method: "DELETE",
  };

  const response = await apiClient.request(options);
  return response;
}
