<template>
  <div class="home">
    <AppHeader />
    <router-view />
    <div class="principal vertical-centered-text" id="home">
      <div class="col-md-8 cta">
        <h1 style="font-weight: bold; color: white">HOLA, PACIENTE</h1>
        <h4 style="color: white">
          Este es tu lugar ideal para que puedas solicitar todos los turnos que
          quieras y tenerlos siempre cerca tuyo
        </h4>
        <p style="color: white">
          Comienza ahora pidiendo una consulta con tu especialidad requerida
        </p>
        <router-link to="/disponibles" class="btn btn-primary orange"
          >VER TURNOS DISPONIBLES</router-link
        >
      </div>
    </div>
    <div class="row">
      <AppIndex />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppIndex from "@/components/AppIndex.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    AppIndex,
    AppHeader,
  },
};
</script>

<style>
html {
  align-items: center;
  width: 100%;
}

.principal {
  background: red;
  height: 90vh;
  background: url("https://img.freepik.com/foto-gratis/doctora-paciente-feliz-hospital_44680-113.jpg?w=2000")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.vertical-centered-text {
  -ms-display: flex;
  display: flex;
  /* alineacion vertical */
  align-items: center;
  /* alineacion horizontal */
  justify-content: center;
}
</style>
