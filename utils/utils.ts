import axios from "axios";

let baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";
export const http = axios.create({
  baseURL,
});
