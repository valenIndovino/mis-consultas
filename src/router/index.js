import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";
import TurnosView from "../views/TurnosView.vue";
import LoginView from "../views/LoginView.vue";
//import store from "../store/store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/turnos",
    name: "turnos",
    //beforeEnter: checkAdminRights,
    component: TurnosView,
  },
  {
    path: "/info",
    name: "info",
    //beforeEnter: checkAdminRights,
    component: InfoView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  /*mode: 'history',
  base: process.env.BASE_URL,*/
  routes,
});

/*function checkAdminRights(to, from, next) {
  console.log(store.getters.getUser, "user");
  if (store.getters.getUser != null) {
    if (!store.getters.getUser?.admin) {
      next("/");
    } else {
      next("/");
    }
    next("/");
  } else {
    next();
  }
}*/

export default router;
