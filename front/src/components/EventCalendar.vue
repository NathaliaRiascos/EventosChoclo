<template>
  <div class="row col-md-4 col-sm-12 calendar_body justify-around conditional-padd">
    <div class="row col-12 justify-around calendar-user q-mt-md">
      <div class="row col-5 justify-around">
        <i class="fas fa-user-circle col-1"></i>
        <p class="col-10">Juan</p>
        <i class="fas fa-caret-down col-1"></i>
      </div>
    </div>
    <q-date v-model="event_date" @input="getEvents()" mask="YYYY-MM-DD" class="col-8 q-my-xl" />
    <div class="row col-10 justify-between">
      <p class="adm-title col-3">Eventos</p>
      <div class="q-mr-md col-2">
        <q-checkbox
          v-model="showAll"
          label="Todos"
          class="show-all-checkbox"
          color="grey"
          @input="getEvents()"
        />
      </div>
    </div>
    <div class="col-11 events-container">
      <TinyEvent
        class="q-ma-sm"
        v-for="event in events"
        :key="event.event_name"
        v-bind="event"/>
    </div>
  </div>
</template>

<script>
import TinyEvent from './TinyEvent'
import EventService from '../services/EventService'
import { functions } from '../functions.js'

export default {
  name: 'EventCalendar',
  mixins: [functions],
  components: { TinyEvent },
  data () {
    return {
      event_date: '',
      showAll: true,
      events: []
    }
  },
  mounted () {
    this.getEvents()
    this.getDate()
  },
  methods: {
    async getEvents () {
      try {
        this.activateLoading('Cargando')
        if (this.showAll) {
          const res = await EventService.getEvents({ token: localStorage.getItem('token') })
          this.events = res.data.data
        } else {
          const data = {}
          data.token = localStorage.getItem('token')
          data.event_date = this.event_date
          const res = await EventService.getEventsByDate(data)
          if (res.data.data) {
            this.events = res.data.data
          } else {
            this.events = []
          }
        }
      } catch (error) {
        console.log(error)
      }
      this.disableLoading()
    },
    getDate () {
      var f = new Date()
      const year = f.getFullYear()
      let month = f.getMonth()
      let day = f.getDate()
      month = (month + 1).toString()
      if (month.length === 1) {
        month = '0' + month
      }
      if (day.length === 1) {
        day = '0' + day
      }
      this.event_date = year + '-' + month + '-' + day
      console.log(this.event_date)
    }
  }
}
</script>

<style>
/* CALENDAR */
.calendar_body {
  height: 100vh;
  border-left: 1px solid #e5e5e5;
}

.calendar-user {
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
}

.calendar-user i {
  color: #52575d;
  font-size: 40px;
}

.calendar-user p {
  bottom: -10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  vertical-align: bottom;
}

.show-all-checkbox {
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
}

.events-container {
  max-height: 400px;
  overflow-y: scroll;
}

@media (max-width: 1023px) {
  .conditional-padd {
    margin-top: 50px;
  }
}
</style>
