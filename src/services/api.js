import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({ baseURL: process.env.REACT_APP_API });

api.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "bearer " + getToken();
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default api;

export const apiNoBaseURL = axios.create();

apiNoBaseURL.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "bearer " + getToken();
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export const apiMailerLite = axios.create({ baseURL: "https://api.mailerlite.com/api/v2" });
apiMailerLite.interceptors.request.use(
  config => {
    config.headers["X-MailerLite-ApiKey"] = "d8bb17227393366b6844168775886036";
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
