import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
  path: '/servicesform',
  name: 'servicesform',
  component: () => import('../components/servicesForm.vue')
},
{
  path: '/findservices',
  name: 'findservices',
  props: true,
  component: () => import('../components/findServices.vue'),
},
{
  path: '/updateservice/:id',
  name: 'updateservice',
  props: true,
  component: () => import('../components/updateService.vue'),
},
{
  path: '/login',
  name: 'login',
  component: () => import('../components/login.vue'),
},

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router