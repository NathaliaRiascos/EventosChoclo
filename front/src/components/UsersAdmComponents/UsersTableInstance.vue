<template>
  <div class="row q-py-md q-px-xs">
    <!--COMPUTER VIEW OF DATA-->
    <div v-if="$q.screen.gt.sm" class="row justify-around col-md-7 col-xs-6">
      <p id="UTI-p1" class="col-md-2 col-xs-12 instance-font q-pl-sm">{{id}}</p>
      <p id="UTI-p2" class="col-md-4 col-xs-12 instance-font">{{name}}</p>
      <div v-if="expand">
        <span>Correo: </span><p class="col-md-4 col-xs-12 instance-font-light"> {{email}}</p>
      </div>
    </div>
    <!--PHONE VIEW OF DATA-->
    <div v-else class="row col-md-5 col-xs-8">
      <p id="UTI-p3" class="col-md-8 col-xs-12 instance-font q-m-none">{{name}}</p>
      <p id="UTI-p4" class="col-md-4 col-xs-12 instance-font-light">CC. {{id}}</p>
      <div v-if="expand">
        <span>Correo: </span><p class="col-md-4 col-xs-12 instance-font-light"> {{email}}</p>
      </div>
      </div>
    <!--BUTTONS-->
    <q-btn id="boton1" class="col-md-4 col-xs-3 instance-font instance-btn" label="Expandir" v-on:click="expandirMethod"></q-btn>
  </div>
</template>

<script>
export default {
  name: 'UsersTableInstance',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      expand: false
    }
  },
  methods: {
    expandirMethod: function () {
      this.expand = !this.expand
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
