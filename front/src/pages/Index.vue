<template>
  <q-page class="contenido full-width flex column justify-center items-center text-center">
    <p class="titulo">Bienvenido</p>
    <img
      class="imagen"
      alt="Imagen principal de eventos"
      src="~assets/image-event.png"
    >
    <p class="parrafo">¡Crea tus eventos de una forma sencilla y  más organiza!</p>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped>
.contenido { padding-top: 30px; }
.titulo {
  font-weight: 500;
  margin-bottom: 20px;
}
.titulo, .parrafo {
  font-size: 16px;
  color: #41444B;
}

.parrafo {
  width: 250px;
}
.imagen {
  width: 250px;
  height: 250px;
}

@media only screen and (min-width: 375px){
  titulo, .parrafo {
  font-size: 18px;
  }

  .parrafo {
    width: 300px;
  }
  .imagen {
    width: 300px;
    height: 300px;
  }
}

@media only screen and (min-width: 700px){
  .titulo, .parrafo {
    font-size: 22px;
  }

  .parrafo {
    width: 400px;
  }
  .imagen {
    width: 400px;
    height: 400px;
  }
}

</style>
