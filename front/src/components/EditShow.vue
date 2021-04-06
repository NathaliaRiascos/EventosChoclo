<template>
    <div class="row edit-show-alert justify-around">
        <div class="row col-12 justify-between q-mt-xs">
            <p class="alert-title">Editar Show: </p>
            <q-icon name="fas fa-times" class="col-2 close-alert" style="color: #52575d"></q-icon>
        </div>
        <div class="row col-12 justify-around q-mb-md">
            <q-input label="Hora" class="col-11 alert-input" borderless></q-input>
            <q-input label="Lugar" class="col-11 alert-input" borderless></q-input>
            <q-input label="Asientos" class="col-11 alert-input" borderless></q-input>
        </div>

        <q-btn label="Cancelar" class="col-5 alert-btn alert-cancel" size="16px"></q-btn>
        <q-btn label="Eliminar" class="col-5 alert-btn alert-confirm" size="16px"></q-btn>
    </div>
</template>

<script>
export default {
  name: 'EditShow'
}
</script>

<style>
.edit-show-alert {
    width: 317px;
    height: 324px;
    position: absolute;

    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
}

.close-alert {
    margin: 0;
    font-weight: 300;
    font-size: 24px;
}

.alert-title {
    margin: 10px;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    color: #41444b;
}

.alert-input {
  height: 44px !important;
  padding-left: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;
  background-color: #f2f2f2;
  border-radius: 20px;
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
