<template>
  <div class="row justify-around q-my-xl">
    <!--TITLE AND ADD BUTTON-->
    <div class="row col-11 justify-between">
      <p class="adm-title">Shows</p>
      <q-btn class="add-show" :disabled="!canCreate" @click="addShow" label="Agregar show"></q-btn>
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
          v-for="showt in shows"
          :key="showt.show_id"
          :show="showt"
          @editShow="editShow"
          @deleteShow="deleteShow"
        />
      </div>
    </div>
    <q-dialog v-model="AddEditShow">
      <edit-show
        @cancelEditAddShow="cancelEditAddShow"
        @showCreated="showCreated"
        :isEdited="isEdited"
        :show="show"
        :eventId="eventId"/>
    </q-dialog>
    <q-dialog v-model="eliminar">
      <delete-alert @cancelDelete="cancelDelete" @confirmlDelete="confirmlDelete" item='Show'></delete-alert>
    </q-dialog>
  </div>
</template>

<script>
import ShowTableInstance from './ShowTableInstance'
import EditShow from '../../components/alerts/EditShow.vue'
import DeleteAlert from '../../components/alerts/DeleteAlert.vue'
import ShowService from '../../services/ShowService'
import { functions } from '../../functions.js'

export default {
  name: 'ShowAdmTable',
  mixins: [functions],
  components: {
    ShowTableInstance,
    EditShow,
    DeleteAlert
  },
  props: {
    eventId: {
      type: Number
    },
    canCreate: {
      type: Boolean
    }
  },
  data () {
    return {
      AddEditShow: false,
      isEdited: false,
      shows: [],
      show: {},
      showToDelete: {},
      eliminar: false,
      defaultShow: {
        show_number: '',
        show_time: '',
        show_place: '',
        show_sits: ''
      }
    }
  },
  watch: {
    eventId () {
      this.getShows()
    }
  },
  methods: {
    addShow () {
      this.show = this.defaultShow
      this.isEdited = false
      this.AddEditShow = true
    },
    cancelEditAddShow () {
      this.AddEditShow = false
    },
    showCreated () {
      this.show = this.defaultShow
      this.AddEditShow = false
      this.getShows()
    },
    editShow (showParam) {
      this.show = showParam
      this.AddEditShow = true
      this.isEdited = true
    },
    async confirmlDelete () {
      try {
        const params = {
          token: localStorage.getItem('token'),
          show_id: this.showToDelete.show_id
        }
        const request = await ShowService.delete(params)
        if (request.status === 200) {
          this.alert('positive', 'Show eliminado correctamente')
          this.getShows()
          this.showToDelete = {}
          this.eliminar = false
        }
      } catch (error) {
        console.log(error)
        this.alert('negative', error.response.error)
      }
    },
    cancelDelete () {
      this.eliminar = false
      this.showToDelete = {}
    },
    async getShows () {
      try {
        this.activateLoading('Cargando')
        const data = {}
        data.token = localStorage.getItem('token')
        data.event_id = this.eventId
        const res = await ShowService.getShows(data)
        if (res.data.data) {
          this.shows = res.data.data
        } else {
          this.shows = []
        }
      } catch (error) {
        console.log(error)
      }
      this.disableLoading()
    },
    deleteShow (show) {
      this.eliminar = true
      this.showToDelete = show
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
