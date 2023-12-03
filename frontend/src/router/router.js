import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import SignUp from "@/components/SignUp.vue";
import UserProfile from "@/components/UserProfile.vue";
import MainPage from "@/components/MainPage.vue";
import BusPage1 from "@/components/BusPage1.vue";
import BusPage2 from "@/components/BusPage2.vue";
import BusPage21 from "@/components/BusPage21.vue";
import BusPage22 from "@/components/BusPage22.vue";
import BusPage3 from "@/components/BusPage3.vue";
import InquiryPage from "@/components/InquiryPage.vue";
import InquirylistPage from "@/components/InquirylistPage.vue";
import BusRoute1 from "@/components/BusRoute/BusRoute1.vue";
import BusRoute2 from "@/components/BusRoute/BusRoute2.vue";
import BusRoute3 from "@/components/BusRoute/BusRoute3.vue";
import BusRoute4 from "@/components/BusRoute/BusRoute4.vue";
import BusRoute5 from "@/components/BusRoute/BusRoute5.vue";
import BusRoute6 from "@/components/BusRoute/BusRoute6.vue";
import BusRoute7 from "@/components/BusRoute/BusRoute7.vue";
import BusRoute8 from "@/components/BusRoute/BusRoute8.vue";
import BusRoute9 from "@/components/BusRoute/BusRoute9.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/bus",
    component: BusPage1,
  },
  {
    path: "/businfo",
    component: BusPage2,
  },
  {
    path: "/businfo1",
    component: BusPage21,
  },
  {
    path: "/businfo2",
    component: BusPage22,
  },
  {
    path: "/businfoma",
    component: BusPage3,
  },
  {
    path: "/userprofile",
    component: UserProfile,
  },
  {
    path: "/inquiries",
    component: InquiryPage,
  },
  {
    path: "/inquirieslist",
    component: InquirylistPage,
  },
  {
    path: "/busroute1",
    component: BusRoute1,
  },
  {
    path: "/busroute2",
    component: BusRoute2,
  },
  {
    path: "/busroute3",
    component: BusRoute3,
  },
  {
    path: "/busroute4",
    component: BusRoute4,
  },
  {
    path: "/busroute5",
    component: BusRoute5,
  },
  {
    path: "/busroute6",
    component: BusRoute6,
  },
  {
    path: "/busroute7",
    component: BusRoute7,
  },
  {
    path: "/busroute8",
    component: BusRoute8,
  },
  {
    path: "/busroute9",
    component: BusRoute9,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
