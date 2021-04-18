<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    class="item-container q-pt-lg q-pb-lg"
  >
    <!--ICON-->
    <q-item-section
      v-if="icon"
      avatar
      class="item-content"
    >
      <q-icon :name="icon" />
    </q-item-section>
    <!--TITLE -->
    <q-item-section class="item-content">
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

.item-content {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #FAFAFA;
}

.item-container:hover {
  background: #FDDB3A;
  border-radius: 10px;
}

.item-container:hover .item-content {
  font-weight: 700;
  color: #41444B;
}

</style>
