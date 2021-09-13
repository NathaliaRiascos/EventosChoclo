<template>
    <div class="row justify-around">
      <!--TITLE-->
      <p v-if="$q.screen.gt.sm" class="col-12 title-text q-mt-lg">Usuarios</p>
      <!--SEARCH BAR-->
      <div class="row col-12 justify-start">
        <UserSearchBar class="col-md-5 col-xs-11"/>
      </div>
      <!--TABLE HEADER-->
      <div v-if="$q.screen.gt.sm" class="row col-12 justify-around table-header q-mt-xl q-py-sm">
        <div class="col-2 table-title-font q-pl-sm">Cédula</div>
        <div class="col-4 table-title-font">Nombre</div>
        <div class="col-5"></div>
      </div>
      <!--TABLE BODY-->
      <div class="row col-12 justify-start table-body q-mt-lg">
        <UsersTableInstance
          class="col-12"
          v-for="user in users"
          :key="user.id"
          v-bind="user"/>
      </div>
    </div>
</template>

<script>
import UserSearchBar from './UserSearch.vue'
import UsersTableInstance from './UsersTableInstance.vue'

export default {
  name: 'UsersTable',
  components: {
    UserSearchBar,
    UsersTableInstance
  },
  data () {
    return {
      users: [
        {
          id: 111222,
          name: 'Juanito alicante',
          email: 'juanito.alicante@gmail.com',
          phone: 3178881122
        },
        {
          id: 666777,
          name: 'María Pepa',
          email: 'maria.pepa@gmail.com',
          phone: 3178883344
        },
        {
          id: 888999,
          name: 'José José Ramirez',
          email: 'jose.ramirez@gmail.com',
          phone: 3178885566
        }
      ]
    }
  }
}
</script>

<style scoped>
.table-header {
  background-color: #f2f2f2;
}

.table-body {
  background-color: #f2f2f2;
}
</style>
