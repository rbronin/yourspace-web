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
    const { name, token } = payload;
    return axios.get(`/user/search?s=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  followUser: (payload) => {
    const { userid, token } = payload;
    return axios.post(`/user/follow/${userid}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  unfollowUser: (payload) => {
    const { userid, token } = payload;
    return axios.delete(`/user/follow/${userid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
  getUserCollections: async (payload) => {
    const { token } = payload;
    return await axios.get(`/user/collections`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getUserFriends: async (payload) => {
    const { token } = payload;
    return await axios.get(`/user/friends`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
