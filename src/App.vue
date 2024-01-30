<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/detail"></router-link>
    <router-link to="/panier">Shopping card {{   getCompteur() }}</router-link>
  </nav>
  <router-view/>
</template>
<script>
export default {
 
  methods:{
    getCompteur(){
      return this.$store.getters.getCompteurPanier;
    }
  }
  
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
