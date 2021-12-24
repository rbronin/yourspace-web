const storeToken = (data) => {
  localStorage.setItem("auth-token", JSON.stringify(data));
};

const useToken = () => {
  return JSON.parse(localStorage.getItem("auth-token")) || "";
};

const deleteToken = () => {
  localStorage.removeItem("auth-token");
};

export { storeToken, useToken, deleteToken };
