<template>
    <div class="align_left_list">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "alignLeftList",
    props: {
      item_list: {
        type: Object,
      }
    }
  }
</script>

<style scoped>
    .align_left_list {
        display: flex;
        flex-flow: row wrap;
    }
</style>