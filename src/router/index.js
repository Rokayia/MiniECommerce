/* eslint-disable */ /* eslint-disable eol-last */
import { createRouter, createWebHistory } from 'vue-router'
import ListeProduits from '../views/ListeProduits.vue'
// import DetailProduit from '../views/DetailProduit.vue'
import PanierProduits from '../views/PanierProduits.vue'
const routes = [
  {
    path: '/',
    name: 'liste',
    component: ListeProduits
  },
  // {
  //   path: '/detail',
  //   name: 'detail',
  //   component: DetailProduit
  // },
  {
    path: '/panier',
    name: 'panier',
    component: PanierProduits
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
