<template>
    <div class="menu-list-item"
         :style="{'border-left': isChecked?'3px solid red':''}">
        <div class="avatar">
            <slot name="avatar"></slot>
        </div>
        <div class="title">{{title}}</div>

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
      // // 标题图片
      // avatar: {
      //   type: String,
      //   required: true,
      // },
      // 确定是否选择本选项
      isChecked: {
        type: Boolean,
        required: true,
        default: false
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
        padding: 8px 0 0 75px;

        display: flex;
        line-height: 42px;
        border-bottom: 3px solid #f7f7f7;

        transition: all .3s;
        &:hover {
            background-color: #F7F7F7;
        }
        .title {
            margin-left: 5px;
        }

    }
</style>