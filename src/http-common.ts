import axios from "axios";
import toast from "react-hot-toast";

const fetch = () => {
  const defaultOptions = {
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: "http://localhost:4040",

    headers: {
      "Content-type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");

    config.headers!.Authorization = token ? `Bearer ${token}` : "";

    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // eslint-disable-next-line no-console
      console.error(`Api Error
        Status: ${error?.response?.data?.apierror?.status}
        Message: ${error?.response?.data?.apierror?.message}
      `);
      toast.error("Something went wrong... try again!");
      return Promise.reject(error);
    }
  );

  return instance;
};

export { fetch };
