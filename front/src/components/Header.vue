<template>
  <q-header class="row justify-between content-center header-client">
      <p class="logo-text items-center">Eventos choclo</p>
      <q-btn
        @click="changeView"
        flat
        class="btn-menu"
        icon="fas fa-bars"/>
      <Nav class="menu-header"/>
      <!-- v-show="click" -->
  </q-header>
</template>

<script>
import Nav from 'src/components/eventosCliente/Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav
  },
  methods: {
    changeView () {
      const menu = document.querySelector('.menu-header')
      const btn = document.querySelector('.btn-menu')

      btn.classList.toggle('active-btn') ? menu.style.display = 'block'
        : menu.style.display = 'none'
    }
  }
}
</script>

<style>
.header-client{
  display: flex;
  position: sticky;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  height: 65px;
  padding: 0px 5%;
  background-color: #52575D;
}
.logo-text{
  padding: 0px;
  align-self: center;
  margin: 0px;
  font-size: 23px;
}
.menu-header{
  display: none;
}
.btn-menu{
  height: 40px;
  width: 40px;
  border-radius: 10px;
}
.active-btn{
  background: #787878;
}
@media only screen and (min-width: 600px){
  .btn-menu{
    display: none;
  }
  .menu-header{
    display: block;
  }
}
</style>
