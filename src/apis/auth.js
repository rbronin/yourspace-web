import { axios } from "./axios";

export const auth = {
  login: (payload) => {
    const { data } = payload;
    return axios.post("/login", data);
  },
  signup: (payload) => {
    const { data } = payload;
    return axios.post("/register", data);
  },
};
