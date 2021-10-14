<template>
    <div class="row delete-alert justify-around">
        <!--CLOSE-->
        <div class="row col-11 justify-between">
            <i @click="cancelDelete" class="col-1 offset-11 fas fa-times close-alert q-mt-sm" style="color: #52575d;  cursor: pointer;"></i>
        </div>
        <!--TEXT-->
        <p class="col-11 alert-text">¿Estás seguro de que deseas eliminar este <b>{{item}}</b>?</p>
        <!--BUTTONS-->
        <q-btn @click="cancelDelete" label="Cancelar" class="col-5 alert-btn alert-cancel" size="16px"></q-btn>
        <q-btn @click="confirmlDelete" label="Eliminar" class="col-5 alert-btn alert-confirm" size="16px"></q-btn>
    </div>
</template>

<script>
export default {
  name: 'EditShow',
  props: ['item'],
  data () {
    return {
    }
  },
  methods: {
    cancelDelete () {
      this.$emit('cancelDelete')
    },
    confirmlDelete () {
      this.$emit('confirmlDelete')
    }
  }
}
</script>

<style>
.delete-alert {
    width: 317px;
    height: 180px;
    position: absolute;

    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
}

.close-alert {
    font-weight: 300;
    font-size: 24px;
}

.alert-text {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #41444b;
}

.alert-btn {
    height: 42px !important;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    color: #41444b;
    border-radius: 20px;
    text-transform: capitalize;
}

.alert-cancel {
    background-color: #e5e5e5;
}

.alert-confirm {
    background-color: #fddb3a;
}
</style>
