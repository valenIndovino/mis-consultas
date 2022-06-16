<template>
  <div class="about">
    <AppHeader :admin="admin" />
    <router-view />
    <h1 class="mt-2">Turnos</h1>
    <label>Filtrar por:</label>
    <select
      class="form-select m-2"
      id="select"
      v-on:change="filtrar()"
      v-model="specialty"
    >
      <option>Sin filtro</option>
      <option v-for="especialidad in especialidades" :key="especialidad.id">
        {{ especialidad.nombre }}
      </option>
    </select>
    <select
      class="form-select m-2"
      id="select"
      v-on:change="filtrar()"
      v-model="state"
    >
      <option>Sin filtro</option>
      <option v-for="estado in estados" :key="estado.id">
        {{ estado.nombre }}
      </option>
    </select>
    <table class="table table-hover table-primary">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Fecha y Hora</th>
          <th scope="col">Estado</th>
          <th scope="col">Id Paciente</th>
          <th scope="col">Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="turno in turnos" :key="turno.id">
          <th scope="row">{{ turno.id }}</th>
          <td>{{ getEspecialidadById(turno.especialidad) }}</td>
          <td>{{ turno.fecha }}</td>
          <td>{{ getEstadoById(turno.estado) }}</td>
          <td v-if="turno.user == null">Sin solicitar</td>
          <td v-else>{{ turno.user }}</td>
          <td>
            <router-link :to="{ name: 'info', params: { turno: turno.id } }"
              >Mas Info</router-link
            >
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
      admin: store.getters.getUser.admin,
      especialidades: store.getters.getEspecialidades,
      estados: store.getters.getEstados,
      specialty: null,
      state: null,
    };
  },
  components: {
    AppHeader,
  },
  mounted() {
    const id = store.getters.getUser.id;
    const user = store.getters.getUsuarios.find((item) => item.id === id);
    let url = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/?admin=" + id;
    if (!user.admin) {
      url = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/?user=" + id;
    }

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
  methods: {
    getEspecialidadById(id) {
      return store.getters.getEspecialidadById(id);
    },
    getEstadoById(id) {
      return store.getters.getEstadoById(id);
    },
    filtrar() {
      let idEstado = this.estados.find((item) => item.nombre == this.state);
      let idEspecialidad = this.especialidades.find(
        (item) => item.nombre == this.specialty
      );
      console.log("ESTADO", idEstado);
      console.log("ESPECIALIADD", idEspecialidad);
      let url = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos";
      if (idEstado != undefined) {
        url = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos";
        url = url + "/?estado=" + idEstado.id;
      }
      if (idEspecialidad != undefined) {
        url = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos";
        url = url + "/?especialidad=" + idEspecialidad.id;
      }
      if (idEstado != undefined && idEspecialidad != undefined) {
        url = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos";
        url =
          url +
          "/?especialidad=" +
          idEspecialidad.id +
          "/?estado=" +
          idEstado.id;
      }
      this.turnos = [];
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
  },
};
</script>
