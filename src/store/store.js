import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    especialidades: [],
    user: null,
    estados: [],
    turnos: [],
    usuarios: [],
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
    addTurnos: (state, turnos) => {
      console.log("turnos agregados");
      state.turnos = turnos;
    },
    addUsuarios: (state, usuarios) => {
      console.log("usuarios agregados");
      state.usuarios = usuarios;
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
    addUsuarios: ({ commit }, usuarios) => {
      commit("addUsuarios", usuarios);
    },
    addTurnos: ({ commit }, turnos) => {
      commit("addTurnos", turnos);
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
    getTurnos: (state) => {
      return state.turnos;
    },
    getUsuarios: (state) => {
      return state.usuarios;
    },
    getEstadoById: (state) => (id) => {
      const estado = state.estados.find((item) => item.id === id);
      console.log("ESTADO", estado);
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
