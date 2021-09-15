<template>
  <div class="contenido">
    <div class="progress">
      <div class="barras">
        <div class="barra"></div>
        <div class="barra-success" :style="'width:'+ stepperProgress"></div>
      </div>
      <ul>
        <li @click="changeClass">
          <div class="numero">
            <span>1</span>
          </div>
          <q-icon name="fas fa-check"></q-icon>
        </li>
        <li>
          <div class="numero">
            <span>2</span>
          </div>
          <q-icon name="fas fa-check"></q-icon>
        </li>
        <li>
          <div class="numero">
            <span>3</span>
          </div>
          <q-icon name="fas fa-check"></q-icon>
        </li>
      </ul>
    </div>
    <div>
      <form @submit.prevent="onSubmit">
        <div class="page" v-if="step == 1">
          <Compra />
        </div>
        <div class="page" v-if="step == 2">
          Pagina 2 For each ad campaign that you create, you can control how
          much you're willing to spend on clicks and conversions, which networks
          and geographical locations you want your ads to show on, and more.
        </div>
        <div class="page" v-if="step == 3">
          Pagina 3 For each ad campaign that you create, you can control how
          much you're willing to spend on clicks and conversions, which networks
          and geographical locations you want your ads to show on, and more.
        </div>
        <button @click.prevent.self="step--" v-if="step > 0">Atras</button>
        <button type="submit" @click="step++" v-if="step < 4">Continuar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Compra from './formularios/Compra.vue'

export default {
  data: () => ({
    step: 1
  }),
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
      console.log('Se hizo submit', e)
    }
  },
  components: {
    Compra
  }
}
</script>

<style scoped>

.contenido {
  margin: 20px 60px;
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
  /*width: 116px;*/
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

.barra{
  margin: 0 auto;
}
.barra, .barra-success {
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
/*
ul li .fas::after,
ul li .numero::after {
  content: "";
  background: #ccc;
  height: 2px;
  width: 116px;
  display: block;
  position: absolute;
  z-index: -1;
}
*/
ul li:hover .fas,
ul li:hover .numero {
  background-color: var(--principal);
}

/*
ul li:hover .fas::after,
ul li:hover .numero::after {
  content: "";
  background: var(--principal);
  height: 2px;
  width: 116px;
  display: block;
  position: absolute;
  z-index: -1;
}
*/
</style>
