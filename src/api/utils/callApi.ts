import axios, { AxiosRequestConfig } from "axios";
import AxiosInterceptor from "./axios.interceptor";

 const callApi = async ({
  baseURL,
  url,
  method = "get",
  params,
  data,
  ...res
}: AxiosRequestConfig) => {
  AxiosInterceptor();
  const apiBase = baseURL || import.meta.env.API_BASE_URL;
  const source = axios.CancelToken.source();
  try {
    const response = await axios({
      url,
      baseURL: apiBase,
      method,
      data,
      params,
      cancelToken: source.token,
      timeout: 1000000,
      ...res
    });

    return response?.data
  } catch (error) {
 
    if (axios.isCancel(error)) {
      throw new Error("Request canceled");
    }
    throw error;
  } finally {
    source.cancel("Cleanup");
  }
};

export default callApi