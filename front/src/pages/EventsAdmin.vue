<template>
  <div class="row full-width">
    <div class="row col-md-8 col-sm-12 q-mt-xl">
      <!--ADD EVENT-->
      <EventForm class="col-12"/>
      <!--EVENT SHOWS-->
      <ShowsTable  class="col-12"/>
      <!--ADD EVENT-->
    </div>
    <!--CALENDAR-->
    <EventCalendar />
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
  }
}
</script>

<style scoped>
*{
  overflow: hidden;
}
</style>
