import axios from "axios";
export const API_URL = `https://ferris.ob1lab.xyz/api`;

const $api = axios.create({
  baseURL: API_URL,
});
$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    console.log(error);
    throw error;
  }
);
export default $api;
