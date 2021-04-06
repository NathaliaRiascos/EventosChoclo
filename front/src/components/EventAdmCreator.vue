<template>
  <div class="row">
    <!--EVENT TITLE-->
    <p class="col-12 adm-title q-pl-xl">Evento</p>
    <!--EVENT FORM-->
    <q-form
      @submit="event_form"
      action="submit"
      class="row col-12 justify-around q-mt-sm"
    >
      <!--LEFT CONTENT-->
      <div class="row justify-around col-md-5 col-xs-11">
        <div class="event-img row justify-center items-center col-md-12 col-xs-10">
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
      <div class="row justify-around col-md-5 col-xs-11 conditional-padd">
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

        <textarea
          placeholder="Descripción"
          rows="3"
          v-model="eventDescription"
          class="event-input text-area self-end col-md-12 col-xs-10 q-mt-md"
          borderless
        ></textarea>
      </div>
      <div class="row col-12 justify-end q-mt-lg">
        <q-btn type="submit" class="add-event q-mr-xl" label="Crear evento"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'EventAdmCreator',
  data () {
    return {
      eventName: '',
      eventImgUrl: '',
      eventDate: '',
      eventPrice: '',
      eventDescription: ''
    }
  },
  methods: {
    event_form () {
      console.log('Se sumiteo el formulario')
    }
  }
}
</script>

<style>
/* EVENT STYLES */
.adm-title {
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
  height: 16% !important;
  padding-left: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;
  background-color: #f2f2f2;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}

.text-area {
  height: 40% !important;
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
/* ADD EVENT BUTTON */
.add-event {
  width: 154px;
  background-color: #fddb3a;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  color: #000000;
  text-transform: capitalize;
  border-radius: 20px;
}

@media (max-width: 1023px) {
  .conditional-padd {
    margin-top: 30px;
  }
}
</style>
