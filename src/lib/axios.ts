import axios, { AxiosResponse } from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export function isAxiosResponse(obj: any): obj is AxiosResponse {
  return 'data' in obj && 'status' in obj && 'headers' in obj;
}

export default axiosInstance;
