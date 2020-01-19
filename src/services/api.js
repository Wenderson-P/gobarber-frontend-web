import axios from "axios";

const api = axios.create({
  baseURL: "http://198.199.85.198"
});

export default api;
