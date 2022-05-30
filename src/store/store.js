import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    turnos: [],
    contador: 0,
    total: 0,
    user: null,
  },
  mutations: {
    agregar: (state, { product, quantity, total }) => {
      const productInCart = state.cartProducts.find((item) => {
        return item.product.id === product.id;
      });

      state.contador += 1;
      state.total = state.total + product.price;

      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.total += product.price;
        return;
      }

      total += product.price;
      state.cartProducts.push({ product, quantity, total });

      console.log("state", total);
    },
    eliminar: (state, product) => {
      const productInCart = state.cartProducts.find((item) => {
        return item.product.id === product.id;
      });

      state.contador -= 1;
      state.total = state.total - product.price;

      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
        productInCart.total -= product.price;
        return;
      } else {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.product.id != product.id
        );
      }
      console.log("state", state.cartProducts.quantity);
    },
    vaciar: (state) => {
      state.cartProducts = [];
      state.contador = 0;
      state.total = 0;
      console.log(state.cartProducts);
    },
    addUser: (state, user) => {
      console.log("llego al store");
      state.user = user;
      console.log(state.user, "user state");
    },
  },
  actions: {
    agregar: ({ commit }, { product, quantity, total }) => {
      commit("agregar", { product, quantity, total });
    },
    eliminar: ({ commit }, product) => {
      commit("eliminar", product);
    },
    vaciar: ({ commit }) => {
      commit("vaciar");
    },
    addUser: ({ commit }, user) => {
      commit("addUser", user);
    },
  },
  getters: {
    getCartProducts: (state) => {
      return state.cartProducts;
    },
    getContador: (state) => {
      return state.contador;
    },
    getTotal: (state) => {
      return state.total;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});
