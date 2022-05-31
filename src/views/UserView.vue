<template>
  <div class="home">
    <AppHeader />
    <router-view />
    <img
      alt="Vue logo"
      src="https://us.123rf.com/450wm/pikalvi/pikalvi1904/pikalvi190400168/120731228-dise%C3%B1o-de-logotipo-de-salud-logotipo-de-la-cl%C3%ADnica-empresa-farmac%C3%A9utica-logotipo-del-m%C3%A9dico-de-famil.jpg?ver=6"
    />
    <div class="row">
      <AppIndex />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppIndex from "@/components/AppIndex.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    AppIndex,
    AppHeader,
  },
};
</script>

<style>
html {
  align-items: center;
  width: 100%;
}
</style>
