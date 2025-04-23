
import axios, { AxiosRequestConfig } from "axios";
import customSessionStorage from "../utils/session-storage";


const AxiosInterceptor = () => {

  const updateHeader = (request: any) => {
    const accessToken = customSessionStorage.getAccessToken();
      request.headers = {
        ...request.headers, 
        Authorization: `Bearer ${accessToken}`, 
      };
    return request;
  };

  axios.interceptors.request.use(
    (request: AxiosRequestConfig) => {
      return updateHeader(request);
    },
    (error) => {
      Promise.reject(error)}
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {

      return Promise.reject(error);
    }
  );
};

export default AxiosInterceptor