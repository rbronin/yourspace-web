/* eslint-disable react-hooks/rules-of-hooks */
import Axios from "axios";
import { useToken } from "../Config";

const AUTH_TOKEN = useToken();

const baseURL = process.env.REACT_APP_API_DEV;
export const axios = Axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});
