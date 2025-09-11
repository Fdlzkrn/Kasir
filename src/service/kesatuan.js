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
  CreateKesatuan(data) {
    return api.post("/data-kesatuan", data);
  },
  ImportCreateKesatuan(data) {
    return api.post("/data-kesatuan/import", data);
  },
  UpdateKesatuan(id, data) {
    return api.put(`/data-kesatuan/${id}`, data);
  },
  DeleteKesatuan(id) {
    return api.delete(`/data-kesatuan/${id}`);
  },
  GetAllKesatuan() {
    return api.get("/data-kesatuan");
  },
  GetKesatuanbyId(id) {
    return api.get(`/data-kesatuan/${id}`);
  },
};
