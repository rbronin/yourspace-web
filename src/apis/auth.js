import Axios from "axios";
const baseURL = process.env.REACT_APP_API_DEV;
const axios = Axios.create({
  baseURL: baseURL,
});

export const auth = {
  login: async (payload) => {
    const { data } = payload;
    return await axios.post("/auth/signin", data);
  },
  signup: async (payload) => {
    const { data } = payload;
    return await axios.post("/auth/signup", data);
  },
  verify: async (payload) => {
    const { token } = payload;
    return await axios.get("/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
