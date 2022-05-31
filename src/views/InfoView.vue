<template>
  <div>
    <AppHeader />
    <router-view />
    <section class="mx-auto">
      <h1>Informacion del turno</h1>
      <p>
        Especialidad: especialidad <br />
        Fecha: DD/MM/AAAA <br />
        Horario: HH:MM:SS <br />
        Estado: Programado
      </p>
    </section>
    <section>
      <h1>Informacion del paciente</h1>
      <p>
        Nombre: nombre <br />
        Apellido: apellido <br />
        DNI: 11.111.111 <br />
        Obra Social: OSDE 2.1 <br />
      </p>
    </section>
    <section>
      <h1>Conclusion del turno</h1>
      <div class="mb-3">
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
    </section>
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
