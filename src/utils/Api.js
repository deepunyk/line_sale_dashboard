import axios from "axios";

const apiUrl = "https://royalinfo.in/api/drm/";

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
