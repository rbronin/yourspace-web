const storeToken = (data) => {
  localStorage.setItem("auth-token", JSON.stringify(data));
};

const useToken = () => {
  return localStorage.getItem("auth-token") || "";
};

export { storeToken, useToken };
