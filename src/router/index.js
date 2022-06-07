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
import LoadingUserView from "../views/LoadingUserView.vue";
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
    path: "/info",
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
    name: "dispoibles",
    beforeEnter: checkUserRights,
    component: DisponiblesView,
  },
  {
    path: "/loading",
    name: "loading",
    beforeEnter: checkAdminRights,
    component: LoadingView,
  },
  {
    path: "/loadingUser",
    name: "loadingUser",
    beforeEnter: checkUserRights,
    component: LoadingUserView,
  },
];

const router = new VueRouter({
  routes,
});

function checkAdminRights(to, from, next) {
  console.log(store.getters.getUser, "user");
  if (store.getters.getUser != null) {
    if (store.getters.getUser?.admin) {
      console.log("Es ADMIN");
      next();
    } else {
      console.log("Es USER");
      next("/user");
    }
  } else {
    next("/login");
    console.log("NO ESTA LOGUEADO");
  }
}

function checkUserRights(to, from, next) {
  console.log(store.getters.getUser, "user");
  if (store.getters.getUser != null) {
    if (store.getters.getUser?.admin) {
      console.log("Es USER");
      next("/home");
    } else {
      console.log("Es USER");
      next();
    }
  } else {
    next("/login");
    console.log("NO ESTA LOGUEADO");
  }
}

function checkBoths(to, from, next) {
  console.log(store.getters.getUser, "user");
  if (store.getters.getUser != null) {
    if (store.getters.getUser?.admin) {
      console.log("Es USER");
      next();
    } else {
      console.log("Es USER");
      next();
    }
  } else {
    next("/login");
    console.log("NO ESTA LOGUEADO");
  }
}

export default router;
