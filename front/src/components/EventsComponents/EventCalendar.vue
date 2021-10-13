<template>
  <div class="row col-md-4 col-sm-12 calendar_body justify-around conditional-padd">
    <!--CALENDAR-->
    <q-date
     v-model="event_date"
     minimal
     @input="getEvents()"
     mask="YYYY-MM-DD"
     class="col-8 q-my-xl calendar" />
    <!--EVENTS-->
    <div class="row col-11 justify-between">
      <p class="col-3 adm-title">Eventos</p>
      <div class="col-3">
        <q-checkbox
          v-model="showAll"
          label="Todos"
          class="show-all-checkbox"
          color="grey"
          @input="getEvents()"
        />
      </div>
    </div>
    <div class="col-12 events-container">
      <TinyEvent
        class=" col-10 q-ma-sm"
        :type="true"
        v-for="ev in events"
        :key="ev.event_id"
        :event="ev"
        @editEvent="editEvent"
        />
    </div>
  </div>
</template>

<script>
import TinyEvent from './TinyEvent'
import EventService from '../../services/EventService'
import { functions } from '../../functions.js'

export default {
  name: 'EventCalendar',
  mixins: [functions],
  components: { TinyEvent },
  data () {
    return {
      event_date: '',
      showAll: true,
      events: [],
      event: {
        event_name: '',
        eventImgUrl: '',
        event_date: '',
        event_price: '',
        event_description: ''
      }
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
          console.log(this.events)
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
    },
    editEvent (event) {
      this.$emit('editEvent', event)
    }
  }
}
</script>

<style>
/* CALENDAR */
.calendar_body {
  height: 94.5vh !important;
  overflow: hidden;
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
  max-height: 300px;
  overflow-y: scroll;
}

@media (max-width: 1023px) {
  .conditional-padd {
    margin-top: 50px;
  }
}
</style>
