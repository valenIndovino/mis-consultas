<template>
  <div class="about">
    <AppHeader />
    <router-view />
    <h1>Turnos</h1>
    <table class="table table-hover table-dark">
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
          <th scope="row">1</th>
          <td>Laboratorio</td>
          <td>DD/MM/AAAA - HH:MM:SS</td>
          <td>6</td>
          <td>
            <router-link to="/info">Mas Info</router-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Kinesiologia</td>
          <td>DD/MM/AAAA - HH:MM:SS</td>
          <td>4</td>
          <td>
            <router-link to="/info">Mas Info</router-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Odontologia</td>
          <td>DD/MM/AAAA - HH:MM:SS</td>
          <td>2</td>
          <td>
            <router-link to="/info">Mas Info</router-link>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Laboratorio</td>
          <td>DD/MM/AAAA - HH:MM:SS</td>
          <td>1</td>
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

export default {
  components: {
    AppHeader,
  },
};
</script>
