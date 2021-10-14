<template>
  <div>
    <p class="col-12 subtitle-text">Buscar usuario</p>
    <q-input dense borderless v-model="searchContent" class="user-searchbar" placeholder="Buscar...">
      <template v-slot:append>
        <q-icon v-if="searchContent === ''" name="fas fa-search" class="us-sb-icon" />
        <q-icon v-else name="fas fa-times" class="us-sb-icon cursor-pointer" @click="searchContent = ''" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'UserSearchBar',
  data () {
    return {
      searchContent: ''
    }
  },
  watch: {
    searchContent (val) {
      this.$emit('search', val)
    }
  }
}
</script>

<style scoped>
.user-searchbar {
  height: 46px;
  padding: 0 15px;
  background-color: #F2F2F2;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: #787878;
  border-radius: 20px;
}

.us-sb-icon {
  color: #FDDB3A;
}
</style>
