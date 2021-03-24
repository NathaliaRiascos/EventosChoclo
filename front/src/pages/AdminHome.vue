<template>
    <div class="contenedorGrande column col-md-8 col-xs-12 q-mt-xl">
        <q-title class="adm_title q-pl-xl">Evento</q-title>
        <!--EVENT DETAILS-->
        <q-form
        @submit="event_form"
        action="submit"
        class="row contenedor justify-around q-mt-lg">
        <!--LEFT CONTENT-->
        <div class="row col-md-5 col-xs-6">
            <div class="row event_img col-md-12 col-xs-10">
                <q-file class="event_img_btn col-4" label="Subir imagen" borderless></q-file>
            </div>

            <q-input label="Nombre" type="text" v-model="eventName" class="event_input col-md-12 col-xs-10 self-end" borderless></q-input>
        </div>
        <!--RIGHT CONTENT-->
        <div class="row col-md-5 col-xs-6 justify-around">
            <q-input type="date" v-model="eventDate" class="event_input col-md-12 col-xs-10" borderless></q-input>

            <q-input label="Precio" type="number" v-model="eventPrice" class="event_input col-md-12 col-xs-10" borderless></q-input>

            <q-input label="Descripcion" type="text" v-model="eventDescription" class="event_input col-md-12 col-xs-10" borderless></q-input>
        </div>
        </q-form>
        <!--EVENT SHOWS-->
        <div>

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
      eventDescription: ''
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
.contenedorGrande {
    background-color: yellow;
}

.contenedor {
    background-color: aqua;
}

.adm_title {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #404040;
}

.event_img {
    background-color: #c4c4c4;
    border-radius: 10px;
}

.event_img_btn {
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
}

.event_input {
    height: 40px;
    padding-left: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    background-color: #f2f2f2;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
}
</style>
