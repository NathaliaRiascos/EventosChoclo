<template>
  <div class="row justify-around q-my-xl">
    <!--TITLE AND ADD BUTTON-->
    <div class="row col-11 justify-between">
      <p class="adm-title">Shows</p>
      <q-btn class="add-show" label="Agregar show"></q-btn>
    </div>

    <div class="row col-12 shows-table-title justify-around q-mt-md">
      <!--TABLE HEADER-->
      <div class="row col-11 justify-start tb-title-container q-pa-xs">
        <div class="col-2 table-title-font">Hora</div>
        <div class="col-5 table-title-font">Lugar</div>
        <div class="col-2 table-title-font">Asientos</div>
      </div>
      <!--TABLE BODY-->
      <div class="tables-container col-11 q-mt-lg">
        <ShowTableInstance
          class="col-11"
          v-for="show in shows"
          :key="show.number"
          v-bind="show"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShowTableInstance from './ShowTableInstance'

export default {
  name: 'ShowAdmTable',
  components: { ShowTableInstance },
  data () {
    return {
      shows: [
        {
          number: 23,
          hour: '4:00',
          place: 'Cine Colombia',
          seats: 29
        },
        {
          number: 25,
          hour: '7:00',
          place: 'Teatro de Cali',
          seats: 5000
        },
        {
          number: 30,
          hour: '19:00',
          place: 'Estadio nacional',
          seats: 50000
        },
        {
          number: 15,
          hour: '4:00',
          place: 'Cine Colombia',
          seats: 29
        },
        {
          number: 52,
          hour: '7:00',
          place: 'Teatro de Cali',
          seats: 5000
        },
        {
          number: 78,
          hour: '19:00',
          place: 'Estadio nacional',
          seats: 50000
        },
        {
          number: 65,
          hour: '4:00',
          place: 'Cine Colombia',
          seats: 29
        },
        {
          number: 89,
          hour: '7:00',
          place: 'Teatro de Cali',
          seats: 5000
        },
        {
          number: 899,
          hour: '19:00',
          place: 'Estadio nacional',
          seats: 50000
        },
        {
          number: 985,
          hour: '4:00',
          place: 'Cine Colombia',
          seats: 29
        },
        {
          number: 235,
          hour: '7:00',
          place: 'Teatro de Cali',
          seats: 5000
        },
        {
          number: 893,
          hour: '19:00',
          place: 'Estadio nacional',
          seats: 50000
        }
      ]
    }
  }
}
</script>

<style>
/* SHOW STYLES */
.adm-title {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #404040;
}

.add-show {
  width: 154px;
  height: 42px !important;
  background-color: #f2f2f2;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  border-radius: 20px;
}

.tb-title-container {
  background-color: #f2f2f2;
}

.shows-table {
  background-color: #f2f2f2;
  border-radius: 0;
  color: #404040;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

.tables-container {
  max-height: 220px;
  overflow-y: scroll;
}
</style>
