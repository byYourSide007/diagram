<template>
    <div class="left_menu">
        <!-- 搜索框（保留项目） -->
<!--        <div class="search">-->
<!--            <input type="text" placeholder="Search">-->
<!--          <button>搜索</button>-->
<!--        </div>-->
      <search-view/>
        <!-- 展示电气原件 -->
        <div class="electrical_components">
<!--            <collapse-list title="电阻"-->
<!--                           :height_stage="130"-->
<!--                           :component-list="resistance"/>-->
<!--            <collapse-list title="电源"-->
<!--                           :height_stage="190"-->
<!--                           :component-list="power"/>-->
<!--            <collapse-list title="仪器"-->
<!--                           :height_stage="140"-->
<!--                           :component-list="instruments"/>-->
<!--            <collapse-list title="高压元件"-->
<!--                           :height_stage="230"-->
<!--                           :component-list="HighVoltageComponents_r"/>-->
<!--            <collapse-list title="开关元件"-->
<!--                           :height_stage="350"-->
<!--                           :component-list="circuitSwitch_r"/>-->

            <collapse-list v-for="el in electricListComps"
                           :key="el.id"
                           :title="el.title"
                           :height_stage="el.height"
                           :component-list="el.list"
                           @setElectricComp="setElectricComp"/>

<!--             第一组电气元件 -->
<!--            <collapse-list title="基础原件"-->
<!--                           :height_stage="950"-->
<!--                           :componentList="transformer"/>-->

        </div>
    </div>
</template>

