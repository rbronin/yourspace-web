import Axios from "axios";

const baseURL = process.env.REACT_APP_API_DEV;
export const axios = Axios.create({
  baseURL: baseURL,
});
