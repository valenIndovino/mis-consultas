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
          <select class="form-control w-60 mx-auto" v-model="especialidad">
            <option disabled selected>Selecciona una opción</option>
            <option>Laboratorio</option>
            <option>Clinico</option>
            <option>Kinesiologia</option>
            <option>Cardiologia</option>
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
      especialidad: "",
      fecha: "",
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    newTurno() {
      const URL_USER = "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos";
      const json = {
        especialidad: this.especialidad,
        fecha: this.fecha,
        admin: store.getters.getUser.id,
        user: null,
      };

      axios
        .post(URL_USER, json)
        .then((data) => {
          console.log(data);
          this.$router.push("/loading");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
