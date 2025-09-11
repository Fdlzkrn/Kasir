import { createRouter, createWebHistory } from "vue-router";
const AdminLaporanIgd = () => import ("@/views/admin/adminLaporanIgd.vue");
const adminLaporanBulanan = () => import ("@/views/admin/adminLaporanBulanan.vue");
const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/auth/Login.vue");
const adminDashboard = () => import("@/views/admin/adminDashboard.vue");
const adminFilterData = () => import("@/views/admin/adminFilteringData.vue");
const adminLaporanOperasi = () => import("@/views/admin/adminLaporanOperasi.vue");
const adminLaporanRawatJalan = () => import("@/views/admin/adminLaporanRawatJalan.vue");
const adminLaporanRawatInap = () => import("@/views/admin/adminLaporanRawatInap.vue");

const routes = [{ path: "/", name: "Home - RSPAD", component: Home },
  { path: "/Login/", name: "Login - RSPAD", component: Login },
    { path: "/optimasi-awal/", name: "Admin - Optimasi Awal", component: adminDashboard },
    { path: "/filtering-data/", name: "Admin - Filter Data", component: adminFilterData },
    { path: "/laporan-bulanan/", name: "Admin - Laporan Bulanan", component: adminLaporanBulanan },
    { path: "/laporan-operasi/", name: "Admin - Laporan Operasi", component: adminLaporanOperasi },
    { path: "/laporan-rawat-jalan/", name: "Admin - Laporan Rawat Jalan", component: adminLaporanRawatJalan },
    { path: "/laporan-rawat-inap/", name: "Admin - Laporan Rawat Inap", component: adminLaporanRawatInap },
    { path: "/laporan-igd/", name: "Admin - Laporan Igd", component: AdminLaporanIgd },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return { top: 0 };
  },
});
router.beforeEach(async (to, from, next) => {
  next();
});

export default router