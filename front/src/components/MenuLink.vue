<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
    class="item_container"
  >
    <!--ICON-->
    <q-item-section
      v-if="icon"
      avatar
      class="item_content"
    >
      <q-icon :name="icon" />
    </q-item-section>
    <!--TITLE -->
    <q-item-section class="item_content">
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

.item_content {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #404040;
}

.item_container:hover {
  background: #404040;
  border-radius: 10px;
}

.item_container:hover .item_content {
  font-weight: 700;
  color: #e5e5e5;
}

</style>
