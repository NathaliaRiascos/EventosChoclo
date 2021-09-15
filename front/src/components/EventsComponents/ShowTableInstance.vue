<template>
    <div class="row justify-start instance-body">
        <div class="col-2 instance-font q-pl-xs">{{hour}}</div>
        <div class="col-5 instance-font">{{place}}</div>
        <div class="col-2 instance-font">{{seats}}</div>
        <div class="row col-3 justify-around">
          <q-icon class="col-5 instance-icon" name="fas fa-pen" style="color: #52575D;"></q-icon>
          <q-icon class="col-5 instance-icon" name="fas fa-trash" style="color: #EB4335;"></q-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShowTableInstance',
  props: {
    hour: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    seats: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.instance-body {
  background-color: #f2f2f2;
  border-top: 1px solid #ffffff;
  padding: 10px 0;
}

.instance-icon {
  font-size: 20px;
}
</style>
