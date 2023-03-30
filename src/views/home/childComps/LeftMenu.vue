<template>
    <div class="left_menu">
        <!-- 搜索框（保留项目） -->
        <div class="search">
            <input type="text" placeholder="Search"><span>搜索</span>
        </div>
        <!-- 展示电气原件 -->
        <div class="electrical_components">
            <collapse-list title="开关元件"
                           :height_stage="350"
                           :component-list="circuitSwitch"/>

<!--            <collapse-list title="高压元件"-->
<!--                           :component-list="HighVoltageComponents"/>-->
<!--            &lt;!&ndash; 第一组电气元件 &ndash;&gt;-->
<!--            <collapse-list title="基础原件"-->
<!--                           :componentList="transformer"/>-->


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
        // 渲染数据
        transformer: [], // 基础元件
        HighVoltageComponents: [], // 高压元件
        circuitSwitch: [], // 开关元件
      }
    },
    components: {
      CollapseList, // 列表
      // CollapseListItem, // 列表项
    },
    methods: {
      // 绘制开关
      drawCircuitSwitch() {
        //  第一行
        this.circuitSwitch[0] = new DrawCanvas (10, 30, "#000").drawFuseSwitchOff()  // 熔断器开关断开状态
        this.circuitSwitch[1] = new DrawCanvas (100, 30, "#000").drawContactorPointOff() //熔断器开关闭合状态
        this.circuitSwitch[2] = new DrawCanvas (190, 30, "#000").drawContactorPointOn() //接触器断点开关闭合状态
        //  第二行
        this.circuitSwitch[3] = new DrawCanvas (10, 100, "#000").drawLoadIsoSwitchOff() // 负荷隔离开关断开状态
        this.circuitSwitch[4] = new DrawCanvas (100, 100, "#000").drawLoadIsoSwitchOn() //负荷隔离开关闭合状态
        this.circuitSwitch[5] = new DrawCanvas (210, 100, "#000").drawIsoLateSwitchOff() //隔离开关断开状态
        // 第三行
        this.circuitSwitch[6] = new DrawCanvas (10, 170, "#000").drawIsoLateSwitchOn() //隔离开关闭合状态
        this.circuitSwitch[7] = new DrawCanvas (100, 170, "#000").drawElecLeakSwitchOff() //漏电短路器开关断开状态
        this.circuitSwitch[8] = new DrawCanvas (200, 170, "#000").drawElecLeakSwitchOn() //漏电短路器开关闭合状态
        // 第四行
        this.circuitSwitch[9] = new DrawCanvas (10, 230, "#000").drawCircuitBreakerSwitchOff() //漏电短路器开关闭合状态
        this.circuitSwitch[10] = new DrawCanvas (100, 230, "#000").drawCircuitBreakerSwitchOn() //断路器开关闭合状态
        this.circuitSwitch[11] = new DrawCanvas(200, 230, '#000').drawDrawerLineOff() // 抽屉式段路线断开状态
        // 第五行
        this.circuitSwitch[12] = new DrawCanvas(10, 300, '#000').drawDrawerLineOn() // 抽屉式段路线闭合状态

        // 将函数类型的键值转换为字符串类型
        const arrString = JSON.stringify(this.circuitSwitch, function(key, value) {
          if (typeof value === 'function') {
            return value.toString();
          }
          return value;
        });
        console.log(arrString)
      },
      // 绘制高压元件
      drawHighVoltageComponents() { // 绘制高压元件
        this.HighVoltageComponents[0] = new DrawCanvas(0, 50, '#000').drawWatt_hourMeter() //电表
        this.HighVoltageComponents[1] = new DrawCanvas(110, 50, '#000').drawCoil() //线圈
        this.HighVoltageComponents[2] = new DrawCanvas(230, 20, '#000').drawCapacitorBank() // 电容器组
        // 第二行
        this.HighVoltageComponents[3] = new DrawCanvas(0, 120, '#000').drawLightningArrest() // 避雷器
        this.HighVoltageComponents[4] = new DrawCanvas(110, 120, '#000').drawLiveShow() // 带电显示
        this.HighVoltageComponents[5] = new DrawCanvas(200, 120, '#000').drawThreeItemTransformer() // 三向变压器
        // 第三行
        this.HighVoltageComponents[6] = new DrawCanvas(0, 180, '#000').drawReactance() // 电抗器

      },
      // 基础元件
      drawElectricalComponents() {
          // 绘制变压器
          const transformer = new DrawCanvas (0, 30, "#000").drawCoil()
          transformer.draggable = false
          this.transformer[0] = transformer
          // 第一行
          this.transformer[1] = new DrawCanvas (80, 30, "#000").drawLeftResistance() // 左侧是电阻
          this.transformer[2] = new DrawCanvas (190, 30, "#000").drawCirclePower() // 接地线
          // 第二行
          this.transformer[3] = new DrawCanvas (0, 100, "#000").drawMiddleResistance()  // 电阻
          this.transformer[4] = new DrawCanvas (230, 150, "#000").drawThreeRound() // 三个圆
          this.transformer[5] = new DrawCanvas (230, 150, "#000").drawLineGreen()  // 线条
          // 第三行
          this.transformer[6] = new DrawCanvas (10, 150, "#000").drawSingleArrow()  // 带箭头的线
          this.transformer[7] = new DrawCanvas (80, 180, "#000").drawTransformer()  // 变压器
          this.transformer[8] = new DrawCanvas (180, 180, "#000").drawFuseSwitchOff()  // 熔断器开关断开状态
          // 第四行
          this.transformer[9] = new DrawCanvas (10, 230, "#000").drawFuseSwitchOn() //熔断器开关闭合状态
          this.transformer[10] = new DrawCanvas (120, 230, "#000").drawContactorPointOff() //熔断器开关闭合状态
          this.transformer[11] = new DrawCanvas (220, 230, "#000").drawContactorPointOn() //接触器断点开关闭合状态
          // 第五行
          this.transformer[12] = new DrawCanvas (10, 280, "#000").drawLoadIsoSwitchOff() //负荷隔离开关断开状态
          this.transformer[13] = new DrawCanvas (110, 280, "#000").drawLoadIsoSwitchOn() //负荷隔离开关闭合状态
          this.transformer[14] = new DrawCanvas (210, 280, "#000").drawIsoLateSwitchOff() //隔离开关断开状态
          // 第六行
          this.transformer[15] = new DrawCanvas (10, 330, "#000").drawIsoLateSwitchOn() //隔离开关闭合状态
          this.transformer[16] = new DrawCanvas (100, 330, "#000").drawElecLeakSwitchOff() //漏电短路器开关断开状态
          this.transformer[17] = new DrawCanvas (200, 330, "#000").drawElecLeakSwitchOn() //漏电短路器开关闭合状态
          // 第七行
          this.transformer[18] = new DrawCanvas (10, 370, "#000").drawCircuitBreakerSwitchOff() //漏电短路器开关闭合状态
          this.transformer[19] = new DrawCanvas (100, 370, "#000").drawCircuitBreakerSwitchOn() //断路器开关闭合状态
          this.transformer[20] = new DrawCanvas (210, 370, "#000").drawSelfTransformer() //互感器
          this.transformer[21] = new DrawCanvas (260, 370, "#000").drawPower() // 电源开关
          // 第八行
          this.transformer[22] = new DrawCanvas (10, 420, "#000").drawVoltmeter() // 电压表
          this.transformer[23] = new DrawCanvas (100, 420, "#000").drawCapacitorConfig() // 电容器函数
          this.transformer[24] = new DrawCanvas (130, 410, "#000").drawBuzzer() // 蜂鸣器
          this.transformer[25] = new DrawCanvas (180, 420, "#000").drawAmmeter() // 电流表
          // 第九行
          this.transformer[26] = new DrawCanvas (10, 480, "#000").drawDoublePowerSwitchAllOff() // 双电源开关闭合
          this.transformer[27] = new DrawCanvas (100, 480, "#000").drawDoublePowerSwitchLeftOn() // 双电源开关打开
          this.transformer[28] = new DrawCanvas (200, 480, "#000").drawDoublePowerSwitchRightOn() // 双电源开关打开
          // 第十行
          this.transformer[29] = new DrawCanvas (10, 550, "#000").drawDoublePowerSwitchAllOn() // 双电源开关打开
          this.transformer[30] = new DrawCanvas (120, 550, "#000").drawResistance() // 电阻
          this.transformer[31] = new DrawCanvas (190, 550, "#000").drawLightning() // 避雷器
          // 第十一行
          this.transformer[32] = new DrawCanvas (10, 600, "#000").drawGroundWire() // 地线
          this.transformer[33] = new DrawCanvas (80, 600, "#000").drawFuse() // 熔断器

        },


    },
    created() {
      // 创建变压器
      this.drawElectricalComponents()
      this.drawHighVoltageComponents()
      this.drawCircuitSwitch()
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