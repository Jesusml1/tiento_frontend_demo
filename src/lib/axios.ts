import envVars from "@/config/env";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: envVars.apiUrl,
});

export function isAxiosResponse(obj: any): obj is AxiosResponse {
  return "data" in obj && "status" in obj && "headers" in obj;
}

export default axiosInstance;
