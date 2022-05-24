<template>
  <div>
    <LoginHeader />
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://thumbs.dreamstime.com/b/farmac%C3%A9utico-del-doctor-que-presenta-el-fondo-blanco-hombre-aislado-sobre-142901858.jpg"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Ingrese su email"
                />
                <label class="form-label" for="form3Example3">Email</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Ingrese su contraseña"
                />
                <label class="form-label" for="form3Example4">Contraseña</label>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <router-link
                  type="button"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  to="/home"
                >
                  Iniciar Sesion
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
      >
        <!-- Copyright -->
        <div class="text-white mb-3 mb-md-0">
          Copyright © Mis Consultas 2020. All rights reserved.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginHeader from "../components/LoginHeader.vue";

export default {
  components: {
    LoginHeader,
  },
};
</script>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: red;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
