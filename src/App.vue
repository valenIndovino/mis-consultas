<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      url: "https://628c24e1a3fd714fd02d5a68.mockapi.io/Usuarios",
    };
  },

  async created() {
    const respuesta = await fetch(this.url);
    this.usuarios = await respuesta.json();
    console.log(this.usuarios);
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
