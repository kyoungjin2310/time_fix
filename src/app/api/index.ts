import axios, { AxiosInstance } from "axios";
import {
  setRequestOptions,
  setResponseOptions,
} from "../api/common/intercepter";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const options = {};

function createWithAuth(url: string, options = {}): AxiosInstance {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setRequestOptions(instance);
  setResponseOptions(instance);
  return instance;
}

/* 공통 */

//login
export const member = createWithAuth(`${NEXT_PUBLIC_API_URL}member/`, options);

//schedule
export const schedule = createWithAuth(
  `${NEXT_PUBLIC_API_URL}schedule/auth/`,
  options,
);
