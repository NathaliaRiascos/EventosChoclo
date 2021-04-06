<template>
    <div class="row delete-event-alert justify-around">
        <div class="row col-12 justify-end q-pa-none">
            <q-icon name="fas fa-times" class="col-2 close-alert" style="color: #52575d"></q-icon>
        </div>
        <p class="col-10 delete-text">¿Estás seguro que deseas eliminar este evento?</p>
        <q-btn label="Cancelar" class="col-5 alert-btn alert-cancel" size="16px"></q-btn>
        <q-btn label="Eliminar" class="col-5 alert-btn alert-confirm" size="16px"></q-btn>
    </div>
</template>
<script>
export default {
}
</script>

<style>
.delete-event-alert {
    width: 283px;
    height: 186px;
    position: absolute;
    top: 35%;
    right: 35%;

    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
}

.close-alert {
    font-weight: 300;
    font-size: 32px;
}

.delete-text {
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
}

.alert-btn {
    height: 44px !important;
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
