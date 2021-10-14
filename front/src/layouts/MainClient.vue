<template>
  <q-layout class="layout" view="lhh LpR lff">
    <Header />
    <q-page-container class="row contenedor-paginas">
     <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
export default {
  name: 'MainClient',
  data: () => ({}),
  components: {
    Header
  }
}
</script>
<style>
:root{
  --principal: #FDDB3A;
  --btn-second: #e5e5e5;
  --color-text-dark: #41444B;
  --color-text-light: #FAFAFA;
  --input-bg: #F2F2F2;
}
body{
  background-color: var(--color-text-light);
}
.contenedor-paginas{
  padding-top: 0px !important;
}
.btn-principal{
  background-color: var(--principal);
  color: var(--color-text-dark);
}
.q-field__control{
  background-color: var(--input-bg);
  margin: 10px 0px;
}

</style>
