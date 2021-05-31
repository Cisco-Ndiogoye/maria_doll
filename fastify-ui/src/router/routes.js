
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/products', component: () => import('pages/Index.vue') },
      { path: '/products/:id', component: () => import('pages/ProductDetail.vue') },
      { path: '/products/location/:location', component: () => import('pages/Location.vue')},
      { path: '/products/file/add', component: () => import('pages/ProductImport.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
