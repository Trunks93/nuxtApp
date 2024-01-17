import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue').then(r => r.default || r)
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('~/pages/auth/register.vue').then(r => r.default || r)
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('~/pages/auth/login.vue').then(r => r.default || r)
    },
    {
      name: 'products',
      path: '/products',
      component: () => import('~/pages/products/products.vue').then(r => r.default || r)
    },
    {
      name: 'products-details',
      path: '/products/:product',
      component: () => import('~/pages/products/product-detail.vue').then(r => r.default || r)
    },
    {
      name: 'products-category',
      path: '/products/category/:category',
      component: () => import('~/pages/products/products-category.vue').then(r => r.default || r)
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('~/pages/cart/cart.vue').then(r => r.default || r)
    }
    
  ],
}
