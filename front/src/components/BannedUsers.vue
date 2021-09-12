<template>
    <div class="row justify-around">
      <!--TITLE-->
      <p v-if="$q.screen.gt.sm" class="col-12 title-text q-mt-lg">Baneados</p>
      <!--SEARCH BAR-->
      <div class="row col-12 justify-start q-mb-xl">
        <UserSearchBar class="col-md-5 col-xs-11"/>
      </div>
      <!--BANNED USERS-->
      <BannedUsersInstance
        class="col-12"
        v-for="user in users"
        :key="user.id"
        v-bind="user"/>
    </div>
</template>

<script>
import UserSearchBar from '../components/UserSearch.vue'
import BannedUsersInstance from '../components/BannedUsersInstance.vue'

export default {
  name: 'BannedUsers',
  components: {
    UserSearchBar,
    BannedUsersInstance
  },
  data () {
    return {
      users: [{
        name: 'Juanchopancho Martinez',
        id: 123444
      },
      {
        name: 'Panchita la del Pueblo',
        id: 111234
      },
      {
        name: 'Andrés Zuluaga',
        id: 768111
      }]
    }
  }
}
</script>

<style scoped>

</style>
