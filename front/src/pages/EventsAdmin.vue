<template>
  <div class="row full-width">
    <div class="row col-md-8 col-sm-12 q-mt-xl">
      <!--ADD EVENT-->
      <EventForm
        class="col-12"
        :isView="isView"
        :isEdited="isEdited"
        :event="event"
        @cancel="cancel"/>
      <!--EVENT SHOWS-->
      <ShowsTable
        class="col-12"
        :canCreate="isView"
        :eventId="event.event_id"/>
      <!--ADD EVENT-->
    </div>
    <!--CALENDAR-->
    <EventCalendar
      @editEvent="editEvent"
      :update="update"
      @changeUpdate="changeUpdate"
      @viewEvent="viewEvent"/>
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
        event_name: '',
        eventImgUrl: '',
        event_date: '',
        event_price: '',
        event_description: ''
      },
      default_event: {
        event_name: '',
        eventImgUrl: '',
        event_date: '',
        event_price: '',
        event_description: ''
      },
      isEdited: false,
      update: false,
      isView: false
    }
  },
  methods: {
    editEvent (event) {
      this.event = event
      this.isEdited = true
      this.isView = false
    },
    cancel () {
      this.event = this.default_event
      this.isEdited = false
      this.update = true
      this.isView = false
    },
    changeUpdate () {
      this.update = false
    },
    viewEvent (event) {
      this.event = event
      this.isView = true
    }
  }
}
</script>

<style scoped>
*{
  overflow: hidden;
}
</style>
