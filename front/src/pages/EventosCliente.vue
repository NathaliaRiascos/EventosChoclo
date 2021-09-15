<template>
  <div class="container">
    <div class="event-info">
        <h6 class="text-container">Eventos</h6>
        <q-btn-dropdown
            class="btn-container"
            :label="mesName"
            rounded
        >
        <q-list v-for="(mes) in meses" :key="mes.id">
            <Meses @accion="whichItem" :mes="mes"/>
        </q-list>
        </q-btn-dropdown>
    </div>
    <div class="container-card">
      <router-link
        v-for="evento in eventos"
        :key="evento.id"
        :to="{name: 'eventos', params: {id:evento.id}}"
      >
        <Card
          :evento="evento"
          :mes="mesName"
          />
      </router-link>
    </div>
   </div>
</template>

<script>

import Meses from 'src/components/eventosCliente/Meses.vue'
import Card from 'src/components/eventosCliente/Card.vue'
import data from 'src/components/eventosCliente/db.json'

const meses = [
  { id: '01', name: 'Enero' },
  { id: '02', name: 'Febrero' },
  { id: '03', name: 'Marzo' },
  { id: '04', name: 'Abril' },
  { id: '05', name: 'Mayo' },
  { id: '06', name: 'Junio' },
  { id: '07', name: 'Julio' },
  { id: '08', name: 'Agosto' },
  { id: '09', name: 'Septiembre' },
  { id: '10', name: 'Octubre' },
  { id: '11', name: 'Noviembre' },
  { id: '12', name: 'Diciembre' }
]
/*
const data_ = [
  { title: 'Fiesta y diversión', date: '2021-03-04', shows: '2' },
  { title: 'Godzila vs King kong', date: '2021-04-01', shows: '25' },
  { title: 'Con animo de ofender', date: '2021-03-05', shows: '3' },
  { title: 'Evento x', date: '2021-03-011', shows: '3' }
] */
export default {
  data: () => ({
    meses,
    mesName: 'Marzo',
    eventos: null,
    mesId: '03'
  }),
  components: {
    Meses,
    Card
  },
  mounted () {
    this.getEvent(this.mesId)
  },
  methods: {
    whichItem (item) {
      this.mesName = item.name
      console.log('desde meses', this.mesName)
      this.mesId = item.id
      this.getEvent(this.mesId)
    },
    getEvent (mesId) {
      const arr = []
      data.map(item => {
        if (item.date.split('-')[1].includes(mesId)) {
          arr.push(item)
        }
      })
      console.log('desde eventos', this.mesName)
      this.eventos = arr
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
  min-width: 114px;
  max-width: 150px;
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
  grid-column-gap: 30px;
  grid-template-columns: 323px;
}

@media only screen and (min-width: 700px){
    .container-card{
      grid-template-columns: repeat(2, 287px);
      justify-content: flex-start;
    }
}
@media only screen and (min-width: 1000px){
    .container-card{
    grid-template-columns: repeat(3, 287px);
    justify-content: flex-start;
    }
}
@media only screen and (min-width: 1350px){
    .container-card{
      grid-template-columns: repeat(4, 287px);
      justify-content: flex-start;
    }
}

</style>
