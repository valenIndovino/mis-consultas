<template>
  <AppLoading v-bind:msg="msg" v-bind:admin="admin" />
</template>

<script>
import AppLoading from "../components/AppLoading.vue";

export default {
  data() {
    return {
      msg: this.$route.params.msg,
      admin: this.$route.params.admin,
    };
  },
  components: {
    AppLoading,
  },
};
</script>
