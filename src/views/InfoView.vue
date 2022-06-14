<template>
  <div class="mx-auto">
    <AppHeader v-if="admin" v-bind:admin="true" />
    <AppHeader v-else />
    <section>
      <h1>Informacion del Turno</h1>
      <p>
        Especialidad: {{ getName() }} <br />
        Fecha: {{ turno.fecha }} <br />
        Estado: {{ getEstado() }}
      </p>
    </section>
    <section v-if="admin">
      <h1>Informacion del Paciente</h1>
      <p v-if="this.paciente != null">
        Nombre: {{ paciente.nombre }} <br />
        Apellido: {{ paciente.apellido }} <br />
        Email: {{ paciente.email }} <br />
        Obra Social: OSDE 2.1 <br />
      </p>
      <p v-else>Este turno sigue sin ser solicitado</p>
    </section>
    <section v-else>
      <h1>Informacion del Medico</h1>
      <p v-if="this.paciente != null">
        Nombre: {{ medico.nombre }} <br />
        Apellido: {{ medico.apellido }} <br />
        Email: {{ medico.email }} <br />
        Domicilio: Av. Los robles 5422 <br />
        Trabaja con OSDE, SWISS MEDICAL, GALENO Y OMINT <br />
      </p>
      <p v-else>Este turno sigue sin ser solicitado</p>
    </section>
    <section>
      <h1>Conclusion del Turno</h1>
      <div v-if="admin" class="mb-3">
        <label for="formFileMultiple" class="form-label"
          >Ingrese los documentos que quiere mandarle al paciente</label
        >
        <input
          class="form-control mx-auto"
          type="file"
          id="formFileMultiple"
          multiple
          style="width: 600px"
        />
      </div>
      <div v-else>
        <label class="form-label">
          Aqui se vera la informacion adjuntada por el profesional
        </label>
      </div>
    </section>
    <section>
      <button
        v-if="admin"
        type="button"
        class="btn btn-danger m-3"
        v-on:click="eliminarTurno()"
      >
        Eliminar turno
      </button>
      <button
        v-else
        type="button"
        class="btn btn-danger m-3"
        v-on:click="cancelarTurno()"
      >
        Cancelar turno
      </button>
    </section>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import store from "../store/store.js";
import axios from "axios";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      turno: {},
      paciente: {},
      medico: {},
      admin: null,
    };
  },
  methods: {
    getName() {
      const especialidad = store.getters.getEspecialidades.find(
        (item) => item.id === this.turno.especialidad
      );
      return especialidad.nombre;
    },
    getEstado() {
      const estado = store.getters.getEstados.find(
        (item) => item.id === this.turno.estado
      );
      return estado.nombre;
    },
    eliminarTurno() {
      const URL =
        "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/?id=" +
        this.turno.id;

      fetch(URL, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          (this.turno.especialidad = response[0].especialidad),
            (this.turno.admin = response[0].admin),
            (this.turno.user = null),
            (this.turno.estado = store.getters.getEstados[0].id),
            (this.turno.id = response[0].id),
            (this.turno.fecha = response[0].fecha);
          axios
            .delete(
              "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/" +
                this.turno.id,
              { headers: this.turno }
            )
            .then((data) => {
              console.log(data);
              this.$router
                .push(`/loading/${"Turno eliminado con exito"}/${true}`)
                .catch(() => {});
            });
        });
    },
    cancelarTurno() {
      const URL =
        "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/?id=" +
        this.turno.id;

      fetch(URL, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          (this.turno.especialidad = response[0].especialidad),
            (this.turno.admin = response[0].admin),
            (this.turno.user = null),
            (this.turno.estado = store.getters.getEstados[0].id),
            (this.turno.id = response[0].id),
            (this.turno.fecha = response[0].fecha);
          axios
            .put(
              "https://628c24e1a3fd714fd02d5a68.mockapi.io/Turnos/" +
                this.turno.id,
              this.turno
            )
            .then((data) => {
              console.log(data);
              this.$router
                .push(`/loading/${"Turno cancelado con exito"}/${false}`)
                .catch(() => {});
            });
        });
    },
  },
  created() {
    this.turno = store.getters.getTurnos.find(
      (item) => item.id === this.$route.params.turno
    );
    this.paciente = store.getters.getUsuarios.find(
      (item) => item.id === this.turno.user
    );
    this.medico = store.getters.getUsuarios.find(
      (item) => item.id === this.turno.admin
    );
    this.admin = store.getters.getUser.admin;
  },
};
</script>
