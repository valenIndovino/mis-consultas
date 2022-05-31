<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <router-link class="navbar-brand" to="/home">MisConsultas</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/turnos">Mis turnos</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="logOut()">Cerrar Sesion</a>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-dark"
              v-on:click="crearTurno()"
            >
              Crear turno
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import store from "../store/store.js";

export default {
  name: "AppHeader",
  methods: {
    async crearTurno() {
      this.$router.push("/newTurno");
    },
    logOut() {
      store.dispatch("deleteUser");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
