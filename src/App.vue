<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "./store/store.js";

export default {
  data() {
    return {
      especialidades: [],
      estados: [],
    };
  },

  async created() {
    const respuesta = await fetch(
      "https://628c24e1a3fd714fd02d5a68.mockapi.io/Especialidades"
    );
    this.especialidades = await respuesta.json();
    const estados = await fetch(
      "https://628c24e1a3fd714fd02d5a68.mockapi.io/Estado"
    );
    this.estados = await estados.json();
    store.dispatch("addEspecialidades", this.especialidades);
    store.dispatch("addEstados", this.estados);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1350px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
