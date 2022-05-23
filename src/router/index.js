import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";
import TurnosView from "../views/TurnosView.vue";

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
    component: TurnosView,
  },
  {
    path: "/info",
    name: "info",
    component: InfoView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
