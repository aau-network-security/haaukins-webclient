import axios from "axios";

export const BASE_URL = "http://localhost:8080/v1/admin/"

const apiClient = axios.create({
  // Later read this URL from an environment variable
  baseURL: "http://localhost:8080/v1/admin"
});

export default apiClient;