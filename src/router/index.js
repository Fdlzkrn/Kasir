import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Kasir from "../views/Kasir.vue";
import Produk from "../views/Produk.vue";
import Laporan from "../views/Laporan.vue";
import Member from "../views/Member.vue";
import Keuangan from "../views/Keuangan.vue";
import Supplier from "../views/Supplier.vue";
import Setting from "../views/Setting.vue";
import Lainnya from "../views/Lainnya.vue";
import TemplateNota from "../views/TemplateNota.vue";
import Pembayaran from "../views/Pembayaran.vue";
import CetakStruk from "../views/CetakStruk.vue"




const routes = [{ path: "/", name: "Home - Menu", component: Home },
  {path: "/kasir", name:"Home - Kasir", component: Kasir},
  {path: "/produk", name:"Home - Produk", component: Produk},
  {path: "/laporan", name:"Home - Laporan", component: Laporan},
  {path: "/member", name:"Home - Member", component: Member},
  {path: "/keuangan", name:"Home - Keuangan", component: Keuangan},
  {path: "/supplier", name:"Home - Supplier", component: Supplier},
  {path: "/setting", name:"Home - Setting", component: Setting}, 
  {path: "/lainnya", name:"Home - Lainnya", component: Lainnya},
  {path: "/templatenota", name:"Home - TemplateNota", component: TemplateNota},
  {path: "/pembayaran", name:"Home - Pembayaran", component: Pembayaran},
  {path:'/cetak-struk',name:'Cetak Struk',component:CetakStruk}
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