<template>
  <div>
    <AppHeader :admin="isAdmin" />
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div v-if="this.spinner" class="align-center m-1">
      <div class="spinner-border text-primary">
        <span class="sr-only align-center">Loading...</span>
      </div>
      <p class="inline pl-2">Cargando...</p>
    </div>
    <div v-else class="flex justify-center items-center h-96">
      <div class="p-1 border-2 shadow-lg">
        <h1 class="font-bold">{{ msg }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import store from "../store/store";

export default {
  data() {
    return {
      spinner: true,
      isAdmin: store.getters.getUser.admin,
    };
  },
  components: {
    AppHeader,
  },
  props: ["msg", "admin"],
  mounted() {
    setTimeout(() => {
      this.spinner = false;
    }, 3000);
    setTimeout(() => {
      if (this.admin) {
        this.$router.push("/home").catch(() => {});
      } else {
        this.$router.push("/user").catch(() => {});
      }
    }, 5000);
  },
};
</script>
