<template>
  <div class="row full-width">
    <div class="row col-md-8 col-sm-12 q-mt-xl">
      <!--ADD EVENT-->
      <EventAdmCreator class="col-12"/>
      <!--EVENT SHOWS-->
      <ShowAdmTable  class="col-12"/>
      <!--ADD EVENT-->
    </div>
    <!--CALENDAR-->
    <EventCalendar />
  </div>
</template>

<script>
import EventAdmCreator from '../components/EventAdmCreator'
import ShowAdmTable from '../components/ShowAdmTable'
import EventCalendar from '../components/EventCalendar'

export default {
  name: 'AdminHome',
  components: {
    ShowAdmTable,
    EventAdmCreator,
    EventCalendar
  }
}
</script>

<style scoped>
/* EVENT STYLES */
.adm-title {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #404040;
}

</style>
