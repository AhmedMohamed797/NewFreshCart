import { apiClient } from "./api.client";

export async function getProducts({
  page,
  keyword,
  sortBy,
  brand,
  category,
  priceLessThan,
  priceGreaterThan,
  limit,
  fields,
} = {}) {
  const options = {
    method: "GET",
    url: `/products?${page ? `page=${page}` : ""}${keyword ? `&keyword=${keyword}` : ""}${sortBy ? `&sort=${sortBy}` : ""}${brand ? `&brand=${brand}` : ""}${category ? `&category=${category}` : ""}${priceGreaterThan ? `price[gte]=${priceGreaterThan}` : ""}${priceLessThan ? `price[lte]=${priceLessThan}` : ""}${limit ? `limit=${limit}` : ""}${fields ? `fields=${fields}` : ""}`,
  };

  const response = await apiClient.request(options);
  return response;
}

export async function getProductById({ id }) {
  const options = {
    method: "GET",
    url: `/products/${id}`,
  };

  const response = await apiClient.request(options);
  return response;
}
