<template>
    <div class="row edit-show-alert justify-around">
        <!--TITLE-->
        <div class="row col-11 justify-between q-mt-xs">
            <p class="col-8 alert-title">Editar Show: </p>
            <i @click="cancelEditAddShow" class="col-1 fas fa-times close-alert q-mt-sm" style="color: #52575d; cursor: pointer;"></i>
        </div>
        <!--FORM-->
        <div class="row col-12 justify-around q-mb-md">
            <span v-if="isEdited">Numero</span>
            <q-input v-model="show.show_number" placeholder="Numero" class="col-11 alert-input" borderless></q-input>
            <!--TIME-->
            <span v-if="isEdited">Hora</span>
            <q-input v-model="show.show_time" placeholder="Hora" class="col-11 alert-input" borderless></q-input>
            <!--PLACE-->
            <span v-if="isEdited">Lugar</span>
            <q-input v-model="show.show_place" placeholder="Lugar" class="col-11 alert-input" borderless></q-input>
            <!--SEATS-->
            <span v-if="isEdited">Asientos</span>
            <q-input v-model="show.show_sits" placeholder="Asientos" class="col-11 alert-input" borderless></q-input>
        </div>
        <!--BUTTONS-->
        <q-btn label="Cancelar" @click="cancelEditAddShow" class="col-5 alert-btn alert-cancel" size="16px"></q-btn>
        <q-btn v-if="isEdited" @click="editShow" label="Editar" class="col-5 alert-btn alert-confirm" size="16px"></q-btn>
        <q-btn v-else @click="addShow" label="Agregar" class="col-5 alert-btn alert-confirm" size="16px"></q-btn>
    </div>
</template>

<script>
import ShowService from '../../services/ShowService'
import { functions } from '../../functions.js'

export default {
  name: 'EditShow',
  mixins: [functions],
  props: {
    show: {
      type: Object
    },
    isEdited: {
      type: Boolean
    },
    eventId: {
      type: Number
    }
  },
  data () {
    return {
    }
  },
  methods: {
    cancelEditAddShow () {
      this.$emit('cancelEditAddShow')
    },
    async addShow () {
      try {
        const data = this.show
        console.log(this.eventId)
        data.event_id = this.eventId
        data.token = localStorage.getItem('token')
        const request = await ShowService.store(this.show)
        if (request.status === 200) {
          this.alert('positive', 'Show creado correctamente')
          this.$emit('showCreated')
        }
      } catch (error) {
        this.alert('negative', error.response.data.error)
      }
    },
    async editShow () {
      try {
        const params = {
          token: localStorage.getItem('token'),
          show: this.show
        }
        const request = await ShowService.update(params)
        if (request.status === 200) {
          this.alert('positive', 'Show editado correctamente')
          this.$emit('showCreated')
        }
      } catch (error) {
        console.log(error)
        this.alert('negative', error.response.error)
      }
    }
  }
}
</script>

<style>
.edit-show-alert {
    width: 317px;
    height: 424px;
    position: absolute;

    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
}

.alert-title {
    margin: 10px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #41444b;
}

.close-alert {
    font-weight: 300;
    font-size: 24px;
}

.alert-input {
  height: 42px !important;
  padding: 0 5px 0 14px;
  margin-bottom: 5px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;
  background-color: #f2f2f2;
  border-radius: 20px;
}

.alert-btn {
    height: 42px !important;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    color: #41444b;
    border-radius: 20px;
    text-transform: capitalize;
}

.alert-cancel {
    background-color: #e5e5e5;
}

.alert-confirm {
    background-color: #fddb3a;
}
</style>
