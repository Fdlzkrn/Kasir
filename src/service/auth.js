import axios from "axios";
const currentDomain = import.meta.env.VITE_APP_AUTH_SERVER;
const baseURL = `${currentDomain}/api`;
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await api.post("/refresh-token");
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default {
  LoginUser(data) {
    return api.post("/user/_login", data);
  },
  LogoutUser() {
    return api.delete("/user/_logout");
  },
  GetUserAuthAdmin() {
    return api.get("/user/user-auth-admin");
  },
};
