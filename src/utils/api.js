import axios from "axios";
import history from "../history";
import { getCookie, removeCookie } from "./coockie";

const API_URL = "https://coronreporter-be.herokuapp.com/api";

export const publicAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const privateAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

privateAPI.interceptors.request.use(config => {
  config.headers.Authorization = getCookie("token");
  return config;
});

privateAPI.interceptors.response.use(null, error => {
  if (401 === error.response.status) {
    removeCookie("token");
    removeCookie("role");
    history.push("/login");
  }

  return Promise.reject(error);
});
