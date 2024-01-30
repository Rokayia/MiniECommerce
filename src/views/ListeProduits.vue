/* eslint-disable */
<template>
  <Modal :is-visible="showModalFlag" @close="closeModalFlag">
    <div class="container">
      <div>
        <img class="imageDescr" v-bind:src="this.imgDetail" alt="" />
      </div>
      <div class="description">
        <h1 class="titre">{{ this.titreDetail }}</h1>
        <p class="prix">
          <strong> US$ {{ this.prixDetail }}</strong>
        </p>
        <p><strong>Description </strong></p>
        <p class="descr">{{ this.descriptDetail }}</p>
      </div>
    </div>
  </Modal>

  <div
    class="products"
    v-for="(item, index) in products"
    :key="index"
    @click="this.idDetails = item.id"
  >
    <img class="image" v-bind:src="item.image" alt="" />
    <p>{{ item.title }}</p>
    <p>
      <strong> US$ {{ item.price }}</strong>
    </p>

    <MyButton
      label="Voir les détails"
      @generalEventBtn="afficherModal(item)"
      backgroundColor="details"
    />
   
    <MyButton
      label="Ajouter au panier"
      @generalEventBtn="addProductCard(item)"
      v-if="!inproductsCard(item)"
      backgroundColor="blue"  
    />
   
    <MyButton
      label="Supprimer du panier"
      @generalEventBtn="removeProductCard(item)"
      backgroundColor="red" 
    v-else
    />
 
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import Modal from "@/components/DetailsModal.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      showModalFlag: false,
      showRemoveBtn:false,
      idDetails: 0,
      
      titreDetail: "",
      imgDetail: "",
      prixDetail: 0,
      descriptDetail: "",
    };
  },
  components: {
    MyButton,
    Modal,
  },
  methods: {
    addProductCard(index) {
      this.showRemoveBtn=true;
      //console.log("item" + this.products[index -1].title)
      //this.productsCard.push(this.products[index - 1]);
    
      // this.productsCard.push(item);
      this.$store.commit("addProductCard", index);
   
    
    },
    removeProductCard(prod) { 
      this.showRemoveBtn=false;
     this.$store.commit("removeProductCard", prod);
   },
    afficherModal(item) {
      console.log("dans le modal");
      // let id= this.products.id;

      this.titreDetail = item.title;
      this.imgDetail = item.image;
      this.prixDetail = item.price;
      this.descriptDetail = item.description;
      console.log("l'id est " + item);
      this.showModalFlag = true;
    },
    closeModalFlag() {
      this.showModalFlag = false;
    },
    inproductsCard(prod){
    
      return  this.productsCard.find((product) => product.id === prod.id);
    }
  },
  computed: {
    ...mapState(["products","productsCard"]),
  },
  mounted() {
    this.$store.dispatch("loadItems");
  },
};
</script>

<style>
.products {
  border: solid;
  margin-bottom: 10px;
}

.image {
  width: 150px;
}
a {
  margin-right: 20px;
}
.container {
  display: flex;
}
.imageDescr {
  width: 200px;
}
</style>
