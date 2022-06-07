<template>
  <div class="mx-auto">
    <div class="card m-4" style="width: 18rem">
      <img
        class="card-img-top"
        :src="especialidad.imagen"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Turno {{ estado.nombre }}</h5>
        <p class="card-text">
          Especialidad: {{ especialidad.nombre }} <br />
          Fecha: {{ fecha }} <br />
          Paciente: {{ paciente == null ? "Sin paciente" : paciente }} <br />
        </p>
        <router-link
          v-if="logueado == 'administrador'"
          class="btn btn-primary"
          to="/info"
          >Ver turno</router-link
        >
        <a
          v-else-if="logueado == 'usuario'"
          class="btn btn-primary"
          v-on:click="solicitarTurno()"
          >Solicitar turno</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/store.js";
import axios from "axios";

export default {
  props: ["especialidad", "fecha", "paciente", "estado", "logueado", "id"],
  data() {
    return {
      turno: {
        especialidad: "",
        admin: "",
        user: "",
        estado: "",
        id: "",
        fecha: "",
      },
      idTurno: this.id,
    };
  },
  methods: {
    solicitarTurno() {
      const URL =
        "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/?id=" +
        this.idTurno;
      const idLogueado = store.getters.getUser.id;
      fetch(URL, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          (this.turno.especialidad = response[0].especialidad),
            (this.turno.admin = response[0].admin),
            (this.turno.user = idLogueado),
            (this.turno.estado = store.getters.getEstados[1].id),
            (this.turno.id = response[0].id),
            (this.turno.fecha = response[0].fecha);
          axios
            .put(
              "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/" +
                this.idTurno,
              this.turno
            )
            .then((data) => {
              console.log(data);
            });
        })
        .catch((err) => console.log(err.message));
      console.log("TURNO", this.turno);
    },
  },
};
</script>

<style></style>
