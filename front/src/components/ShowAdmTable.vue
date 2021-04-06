<template>
  <div class="q-mt-xl">
    <div class="row justify-between">
      <p class="adm-title q-pl-xl">Shows</p>
      <q-btn class="add-show q-mr-xl" label="Agregar show"></q-btn>
    </div>

    <div class="shows-table-title row justify-around q-mt-md">
      <div class="row col-11 tb-title-container q-pa-xs">
        <div class="col-2 tb-title">#</div>
        <div class="col-2 tb-title">Hora</div>
        <div class="col-4 tb-title">Lugar</div>
        <div class="col-3 tb-title">Asientos</div>
      </div>

      <div class="col-11 q-mt-lg">
        <ShowTableInstance
          class="col-11"
          v-for="show in shows"
          :key="show.number"
          v-bind="show"
        />
      </div>
    </div>

    <div class="row justify-end q-mt-lg">
      <q-btn class="add-event q-mr-xl" label="Crear evento"></q-btn>
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
</style>
