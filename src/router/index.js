import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'personajes',
    component: () => import(/* webpackChunkName: "personajes" */ '../views/peoples/PeoplesView.vue')
  },
  {
    path: '/personaje/:id',
    name: 'personaje',
    component: () => import(/* webpackChunkName: "personaje" */ '../views/peoples/PeopleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
