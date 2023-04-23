<template>
    <div class="menu-list-item">
        <div>{{title}}</div>
    </div>
</template>

<script>
  export default {
    name: "MenuListItem",
    data() {
      return {

      }
    },
    props: {
      // 标题
      title: {
        type: String,
        required: true,
      },
      // 标题图片
      avatar: {
        type: String,
        required: true,
      }
    },
  }
</script>

<style scoped lang="scss">
    .menu-list-item {
        width: 100%;
        height: 50px;
        font-weight: 500;
        color: #4aaf51;
    }
</style>