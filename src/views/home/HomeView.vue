<template>
  <div class="home">
    <!-- 左侧菜单栏区域 -->
    <left-menu/>
    <!-- 右侧操作台区域-->
    <right-stage/>

  </div>
</template>

<script>

import LeftMenu from "@/views/home/childComps/LeftMenu";
import RightStage from "@/views/home/childComps/RightStage";

export default {
  name: 'HomeView',
  data() {
    return {

    }
  },
  components: {
    LeftMenu, // 左侧菜单栏
    RightStage, // 右侧操作台
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    width: 100vw;
    /*height: calc(100vh - 50px);*/
    height: calc(100vh - 50px - 1px);/* 减去顶部高度！减去 border 宽度？*/
  }


</style>
