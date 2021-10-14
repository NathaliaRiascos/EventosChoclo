<template>
  <div class="row full-width justify-around">
    <!--LEFT BLOCK-->
    <div class="row col-md-7 col-xs-11 report-content">
      <div class="row col-12 justify-between">
      <!--HEADER-->
      <div class="row col-12 report-header q-my-lg">
        <p id="unu" class="col-6 title-text">Informe</p>
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
        :key="event.event_name"
        :event="event"/>
    </div>
  </div>
</template>

<script>
import ReportNumbers from '../components/ReportsComponents/ReportNumbers'
import TinyEvent from '../components/EventsComponents/TinyEvent.vue'
import EventService from '../services/EventService'
import SellService from '../services/SellService'

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
      valores: [],
      events: []
    }
  },
  mounted () {
    this.getEvents()
    this.getValues()
  },
  methods: {
    async getEvents () {
      try {
        const res = await EventService.getEvents({ token: localStorage.getItem('token') })
        this.events = res.data.data
      } catch (error) {
        console.log(error)
      }
    },
    async getValues () {
      try {
        const res = await SellService.getValues({ token: localStorage.getItem('token') })
        this.valores = res.data.data
      } catch (error) {
        console.log(error)
      }
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
