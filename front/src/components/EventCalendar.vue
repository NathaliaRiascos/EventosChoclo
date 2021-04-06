<template>
  <div class="row col-md-4 col-sm-12 calendar justify-around conditional-padd">
    <div class="row col-12 justify-around calendar-user q-mt-md">
      <div class="row col-5 justify-around">
        <i class="fas fa-user-circle col-1"></i>
        <p class="col-10">Juan</p>
        <i class="fas fa-caret-down col-1"></i>
      </div>
    </div>
    <q-date v-model="date" minimal class="col-8 q-my-xl" />
    <div class="row col-10 justify-between">
      <p class="adm-title col-3">Eventos</p>
      <div class="q-gutter-sm col-2">
        <q-checkbox
          v-model="showAll"
          label="Todos"
          class="show-all-checkbox"
          color="grey"
        />
      </div>
    </div>
    <TinyEvent
    class="col-11 q-ma-sm"
    v-for="event in events"
    :key="event.title"
    v-bind="event"/>
  </div>
</template>

<script>
import TinyEvent from './TinyEvent'

export default {
  name: 'EventCalendar',
  components: { TinyEvent },
  data () {
    return {
      date: '2001/11/30',
      showAll: false,
      events: [
        {
          title: 'Fiesta y diversión',
          date: '19 de marzo',
          shows: 2
        },
        {
          title: 'Godzila vs King kong',
          date: '1 de abril',
          shows: 25
        },
        {
          title: 'Con animo de ofender',
          date: '20 de mayo',
          shows: 3
        }
      ]
    }
  }
}
</script>

<style>
/* CALENDAR */
.calendar {
  height: 100vh;
  border: 1px solid #e5e5e5;
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

@media (max-width: 1023px) {
  .conditional-padd {
    margin-top: 50px;
  }
}
</style>
