<template>
  <div>
    <AppHeader v-bind:admin="true" />
    <div class="m-4"><h1>Estadisticas Generales</h1></div>
    <section>
      <table class="table table-hover table-primary" style="widht: 100px">
        <thead>
          <tr>
            <th scope="col">Estadistica</th>
            <th scope="col">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cantidad TOTAL de turnos</th>
            <td>{{ getCantidadTurnos("Total") }}</td>
          </tr>
          <tr>
            <th scope="row">Cantidad de turnos DISPONIBLES</th>
            <td>{{ getCantidadTurnos(1) }}</td>
          </tr>
          <tr>
            <th scope="row">Cantidad de turnos PROGRAMADOS</th>
            <td>{{ getCantidadTurnos(2) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <div class="m-4"><h1>Porcentajes Resultantes</h1></div>
    <section>
      <table class="table table-hover table-primary" style="widht: 100px">
        <thead>
          <tr>
            <th scope="col">Estadistica</th>
            <th scope="col">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Porcentaje de turnos PROGRAMADOS</th>
            <td>
              {{
                (
                  (getCantidadTurnos(2) * 100) /
                  getCantidadTurnos("Total")
                ).toFixed(2)
              }}%
            </td>
          </tr>
          <tr>
            <th scope="row">Porcentaje de turnos DISPONIBLES</th>
            <td>
              {{
                (
                  (getCantidadTurnos(1) * 100) /
                  getCantidadTurnos("Total")
                ).toFixed(2)
              }}%
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <div class="m-4"><h1>Informacion de Pacientes</h1></div>
    <section>
      <table class="table table-hover table-primary" style="widht: 100px">
        <thead>
          <tr>
            <th scope="col">Estadistica</th>
            <th scope="col">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cantidad total de PACIENTES solicitantes</th>
            <td>
              {{ getPacientes() }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <div class="m-4"><h1>Informacion de Turnos</h1></div>
    <section>
      <table class="table table-hover table-primary" style="widht: 100px">
        <thead>
          <tr>
            <th scope="col">Estadistica</th>
            <th scope="col">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cantidad TOTAL de especialidades</th>
            <td>
              {{ getCantEspecialidades("Total") }}
            </td>
          </tr>
          <tr v-for="especialidad in especialidades" :key="especialidad.id">
            <th scope="row">
              Cantidad de turnos de {{ especialidad.nombre.toUpperCase() }}
            </th>
            <td>
              {{ getCantEspecialidades(especialidad.id) }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import store from "../store/store";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      turnos: store.getters.getTurnos,
      admin: store.getters.getUser,
      especialidades: store.getters.getEspecialidades,
    };
  },
  methods: {
    getCantidadTurnos(estado) {
      let cant = 0;
      let total = this.turnos.filter(
        (turno) => turno.admin == this.admin.id
      ).length;

      if (estado == "Total") {
        return total;
      } else {
        for (let i = 0; i < this.turnos.length; i++) {
          if (
            this.turnos[i].estado == estado &&
            this.turnos[i].admin == this.admin.id
          ) {
            cant++;
          }
        }

        return cant;
      }
    },
    getPacientes() {
      let users = [];

      for (let i = 0; i < this.turnos.length; i++) {
        if (this.turnos[i].admin == this.admin.id) {
          users.push(this.turnos[i].user);
        }
      }

      const set = new Set(users);
      let final = [];

      set.forEach((item) => {
        if (item != null) final.push(item);
      });

      return final.length;
    },
    getCantEspecialidades(especialidad) {
      const total = this.especialidades.length;
      let cont = 0;

      if (especialidad == "Total") {
        return total;
      } else {
        for (let i = 0; i < this.turnos.length; i++) {
          if (
            this.turnos[i].admin == this.admin.id &&
            this.turnos[i].especialidad == especialidad
          ) {
            cont++;
          }
        }

        return cont;
      }
    },
  },
};
</script>

<style></style>
