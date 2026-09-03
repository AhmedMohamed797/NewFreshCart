import { apiClient } from "./api.client";

export async function sendDataToSignUp(values) {
  const options = {
    method: "POST",
    url: `/auth/signup`,
    data: {
      name: values.name,
      email: values.email,
      password: values.password,
      rePassword: values.rePassword,
      phone: values.phone,
    },
  };

  const data = await apiClient.request(options);
  return data;
}

export async function sendDataToLogin(values) {
  const options = {
    method: "POST",
    url: `/auth/signin`,
    data: {
      email: values.email,
      password: values.password,
    },
  };

  const data = await apiClient.request(options);
  return data;
}

export async function verifyToken() {
  const options = {
    url: "/auth/verifyToken",
    method: "GET",
  };

  const response = await apiClient.request(options);
  return response;
}
