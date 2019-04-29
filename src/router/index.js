import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import Animation from '@/components/Animation'
import ReiwaGame from '@/components/ReiwaGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/a',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/b',
      name: 'ReiwaGame',
      component: ReiwaGame
    }
  ]
})
