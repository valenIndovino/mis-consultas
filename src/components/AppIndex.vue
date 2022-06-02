<template>
  <div class="mx-auto">
    <div class="card m-4" style="width: 18rem">
      <img
        v-if="especialidad == 'Laboratorio'"
        class="card-img-top"
        src="https://img.freepik.com/foto-gratis/hombre-analisis-sangre-laboratorio-analizando-muestra-sangre-medico-cientifico-o-investigador-laboratorio_378307-1418.jpg"
        alt="Card image cap"
      />
      <img
        v-else-if="especialidad == 'Clinico'"
        class="card-img-top"
        src="https://st2.depositphotos.com/1017986/7472/i/600/depositphotos_74720971-stock-photo-scientists-with-clipboard-and-microscope.jpg"
        alt="Card image cap"
      />
      <img
        v-else-if="especialidad == 'Cardiologia'"
        class="card-img-top"
        src="https://st.depositphotos.com/1000423/3080/i/600/depositphotos_30809335-stock-photo-doctor-with-tablet-pc.jpg"
        alt="Card image cap"
      />
      <img
        v-else
        class="card-img-top"
        src="https://www.integramedica.cl/integramedica/site/artic/20210624/imag/foto_0000000620210624162640.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 v-if="estado == 'Disponible'" class="card-title">
          Turno Disponible
        </h5>
        <h5 v-else-if="estado == 'Programado'" class="card-title">
          Proximo Turno
        </h5>
        <h5 v-else-if="estado == 'Finalizado'" class="card-title">
          Turno Finalizado
        </h5>
        <h5 v-else class="card-title">Turno Cancelado</h5>
        <p class="card-text">
          Especialidad: {{ especialidad }} <br />
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
export default {
  props: ["especialidad", "fecha", "paciente", "estado", "logueado"],
  methods: {
    solicitarTurno() {},
  },
};
</script>

<style></style>
