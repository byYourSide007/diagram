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



    <div class="search" style="display: none">
      <div class="result_item"
           v-for="item in searchResult"
           :key="item.name">
        <span>全称：<span>{{item.name}}</span></span>
        <span>中文名称：<span>{{item.translate_name}}</span></span>
        <span>所属类别：<span>{{item.category}}</span></span>
      </div>
    </div>

  </div>
</template>

<script>

import LeftMenu from "@/views/home/childComps/LeftMenu";
import RightStage from "@/views/home/childComps/RightStage";
import TopMenu from "@/components/content/topMenu/TopMenu";
import Konva from 'konva';
export default {
  name: 'HomeView',
  data() {
    return {
      searchResult: [
        {
          "name": "transform",
          "translate_name": "变压器",
          "category": "高压元件"
        },
        {
          "name": "selfTransformer",
          "translate_name": "互感器",
          "category": "高压元件"
        },
        {
          "name": "threeItemTransformer",
          "translate_name": "三向变压器",
          "category": "高压元件"
        },
      ],
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
  },
  mounted() {
    this.compsElectricList.push(new Konva.Line({
      points: [0, 0, 100, 100],
      stroke: 'black',
      strokeWidth: 2
    }))
  }
}
</script>

<style scoped lang="scss">
  .home {
    position: relative;
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



    .search {
      position: absolute;
      background-color: #eee;
      width: 340px;
      height: 310px;
      opacity: .8;
      border: 1px solid #000;
      /*left: calc((100vw - 80vw) / 2);*/
      /*left: 363px;*/
      left: 5px;
      top: calc((100vw - 90vw) / 2 + 30px);
      border-radius: 15px;


      display: flex;
      flex-flow: column nowrap;

      .result_item {
        display: flex;
        flex-flow: column nowrap;
        font-weight: 600;
        background-color: #4aaf51;
        opacity: .95;
        margin: 5px 5px;
        padding: 5px 0 5px 7px;
        border-radius: 15px;
        span {
          padding: 3px 5px;
        }
      }
    }
</style>
