<template>
  <div v-if="productsCard.length">
    <div
      class="products"
      v-for="(item, index) in productsCard"
      :key="index"
      @click="this.idDetails = item.id"
    >
      <div class="container">
        <div class="image">
          <img class="image" v-bind:src="item.image" alt="" />
        </div>
        <div class="description">
          <MyButton
            label="Remove item"
            @generalEventBtn="removeProductCard(item)"
            backgroundColor="details"
          />

          <p>{{ item.title }}</p>
          <p>
            <strong> US$ {{ item.price }}</strong>
          </p>
          <div class="compteur">
            <button @click="item.quantity--" v-bind="reduceQuantityProduct(item)">-</button>
            <h5>{{ item.quantity }}</h5>
            <button @click="item.quantity++">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="total">
        <p>Le total est : {{ calculTotalPanier() }}</p>
    </div>
  </div>
  <div v-else>Panier vide</div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import { mapState } from "vuex";
export default {
  components: {
    MyButton,
  },
  methods: {
    removeProductCard(prod) {
     
      this.$store.commit("removeProductCard", prod);
    },
    reduceQuantityProduct(prod){
if(prod.quantity<=0){
    prod.quantity=0
    this.removeProductCard(prod);
}
    },
    calculTotalPanier(){
        let total= 0;
        this.productsCard.forEach((element) => total+=element.quantity*element.price);
    return total.toFixed(2);
},

  },
  
  computed: {
    ...mapState(["productsCard"]),
  },
};
</script>

<style>
.compteur{
    width: fit-content;
    display: flex;
    margin:0 auto;
}
</style>
