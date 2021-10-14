<template>
  <div class="q-pa-md q-gutter-sm" style="height: auto;" >
      <q-dialog v-model="isOpen" @hide="isShow" >
      <q-card style="width: 487px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle1 text-center">Datos de compra</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <div>
          <StepperCompra />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import StepperCompra from './StepperCompra.vue'

export default {
  data: () => ({
    isOpen: false
  }),
  watch: {
    itClicked: function (val, oldVal) {
      this.isOpen = val
    }
  },
  methods: {
    isShow () {
      this.$emit('accion', this.isOpen)
    }
  },
  components: {
    StepperCompra
  },
  props: {
    itClicked: Boolean
  }
}
</script>
