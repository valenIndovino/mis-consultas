<template>
  <div class="home">
    <AppHeader v-bind:admin="true" />
    <router-view />
    <div class="principal vertical-centered-text" id="home">
      <div class="col-md-8 cta">
        <h1 style="font-weight: bold">
          BIENVENIDO, DR {{ lastName.toUpperCase() }}
        </h1>
        <h4>
          Este software esta diseñado para que puedas tener todas tus consultas
          al alcance de tu mano
        </h4>
        <p>
          Comienza ahora creando tus primeros turnos para que los pacientes
          puedan verlos
        </p>
        <a v-on:click="crearTurno()" class="btn btn-primary orange"
          >CREAR TURNO</a
        >
      </div>
    </div>
    <div>
      <h2 class="mt-4">Proximos turnos</h2>
    </div>
    <div class="row">
      <AppIndex
        v-for="turno in turnos"
        :key="turno.name"
        :especialidad="turno.especialidad"
        :fecha="turno.fecha"
        :paciente="turno.user"
        :estado="turno.estado"
        :logueado="'administrador'"
        :admin="turno.admin"
        :id="turno.id"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppIndex from "@/components/AppIndex.vue";
import AppHeader from "@/components/AppHeader.vue";
import store from "../store/store.js";

export default {
  name: "HomeView",
  data() {
    return {
      turnos: [],
      lastName: store.getters.getUser.apellido,
    };
  },
  components: {
    AppIndex,
    AppHeader,
  },
  mounted() {
    const id = store.getters.getUser.id;
    const url =
      "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/?admin=" + id;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const filtrado = data.filter(
          (item) => item.estado == store.getters.getEstados[1].id
        );
        this.turnos = filtrado;
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    async crearTurno() {
      this.$router.push("/newTurno").catch(() => {});
    },
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
  background: url("https://static.wixstatic.com/media/7869d1_f010cd7869fa47e88cd9d945642b1dd2~mv2.jpg/v1/fill/w_1000,h_583,al_c,q_90,usm_0.66_1.00_0.01/7869d1_f010cd7869fa47e88cd9d945642b1dd2~mv2.jpg")
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
