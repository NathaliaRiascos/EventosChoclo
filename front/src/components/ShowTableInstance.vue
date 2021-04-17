<template>
    <div class="row instance-body">
        <div class="col-2 instance-font">{{number}}</div>
        <div class="col-2 instance-font">{{hour}}</div>
        <div class="col-4 instance-font">{{place}}</div>
        <div class="col-3 instance-font">{{seats}}</div>
        <div class="row col-1 instance-icons justify-start">
            <q-icon class="col-5" name="fas fa-pen" style="color: #52575D;"></q-icon>
            <q-icon class="col-5" name="fas fa-trash" style="color: #EB4335;"></q-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShowTableInstance',
  props: {
    number: {
      type: Number,
      required: true
    },
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

.instance-font {
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
}

.instance-icons {
  font-size: 16px;
}
</style>
