import Cookies from "js-cookie";
const EXPIRATION_DAYS = 7;

export const setCookie = (prop, value) =>
  Cookies.set(prop, value, { expires: EXPIRATION_DAYS });
export const getCookie = prop => Cookies.get(prop);
export const removeCookie = prop => Cookies.remove(prop);
