<template>
  <div class="container-evento">
      <div>
        <p class="item">
            <router-link
            to="/eventos"
            class="item"
            >Eventos > </router-link>
            {{evento && evento.title}}
        </p>
        <router-link
            to="/eventos"
            class="item-arrow"
            ><q-icon name="fas fa-arrow-left" />
        </router-link>
        <hr class="barra">
      </div>
      <div class="card">
          <img class="card-img" src="" alt="">
          <div class="card-info">
            <div>
              <p class="fecha">19 Marzo del 2021</p>
              <h1 class="card-title card-title_evento">{{evento && evento.title}}</h1>
              <p class="card-price"> ${{evento && evento.price}}</p>
            </div>
            <button @click="itClicked = true" class="card-button">Comprar boleta</button>
          </div>
      </div>
      <div class="card-show" >
        <h1 class="show-title">Shows</h1>
        <div class="shows">
          <Show v-for="(show,index) in shows" :key="index" :show="show"/>
        </div>
      </div>
      <div class="card-detalle">
        <h1 class="card-title">Acerca del evento</h1>
        <p>
        Sumáte a nuestra charla especial sobre uno de los destinos mas exóticos del mundo brindada por el equipo de agentes de viajes que mas saben.

        Tips de Viajes.
        Lugares que no te podes perder.
        Consejos para que tu viaje sea un éxito.
        Visita virtual.
        Una experiencia completa para conectar con la historia de nuestro mundo.

        Ahora que estas en casa, aporvechá para planear esos viajes que tanto soñas con hacer.

        Anotate a esta charla!</p>
      </div>
      <Modal :itClicked="itClicked" @accion="isShow"/>
   </div>
</template>

<script>

import data from 'src/components/eventosCliente/db.json'
import Show from 'src/components/eventosCliente/Show'
import Modal from 'src/components/eventosCliente/Modal'

export default {
  data: () => ({
    evento: null,
    shows: null,
    itClicked: false
  }),
  mounted () {
    this.getEvento()
  },
  methods: {
    getEvento () {
      data.forEach(elem => {
        if (elem.id === this.$route.params.id) {
          this.evento = elem
          this.shows = elem.shows
        }
      })
      console.log(typeof this.$route.params.id, this.shows)
    },
    detectarClick () {
      this.itClicked = true
      console.log(this.itClicked)
    },
    isShow (value) {
      this.itClicked = value
    }
  },
  components: {
    Show,
    Modal
  }
}
</script>

<style scoped>

.container-evento{
    display: flex;
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 65px;
    flex-direction: column;
}
.barra, .item{
    display: none;
}

.item-arrow{
  width: 30px;
  height: 20px;
  text-decoration: none;
}

.card{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.show-title{
  font-weight: bold;
  margin-top: 50px;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: var(--color-text-dark);
}
.card-info {
  margin-top:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align:left;
  max-height: 353px;
  width: 100%;
}

.card-img{
    background: #C4C4C4;
    border-radius: 20px;
    border: none;
    width: 100%;
    height: 280px;
    object-fit: cover;
}
.card-title{
  margin: 10px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: var(--color-text-dark);
}

.card-title_evento{
  font-size: 20px;
}

.card-parrafo{
  color: var(--color-text-dark);
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.05em;
}
.card-button{
  margin-top: 20px;
  align-self: flex-end;
  border:none;
  border-radius: 20px;
  background: #FDDB3A;
  color: var(--color-text-dark);
  cursor: pointer;
  font-size: 16px;
  height: 44px;
  bottom:0px;
  letter-spacing: 0.05em;
  outline: none;
  width: 100%;
}

.card-price{
  font-size: 16px;
  margin: 5% 0 0 0;
  font-style: normal;
  letter-spacing: 0.05em;
  font-weight: normal;
  color: var(--color-text-dark);
}

.fecha{
  margin: 10px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #787878;
}

.shows{
  display: flex;
  justify-content: space-between;
  min-height: 54px;
  width: 100%;
}

@media only screen and (min-width: 600px){
  .card-button{
    width: 200px;
  }

  .card-img{
    height: 353px;
  }

  .item-arrow{
    display: none;
  }
}
@media only screen and (min-width: 1000px){
  .container-evento{
    display: flex;
    width: 80%;
  }

  .card{
    flex-direction: row;
  }

  .barra{
    display: block;
    border: 1px solid #E5E5E5;
  }

  .item{
    display: inline-flex;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #787878 !important;
    text-decoration: none;
  }

  .item-arrow{
    display: none;
  }

  .card-img{
    width: 432px;
    height: 353px;
  }

  .card-info{
    margin: 30px 0 0 20px;
  }

  .card-button{
    width: 159px;
  }

  .fecha{
    font-size: 20px;
  }

  .card-title_evento{
    font-size: 30px;
    line-height: 37px;
  }

  .card-price{
    font-size: 22px;
  }

}
</style>
