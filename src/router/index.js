import Vue from 'vue'
import Router from 'vue-router'
import Final from '@/components/Final'
import Final_about from '@/components/Final_about'
import Final_contact from '@/components/Final_contact'
import Final_regulation from '@/components/Final_regulation'
import Final_magazine from '@/components/Final_magazine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Final',
      component: Final
    },
    {
      path: '/Final_about',
      name: 'Final_about',
      component: Final_about
    },
    {
      path: '/Final_contact',
      name: 'Final_contact',
      component: Final_contact
    },
    {
      path: '/Final_regulation',
      name: 'Final_regulation',
      component: Final_regulation
    },
    {
      path: '/Final_magazine',
      name: 'Final_magazine',
      component: Final_magazine
    }
  ]
})
