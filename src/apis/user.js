import { axios } from "./axios";

export const user = {
  getUser: (token) => {
    return axios.get(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  searchUser: (payload) => {
    const { name } = payload;
    return axios.get(`/user?q=${name}`);
  },
  followUser: (payload) => {
    const { userid } = payload;
    return axios.post(`/user/follow/${userid}`);
  },
  unfollowUser: (payload) => {
    const { userid } = payload;
    return axios.delete(`/user/follow/${userid}`);
  },
  getProfile: (payload) => {
    return axios.get(`/profile`);
  },
  getProfileById: (payload) => {
    const { userid } = payload;
    return axios.get(`/user/profile/${userid}`);
  },
  feed: () => {
    return axios.get(`/feed`);
  },

  getRecommendation: (payload) => {
    const { token } = payload;
    return axios.get("/user/recommend", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  addToCollections: async ({ itemid, token }) => {
    return await axios.post(`/user/collections/${itemid}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
