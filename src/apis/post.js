import { axios } from "./axios";

export const post = {
  create: (payload) => {
    const { data } = payload;
    return axios.post("/post", data);
  },
  getPosts: (payload) => {
    return axios.get("/posts");
  },
  getAPost: (payload) => {
    const { postid } = payload;
    return axios.get(`/post?id=${postid}`);
  },
  deletePost: (payload) => {
    const { postid } = payload;
    return axios.delete(`/post/${postid}`);
  },
  addLike: (payload) => {
    const { postid } = payload;
    return axios.post(`/likes/${postid}`);
  },
  addComment: (payload) => {
    const { postid } = payload;
    return axios.post(`/comments/${postid}`);
  },
  getLikes: (payload) => {
    const { postid } = payload;
    return axios.get(`/likes/${postid}`);
  },
  getComments: (payload) => {
    const { postid } = payload;
    return axios.get(`/comments/${postid}`);
  },
};
