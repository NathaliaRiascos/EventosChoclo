<template>
  <div class="row full-width">
    <div class="row col-md-9 col-xs-12 q-mt-xl">
      <!--ADD EVENT-->
      <EventAdmCreator class="col-12"/>
      <!--EVENT SHOWS-->
      <ShowAdmTable  class="col-12"/>
    </div>
    <!--CALENDAR-->
    <div class="row col-3 calendar justify-around">
      <div class="row col-12 justify-around calendar-user">
        <div class="row col-6 justify-around">
          <i class="fas fa-user-circle col-2"></i>
          <p class="col-8">Juan</p>
          <i class="fas fa-caret-down col-2"></i>
        </div>
      </div>
      <q-date
        v-model="date"
        minimal
        class="col-8 q-my-xl"
      />
      <div class="row col-10 justify-between">
        <p class="adm-title col-3">Eventos</p>
        <div class="q-gutter-sm col-3">
          <q-checkbox v-model="showAll" label="Todos" class="show-all-checkbox" color="grey"/>
        </div>
      </div>
      <div class="row col-10">
        <q-img class="col-2 tiny-event-img"></q-img>
        <div class="col-6"></div>
        <div class="row col-2 justify-around">
          <q-icon name="fas fa-pen tiny-event-icon" style="color: #52575D;" />
          <q-icon name="fas fa-trash tiny-event-icon" style="color: #EB4335;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventAdmCreator from '../components/EventAdmCreator'
import ShowAdmTable from '../components/ShowAdmTable'

export default {
  name: 'AdminHome',
  components: {
    ShowAdmTable,
    EventAdmCreator
  },
  data () {
    return {
      eventName: '',
      eventImgUrl: '',
      eventDate: '',
      eventPrice: '',
      eventDescription: '',
      showAll: false,
      date: '30/11/2001'
    }
  },
  methods: {
    async event_form () {
      console.log('Formulario de evento')
    }
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

.event-img {
  height: 15vh;
  background-color: #c4c4c4;
  border-radius: 10px;
}

.event-input {
  height: 40px;
  padding-left: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  background-color: #f2f2f2;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}

/* "SELECCIONAR IMAGEN" BUTTON*/
.custom-file-input {
  font-family: "Quicksand", sans-serif;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input::before {
  content: "Seleccionar imagen";
  display: inline-block;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  color: #f5f5f5;
  font-weight: 500;
  font-size: 12pt;
}

.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

/* CALENDAR */
.calendar {
  border: 1px solid #8a8a8a;
}

.calendar-user {
  height: 8vh;
  border-bottom: 1px solid #8a8a8a;
  align-items: center;
}

.calendar-user i {
  color: #52575d;
  font-size: 40px;
}

.calendar-user p {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  vertical-align: bottom;
}

.show-all-checkbox {
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
}

.tiny-event-img {
  width: 65px;
  height: 65px;
  background-color: #e5e5e5;
  border-radius: 10px;
}

.tiny-event-icon {
  font-size: 18px;
}
</style>
