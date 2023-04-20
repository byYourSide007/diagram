<template>
  <div class="home">
    <!-- 顶部菜单栏 -->
    <top-menu/>

    <div class="home_content">
      <!-- 左侧菜单栏区域 -->
      <left-menu @showInRightStage="showRightStage"/>
      <!-- 右侧操作台区域-->
      <right-stage :compsElectricList="compsElectricList"/>
    </div>
  </div>
</template>

<script>

import LeftMenu from "@/views/home/childComps/LeftMenu";
import RightStage from "@/views/home/childComps/RightStage";
import TopMenu from "@/components/content/topMenu/TopMenu";
export default {
  name: 'HomeView',
  data() {
    return {
      compsElectricList: [],// 保存往右侧显示区域传递的电气元件数据
    }
  },
  components: {
    LeftMenu, // 左侧菜单栏
    RightStage, // 右侧操作台
    TopMenu
  },
  methods: {
    // 往右侧组件中传递数据，由左侧菜单栏点击 canvas 图片触发事件
    showRightStage(load) {
      // this.compsElectricList.append(load);
      // this.compsElectricList[0] = load;
      this.compsElectricList.push(load);

    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    .home_content {
      display: flex;

      width: 100vw;
      /*height: calc(100vh - 50px);*/
      height: calc(100vh - 50px - 1px);/* 减去顶部高度！减去 border 宽度？*/
    }

  }


</style>
