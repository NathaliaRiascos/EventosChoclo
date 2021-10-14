<template>
  <div class="row justify-around tiny-event-container q-my-md">
    <!--IMAGE-->
    <q-img style="cursor: pointer;" @click="viewEvent" class="col-3 tiny-event-img"></q-img>
    <!--DATA-->
    <div class="col-6">
        <p style="cursor: pointer;" @click="viewEvent" class="tiny-event-title">{{event.event_name}}</p>
        <p style="cursor: pointer;" @click="viewEvent" class="tiny-event-text">{{event.event_date}}</p>
        <p style="cursor: pointer;" @click="viewEvent" class="tiny-event-text">{{event.event_shows}} shows</p>
    </div>
      <div class="row col-2 justify-around items-center">
        <!--ACTION BUTTONS-->
        <div v-if="type">
          <q-icon @click="editEvent" name="fas fa-pen tiny-event-icon q-pr-sm" style="color: #color: #52575d" />
          <q-icon @click="deleteEvent" name="fas fa-trash tiny-event-icon" style="color: #eb4335" />
        </div>
        <!--STATE MESSAGE-->
        <div v-else>
          <div class="col-2 tiny-status" :class="[active ? 'tiny-active' : 'tiny-inactive']">
            <p class="ma">{{active ? "Activo" : "Finalizado"}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TinyEvent',
  props: {
    event: {
      type: Object
    },
    type: {
      type: Boolean
    }
  },
  methods: {
    editEvent () {
      this.$emit('editEvent', this.event)
    },
    deleteEvent () {
      this.$emit('deleteEvent', this.event)
    },
    viewEvent () {
      this.$emit('viewEvent', this.event)
    }
  }
}
</script>

<style>
.tiny-event-container {
  height: 80px !important;
}

.tiny-event-img {
  width: 80px !important;
  height: 80px !important;
  background-color: #e5e5e5;
  border-radius: 10px;
}

.tiny-event-title {
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #41444b;
}

.tiny-event-text {
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #787878;
  line-height: 20px;
}

.tiny-event-icon {
  font-size: 18px;
}

.tiny-status {
  height: 40px;
  margin-right: 10px;
  padding: 0px 10px;
  display: flex;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  border: 1px solid;
  border-radius: 20px;
}

.tiny-active {
  border-color: #34a853;
  color: #34a853;
}

.tiny-inactive {
  border-color: #EB4335;
  color: #EB4335;
}
</style>
