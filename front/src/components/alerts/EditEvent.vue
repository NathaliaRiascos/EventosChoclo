<template>
    <div class="row edit-show-alert justify-around">
        <!--TITLE-->
        <div class="row col-11 justify-between q-mt-xs">
            <p class="col-8 alert-title">Editar Evento:</p>
            <i class="col-1 fas fa-times close-alert q-mt-sm" style="color: #52575d"></i>
        </div>
        <!--FORM-->
        <div class="row col-12 justify-around q-mb-md">
            <!--NAME-->
            <q-input placeholder="Nombre" class="col-11 alert-input" borderless></q-input>
            <!--DATE-->
            <q-input type="date" class="col-11 alert-input" borderless></q-input>
            <!--PRICE-->
            <q-input placeholder="Precio" class="col-11 alert-input" borderless></q-input>
            <!--DESCRIPTION-->
            <textarea
              placeholder="Descripción"
              rows="3"
              class="alert-input text-area col-11"
              ></textarea>
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
    height: 380px;
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
  margin-bottom: 5px;
  padding: 0 5px 0 14px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;
  background-color: #f2f2f2;
  border-radius: 20px;
}

.text-area {
  height: 90px !important;
  padding: 8px 16px;
  overflow: auto;
  outline: none;
  border: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none; /*remove the resize handle on the bottom right*/
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
