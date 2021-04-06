<template>
  <div class="row col-10 justify-around tiny-event-container">
    <q-img class="col-3 tiny-event-img"></q-img>
    <div class="col-6">
        <p class="tiny-event-title">{{title}}</p>
        <p class="tiny-event-text">{{date}}</p>
        <p class="tiny-event-text">{{shows}}</p>
    </div>
    <div class="row col-2 justify-around items-center">
      <q-icon name="fas fa-pen tiny-event-icon" style="color: #color: #52575d" />
      <q-icon name="fas fa-trash tiny-event-icon" style="color: #eb4335" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TinyEvent',
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    shows: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.tiny-event-container {
    height: 80px !important;
}

.tiny-event-img {
  width: 80px !important;
  height: 80px !important;
  background-color: #e5e5e5;
  border-radius: 10px;
}

.tiny-event-title {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #41444b;
}

.tiny-event-text {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #787878;
    line-height: 20px;
}

.tiny-event-icon {
  font-size: 18px;
}
</style>
