<template>
  <div class="row full-width justify-around">
    <div v-if="$q.screen.lt.md" class="row col-12 justify-around">
      <q-tabs v-model="tab" class="col-11 q-mt-md">
        <q-tab name="users" class="col-6">
          <p class="title-text">Usuarios</p>
        </q-tab>
        <q-tab name="banned" class="col-6">
          <p class="title-text">Baneados</p>
        </q-tab>
      </q-tabs>
    </div>
    <q-tab-panels v-model="tab" class="row col-12 justify-around">
      <q-tab-panel name="users" class="row col-12 justify-around">
        <UsersTable class="col-md-5 col-sm-11 q-mt-lg"/>
        <div v-if="$q.screen.gt.sm" class="row col-md-5 col-sm-11">
          <BannedUsers class="col-12 q-mt-lg"/>
        </div>
      </q-tab-panel>
      <q-tab-panel name="banned" class="row col-12 justify-around">
        <BannedUsers class="col-md-5 col-sm-11 q-mt-lg"/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import UsersTable from '../components/UsersTable.vue'
import BannedUsers from '../components/BannedUsers.vue'

export default {
  name: 'UsersManagement',
  components: {
    UsersTable,
    BannedUsers
  },
  data () {
    return {
      tab: 'users'
    }
  }
}
</script>

<style scoped>

</style>
