import axios from "axios";

axios.defaults.baseURL = "https://dragon-bhdm.onrender.com/api/users";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
