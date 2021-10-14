<template>
  <div class="form">
      <p>Encuentro Virtual: Bienvenidos a Bordo - ESCANDINAVIA</p>
      <q-select
      rounded
      outlined
      :options="boletas"
      v-model="form.boleta"
      lazy-rules
      @update:model-value="getDataTicket"
      label="Cantidad de boletas"
      :rules="[
        val => val !== null && val !== '' || 'Por favor selecciona la cantidad de boletas',
      ]"
      />
      <q-select
      rounded outlined
      v-model="form.show"
      :options="shows"
      label="Show del evento"
      lazy-rules
      :rules="[
        val => val !== null && val !== '' || 'Por favor selecciona un show',
      ]"
      />
      <q-input
      rounded outlined
      v-model="form.precio"
      label="Precio unitario"
      type="number"
      prefix="$"
      >
        <template v-slot:append>
        </template>
      </q-input>
      <q-input
      rounded
      outlined
      v-model="form.total"
      label="Total"
      type="number"
      prefix="$"
      >
        <template v-slot:append>
        </template>
      </q-input>
  </div>
</template>

<script>
// import { ref } from 'vue'
import data from 'src/components/eventosCliente/db.json'

export default {
  data: () => ({
    shows: null,
    boletas: [],
    form: {
      boletas: '',
      show: '',
      precio: 0,
      total: 0
    }
  }),
  watch: {
    'form.boleta': function (nuevoValor, valorAnterior) {
      this.form.total = this.form.precio * nuevoValor + '.000'
    }
  },
  mounted () {
    this.getEvento()
    this.setBoletas()
  },
  methods: {
    getDataTicket () {
      this.$emit('accion', 'Hola')
      /// console.log(this.form)
    },
    getEvento () {
      data.forEach(elem => {
        if (elem.id === this.$route.params.id) {
          this.shows = elem.shows.map(e => e.hour)
          this.form.precio = elem.price
        }
      })
    },
    setBoletas () {
      this.boletas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<style scoped>

.form {
  max-height: 700px;
}

.form > .input {
  margin: 30px 0px;
}
</style>
