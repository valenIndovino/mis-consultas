<template>
  <div class="mx-auto">
    <div class="card m-4" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://www.infobae.com/new-resizer/QxAYoioVLyeBnOWAUg1ZfwMdD1s=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/5KCVGAGSP5HFJA7KMALNP7ITS4.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Proximo turno</h5>
        <p class="card-text">
          Especialidad: especialidad <br />
          Fecha: DD/MM/AAAA <br />
          Horario: HH:MM:SS
        </p>
        <router-link class="btn btn-primary" to="/info">Ver turno</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
