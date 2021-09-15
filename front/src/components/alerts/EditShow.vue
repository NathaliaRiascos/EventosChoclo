<template>
    <div class="row edit-show-alert justify-around">
        <!--TITLE-->
        <div class="row col-11 justify-between q-mt-xs">
            <p class="col-8 alert-title">Editar Show: </p>
            <i class="col-1 fas fa-times close-alert q-mt-sm" style="color: #52575d"></i>
        </div>
        <!--FORM-->
        <div class="row col-12 justify-around q-mb-md">
            <!--TIME-->
            <q-input placeholder="Hora" class="col-11 alert-input" borderless></q-input>
            <!--PLACE-->
            <q-input placeholder="Lugar" class="col-11 alert-input" borderless></q-input>
            <!--SEATS-->
            <q-input placeholder="Asientos" class="col-11 alert-input" borderless></q-input>
        </div>
        <!--BUTTONS-->
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

.alert-title {
    margin: 10px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #41444b;
}

.close-alert {
    font-weight: 300;
    font-size: 24px;
}

.alert-input {
  height: 42px !important;
  padding: 0 5px 0 14px;
  margin-bottom: 5px;
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
