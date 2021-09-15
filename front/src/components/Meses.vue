<template>
    <q-item clickable v-close-popup @click="whichItem">
        <q-item-section>
            <q-item-label>{{ mes }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
  data: () => ({
    item: ''
  }),
  methods: {
    whichItem () {
      this.item = this.mes
      this.$emit('accion', this.item)
    }
  },
  props: {
    mes: String
  }
}
</script>

<style>
</style>
