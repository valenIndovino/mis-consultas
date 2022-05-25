import { defineStore } from "pinia";

export const useStore = defineStore("login", {
  state: () => ({
    user: null,
  }),
  actions: {
    autenticar(valor) {
      this._autenticado = valor;
    },
    addUser(user) {
      this.user = user;
      console.log(this.user);
    },
  },
  getters: {
    getUser() {
      return this.user;
    },
  },
});
