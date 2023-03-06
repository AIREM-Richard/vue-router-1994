import Vue from 'vue'
import Router from 'vue-router'
import Root from '../components/Root'
import HomePage from '../components/HomePage'
import FooPage from '../components/FooPage'
import NotFound from '../components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      props: true,
      children: [
        { path: '', component: HomePage },
        { path: 'foo', component: FooPage },
        { path: '*', component: NotFound }
      ]
    }
  ]
})
