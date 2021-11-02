import { axios } from "./axios";

export const post = {
  create: async (payload) => {
    const { data } = payload;
    return await axios.post("/post", data);
  },
  getPosts: async (payload) => {
    return await axios.get("/posts");
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
    const { postid } = payload;
    return await axios.post(`/likes/${postid}`);
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
