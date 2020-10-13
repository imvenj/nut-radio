import Vue from 'vue'
import VueRouter from 'vue-router'
import TabView from '@/views/TabView'

// Fix push self console.error
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: TabView,
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: 'home',
        component: () => import( /* webpackChunkName: "home" */ '@/views/LevelView')
      },
      {
        name: 'Quiz',
        path: 'quiz',
        component: () => import( /* webpackChunkName: "quiz" */ '@/views/QuizView')
      },
      {
        name: 'WrongCollection',
        path: 'wrong',
        component: () => import( /* webpackChunkName: "wrong" */ '@/views/WrongCollectionView')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
