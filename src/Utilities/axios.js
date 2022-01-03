import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/shopit-3c338/us-central1/api",
});

export default instance;
