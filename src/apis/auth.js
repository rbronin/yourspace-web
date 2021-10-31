import Axios from "axios";
import { axios } from "./axios";

const githubUri =
  "https://github.com/login/oauth/authorize?client_id=a3625c42cc89b833e708";

export const auth = {
  login: async () => {
    return await axios.get("/auth/github");
    // return Axios.get(githubUri);
  },
  signup: (payload) => {
    const { data } = payload;
    return Axios.post("/register", data);
  },
};
