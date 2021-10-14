<template>
  <vue-qr :text="texto" :size="200"></vue-qr>
</template>

<script>
import VueQr from 'vue-qr'

export default {
  data: () => ({
    texto: 'Hola'
  }),
  mounted () {
    this.getContenido()
  },
  methods: {
    getContenido () {
      const {
        boletas,
        show,
        precio,
        total,
        correo
      } = this.content

      const text = `
        Gracias ${correo} por tu compra
        Deseamos que disfrutes el evento

        
        Datos de compra
        boletas: ${boletas},
        show: ${show},
        Precio unitario: ${precio},
        Pago cancelado: ${total}
      `
      this.texto = text
    }
  },
  components: { VueQr },
  props: {
    content: Object
  }
}
</script>
