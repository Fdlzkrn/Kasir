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
  CreateDataLaporan(data) {
    return api.post("/data-laporan", data);
  },
  ImportCreateDataLaporan(data) {
    return api.post("/data-laporan/import", data,{ headers: { "Content-Type": "multipart/form-data" }});
  },
  UpdateDataLaporan(id, data) {
    return api.put(`/data-laporan/${id}`, data);
  },
  DeleteDataLaporan(id) {
    return api.delete(`/data-laporan/${id}`);
  },
  GetAllDataLaporan() {
    return api.get("/data-laporan");
  },
  GetDataLaporanbyId(id) {
    return api.get(`/data-laporan/${id}`);
  },
};
