<template>
  <div class="home">
    <AppHeader />
    <router-view />
    <div class="principalUser vertical-centered-text" id="home">
      <div class="col-md-8 cta">
        <h1 style="font-weight: bold">HOLA, PACIENTE</h1>
        <h4>
          Este es tu lugar ideal para que puedas solicitar todos los turnos que
          quieras y tenerlos siempre cerca tuyo
        </h4>
        <p>
          Comienza ahora pidiendo una consulta con tu especialidad requerida
        </p>
        <router-link to="/disponibles" class="btn btn-primary orange"
          >VER TURNOS DISPONIBLES</router-link
        >
      </div>
    </div>
    <div>
      <h2 class="mt-4">Proximos turnos</h2>
    </div>
    <div class="row">
      <AppIndex
        v-for="turno in turnosSolicitados"
        :key="turno.name"
        :especialidad="turno.especialidad"
        :fecha="turno.fecha"
        :paciente="turno.user"
        :estado="turno.estado"
        :logueado="'administrador'"
      />
    </div>
  </div>
</template>

<script>
import store from "../store/store.js";
import AppIndex from "@/components/AppIndex.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    AppIndex,
    AppHeader,
  },
  data() {
    return {
      turnosSolicitados: [],
    };
  },
  mounted() {
    const id = store.getters.getUser.id;
    const url =
      "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/?user=" + id;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          if (item.estado.nombre === "Programado")
            this.turnosSolicitados.push(item);
        });
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
html {
  align-items: center;
  width: 100%;
}

.principalUser {
  background: red;
  height: 90vh;
  background: url("https://images.theconversation.com/files/449762/original/file-20220303-23-1emvw23.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop")
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
