import axios from "axios";
import history from "../history";
import { getCookie, removeCookie } from "./coockie";

const API_URL = "https://coronreporter-be.herokuapp.com/api";

const getHeaderConfig = () => ({
  Authorization: getCookie("token")
});

export const publicAPI = axios.create({
  baseURL: API_URL
});

export const privateAPI = axios.create({
  baseURL: API_URL,
  headers: getHeaderConfig()
});

privateAPI.interceptors.response.use(null, error => {
  if (401 === error.response.status) {
    removeCookie("token");
    history.push("/login");
  }

  return Promise.reject(error);
});
