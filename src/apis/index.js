import Axios from "axios";

const baseURL = process.env.REACT_APP_API_DEV;
const axios = Axios.create({
    baseURL: baseURL
});



export const login = (payload) => {
    const { data } = payload;
    return axios.post("/login",data);
}
export const signup = (payload) => {
    const { data } = payload;
    return axios.post("/register",data);
}