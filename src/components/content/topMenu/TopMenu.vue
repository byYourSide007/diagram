<template>
    <div class="top_menu">
        <sides-menu>
            <!-- 左侧内容区 -->
            <template #left>
                <!-- Logo 内容 -->
                <div class="logo">
                    <img src="@/assets/topSide/logo.jpg" alt="Logo" style="height: 100%">
                    <div class="logo_txt">
                        <p>Circuitry Blueprint</p>
                        <p>Online</p>
                    </div>
                </div>
                <!-- 文件管理 -->
                <div class="file_management"></div>
            </template>
            <!-- 右侧内容区 -->
            <template #right>
                <img :src="avatar"
                     alt="avatar"
                     style="height: 100%"
                     @click="showProfile">
            </template>
        </sides-menu>
    </div>
</template>

<script>
  import SidesMenu from "@/components/common/sidesMenu/SidesMenu";
  export default {
    name: "TopMenu",
    data() {
        return {
          avatar: this.$store.state.user_data.avatar?this.$store.state.user_data.avatar: 'http://121.4.13.126:3009/img/avatar.svg'
        }
    },
    components: {
      SidesMenu
    },
    methods: {
      showProfile() {

      }
    },
  }
</script>

<style scoped lang="scss">
    .top_menu {
        /*position: relative;*/
        width: 100%;
        background-color: #eee;
        /* 左侧内容区域传入的内容 */
        .logo {
            display: flex;
            background-color: #fff;
            border-radius: 10px;
            img {
                border-radius: inherit;
            }
            /* 文本部分 */
            .logo_txt {
                /* 定位属性 */
                display: flex;
                flex-flow: column nowrap;
                padding-left: 5px;
                vertical-align: center;
                /* 额外样式 */
                padding-right: 8px;
                border-right: 1px solid #e6e6e6;
                p {
                    height: 20px;
                    margin: 0;
                    font-weight: 800;
                }
            }
        }
    }
</style>