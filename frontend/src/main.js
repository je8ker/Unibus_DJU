import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createWebHistory, createRouter } from "vue-router"; // Vue Router의 함수들을 가져옵니다
import LoginPage from "./components/LoginPage.vue";
import SignUp from "./components/SignUp.vue";
import MainPage from "./components/MainPage.vue";
import BusPage1 from "./components/BusPage1.vue";
import BusPage2 from "./components/BusPage2.vue";
import BusPage21 from "@/components/BusPage21.vue";
import BusPage22 from "@/components/BusPage22.vue";
import BusPage3 from "./components/BusPage3.vue";
import UserProfile from "./components/UserProfile.vue";
import InquiryPage from "./components/InquiryPage.vue";
import InquirylistPage from "@/components/InquirylistPage.vue";


loadFonts();

const app = createApp(App);
app.use(vuetify);

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.mount("#app");
