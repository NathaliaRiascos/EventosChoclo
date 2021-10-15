<template>
  <div class="card">
      <img class="card-img" src="~assets/evento.jpg" alt="Imagen de evento" >
      <div class="card-info">
        <span class="card-fecha">{{evento.event_date}}</span>
        <p class="card-titulo">{{ evento.event_name }}</p>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    evento: Object,
    mes: String
  },
  mounted () {
    this.evento.event_date = moment(new Date(this.evento.event_date)).add(1, 'days').format('YYYY-MM-DD')
  }
}
</script>

<style scoped>
.card{
    width: 100%;
    max-height: 280px;
    display: flex;
    padding: 30px 30px 0px 30px;
    align-items: center;
    flex-direction:column;
    border-radius: 15px;
}
.card:hover{
    background: #f2f2f2;
}
.card-img{
    width: 100%;
    height: 160px;
    background-color: #c4c4c4;
    border-radius: 10px;
    border: none;
}
.card-info{
    width: 100%;
    padding-top: 10px;
    font-size: 16px;
    align-items:center;
    display: flex;
    justify-content: flex-start;
    position: relative;
}

.card-fecha{
    position: absolute;
    color: #787878;
    bottom: 90px;
    right: 5px;
    height: 37px;
    background-color: #F2F2F2;
    margin-right: 5px;
    min-width: 87px;
    width: auto;
    text-align: center;
    padding: 8px;
    border-radius: 10px;
}

.card-titulo{
    color: var(--color-text-dark);
    float:left;
    width: auto;
    padding: 10px;
    margin: 10px;
}

@media only screen and (min-width: 700px){
    .card{
        position: relative;
        padding: 0px;
        width: 287px;
        max-height: 303px;
    }
    .card:hover{
        background-color: transparent;
        transform: translateY(-30px);
        cursor: pointer;
        box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
    }

    .card-img{
        width: 100%;
        height: 199px;
    }
}
</style>
