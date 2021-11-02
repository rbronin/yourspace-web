import { axios } from "./axios";

export const user = {
  getUser: (payload) => {
    const { userid } = payload;
    return axios.get(`/user/${userid}`);
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
    const { token } = payload;
    return axios.get(`/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getProfileById: (payload) => {
    const { userid } = payload;
    return axios.get(`/user/profile/${userid}`);
  },
  feed: (payload) => {
    const { token } = payload;
    return axios.get(`/feed`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
