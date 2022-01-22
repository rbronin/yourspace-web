/* eslint-disable react-hooks/rules-of-hooks */
import { axios } from "./axios";

export const post = {
  create: async (payload) => {
    const { data, token } = payload;
    return await axios.post("/post", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  feed: async () => {
    return await axios.get("/feed");
  },
  getPosts: async (payload) => {
    const { token } = payload;
    return await axios.get("/post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAPost: async (payload) => {
    const { postid } = payload;
    return await axios.get(`/post?id=${postid}`);
  },
  deletePost: async (payload) => {
    const { postid } = payload;
    return await axios.delete(`/post/${postid}`);
  },
  addLike: async (payload) => {
    const { postid, token } = payload;
    return await axios.post(`/post/like/${postid}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  addComment: async (payload) => {
    const { postid } = payload;
    return await axios.post(`/comments/${postid}`);
  },
  getLikes: async (payload) => {
    const { postid } = payload;
    return await axios.get(`/likes/${postid}`);
  },
  getComments: async (payload) => {
    const { postid } = payload;
    return await axios.get(`/comments/${postid}`);
  },
};
