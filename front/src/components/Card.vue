<template>
  <div class="card">
      <img class="card-img" src="" alt="">
      <div class="card-info">
        <span class="card-fecha">19 Marzo</span>
        <p class="card-titulo">Encuentro Virtual: Bienvenidos a Bordo - ESCANDINAVIAversion</p>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.card{
    width: 100%;
    height: 280px;
    display: flex;
    padding: 30px 30px 0px 30px;
    align-items: center;
    justify-self: center;
    flex-direction:column;
    border-radius: 15px;
}
.card:hover{
    background: #f2f2f2;
}
.card-img{
    width: 222px;
    height: 130px;
    background-color: #c4c4c4;
    border-radius: 10px;
    border: none;
}
.card-info{
    width: 100%;
    padding-top: 10px;
    font-size: 16px;
    justify-content: center;
    align-items:center;
    display: flex;
}
.card-fecha{
    width: 20%;
    text-align: center;
    padding: 8px;
    margin-right: 5px;
    color: #787878;
    border-radius: 10px;
}
.card-titulo{
    color: var(--color-text-dark);
    float:left;
    width: 70%;
    padding: 10px;
    margin: 0px;
}
@media only screen and (min-width: 700px){
    .card{
        position: relative;
        padding: 0px;
        width: 287px;
        height: 310px;
        margin: 20px;
    }
    .card:hover{
        background-color: transparent;
        transform: translateY(-30px);
        cursor: pointer;
        box-shadow: 0px 30px 60px rgba(141, 139, 139, 0.2);
    }
    .card-info{
        justify-content: flex-start;
        position: relative;
    }
    .card-titulo{
        width: auto;
        margin: 0px 10px;
    }
    .card-img{
        width: 100%;
        height: 199px;
    }
    .card-fecha{
        position: absolute;
        bottom: 90px;
        right: 5px;
        background-color: #F2F2F2;
        width: 87px;
        text-align: center;
        padding: 8px;
        border-radius: 10px;
    }
}
</style>
