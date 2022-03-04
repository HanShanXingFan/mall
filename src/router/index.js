import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../pages/index.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '../pages/product.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import(/* webpackChunkName: "detail" */ '../pages/detail.vue')
      },
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../pages/cart.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'../pages/login.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../pages/order.vue'),
    children: [
      {
        path: '/list',
        name: 'orderList',
        component: () => import(/* webpackChunkName: "orderList" */ '../pages/orderList.vue'),
      },
      {
        path: '/confirm',
        name: 'orderConfirm',
        component: () => import(/* webpackChunkName: "orderConfirm" */ '../pages/orderConfirm.vue'),
      },
      {
        path: '/pay',
        name: 'orderPay',
        component: () => import(/* webpackChunkName: "orderPay" */ '../pages/orderPay.vue'),
      },
      {
        path: '/alipay',
        name: 'alipay',
        component: () => import(/* webpackChunkName: "alipay" */ '../pages/aliPay.vue'),
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
