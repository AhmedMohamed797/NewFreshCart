import { apiClient } from "./api.client";

export async function fetchCategories() {
  const options = {
    method: "GET",
    url: `/categories`,
  };

  const data = await apiClient.request(options);
  return data;
}
