<template>
  <div class="container">
    <div class="event-info">
        <h6 class="text-container">Eventos</h6>
        <q-btn-dropdown
            class="btn-container"
            :label="mes"
            rounded
        >
        <q-list v-for="(mes,index) in meses" :key="index">
            <Meses @accion="whichItem" :mes="mes" />
        </q-list>
        </q-btn-dropdown>
    </div>
    <div class="container-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
   </div>
</template>

<script>

import Meses from 'components/Meses.vue'
import Card from 'components/Card.vue'

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export default {
  data: () => ({
    meses,
    mes: 'Marzo'
  }),
  components: {
    Meses,
    Card
  },
  methods: {
    whichItem (item) {
      this.mes = item
    }
  }
}
</script>

<style>
.container{
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0px 5%;
}
.btn-container{
    height: 40px;
    width: 114px;
    background-color: #E5E5E5;
}
.event-info{
    height: auto;
    align-items: center;
    justify-content: space-between;
    display: flex;
}
.container-card{
    display: grid;
    justify-content: center;
    grid-template-columns: 323px;
}
@media only screen and (min-width: 700px){
    .container-card{
        grid-template-columns: 287px 287px;
        justify-content: space-around;
    }
}
@media only screen and (min-width: 1000px){
    .container-card{
        grid-template-columns: 287px 287px 287px;
        justify-content: space-between;
    }
}
@media only screen and (min-width: 1350px){
    .container-card{
        grid-template-columns: 287px 287px 287px 287px;
        justify-content: space-between;
    }
}

</style>
