<template>
    <div class="sides_menu">
<!--    <div id="sides_menu">-->
        <!-- 左侧显示内容 -->
        <div class="left_side"><slot name="left"></slot></div>
        <div class="center"/><!-- 占位 -->
        <!-- 右侧显示内容 -->
        <div class="right_side" @click="showHeaderMenu">
                <slot name="right"></slot>
            <!-- 显示的菜单 -->
<!--            <div class="list_menu" :style="{display: isClickHeader?afterLoginShowList:'none'}">-->
<!--            <div class="list_menu" :style="{display: afterLoginShowList}">-->
            <div class="list_menu" :style="{display: this.isClickHeader?(this.haveLogin?'none':'block'):'none'}">
                <div class="list_menu_item" @click="loginProfile">登录</div>
                <div class="list_menu_item">注册</div>
            </div>
<!--            <div class="list_menu" :style="{display: haveLogin?'none':'block'}">-->
            <div class="list_menu" :style="{display: this.isClickHeader?(this.haveLogin?'block':'none'):'none'}">
                <div class="list_menu_item">个人中心</div>
                <div class="list_menu_item">退出</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SidesMenu",
    data() {
      return {
        isClickHeader: false, // 确定是否点击头像，默认为未点击，也就是 false
        // isClickHeader: true, // 确定是否点击头像，默认为未点击，也就是 false
      }
    },
    computed: {
      haveLogin() {
        // return true; // 测试用
        return this.$store.state.isLogin;
      },
      afterLoginShowList() {
        // return this.haveLogin?'block':'none'

        // return this.isClickHeader?(this.haveLogin?'block':'none'):'none'
        return this.isClickHeader?(this.haveLogin?'block':'none'):'none'
      }
    },
    methods: {
      // 点击头像后所触发的点击事件，用于显示菜单
      showHeaderMenu() {
        this.isClickHeader = !this.isClickHeader;
      },
      // 点击头像后显示的菜单栏，其中的登录按钮点击后触发该事件，用于跳转到登录界面
      loginProfile() {
        this.$router.push('/login')
      },
    },
  }
</script>

<style scoped lang="scss">
    .sides_menu {
        /* 自身属性 */
        display: flex;
        flex-flow: row nowrap;
        position: relative;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e6e6e6;
        /* 左侧内容区 */
        .left_side {
            /* 自身属性 */
            display: flex;
            height: 42px;
            padding-left: 10px;
            margin-top: 4px;
        }
        /* 居中占位 */
        .center {flex: 1;}
        /* 右侧内容 */
        .right_side {
            position: relative;
            display: flex;
            flex-flow: column nowrap;
            margin-right: 10px;
            .list_menu {/* 显示的菜单栏 */
                /* 自身位置 */
                position: absolute;
                /*position: relative;*/
                top: 53px;
                right: 5px;
                /* 自身样式 */
                padding: 5px 0 8px;
                /* 定位子元素 */
                display: flex;
                flex-flow: column nowrap;
                text-align: left;
                margin-right: 14px;
                border: 1px solid #eee;
                border-radius: 5px;
                overflow: hidden;
                :before { /* 设置三角形 */
                    content: "";
                    position: absolute;
                    top: -10px;
                    left: 10px;
                    width: 0;
                    height: 0;border-style: solid;
                    border-width: 0 10px 10px 10px;
                    border-color: #f2f2f2;
                }
                .list_menu_item {
                    width: 100%;
                    padding: 5px 57px 3px 17px;
                    &:hover {
                        color: purple;
                        background-color: #eee;
                    }
                }
            }
        }
    }
</style>