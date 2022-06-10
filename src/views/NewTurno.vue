<template>
  <div>
    <AppHeader />
    <form
      style="width: 500px; text-align: center; height: 500px"
      class="border border-primary rounded m-4 mx-auto"
    >
      <h3 class="mt-4" style="font-weight: bold">Crea un nuevo turno</h3>
      <div>
        <div class="form-group m-5">
          <label>Fecha y Hora</label>
          <input
            type="datetime-local"
            class="form-control w-60 p-3 mx-auto"
            v-model="fecha"
          />
        </div>
        <div class="form-group m-5">
          <label>Especialidad</label>
          <select
            class="form-control w-60 mx-auto"
            v-model="especialidadSeleccionada"
          >
            <option disabled selected>Selecciona una opción</option>
            <option
              v-for="especialidad in especialidades"
              :key="especialidad.id"
            >
              {{ especialidad.nombre }}
            </option>
          </select>
        </div>
        <div class="flex items-baseline justify-between">
          <button type="button" v-on:click="newTurno()" class="btn btn-primary">
            Crear turno
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import axios from "axios";
import store from "../store/store.js";
export default {
  name: "newProd",

  data() {
    return {
      especialidadSeleccionada: "",
      fecha: "",
      especialidades: store.getters.getEspecialidades,
      estados: store.getters.getEstados,
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    newTurno() {
      const especialidadId = this.especialidades.find(
        (item) => item.nombre === this.especialidadSeleccionada
      ).id;
      const estadoId = this.estados.find(
        (item) => item.nombre === "Disponible"
      ).id;
      console.log("ESPECIALIDAD..", especialidadId);
      console.log("ESTADO..", estadoId);
      const URL_USER = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos";
      const json = {
        especialidad: especialidadId,
        fecha: this.fecha.replace("T", " || "),
        admin: store.getters.getUser.id,
        user: null,
        estado: estadoId,
      };

      axios
        .post(URL_USER, json)
        .then((data) => {
          console.log(data);
          this.$router.push(`/loading/${"Turno creado con exito"}/${true}`);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
