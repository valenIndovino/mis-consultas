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
      state.especialidades = especialidades;
    },
    addEstados: (state, estados) => {
      state.estados = estados;
    },
    addTurnos: (state, turnos) => {
      state.turnos = turnos;
    },
    addUsuarios: (state, usuarios) => {
      state.usuarios = usuarios;
    },
    addUser: (state, user) => {
      state.user = user;
    },
    deleteUser: (state) => {
      state.user = null;
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
      return estado.nombre;
    },
    getEspecialidadById: (state) => (id) => {
      const especialidad = state.especialidades.find((item) => item.id === id);
      return especialidad.nombre;
    },
  },
});
