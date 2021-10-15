<template>
  <div class="row justify-around">
    <!--EVENT TITLE-->
    <p class="col-11 event-title">Evento</p>
    <!--EVENT FORM-->
    <div
      class="row col-12 justify-around q-mt-sm"
    >
      <!--LEFT CONTENT-->
      <div class="row justify-around col-md-5 col-xs-11">
        <!--IMAGE UPLOADER-->
        <div class="event-img row justify-center items-center col-12">
          <template v-if="isView==true || isEdited==true">
            <img class="default-event-img col-12" src="~assets/evento.jpg" alt="Imagen de evento" >
          </template>
          <template v-else>
            <q-file
              class="custom-file-input justify-center items-center col-4"
              borderless
              v-model="event.event_img"
            ></q-file>
          </template>
        </div>
        <!--NAME INPUT-->
        <q-input
          label="Nombre"
          type="text"
          v-model="event.event_name"
          class="event-input self-end col-12 q-mt-md"
          borderless
        ></q-input>
      </div>
      <!--RIGHT CONTENT-->
      <div class="row justify-around col-md-5 col-xs-11">
        <!--DATE INPUT-->
        <q-input
          type="date"
          v-model="event.event_date"
          class="event-input self-start col-12 q-mt-md"
          borderless
        ></q-input>
        <!--PRICE INPUT-->
        <q-input
          label="Precio"
          type="number"
          v-model="event.event_price"
          class="event-input self-center col-12 q-mt-md"
          borderless
        ></q-input>
        <!--DESCRIPTION INPUT-->
        <textarea
          placeholder="Descripción"
          rows="3"
          v-model="event.event_description"
          class="event-input text-area self-end col-12 q-mt-md"
          borderless
        ></textarea>
      </div>
      <!--SUBMIT BUTTON-->
      <div class="row col-11 justify-end q-mt-lg">
        <div v-if="!isView">
          <div v-if="isEdited">
            <q-btn
              class="add-event q-mb-sm"
              type="submit"
              color="secondary"
              text-color="dark"
              @click="editItem"
              label="Editar">
            </q-btn>
            <q-btn
              class="add-event q-mb-sm"
              type="submit"
              color="red"
              text-color="dark"
              @click="cancel"
              label="Cancelar">
            </q-btn>
          </div>
          <q-btn
            v-else
            class="add-event q-mb-sm"
            type="submit"
            color="warning"
            text-color="dark"
            @click="event_form"
            label="Crear evento">
          </q-btn>
        </div>
        <div v-else>
          <q-btn
            class="add-event q-mb-sm"
            type="submit"
            color="red"
            text-color="dark"
            @click="cancel"
            label="Cancelar">
            </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import EventService from '../../services/EventService'
import { functions } from '../../functions.js'

export default {
  name: 'EventAdmCreator',
  mixins: [functions],
  props: {
    event: {
      type: Object
    },
    isEdited: {
      type: Boolean
    },
    isView: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  methods: {
    async event_form () {
      try {
        const data = this.event
        data.token = localStorage.getItem('token')
        const request = await EventService.store(this.event)
        if (request.status === 200) {
          this.alert('positive', 'Evento creado correctamente')
          this.cancel()
        }
      } catch (error) {
        this.alert('negative', error.response.data.error)
      }
    },
    cancel () {
      this.$emit('cancel')
      this.event.event_img = ''
      this.event.event_name = ''
      this.event.event_price = ''
      this.event.event_date = ''
      this.event.event_description = ''
    },
    async editItem () {
      try {
        const params = {
          token: localStorage.getItem('token'),
          event: this.event
        }
        const request = await EventService.update(params)
        if (request.status === 200) {
          this.alert('positive', 'Evento editado correctamente')
          this.cancel()
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
/* EVENT STYLES */
.event-title {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #404040;
}

.event-img {
  height: 20vh !important;
  background-color: #c4c4c4;
  border-radius: 10px;
}

.event-input {
  height: 42px !important;
  padding-left: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;
  background-color: #f2f2f2;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}

.text-area {
  height: 90px!important;
  padding: 8px 16px;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none; /*remove the resize handle on the bottom right*/
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

.default-event-img {
  border-radius: 10px;
}
/* ADD EVENT BUTTON */
.add-event {
  width: 154px;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  text-transform: capitalize;
  border-radius: 20px;
}

@media (max-width: 1023px) {
  .conditional-padd {
    margin-top: 30px;
  }
}
</style>
