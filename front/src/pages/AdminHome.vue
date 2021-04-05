<template>
  <div class="row full-width">
    <div class="column col-md-9 col-xs-12 q-mt-xl">
      <div>
        <q-title class="adm-title q-pl-xl">Evento</q-title>
        <!--EVENT DETAILS-->
        <q-form
          @submit="event_form"
          action="submit"
          class="row justify-around q-mt-sm"
        >
          <!--LEFT CONTENT-->
          <div class="row justify-around col-md-5 col-xs-11">
            <div
              class="event-img row justify-center items-center col-md-12 col-xs-10"
            >
              <q-file
                class="custom-file-input justify-center items-center col-4"
                borderless
              ></q-file>
            </div>
            <q-input
              label="Nombre"
              type="text"
              v-model="eventName"
              class="event-input self-end col-md-12 col-xs-10 q-mt-md"
              borderless
            ></q-input>
          </div>
          <!--RIGHT CONTENT-->
          <div class="row justify-around col-md-5 col-xs-11">
            <q-input
              type="date"
              v-model="eventDate"
              class="event-input self-start col-md-12 col-xs-10"
              borderless
            ></q-input>

            <q-input
              label="Precio"
              type="number"
              v-model="eventPrice"
              class="event-input self-center col-md-12 col-xs-10 q-mt-md"
              borderless
            ></q-input>

            <q-input
              label="Descripcion"
              type="text"
              v-model="eventDescription"
              class="event-input self-end col-md-12 col-xs-10 q-mt-md"
              borderless
            ></q-input>
          </div>
        </q-form>
      </div>
      <!--EVENT SHOWS-->
      <div class="q-mt-xl">
        <div class="row justify-between">
          <q-title class="adm-title q-pl-xl">Shows</q-title>
          <q-btn class="add-show q-mr-xl" label="Agregar show"></q-btn>
        </div>

        <div class="shows-table-title row justify-around q-mt-md">
          <div class="row col-11 tb-title-container q-pa-xs">
            <div class="col-2 tb-title">#</div>
            <div class="col-2 tb-title">Hora</div>
            <div class="col-3 tb-title">Lugar</div>
            <div class="col-5 tb-title">Asientos</div>
          </div>

          <q-table
            :data="data"
            :columns="columns"
            row-key="name"
            hide-header
            class="col-11 q-mt-md shows-table"
          >
            <q-th>Uwu</q-th>
          </q-table>
        </div>

        <div class="row justify-end q-mt-lg">
          <q-btn class="add-event q-mr-xl" label="Crear evento"></q-btn>
        </div>
      </div>
    </div>
    <!--CALENDAR-->
    <div class="row col-3 calendar justify-around">
      <div class="row col-12 justify-around calendar-user">
        <div class="row col-6 justify-around">
          <i class="fas fa-user-circle col-2"></i>
          <q-title class="col-8">Juan</q-title>
          <i class="fas fa-caret-down col-2"></i>
        </div>
      </div>
      <q-date
        v-model="date"
        minimal
        class="col-8 q-my-xl"
      />
      <div class="row col-10 justify-between">
        <q-title class="adm-title col-3">Eventos</q-title>
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
export default {
  name: 'AdminHome',
  data () {
    return {
      eventName: '',
      eventImgUrl: '',
      eventDate: '',
      eventPrice: '',
      eventDescription: '',
      showAll: false,
      data: [
        {
          '#': '023',
          hora: '4:00',
          lugar: 'Cine Colombia',
          asientos: '029'
        },
        {
          '#': '025',
          hora: '7:00',
          lugar: 'Teatro de Cali',
          asientos: 5000
        },
        {
          '#': '030',
          hora: '19:00',
          lugar: 'Estadio nacional',
          asientos: 50000
        }
      ]
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
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
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

/* SHOW STYLES */
.add-show {
  background-color: #f2f2f2;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  border-radius: 10px;
}

.tb-title-container {
  background-color: #f2f2f2;
}

.tb-title {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
}

.shows-table {
  background-color: #f2f2f2;
  border-radius: 0;
  color: #404040;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

.add-event {
  background-color: #fddb3a;
  border-radius: 10px;
  font-family: "Quicksand", sans-serif;
  color: #000000;
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

.calendar-user q-title {
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
