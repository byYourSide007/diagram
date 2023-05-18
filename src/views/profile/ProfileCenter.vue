<template>
    <div class="profile">
        <a href="/" class="to-home">首页</a>
        <div class="profile-header">
            {{title}}
        </div>
        <div class="menu">
            <div class="left-menu">
                <menu-list>
                    <menu-list-item v-for="(item, index) in leftMenuList"
                                    :key="index"
                                    :title="item.title"
                                    @click="isChecked(item.title, item.route)"
                                    :is-checked="item.title === checkedTitle">
                        <template #avatar>
                            <img :src="item.avatar" alt="#" style="width: 38px">
                        </template>
                    </menu-list-item>
                </menu-list>
            </div>

            <div class="right-stage">
                <router-view></router-view>
            </div>
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
        title: '个人中心', // 显示的文本标题
        leftMenuList: [
          {
            title: '个人中心', //
            route: 'message',
            avatar: 'http://121.4.13.126:3009/img/Profile.svg', // 头像地址
          },
          {
            title: '图纸', //
            route: 'blueprint',
            avatar: 'http://121.4.13.126:3009/img/blueprint.svg', // 头像地址
          },
          {
            title: "帮助",
            route: "help",
            avatar: "http://121.4.13.126:3009/img/help.svg"
          },
          {
            title: '设置', //
            route: 'settings',
            avatar: 'http://121.4.13.126:3009/img/setting.svg', // 头像地址
          },
        ],
        checkedTitle: '个人中心'
      }
    },
    methods: {
      // 用于切换被选中的选项
      isChecked(title, route) {
        console.log(route)
        if (route === 'message') {
          this.$router.push('/profile')
        }else {
          this.$router.push('/profile/'+ route)
        }
        this.title = title;
        this.checkedTitle = title;
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

        display: flex;
        flex-flow: column nowrap;

        .profile-header {
            height: 50px;
            background-color: #f7f7f7;

            /* 设置文本样式 */
            text-align: center;
            line-height: 50px;
            font-weight: 700;
            font-size: 17px;
            border-bottom: 1px solid #e6e7e9;
            a {
                text-decoration: none;

            }
        }

        .menu {
            width: 100%;
            height: 100%;

            display: flex;
            .left-menu {

            }
        }
        .right-stage {
            width: 100%;
        }
        .to-home {
            position: absolute;
            text-decoration: none;
            font-weight: 600;

            margin-left: 60px;
            margin-top: 15px;
        }
    }
</style>