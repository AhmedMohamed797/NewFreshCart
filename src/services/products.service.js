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
  const params = Object.fromEntries(
    Object.entries({
      page,
      keyword,
      sort: sortBy,
      brand,
      category,
      limit,
      fields,
    }).filter(([, v]) => v !== undefined && v !== ""),
  );
  if (priceGreaterThan) params["price[gte]"] = priceGreaterThan;
  if (priceLessThan) params["price[lte]"] = priceLessThan;

  const options = { method: "GET", url: "/products", params };

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
