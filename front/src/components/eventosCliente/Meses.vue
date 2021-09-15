<template>
    <q-item clickable v-close-popup @click="whichItem">
        <q-item-section>
            <q-item-label>{{ mes.name }}</q-item-label>
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
    mes: Object
  }
}
</script>

<style>
</style>
