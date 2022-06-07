<template>
  <div class="mx-auto">
    <AppHeader />
    <router-view />
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
        Trabaja con OSDE, SWISS MEDICAL Y GALENO <br />
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
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import store from "../store/store.js";

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
