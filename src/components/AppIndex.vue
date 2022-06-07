<template>
  <div class="mx-auto">
    <div class="card m-4" style="width: 18rem">
      <img class="card-img-top" :src="getImage()" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">Turno {{ getEstado() }}</h5>
        <p class="card-text m-0">
          Especialidad: {{ getName() }} <br />
          Fecha: {{ fecha }} <br />
        </p>
        <p v-if="logueado == 'administrador'" class="mb-4">
          Paciente:
          {{ paciente == null ? "Sin paciente" : getNombre(paciente) }}
          <br />
        </p>
        <p
          v-else-if="logueado == 'usuario' || logueado == 'especial'"
          class="mb-4"
        >
          Medico: {{ getNombre(admin) }} <br />
        </p>
        <router-link
          v-if="logueado == 'administrador' || logueado == 'especial'"
          class="btn btn-primary"
          to="/info"
          >Ver turno</router-link
        >
        <a v-else class="btn btn-primary" v-on:click="solicitarTurno()"
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
  props: [
    "especialidad",
    "fecha",
    "paciente",
    "estado",
    "logueado",
    "id",
    "admin",
  ],
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
      imagen: this.especialidad,
      estadoId: this.estado,
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
              this.$router.push("/loadingUser");
            });
        })
        .catch((err) => console.log(err.message));
      console.log("TURNO", this.turno);
    },
    getImage() {
      const imagen = store.getters.getEspecialidades.find(
        (item) => item.id === this.imagen
      );
      return imagen.imagen;
    },
    getName() {
      const especialidad = store.getters.getEspecialidades.find(
        (item) => item.id === this.imagen
      );
      return especialidad.nombre;
    },
    getEstado() {
      const estado = store.getters.getEstados.find(
        (item) => item.id === this.estadoId
      );
      return estado.nombre;
    },
    getNombre(id) {
      console.log("STORERRR", store.getters.getUsuarios);
      const paciente = store.getters.getUsuarios.find((item) => item.id === id);
      console.log(paciente);
      const nombreCompleto = paciente.nombre + " " + paciente.apellido;
      return nombreCompleto;
    },
  },
};
</script>

<style></style>
