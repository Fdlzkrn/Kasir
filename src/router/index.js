import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/auth/Login.vue")
const AdminDashboard = () => import("@/views/admin/adminDashboard.vue")
const routes = [{ path: "/", name: "Home - RSPAD", component: Home },
  { path: "/Login", name: "Login - RSPAD", component: Login },
    { path: "/admin-dasboard", name: "Admin - RSPAD", component: AdminDashboard }
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