<template>
  <div class="contenido">
      <form @submit.prevent="onSubmit">
        <div class="page" v-if="step == 1">
          <p class="text-h6">Encuentro Virtual: Bienvenidos a Bordo - ESCANDINAVIA</p>
          <q-select
            rounded
            outlined
            :options="boletas"
            v-model="form.boletas"
            lazy-rules
            label="Cantidad de boletas"
            :rules="[
              val =>
                (val !== null && val !== '') ||
                'Por favor selecciona la cantidad de boletas'
            ]"
          />
          <q-select
            rounded
            outlined
            v-model="form.show"
            :options="shows"
            label="Show del evento"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Por favor selecciona un show'
            ]"
          />
          <q-input
            rounded
            outlined
            v-model="form.precio"
            label="Precio unitario"
            type="number"
            prefix="$"
          >
            <template v-slot:append> </template>
          </q-input>
          <q-input
            rounded
            outlined
            v-model="form.total"
            label="Total"
            type="number"
            prefix="$"
          >
            <template v-slot:append> </template>
          </q-input>
          <q-input
            rounded
            outlined
            v-model="form.correo"
            label="Correo"
            type="text"
          />
        </div>
        <div class="page" v-if="step == 2">
          <h5>¡La compra fue exitosa!</h5>
          <Qr :content='form'/>
        </div>
        <button class='btn-submit card-button' type="submit" @click="step++" v-if="step < 2">Comprar</button>
      </form>
    </div>
</template>

<script>
// import Compra from "./formularios/Compra.vue";
import data from 'src/components/eventosCliente/db.json'
import Qr from './Qr.vue'

export default {
  data: () => ({
    step: 1,
    shows: null,
    isSubmit: false,
    boletas: [],
    size: 300,
    form: {
      boletas: '',
      show: '',
      precio: 0,
      total: 0,
      correo: ''
    }
  }),
  watch: {
    'form.boletas': function (nuevoValor, valorAnterior) {
      this.form.total = this.form.precio * nuevoValor + '.000'
    }
  },
  mounted () {
    this.getEvento()
    this.setBoletas()
  },
  computed: {
    stepperProgress () {
      return (100 / 3) * (this.step - 1) + '%'
    }
  },
  methods: {
    changeClass (e) {
      console.log(e.target)
    },
    onSubmit (e) {
      console.log('Se hizo submit', this.form)
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
  },
  components: { Qr }
}
</script>

<style scoped>
.contenido {
  margin: 20px 60px;
  padding: 10px 0px 60px 0;
}

.progress {
  position: relative;
  height: 40px;
}

.progress ul {
  margin: 0 auto;
}

ul {
  width: fit-content;
  margin: 0;
  padding: 0;
}

ul li {
  display: inline-flex;
  justify-content: center;
  text-align: center;
  width: fit-content;
  margin: 0 40px;
  z-index: 1;
  position: relative;
}

.fas {
  display: none;
}

ul li .fas {
  width: 27px;
  height: 27px;
}

ul li .fas,
ul li .numero {
  background-color: #ccc;
  color: #444;
  border-radius: 50%;
  text-align: center;
  padding: 5px;
}

ul li .numero {
  display: flex;
  width: 37px;
  height: 37px;
  justify-content: center;
  align-items: center;
}

.barras {
  width: 100%;
}

.barra {
  margin: 0 auto;
}
.barra,
.barra-success {
  background: #ccc;
  height: 2px;
  left: 0;
  right: 0;
  display: block;
  position: absolute;
  top: 50%;
}

.barra-success {
  background: var(--principal);
  max-width: 411px;
  /*margin: 0 10%;*/
}

.page {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.btn-submit {
  display: block;
  float: right;
  margin: 20px 0px;
}

ul li:hover .fas,
ul li:hover .numero {
  background-color: var(--principal);
}

.card-button{
  border:none;
  border-radius: 20px;
  background: #FDDB3A;
  color: var(--color-text-dark);
  cursor: pointer;
  font-size: 16px;
  min-width: 159px;;
  height: 44px;
}

</style>
