<template>
  <q-layout view="lHh Lpr lFf">
    <!--NAVBAR LEFT CONTENT-->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="navbar-color"
      class="col-md-12"
    >
      <q-list>
        <!--SEARCH BAR-->
        <q-item>
          <q-input dense borderless v-model="search_content" class="q-ml-xs search-input full-width" placeholder="Buscar...">
            <template v-slot:prepend>
                <q-icon v-if="search_content === ''" name="fas fa-search" />
                <q-icon v-else name="fas fa-times" class="cursor-pointer" @click="search_content = ''" />
            </template>
          </q-input>
        </q-item>
        <!--ITEMS-->
        <MenuLink v-for="link in menuLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

      <q-page-container class="row">
        <router-view />
      </q-page-container>
  </q-layout>
</template>

<script>
import MenuLink from 'components/MenuLink.vue'
const linksData = [
  {
    title: 'Inicio',
    icon: 'fas fa-home',
    link: '/'
  },
  {
    title: 'Eventos',
    icon: 'fas fa-calendar-day',
    link: '/events'
  },
  {
    title: 'Usuarios',
    icon: 'fas fa-user-friends',
    link: '/users'
  },
  {
    title: 'Informe',
    icon: 'far fa-clipboard',
    link: '/reports'
  },
  {
    title: 'Salir',
    icon: 'fas fa-sign-out-alt',
    link: '/logout'
  }
]

export default {
  name: 'MainLayout',
  components: { MenuLink },
  data () {
    return {
      leftDrawerOpen: false,
      menuLinks: linksData
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
  background-color: #c4c4c4;
  font-size: 18px;
  font-weight: 300;
  border-radius: 5px;
}
</style>
