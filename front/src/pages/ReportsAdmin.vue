<template>
  <div class="row full-width justify-around">
    <!--LEFT BLOCK-->
    <div class="row col-md-7 col-xs-11 report-content">
      <div class="row col-12 justify-between">
      <!--HEADER-->
      <div class="row col-12 report-header q-my-lg">
        <p id="unu" class="col-6 title-text">Informe</p>
        <q-select
          class="col-6 report-filter"
          filled
          v-model="model"
          :options="options"
          label="Filtro" />
      </div>
      <!--STADISTICS WITH ICONS-->
      <ReportNumbers
        class="col-md-3 col-xs-11"
        v-for="valor in valores"
        :key="valor.title"
        v-bind="valor"/>
      </div>
    </div>
    <!--RIGHT BLOCK - EVENTS STATUS-->
    <div class="row col-md-4 col-xs-11 q-my-lg justify-around">
      <p class="col-12 title-text">Eventos</p>
      <TinyEvent
        class="col-12 q-ma-sm"
        v-for="event in events"
        :key="event.name"
        v-bind="event"/>
    </div>
  </div>
</template>

<script>
import ReportNumbers from '../components/ReportsComponents/ReportNumbers'
import TinyEvent from '../components/EventsComponents/TinyEvent.vue'

export default {
  name: 'Reports',
  components: {
    ReportNumbers,
    TinyEvent
  },
  props: {
    ReportValues: {
      type: Array,
      default: () => []
    },
    ReportEvents: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      model: null,
      options: [
        'Todos', 'Enero', 'Febrero', 'Marzo'
      ],
      valores: [
        {
          title: 'Total de eventos',
          number: 500,
          icon: 'fas fa-calendar-day',
          color: 'red-icon'
        },
        {
          title: 'Ganancias totales',
          number: 8000000,
          icon: 'fas fa-users',
          color: 'green-icon'
        },
        {
          title: 'Usuarios totales',
          number: 300,
          icon: 'fas fa-dollar-sign',
          color: 'blue-icon'
        }
      ],
      events: [
        {
          name: 'Fiesta y diversión',
          date: '19 de marzo',
          shows: 2,
          active: true
        },
        {
          name: 'Con animo de ofender',
          date: '20 de Enero',
          shows: 5,
          active: false
        },
        {
          name: 'God of war 3',
          date: '30 de Noviembre',
          shows: 20,
          active: true
        },
        {
          name: 'Coraline',
          date: '3 de Febrero',
          shows: 12,
          active: false
        },
        {
          name: 'El camino de los reyes',
          date: '24 de Octubre',
          shows: 6,
          active: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.report-header {
  max-height: 80px;
}

.report-content {
  max-height: 40vh;
}

.report-filter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 16px;
}
</style>
