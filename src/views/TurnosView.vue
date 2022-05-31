<template>
  <div class="about">
    <AppHeader />
    <router-view />
    <h1>Turnos</h1>
    <table
      class="table table-hover table-dark"
      v-for="turno in turnos"
      :key="turno"
    >
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Fecha y Hora</th>
          <th scope="col">Id Paciente</th>
          <th scope="col">Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ turno.id }}</th>
          <td>{{ turno.especialidad }}</td>
          <td>{{ turno.fecha }}</td>
          <td v-if="turno.user == null">Sin solicitar</td>
          <td v-else>{{ turno.user }}</td>
          <td>
            <router-link to="/info">Mas Info</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import store from "../store/store.js";

export default {
  data() {
    return {
      turnos: [],
    };
  },
  components: {
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
        data.map((item) => {
          this.turnos.push(item);
        });
      })
      .catch((err) => console.log(err.message));
  },
};
</script>
