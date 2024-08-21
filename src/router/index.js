import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Cinemas from '@/views/Cinemas.vue';
import Offer from '@/views/Offer.vue';
import Fb from '@/views/Fb.vue';
import Ticket from '@/views/Ticket.vue';
import Movie from '@/views/Movie.vue';
import CinemaPage from '@/views/CinemaPage.vue';
import Single  from '@/views/Single.vue';
import Love from '@/views/Love.vue';
import Booking from '@/views/Booking.vue';
import Step2 from '@/views/Step2.vue';
import Step3 from '@/views/Step3.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component:Cinemas
  },
  {
    path: '/offer',
    name: 'Offer',
    component:Offer
  }
  ,
  {
    path: '/fb',
    name: 'Fb',
    component:Fb
  }
  ,
  {
    path: '/ticket',
    name: 'TIcket',
    component:Ticket
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component:Movie,
    props: true 
  },
  {
    path:'/cinema/:id',
    name:'CinemaPage',
    component:CinemaPage,
    props: true
  },
  {
    path:'/movie/single',
    name:'Single',
    component:Single,
  },
  {
    path:'/movie/love',
    name:'Love',
    component:Love,
  },
  {
    path:'/movie/love/booking',
    name:'booking',
    component:Booking,
  },
  {
    path:'/movie/love/booking/step2',
    name:'Step2',
    component:Step2,
  },
  {
    path:'/movie/love/booking/step2/step3',
    name:'Step3',
    component:Step3,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
