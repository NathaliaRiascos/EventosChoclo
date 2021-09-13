<template>
  <div class="row q-py-md justify-around q-px-sm">
    <!--COMPUTER VIEW OF DATA-->
    <div v-if="$q.screen.gt.sm" class="row col-md-6 col-xs-5">
      <p class="col-md-4 col-xs-12 instance-font">{{id}}</p>
      <p class="col-md-8 col-xs-12 instance-font">{{name}}</p>
    </div>
    <!--PHONE VIEW OF DATA-->
    <div v-else class="row col-md-6 col-xs-5">
      <p class="col-md-8 col-xs-12 instance-font q-m-none">{{name}}</p>
      <p class="col-md-4 col-xs-12 instance-font-light">CC. {{id}}</p>
    </div>
    <!--BUTTONS-->
    <q-btn class="col-md-2 col-xs-3 instance-font instance-btn" label="Expandir"></q-btn>
    <q-btn class="col-md-2 col-xs-3 instance-font instance-btn" label="Banear"></q-btn>
  </div>
</template>

<script>
export default {
  name: 'UsersTableInstance',
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
<<<<<<< Updated upstream
    },
    phone: {
      type: Number,
      required: true
=======
>>>>>>> Stashed changes
    }
  }
}
</script>

<style>
.instance-btn {
  height: 44px !important;
  background-color: #e5e5e5;
  text-transform: capitalize;
  border-radius: 20px;
}
</style>
