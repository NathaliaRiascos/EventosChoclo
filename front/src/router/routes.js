
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/admin', component: () => import('pages/AdminHome.vue') }
    ]
  },
  {
    path: '/client',
    component: () => import('layouts/MainClient.vue'),
    children: [
      { path: '/eventos', component: () => import('pages/EventosCliente.vue') },
      { path: '/eventos/:id', name: 'eventos', component: () => import('pages/Evento[id].vue') }
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
