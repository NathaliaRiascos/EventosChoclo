<template>
  <div class="row full-width">
    <div class="row col-md-8 col-sm-12 q-mt-xl">
      <!--ADD EVENT-->
      <EventForm
        :isEdited="isEdited"
        :event="event" class="col-12"
        @cancel="cancel"/>
      <!--EVENT SHOWS-->
      <ShowsTable  class="col-12"/>
      <!--ADD EVENT-->
    </div>
    <!--CALENDAR-->
    <EventCalendar @editEvent="editEvent"/>
  </div>
</template>

<script>
import EventForm from '../components/EventsComponents/EventForm'
import ShowsTable from '../components/EventsComponents/ShowsTable'
import EventCalendar from '../components/EventsComponents/EventCalendar'

export default {
  name: 'AdminHome',
  components: {
    ShowsTable,
    EventForm,
    EventCalendar
  },
  data () {
    return {
      event: {
      },
      default_event: {
        event_name: '',
        eventImgUrl: '',
        event_date: '',
        event_price: '',
        event_description: ''
      },
      isEdited: false
    }
  },
  methods: {
    editEvent (event) {
      this.event = event
      this.isEdited = true
    },
    cancel () {
      this.event = this.default_event
      this.isEdited = false
    }
  }
}
</script>

<style scoped>
*{
  overflow: hidden;
}
</style>
