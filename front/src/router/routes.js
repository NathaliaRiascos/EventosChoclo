
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { name: 'login', path: '', component: () => import('pages/Login.vue'), meta: { title: 'Login' } },
      { name: 'recovery', path: '/recovery', component: () => import('pages/Recovery.vue'), meta: { title: 'Recovery' } }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/admin/events', component: () => import('pages/EventsAdmin.vue') },
      { path: '/admin/reports', component: () => import('pages/ReportsAdmin.vue') },
      { path: '/admin/users', component: () => import('pages/UsersAdmin.vue') }
    ]
  },
  {
    path: '/client',
    component: () => import('layouts/MainClient.vue'),
    children: [
      { path: '/eventos', component: () => import('pages/EventosCliente.vue') }
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
