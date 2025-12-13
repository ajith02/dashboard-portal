import api from "../axiosInstance";
import { ENDPOINTS } from "../endpoints";

export const loginService = async (payload) => {
  const response = await api.post(ENDPOINTS.LOGIN, payload);
  return response.data;
};
