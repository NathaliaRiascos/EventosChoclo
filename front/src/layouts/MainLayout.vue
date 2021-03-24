<template>
  <q-layout view="lHh Lpr lFf">
    <!--NAVBAR-->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <!--NAVBAR LEFT CONTENT-->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      class="col-md-12"
    >
      <!--ITEMS-->
      <q-list>
        <MenuLink v-for="link in menuLinks" :key="link.title" v-bind="link" />
      </q-list>

      <!--LOGOUT BUTTON-->
      <q-btn class="logout" text-color="grey" flat rounded>
        <q-icon name="fas fa-sign-out-alt"></q-icon>
      </q-btn>
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
.logout:hover {
  background-color: #404040;
  color: aqua;
}
</style>
