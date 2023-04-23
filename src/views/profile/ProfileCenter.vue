<template>
    <div class="profile">
        <div class="profile-header">
            Profile
        </div>
        <div class="left-menu">

        </div>
        <menu-list>
            <menu-list-item
                    v-for="(item, index) in leftMenuList"
                    :key="index"
                    :title="item.title"
                    :avatar="item.avatar"></menu-list-item>
        </menu-list>
        <div class="right-stage">

        </div>
    </div>
</template>

<script>
    import MenuList from "@/components/menu-list/MenuList";
    import MenuListItem from "@/components/menu-list/MenuListItem";
  export default {
    name: "ProfileCenter",
    data() {
      return {
        title: '', // 显示的文本标题
        leftMenuList: [
          {
            title: '个人中心', //
            avatar: '', // 头像地址
          },
          {
            title: '图纸', //
            avatar: '', // 头像地址
          },
          {
            title: '设置', //
            avatar: '', // 头像地址
          },
        ]
      }
    },
    components: {
      MenuList,
      MenuListItem
    }
  }
</script>

<style scoped lang="scss">
    .profile {
        position: relative;
        width: calc(684px + 275px);
        height: calc(100vh - 3px);
        margin: 0 auto;
        overflow-y: hidden;
        background-color: #eee;
        border: 1px solid #e6e7e9;
        .profile-header {
            height: 50px;
            background-color: #f7f7f7;

            /* 设置文本样式 */
            text-align: center;
            line-height: 50px;
            font-weight: 700;
            font-size: 17px;
            border-bottom: 1px solid #e6e7e9;
        }
    }
</style>