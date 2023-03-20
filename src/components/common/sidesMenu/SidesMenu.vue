<template>
    <div class="sides_menu">
<!--    <div id="sides_menu">-->
        <!-- 左侧显示内容 -->
        <div class="left_side"><slot name="left"></slot></div>
        <div class="center"/><!-- 占位 -->
        <!-- 右侧显示内容 -->
        <div class="right_side"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "SidesMenu"
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
            margin-right: 10px;
        }
    }
</style>