<script>
  // 导入第三方组件
  import { DrawCanvas } from "@/utils/electricalComponents/toggleSwitch.js"
  // 导入自定义组件
  import CollapseList from "@/components/common/collapse/CollapseList";
  import { eComps } from "@/request/home";
  import SearchView from "@/views/home/childComps/SearchView";

  export default {
    name: "LeftMenu",
    data() {
      return {
        electricListComps: [],// 左侧菜单栏存储的数据

        // 渲染数据
        transformer: [], // 基础元件
        HighVoltageComponents: [], // 高压元件
        HighVoltageComponents_r: [], // 高压元件
        circuitSwitch: [], // 开关元件
        circuitSwitch_r: [],
        instruments: [], // 仪器
        power: [], // 绘制电源
        resistance: [],// 绘制电阻
      }
    },
    components: {
      SearchView,
      CollapseList, // 列表
    },
    methods: {
      // 从后端获取电气元件所有信息
      getElectricComps() {
        eComps().then((res) => {
          // console.log(res)
          const { data } = res;
          // const test = data[0].list;
          // console.log(typeof test)
          this.electricListComps = data;
        })
      },
      // 如果点击了电气元件，则从左侧菜单栏向右端传递信息
      setElectricComp(comp) {
        this.$emit("showInRightStage", comp);
      },




      // 绘制电源
      drawPower() {
        this.power[0] = new DrawCanvas (15, 50, "#000").drawDoublePowerSwitchAllOn() // 双电源开关打开
        this.power[1] = new DrawCanvas (120, 50, "#000").drawDoublePowerSwitchLeftOn() // 双电源开关打开
        this.power[2] = new DrawCanvas (230, 50, "#000").drawDoublePowerSwitchRightOn() // 双电源开关打开
        this.power[3] = new DrawCanvas (15, 130, "#000").drawDoublePowerSwitchAllOff() // 双电源开关打开
        this.power[4] = new DrawCanvas (125, 130, "#000").drawCirclePower() //
        this.power[5] = new DrawCanvas (240, 130, "#000").drawPower() // 电源开关

        // 将函数类型的键值转换为字符串类型
        const arrString = JSON.stringify(this.power, function(key, value) {
          if (typeof value === 'function') {
            return value.toString();
          }
          return value;
        });
        // console.log(arrString)
        this.power = this.strToConfig(arrString)
      },

      // 绘制电阻
      drawResistance() {
        this.resistance[0] = new DrawCanvas (15, 30, "#000").drawLeftResistance() // 左侧是电阻
        this.resistance[1] = new DrawCanvas (120, 30, "#000").drawMiddleResistance()  // 电阻
        this.resistance[2] = new DrawCanvas (240, 30, "#000").drawResistance() // 电阻
        this.resistance[3] = {
          x: 15,
          y: 90,
          sceneFunc: (context) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(20, 0);
            context.lineTo(25, -5);
            context.lineTo(30, 5);
            context.lineTo(35, -5);
            context.lineTo(40, 5);
            context.lineTo(45, -5);
            context.lineTo(50, 5);
            context.lineTo(55, -5);
            context.lineTo(60, 0);
            context.lineTo(75, 0);
            context.stroke();
          },
          draggable: true,

          fill: '#000',
          // stroke: 'black',
          strokeWidth: 1
        }
        const arrString = JSON.stringify(this.resistance, function(key, value) {
          if (typeof value === 'function') {
            return value.toString();
          }
          return value;
        });
        // console.log(arrString)
        this.resistance = this.strToConfig(arrString)
      },
      // 绘制保险丝

      // 绘制仪器
      drawInstruments() {
        this.instruments[0] = new DrawCanvas (20, 30, "#000").drawVoltmeter() // 电压表
        this.instruments[1] = new DrawCanvas (120, 30, "#000").drawAmmeter() // 电流表
        // 示波器
        this.instruments[2] = {
          x: 240, // 起始点横坐标
          y: 13, // 起始点纵坐标
          scaleX: 0.6, // 宽度缩小40%
          scaleY: 0.7, // 高度适当缩小
          sceneFunc: function(context) {
            // 在画布上绘制示波器图形
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(100, 0);
            context.lineTo(100, 50);
            context.lineTo(0, 50);
            context.closePath();
            context.moveTo(50, 0);
            context.lineTo(50, 50);
            context.strokeShape(this);
            // 绘制突出的两条连接线
            context.beginPath();
            context.moveTo(-20, 25);
            context.lineTo(0, 25);
            context.closePath();
            context.stroke();
            context.beginPath();
            context.moveTo(100, 25);
            context.lineTo(120, 25);
            context.closePath();
            context.stroke();
            // 绘制模拟显示的电波
            context.beginPath();
            context.moveTo(0, 25);
            context.lineTo(10, 30);
            context.lineTo(20, 20);
            context.lineTo(30, 25);
            context.lineTo(40, 40);
            context.lineTo(50, 10);
            context.lineTo(60, 25);
            context.lineTo(70, 30);
            context.lineTo(80, 20);
            context.lineTo(90, 25);
            context.lineTo(100, 15);
            context.stroke();
          },
          stroke: 'black', // 边框颜色
          strokeWidth: 2 // 边框宽度
        }
        // 信号发生器
        this.instruments[3] = {
          x: 35,
          y: 80,
          scaleX: 0.9,
          scaleY: .8,
          sceneFunc: (context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(60, 0);
            context.lineTo(60, 40);
            context.lineTo(0, 40);
            context.closePath();
            context.fillStrokeShape(shape);

            // 画信号发生器内部的波形图
            context.beginPath();
            context.moveTo(10, 10);
            context.lineTo(20, 30);
            context.lineTo(30, 10);
            context.lineTo(40, 30);
            context.lineTo(50, 10);
            context.strokeShape(shape);
            // 画连接线
            context.beginPath();
            context.moveTo(0, 20);
            context.lineTo(-20, 20);
            context.moveTo(60, 20);
            context.lineTo(80, 20);
            context.strokeShape(shape);
          },
          fill: '#fff',
          stroke: 'black',
          strokeWidth: 1,
        }

        const arrString = JSON.stringify(this.instruments, function(key, value) {
          if (typeof value === 'function') {
            return value.toString();
          }
          return value;
        });
        this.instruments = this.strToConfig(arrString);
      },

      // 绘制开关
      drawCircuitSwitch() {
        //  第一行
        this.circuitSwitch[0] = new DrawCanvas (10, 30, "#000").drawFuseSwitchOff()  // 熔断器开关断开状态
        this.circuitSwitch[1] = new DrawCanvas (100, 30, "#000").drawContactorPointOff() //熔断器开关闭合状态
        this.circuitSwitch[2] = new DrawCanvas (210, 30, "#000").drawContactorPointOn() //接触器断点开关闭合状态
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
        let str = arrString.replaceAll("context.strokeStyle = '#00ff00'", "context.strokeStyle = '#000'");
        str = str.replaceAll("#f00", "#000");

        this.circuitSwitch_r = this.strToConfig(str);
      },

      // 绘制高压元件
      drawHighVoltageComponents() { // 绘制高压元件
        this.HighVoltageComponents[0] = new DrawCanvas(10, 50, '#000').drawWatt_hourMeter() //电表
        this.HighVoltageComponents[1] = new DrawCanvas(120, 50, '#000').drawCoil() //线圈
        this.HighVoltageComponents[2] = new DrawCanvas(230, 20, '#000').drawCapacitorBank() // 电容器组
        // 第二行
        this.HighVoltageComponents[3] = new DrawCanvas(10, 120, '#000').drawLightningArrest() // 避雷器
        this.HighVoltageComponents[4] = new DrawCanvas(120, 120, '#000').drawLiveShow() // 带电显示
        this.HighVoltageComponents[5] = new DrawCanvas(210, 120, '#000').drawThreeItemTransformer() // 三向变压器
        // 第三行
        this.HighVoltageComponents[6] = new DrawCanvas(10, 180, '#000').drawReactance() // 电抗器



        const arrString = JSON.stringify(this.HighVoltageComponents, function(key, value) {
          if (typeof value === 'function') {
            return value.toString();
          }
          return value;
        });

        // console.log(arrString)

        this.HighVoltageComponents_r = this.strToConfig(arrString)

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


      // 将字符串中保存的键值对（包含渲染函数）都转换为 Konva 中能够识别的配置
      strToConfig(str) {
        str = JSON.parse(str); // 将 JSON 形式的字符串转化为 js对象
        str.forEach(item => {
          eval("item.sceneFunc = " + item.sceneFunc); // 将字符串作为代码执行，并返回执行结果
          item.draggable = false; // 列表项默认不能拖动
        })
        return str; // 将处理完成的字符串反馈
      }
    },
    created() {
      this.drawElectricalComponents(); // 绘制基础元件
      this.drawHighVoltageComponents(); // 绘制高压仪器
      this.drawCircuitSwitch();// 绘制开关
      this.drawInstruments();// 绘制仪器
      this.drawPower();// 绘制电源
      this.drawResistance(); // 绘制电阻
      this.getElectricComps();
    },
  }
</script>

<style scoped lang="scss">
    .left_menu::-webkit-scrollbar {
      width: 1px;
    }
    .left_menu {
        position: relative;
        width: 363px;
        height: 100%;
        background-color: #fff;
        /* 搜索框 */
        //.search {
        //    display: flex;
        //    height: 30px;
        //    line-height: 30px;
        //    /*width: 80%;*/
        //    input {
        //        height: 70%;
        //        width: 80%;
        //        margin-left: 15px;
        //        border-radius: 10px;
        //    }
        //    span {
        //        margin-left: 3px;
        //    }
        //  button {
        //    margin-top: 3px;
        //    height: 80%;
        //  }
        //}
        /* 电气原件列表 */
        .electrical_components {
            position: relative;
            width: 100%;
            height: calc(100% - 30px);
            overflow: auto;/*生成滚动条*/
        }
    }
</style>