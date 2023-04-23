<template>
    <div class="right_stage" ref="container">
        <button @click="save">保存</button>
<!--        右侧操作台-->
        <v-stage :config="stageConfig"
                 ref="stage"
                 @mousedown="handleStageMouseDown"
                 @touchstart="handleStageMouseDown"
                 >
            <v-layer ref="layer">
                    <v-shape v-for="(item, index) in compsElectricListComputed"
                             :key="index"
                             :config="item"
                             @transformend="handleTransformEnd"
                             >
                      <v-circle :config="circleConfig"/>
                    </v-shape>
              <v-transformer ref="transformer" />
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
  import { sendStage } from '../../../request/home.js'
  export default {
    name: "RightStage",
    data() {
      return {
        circleConfig: {
          x: 0,
          y: 0,
          radius: 1,
          fill: 'transparent'
        },
        stageConfig: {
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
          item.width = 100;
          item.height = 100;

          // item.fill = '#000';
          item.strokeWidth = 1;

          item.offsetX = item.width / 2
          item.offsetY = item.height / 2
        })
        return arr
      }
    },
    methods: {
      // 转换图形相关的方法
      handleTransformEnd(e) {
        // shape is transformed, let us save new attrs back to the node
        // find element in our state
        // const rect = this.rectangles.find(
        const rect = this.compsElectricListComputed.find(
            (r) => r.name === this.selectedShapeName
        );
        // update the state
        rect.x = e.target.x();
        rect.y = e.target.y();
        rect.rotation = e.target.rotation();
        rect.scaleX = e.target.scaleX();
        rect.scaleY = e.target.scaleY();

        // change fill
        // rect.fill = Konva.Util.getRandomColor();
      },
      handleStageMouseDown(e) {
        // 单击舞台 - 清除选择
        if (e.target === e.target.getStage()) {
          this.selectedShapeName = '';
          this.updateTransformer();
          return;
        }

        // 点击 trans_former - 什么都不做
        const clickedOnTransformer = e.target.getParent().className === 'Transformer';
        if (clickedOnTransformer) {
          return;
        }

        // 按名称查找单击的矩形
        const name = e.target.name();
        const rect = this.compsElectricListComputed.find((r) => r.name === name);
        if (rect) {
          this.selectedShapeName = name;
        } else {
          this.selectedShapeName = '';
        }
        this.updateTransformer();
      },
      updateTransformer() {
        // 这里我们需要手动attach或者detach Transformer节点
        const transformerNode = this.$refs.transformer.getNode();
        const stage = transformerNode.getStage();
        const { selectedShapeName } = this;

        const selectedNode = stage.findOne('.' + selectedShapeName);
        // do nothing if selected node is already attached
        if (selectedNode === transformerNode.node()) {
          return;
        }

        if (selectedNode) {
          // attach to another node
          transformerNode.nodes([selectedNode]);
        } else {
          // remove transformer
          transformerNode.nodes([]);
        }
      },

      // 保存 stage 中的相关信息
      save() {
        // 查看是否登录，如果没有登录，则跳转到登录界面

        // 如果登录，则保存到该用户名下

        const stage = this.$refs.stage.getStage()
        const stageJSON = stage.toJSON()
        sendStage(stageJSON)
      }
    },
  }
</script>

<style scoped lang="scss">
    .right_stage {
        //width: calc(100vw - 363px - 2px);
      width: 100vw;
        height: calc(100% - 2px);
        background-color: #fff;
        border: 1px solid #eee;
        overflow: auto;/*生成滚动条*/
    }

</style>