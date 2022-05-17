import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TurnosView.vue"),
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
