import axios, { AxiosInstance } from "axios";

axios.defaults.withCredentials = true;

function setRequestOptions(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      return config;
    },
    (error) => {
      return Promise.reject(error.response);
    },
  );
}

function setResponseOptions(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error.response);
    },
  );
}

export { setRequestOptions, setResponseOptions };
