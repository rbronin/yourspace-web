import { axios } from "./axios";

export const auth = {
  login: async (payload) => {
    const { data } = payload;
    return await axios.post("/auth/signin", data);
    // return Axios.get(githubUri);
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
