<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="navbar-color">
        <q-toolbar>
          <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="fas fa-bars" />
          <q-toolbar-title class="quicksand">Eventos choclo</q-toolbar-title>
        </q-toolbar>
      </q-header>
    <!--NAVBAR LEFT CONTENT-->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="navbar-color"
      class="col-md-8"
    >
      <q-list>
        <!--SEARCH BAR
        <q-item>
          <q-input dense borderless v-model="searchContent" class="q-ml-xs search-input full-width" placeholder="Buscar...">
            <template v-slot:prepend>
                <q-icon v-if="searchContent === ''" name="fas fa-search" />
                <q-icon v-else name="fas fa-times" class="cursor-pointer" @click="searchContent = ''" />
            </template>
          </q-input>
        </q-item>-->
        <!--ITEMS-->
        <div class="row justify-center">
          <NavLink
            class="col-11 q-mt-sm"
            v-for="link in navLinks"
            :key="link.title"
            v-bind="link" />
        </div>
      </q-list>
    </q-drawer>

      <q-page-container class="row">
        <router-view />
      </q-page-container>
  </q-layout>
</template>

<script>
import NavLink from 'components/NavLink.vue'
const linksData = [
  {
    title: 'Inicio',
    icon: 'fas fa-home',
    link: '/'
  },
  {
    title: 'Eventos',
    icon: 'fas fa-calendar-day',
    link: '/admin/events'
  },
  {
    title: 'Usuarios',
    icon: 'fas fa-user-friends',
    link: '/admin/users'
  },
  {
    title: 'Informe',
    icon: 'far fa-clipboard',
    link: '/admin/reports'
  },
  {
    title: 'Salir',
    icon: 'fas fa-sign-out-alt',
    link: '/logout'
  }
]

export default {
  name: 'MainLayout',
  components: { NavLink },
  data () {
    return {
      leftDrawerOpen: false,
      navLinks: linksData,
      searchContent: ''
    }
  }
}
</script>

<style>
.navbar-color {
  background-color: #52575D;
}

.search-input{
  padding-left: 10px;
  background-color: #d8d8d8;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: 300;
  border-radius: 5px;
}
</style>
