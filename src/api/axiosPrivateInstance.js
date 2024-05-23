import axios from "axios";

const axiosPrivateInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosPrivateInstance.defaults.headers.common["Content-Type"] =
  "application/json";
axiosPrivateInstance.defaults.headers.common["ngrok-skip-browser-warning"] =
  "true";

export default axiosPrivateInstance;
