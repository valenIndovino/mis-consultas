import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    especialidades: [],
    user: null,
    estados: [],
  },
  mutations: {
    addEspecialidades: (state, especialidades) => {
      console.log("agregadas");
      state.especialidades = especialidades;
    },
    addEstados: (state, estados) => {
      console.log("estados agregados");
      state.estados = estados;
    },
    addUser: (state, user) => {
      console.log("llego al store");
      state.user = user;
      console.log(state.user, "user state");
    },
    deleteUser: (state) => {
      console.log("logout");
      state.user = null;
      console.log(state.user);
    },
  },
  actions: {
    addUser: ({ commit }, user) => {
      commit("addUser", user);
    },
    addEspecialidades: ({ commit }, especialidades) => {
      commit("addEspecialidades", especialidades);
    },
    addEstados: ({ commit }, estados) => {
      commit("addEstados", estados);
    },
    deleteUser: ({ commit }) => {
      commit("deleteUser");
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getEspecialidades: (state) => {
      return state.especialidades;
    },
    getEstados: (state) => {
      return state.estados;
    },
    getEstadoById: (state) => (id) => {
      const estado = state.estados.find((item) => item.id === id);
      return estado.nombre;
    },
    getEspecialidadById: (state) => (id) => {
      console.log("id", id);
      const especialidad = state.especialidades.find((item) => item.id === id);
      console.log("ESPECIALIDAD", especialidad);
      return especialidad.nombre;
    },
  },
});
