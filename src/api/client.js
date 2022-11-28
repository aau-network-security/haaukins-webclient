import axios from "axios";

const apiClient = axios.create({
  // Later read this URL from an environment variable
  headers: {
    Authorization: sessionStorage.getItem('token')
  },
  baseURL: "http://localhost:8080/v1/admin"
});

export default apiClient;