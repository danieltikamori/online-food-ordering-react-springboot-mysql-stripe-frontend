import axios from "axios";

export const API_URL = "http://localhost:5454"; // Modify

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
// api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;


