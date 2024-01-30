/* eslint-disable */
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    productsCard: [],
    compteurPanier: 0,
  },
  getters: {
    getProductsCard(state) {
      return state.productsCard;
    },
    getCompteurPanier(state) {
      return state.productsCard.length;
    },
  },
  mutations: {
    setProducts(state, allProducts) {
      state.products = allProducts;
    },
    addProductCard(state, product) {
    
      product.quantity = 1;
      state.productsCard.push(product);
      // localStorage.setItem(`product_${product.id}`, JSON.stringify(product))
    },
    removeProductCard(state, product) {
      state.productsCard = state.productsCard.filter(
        (prod) => product.id !== prod.id
      );
    },
  },
  actions: {
    loadItems(context) {
      axios
        .get("https://fakestoreapi.com/products")

        .then((response) => {
        //  console.log(response.data);
          context.commit("setProducts", response.data);
        });
    },
  },
  modules: {},
});
