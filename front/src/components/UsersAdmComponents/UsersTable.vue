<template>
    <div class="row justify-around">
      <!--TITLE-->
      <p v-if="$q.screen.gt.sm" class="col-12 title-text q-mt-lg">Usuarios</p>
      <!--SEARCH BAR-->
      <div class="row col-12 justify-start">
        <UserSearchBar @search="searchUsers" class="col-md-5 col-xs-11"/>
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
import UserService from '../../services/UserService'

export default {
  name: 'UsersTable',
  components: {
    UserSearchBar,
    UsersTableInstance
  },
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      try {
        if (localStorage.getItem('token')) {
          const params = {
            token: this.token
          }
          const request = await UserService.getUsers(params)
          this.users = request.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async searchUsers (val) {
      try {
        if (localStorage.getItem('token')) {
          const params = {
            token: this.token,
            search: val
          }
          const request = await UserService.searchUsers(params)
          this.users = request.data.data
        }
      } catch (error) {
        console.log(error)
      }
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
