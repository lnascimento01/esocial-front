import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8009/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer 1|Yb30JjNhdoJL6eXTlUpc5zOX3wp4MfpYWFi22XYe"
  }
});