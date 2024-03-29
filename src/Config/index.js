import React from "react";
import { useLocation } from "react-router-dom";
const storeToken = (data) => {
  localStorage.removeItem("auth-token");
  localStorage.setItem("auth-token", JSON.stringify(data));
};

const useToken = () => {
  return JSON.parse(localStorage.getItem("auth-token")) || "";
};

const deleteToken = () => {
  localStorage.removeItem("auth-token");
};

const formateDate = (time) => {
  const date = new Date(time);
  return `${date
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ")}, ${date.toLocaleTimeString()}`;
};

const getAvatarChars = (nameStr = "") => {
  return nameStr
    .split(" ")
    .map((item) => item.split("")[0])
    .join("")
    .slice(0, 2)
    .toLocaleUpperCase();
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export { storeToken, useToken, deleteToken, formateDate, getAvatarChars, useQuery };
