<template>
  <div class="row q-py-xs justify-around q-px-xs">
    <!--USER DATA-->
    <div class="row col-md-9 col-xs-8">
      <p class="col-md-12 col-xs-12 instance-font q-m-none">{{name}}</p>
      <p class="col-md-12 col-xs-12 instance-font-light">CC. {{id}}</p>
    </div>
    <!--BUTTON-->
    <q-btn
      class="col-md-3 col-xs-4 instance-font instance-btn"
      color="warning"
      text-color="dark"
      label="Desbanear"></q-btn>
  </div>
</template>

<script>
export default {
  name: 'BannedUsersInstance',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
