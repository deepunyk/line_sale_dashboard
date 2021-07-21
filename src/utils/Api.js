import axios from "axios";

const apiUrl = "https://royalinfo.in/api/drm/";

const token = "YWQ5ZDA3MmM5YmVmM2NlMjA2ZWUxYjc5ZDE1NWYxZmEjIzEwMDAwMDAwMDE=";

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Token: "NjVjMzFkZmU4ZGY3ZWIyN2IyMDAxNzkwMGYzMjU5NjQjIzEwMDAwMDAwMDE=",
  },
});

// localStorage.get("token")
