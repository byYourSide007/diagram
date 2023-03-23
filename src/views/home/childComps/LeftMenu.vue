<template>
    <div class="left_menu">
        <!-- 搜索框（保留项目） -->
        <div class="search">
            <input type="text" placeholder="Search"><span>搜索</span>
        </div>
        <!-- 展示电气原件 -->
        <div class="electrical_components">
            <!-- 第一组电气元件 -->
            <collapse-list title="基础原件"
                           :componentList="transformer"/>
<!--                           :componentList="transformer[0]"/>-->

<!--            <collapse-list-item>-->
<!--                <template #image><img src="@/assets/electricalComps/1.png" alt="#"></template>-->
<!--                <template #text>高压元件</template>-->
<!--            </collapse-list-item>-->
        </div>
    </div>
</template>

<script>
  // 导入自定义组件
  // import CollapseListItem from "@/components/common/collapse/CollapseListItem";
  import CollapseList from "@/components/common/collapse/CollapseList";
  // 导入第三方组件
  import { DrawCanvas } from "@/utils/electricalComponents/toggleSwitch.js"
  export default {
    name: "LeftMenu",
    data() {
      return {
        // 变压器配置
        transformer: [],
        config: {
          sceneFunc: function (context, shape) {
            const x = 0;
            const y = 0;
            // 绘制前面的横线
            context.beginPath ()
            // context.strokeStyle = color
            context.moveTo (x, y)
            context.lineTo (x + 30, y)
            context.stroke ()
            // 绘制线圈的中间矩形
            context.beginPath ()
            context.moveTo (x + 22, y - 30)
            context.lineTo (x + 50, y - 30)
            context.lineTo (x + 50, y + 30)
            context.lineTo (x + 22, y + 30)
            context.closePath ()
            context.stroke ()
            // 绘制内部线条
            context.beginPath ()
            context.moveTo (x + 30, y)
            context.lineTo (x + 30, y + 15)
            context.lineTo (x + 42, y + 15)
            context.lineTo (x + 42, y)
            context.lineTo (x + 50, y)
            context.lineTo (x + 72, y)
            context.stroke ()
            // 绘制外层描边
            context.beginPath ()
            context.moveTo (x, y - 30)
            context.lineTo (x + 72, y - 30)
            context.lineTo (x + 72, y + 30)
            context.lineTo (x, y + 30)
            context.closePath ()
            context.fillStrokeShape (shape)
          },
          offsetX: 0,
          offsetY: 0,
          x: 20,
          y: 50,
          width: 72,
          height: 30,
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 2,
          funcName: 'drawCoil',
          name: 'coil',
        }
      }
    },
    components: {
      CollapseList, // 列表
      // CollapseListItem, // 列表项
    },
    methods: {
        drawElectricalComponents() {
          const drawSpecific = new DrawCanvas (0, 30, "#000")
          // 绘制变压器
          let transformer = drawSpecific.drawCoil()
          transformer.draggable = false
          this.transformer[0] = transformer

          const drawSpecific2 = new DrawCanvas (80, 30, "#000")
          // 绘制变压器
          let transformer2 = drawSpecific2.drawCoil()
          transformer2.draggable = false

          this.transformer[1] = transformer2
        }
    },
    created() {
      // 创建变压器
      this.drawElectricalComponents()
    }
  }
</script>

<style scoped lang="scss">
    .left_menu {
        position: relative;
        width: 363px;
        height: 100%;
        background-color: #fff;
        /* 搜索框 */
        .search {
            display: flex;
            height: 30px;
            line-height: 30px;
            /*width: 80%;*/
            input {
                height: 70%;
                width: 80%;
                margin-left: 15px;
                border-radius: 10px;
            }
            span {
                margin-left: 3px;
            }
        }
        /* 电气原件列表 */
        .electrical_components {
            position: relative;
            width: 100%;
            height: calc(100% - 30px);
            overflow: auto;/*生成滚动条*/
        }
    }
</style>