<template>
    <div class="row justify-start instance-body">
        <div class="col-2 instance-font q-pl-xs">{{show.show_time}}</div>
        <div class="col-5 instance-font">{{show.show_place}}</div>
        <div class="col-2 instance-font">{{show.show_sits}}</div>
        <div class="row col-3 justify-around">
          <q-icon @click="editShow" class="col-5 instance-icon" name="fas fa-pen" style="color: #52575D;"></q-icon>
          <q-icon @click="deleteShow" class="col-5 instance-icon" name="fas fa-trash" style="color: #EB4335;"></q-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShowTableInstance',
  props: {
    show: {
      type: Object
    }
  },
  methods: {
    editShow () {
      this.$emit('editShow', this.show)
    },
    deleteShow () {
      this.$emit('deleteShow', this.show)
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
