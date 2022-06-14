import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";
import TurnosView from "../views/TurnosView.vue";
import LoginView from "../views/LoginView.vue";
import NewTurno from "../views/NewTurno.vue";
import UserView from "../views/UserView.vue";
import LoadingView from "../views/LoadingView.vue";
import DisponiblesView from "../views/DisponiblesView.vue";
import EstadisticasView from "../views/EstadisticasView.vue";
import store from "../store/store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    beforeEnter: checkAdminRights,
    component: HomeView,
  },
  {
    path: "/turnos",
    name: "turnos",
    beforeEnter: checkBoths,
    component: TurnosView,
  },
  {
    path: "/info/:turno",
    name: "info",
    beforeEnter: checkBoths,
    component: InfoView,
  },
  {
    path: "/",
    name: "init",
    beforeEnter: checkAdminRights,
    component: LoginView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/newTurno",
    name: "newTurno",
    beforeEnter: checkAdminRights,
    component: NewTurno,
  },
  {
    path: "/user",
    name: "user",
    beforeEnter: checkUserRights,
    component: UserView,
  },
  {
    path: "/disponibles",
    name: "disponibles",
    beforeEnter: checkUserRights,
    component: DisponiblesView,
  },
  {
    path: "/estadisticas",
    name: "estadisticas",
    beforeEnter: checkAdminRights,
    component: EstadisticasView,
  },
  {
    path: "/loading/:msg/:admin",
    name: "loading",
    beforeEnter: checkBoths,
    component: LoadingView,
  },
];

const router = new VueRouter({
  routes,
});

function checkAdminRights(to, from, next) {
  if (store.getters.getUser != null) {
    if (store.getters.getUser?.admin) {
      next();
    } else {
      next("/user");
    }
  } else {
    next("/login");
  }
}

function checkUserRights(to, from, next) {
  if (store.getters.getUser != null) {
    if (store.getters.getUser?.admin) {
      next("/home");
    } else {
      next();
    }
  } else {
    next("/login");
  }
}

function checkBoths(to, from, next) {
  if (store.getters.getUser != null) {
    next();
  } else {
    next("/login");
  }
}

export default router;
