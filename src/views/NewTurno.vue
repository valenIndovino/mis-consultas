<template>
  <div>
    <AppHeader />
    <form>
      <h3>Crea un nuevo turno</h3>
      <div class="form-group">
        <label for="exampleFormControlInput1">Fecha y Hora</label>
        <input
          type="datetime-local"
          class="form-control w-120"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          style="width: 400px, text-align: center"
          v-model="fecha"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Especialidad</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="especialidad"
        >
          <option>Laboratorio</option>
          <option>Clinico</option>
          <option>Kinesiologia</option>
          <option>Cardiologia</option>
        </select>
      </div>
      <div class="flex items-baseline justify-between">
        <button type="button" v-on:click="newProd()" class="btn btn-primary">
          Crear turno
        </button>
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
    newProd() {
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
          this.$router.push("/home");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
