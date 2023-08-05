import { createRouter, createWebHistory } from "vue-router";
import PhatTu from "../components/PhatTu.vue";
import ChuaCom from "../components/ChuaCom.vue";
import DonDKy from "../components/DonDKy.vue";
import DaoTrang from "../components/DaoTrang.vue";
import NavBar from "../components/NavBar.vue";
import TrangTin from "../components/TrangTin.vue";
import DangNhap from "../components/DangNhap.vue";
import RegisterPt from "../components/RegisterPt.vue";
import QuenMk from "../components/QuenMk.vue";
const routes = [
  {
    path: "/",
    name: "Navbar",
    component: NavBar,
    children: [
      {
        path: "/phat-tu",
        name: "phattu",
        component: PhatTu,
      },
      {
        path: "/chua",
        name: "chua",
        component: ChuaCom,
      },
      {
        path: "/dao-trang",
        name: "dao trang",
        component: DaoTrang,
      },
      {
        path: "/don-dang-ky",
        name: "don dang ky",
        component: DonDKy,
      },
      {
        path: "/TrangTin",
        name: "Trang tin",
        component: TrangTin,
      },
    ],
  },
  {
    path: "/login",
    name: "dangnhap",
    component: DangNhap,
  },
  {
    path: "/register",
    name: "dangky",
    component: RegisterPt,
  },
  {
    path: "/quenmk",
    name: "Quen mat khau",
    component: QuenMk,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
