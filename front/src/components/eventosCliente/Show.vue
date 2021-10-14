<template>
    <div class="card-show">
        <p class="card-item">Hora <span>{{ show && show.show_time }}</span></p>
        <hr class="vertical">
        <p class="card-item">Lugar <span>{{ show && show.show_place }}</span></p>
    </div>
</template>

<script>

export default {
  mounted () {
    this.getEvento()
  },
  methods: {
    getEvento () {
    }
  },
  props: {
    show: Object
  }
}
</script>

<style scoped>
  .card-show{
    display: flex;
    margin-right:20px;
  }

  .card-item{
    flex-direction: column;
    min-width: 77px;
    height: 38px;
    color: var(--color-text-dark);
  }
 hr.vertical {
    width: 0px;
    margin: 0 20px;
    height: 36px;
    border: 1px solid #E5E5E5;
  }

@media only screen and (min-width: 700px){
  .card-show{
    display: flex;
    margin-right:20px;
  }

  .card-show:last-child{
    margin-right: 0;
  }

}
</style>
