import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

const router = new Router({
  routes: [
   {path: '/', name: 'home', component: Home},
   {path: '/about', name: 'about', component: About}
 ]
})

router.beforeResolve((to, from, next) => {
	if(to.path){
		NProgress.start()
	}
	next()
})

router.afterEach((to, from) => {
	NProgress.done()
})

export default router
/*

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" *//* './views/About.vue')
    }
  ]
})
*/
