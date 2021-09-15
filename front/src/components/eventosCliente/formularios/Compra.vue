<template>
  <div>
      <p>Encuentro Virtual: Bienvenidos a Bordo - ESCANDINAVIA</p>
      <q-input class="input" rounded outlined v-model="text" label="Rounded filled" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>
