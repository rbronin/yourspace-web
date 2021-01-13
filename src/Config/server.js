const serverConfig = {
  dev_server: process.env.REACT_APP_DEV_SERVER,
  production_server: process.env.REACT_APP_PRODUCTION_SERVER,
};

const server_api =
  process.env.NODE_ENV === "production"
    ? serverConfig.production_server
    : serverConfig.dev_server;

/**
 * @string access-server-api
 */

const api = server_api;

/**
 *
 * @param {string} email - email for login
 * @param {string} password - password for login
 * @required email
 * @required password
 */

function LoginUser(user) {
  return fetch(`${api}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/**
 *
 * @param {object} user - Full-name, username, email & password for signup
 * @required user
 */

function SignUpUser(user) {
  return fetch(`${api}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/**
 *
 * @param {string} token - auth-token
 * @required token
 */
function isLoggedIn(token) {
  return fetch(`${api}/validate/token`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/**
 *
 * @param {FormData} formData - new post
 * @param {string} authToken - authorization token
 * @required formData
 * @required authToken
 */
function createPost(formData, authToken) {
  return fetch(`${api}/create/post`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/**
 * @param {string} token - auth-token
 * @returns {Array} Users - list of user objects
 */
function getUserList(token) {
  return fetch(`${api}/user/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 * @param {string} userid - valid user id
 * @param {string} token - auth-token
 * @returns {object} User - a user documents
 */

function getAUser(userid, token) {
  return fetch(`${api}/user/search?user_id=${userid}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 *
 * @param {string} token - auth-token
 * @required token
 */
function getUserFeed(token) {
  return fetch(`${api}/feed`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 * @param {string} postid - post id to get image
 * @required postid
 */
function getPostImage(postid) {
  return `${api}/post/photo?post_id=${postid}`;
}

/**
 *
 * @param {string} userid - user id for all posts
 * @param {string} token - auth-token
 * @required userid, token
 */
function getAllUserPost(userid, token) {
  //TODO: fixme ;
  return fetch(`${api}/post/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 *
 * @param {string} post_id - post id of current post
 * @param {string} token - auth token
 * @returns - true or post on add likes
 */

function addLikes(postid, token) {
  return fetch(`${api}/post/like?post_id=${postid}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 *
 * @param {string} post_id - post id
 * @param {string} token - auth otken
 * @param {string} comment - user comment
 */
function addComments(post_id, token, comment) {
  return fetch(`${api}/post/comment?post_id=${post_id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

//* exports all methods
export {
  api,
  LoginUser,
  SignUpUser,
  isLoggedIn,
  getAUser,
  getUserList,
  getAllUserPost,
  getUserFeed,
  getPostImage,
  createPost,
  addLikes,
  addComments,
};
