<template>
    <div class="right_stage">
<!--        右侧操作台-->
            <v-stage :config="config" ref="stage">
                <v-layer ref="layer">
                        <v-shape v-for="(item, index) in compsElectricListComputed"
                                 :key="index"
                                 :config="item"
                                 :transformable="true"
                                 @click="shapeItemClick"
                                 />
                    <v-transform ref="transformer"></v-transform>
                </v-layer>
            </v-stage>
    </div>
</template>

<script>
  import Konva from 'konva'
  export default {
    name: "RightStage",
    data() {
      return {
        config: {
          width: 1000,
          height: 1000
        },
        arr: []
      }
    },
    props: {
      // 当点击左侧菜单栏的某个电气元件，传递过来的内容
      compsElectricList: {
        type: Array,
      }
    },
    computed: {
      // 将从左侧菜单栏点击后
      compsElectricListComputed() {
        let arr = this.compsElectricList
        if (arr.length === 0) {
          return []
        }

        arr.forEach(item => {
          // 定义初始位置
          item.x = 100;
          item.y = 100;
          // 让图形可以背拖动
          item.draggable = true;
          // 让图形可以被控制大小
          item.width = 300;
          item.height = 200;

          // item.fill = '#000';
          item.strokeWidth = 1;

          item.resizeEnabled = true;
          // item.resizeSnapTolerance = 5;
          // item.resizeSnapToGrid = true;
          // item.snapToGrid = [10, 10];
          // 拖动锚点时保持纵横比
          item.keepRatio = true;
          // 锚点样式
          item.anchorStroke = 'black';
          item.anchorFill = '#000';
          item.anchorSize =  100;
        })
        console.log(arr)
        return arr
      }
    },
    methods: {
      // shapeItemClick(e) {
      shapeItemClick() {
        const shapeNodes = this.$refs.stage.getStage().find(".konvajs_shape");
        let tr = new Konva.Transformer();
        tr.nodes([shapeNodes[0]])
      },
    },
  }
</script>

<style scoped lang="scss">
    .right_stage {
        width: calc(100vw - 363px - 2px);
        height: calc(100% - 2px);
        background-color: #fff;
        border: 1px solid #eee;
        overflow: auto;/*生成滚动条*/
    }
    iframe {
        border: 1px solid black;
        width: 100%;
    }
</style>