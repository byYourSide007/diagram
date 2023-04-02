// 配电图元器件
class DrawCanvas {

  constructor(x, y, color = '#fff') {
    this.x = x
    this.y = y
    this.color = color
  }

  // 绘制左边电阻，右边变压器
  drawLeftResistance() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 60, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x + 10, y - 5)
        context.lineTo (x + 50, y - 5)
        context.lineTo (x + 50, y + 5)
        context.lineTo (x + 10, y + 5)
        context.closePath ()
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 5)
        context.lineTo (x + 60, y - 5)
        context.lineTo (x + 60, y + 5)
        context.lineTo (x, y + 5)
        context.closePath ()
        context.beginPath ()
        context.strokeStyle = '#000'
        // 绘制第一个小圆圈
        context.beginPath ()
        context.arc (x + 70, y, 8, 0, Math.PI * 2)
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (x + 80, y - 8)
        context.lineTo (x + 80, y + 8)
        context.lineWidth = 4
        context.stroke ()
        // 绘制第二个小圆圈
        context.beginPath ()
        context.lineWidth = 1
        context.arc (x + 89, y, 8, 0, Math.PI * 2)
        context.stroke ()
        // 绘制描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawLeftResistance',
      name: 'isoLateSwitchOff',
      draggable: true
    }
  }

  // 绘制左边一个圆圈一条竖线右边一个接地线
  drawCirclePower() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 5, y)
        context.stroke ()
        // 绘制半圆
        context.beginPath ()
        context.arc (x + 20, y, 15, 0, Math.PI * 2)
        context.stroke ()
        // 绘制过中心的线条
        context.beginPath ()
        context.moveTo (x + 20, y - 15)
        context.lineTo (x + 20, y + 15)
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (x + 35, y)
        context.lineTo (x + 55, y)
        context.stroke ()
        // 绘制电源
        context.beginPath ()
        context.moveTo (x + 55, y - 15)
        context.lineTo (x + 55, y + 15)
        context.lineWidth = 3
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 60, y - 10)
        context.lineTo (x + 60, y + 10)
        context.lineWidth = 1
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 65, y - 5)
        context.lineTo (x + 65, y + 5)
        context.stroke ()
        //获取短横线
        context.beginPath ()
        context.moveTo (x + 65, y)
        context.lineTo (x + 70, y)
        context.stroke ()
        // 绘制描边
        context.beginPath ()
        context.moveTo (x, y - 15)
        context.lineTo (x + 70, y - 15)
        context.lineTo (x + 70, y + 15)
        context.lineTo (x, y + 15)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 70,
      height: 30,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawCirclePower',
      name: 'isoLateSwitchOff',
      draggable: true
    }

  }

  // 绘制中间电阻，外边箭头
  drawMiddleResistance() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一个小横线
        context.beginPath ()
        context.strokeStyle = '#c7c90c'
        context.moveTo (x, y)
        context.lineTo (x + 10, y)
        context.stroke ()
        // 绘制小角
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x + 10 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 10, y)
        context.lineTo (x + 10 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 15 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 15, y)
        context.lineTo (x + 15 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#c7c90c'
        context.moveTo (x + 15, y)
        context.lineTo (x + 45, y)
        context.stroke ()
        // 绘制横线
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x + 45, y)
        context.lineTo (x + 85, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.strokeStyle = '#000'
        context.lineWidth = 3
        context.moveTo (x + 50, y - 7.5)
        context.lineTo (x + 80, y - 7.5)
        context.lineTo (x + 80, y + 7.5)
        context.lineTo (x + 50, y + 7.5)
        context.closePath ()
        context.stroke ()
        // 绘制斜线后面的短横线
        context.beginPath ()
        context.strokeStyle = '#c7c90c'
        context.lineWidth = 1
        context.moveTo (x + 85, y)
        context.lineTo (x + 115, y)
        context.stroke ()
        //绘制小箭头
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x + 115 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 115, y)
        context.lineTo (x + 115 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 120 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 120, y)
        context.lineTo (x + 120 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        // 绘制最后的短横线
        context.beginPath ()
        context.strokeStyle = '#c7c90c'
        context.moveTo (x + 120, y)
        context.lineTo (x + 130, y)
        context.stroke ()
        // 绘制外层的描边
        context.beginPath ()
        context.moveTo (x, y - 5 * Math.sqrt (2))
        context.lineTo (x + 130, y - 5 * Math.sqrt (2))
        context.lineTo (x + 130, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      // rotation: 90,
      width: 130,
      height: 20,
      x: _x,
      y: _y,
      offsetX: 0,
      offsetY: 0,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawMiddleResistance',
      name: 'drawMiddleResistance',
      draggable: true,
    }
  }

  // 绘制三个圆
  drawThreeRound() {

    const _y = this.y;
    const _x = this.x;
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制三个圆圈
        context.beginPath ()
        context.strokeStyle = '#000'
        context.arc (x + 20, y - 20, 20, 0, Math.PI * 2)
        context.stroke ()
        context.beginPath ()
        context.strokeStyle = '#ffff00'
        context.moveTo (x + 10, y - 30)
        context.lineTo (x + 18, y - 20)
        context.lineTo (x + 30, y - 30)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 18, y - 20)
        context.lineTo (x + 18, y - 10)
        context.stroke ()
        // 绘制做下的圆圈
        context.beginPath ()
        context.strokeStyle = '#000'
        context.arc (x - 5, y + 5, 20, 0, Math.PI * 2)
        context.stroke ()
        context.beginPath ()
        context.strokeStyle = '#ffff00'
        context.moveTo (x + 5, y)
        context.lineTo (x - 5, y + 10)
        context.lineTo (x - 10, y)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x - 5, y + 20)
        context.lineTo (x - 5, y + 10)
        context.stroke ()
        // 绘制右下的圆圈
        context.beginPath ()
        context.strokeStyle = '#000'
        context.arc (x + 35, y + 5, 20, 0, Math.PI * 2)
        context.stroke ()
        // 绘制倒三角形
        context.beginPath ()
        context.strokeStyle = '#ffff00'
        context.moveTo (x + 40, y + 6)
        context.lineTo (x + 32, y)
        context.lineTo (x + 32, y + 16)
        context.lineTo (x + 40, y + 10)
        context.stroke ()
        // 绘制描边
        context.beginPath ()
        context.moveTo (x - 25, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x - 25, y + 20)
        context.closePath ()
        // context.stroke ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x - 40,
      y: _y - 40,
      width: 80,
      height: 80,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawThreeRound',
      name: 'isoLateSwitchOff',
      draggable: true
    }

  }

  // 绘制线条
  drawLineGreen() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 100, y)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x, y)
        context.lineTo (x + 100, y + 10)
        context.closePath ()
        // 描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 100, y - 10)
        context.lineTo (x + 100, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 100,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawLineGreen',
      name: 'drawLineGreen',
      draggable: true,
    }
  }

  // 绘制电流流向三角形
  drawTriangleFlow() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.lineTo (x + 10, y + 10 * Math.sqrt (3))
        context.closePath ()
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x + 10, y - 10 * Math.sqrt (3) + 10)
        context.lineTo (x + 10, y + 10 * Math.sqrt (3) + 5)
        context.stroke ()
        // 绘制描边
        context.beginPath ()
        context.moveTo (x, y - 20)
        context.lineTo (x + 20, y - 20)
        context.lineTo (x + 20, y + 20)
        context.lineTo (x, y + 20)
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 25,
      height: 25,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'drawLineGreen',
      funcName: 'drawTriangleFlow',
      draggable: true,
    }
  }

  // 绘制线条箭头
  drawSingleArrow() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0
        const y = 0
        // 绘制短斜线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 10, y + 10 * Math.sqrt (3))
        context.stroke ()
        // 绘制斜三角
        context.beginPath ()
        context.moveTo (x + 12, y + 10 * Math.sqrt (3) - 3)
        context.lineTo (x + 8, y + 10 * Math.sqrt (3) + 3)
        context.lineTo (x + 20, y + 20 * Math.sqrt (3))
        // context.closePath ()
        context.fill ()
        context.closePath ()
        context.stroke ()
        // 绘制小圆
        context.beginPath ()
        context.arc (x + 22, y + 22 * Math.sqrt (3), 4, 0, Math.PI * 2)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y)
        context.lineTo (x + 40, y)
        context.lineTo (x + 40, y + 60)
        context.lineTo (x, y + 60)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      width: 25,
      height: 60,
      x: _x,
      y: _y,
      offsetX: 0,
      offsetY: 0,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawSingleArrow',
      name: 'drawSingleArrow',
      draggable: true,
    }
  }

  /**
   * @description 绘制变压器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawTransformer() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      // 设置自定义变压器图形
      sceneFunc: function (context, shape) {
        // const x = 0;
        // const y = 0;
        context.beginPath ()
        context.strokeStyle = '#000'
        // 绘制第一跟小线条
        context.moveTo (0, 0)
        context.lineTo (10, 0)
        context.stroke ()
        // 绘制第一个小圆圈
        context.beginPath ()
        context.arc (20, 0, 10, 0, Math.PI * 2)
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (30, -8)
        context.lineTo (30, 8)
        context.lineWidth = 4
        context.stroke ()
        // 绘制第二个小圆圈
        context.beginPath ()
        context.lineWidth = 1
        context.arc (39, 0, 10, 0, Math.PI * 2)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (0, -10)
        context.lineTo (60, -10)
        context.lineTo (60, 10)
        context.lineTo (0, 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      // 距离旋转点的点的距离
      offsetX: 0,
      offsetY: 0,
      // x和y作为旋转点的坐标
      x: _x,
      y: _y,
      width: 60,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawTransformer',
      name: 'transformer',
      draggable: true,
    }
  }

  /**
   * @description 绘制熔断器开关断开状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawFuseSwitchOff() {
    const _y = this.y;
    const _x = this.x
    return {
      // 设置自定义变压器图形
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        //绘制第一根小线条
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        //绘制倾斜的角度
        context.beginPath ()
        context.moveTo (x + 20, y + 20)
        context.lineTo (x + 60, y)
        context.stroke ()
        // 绘制中间的矩形
        context.beginPath ()
        context.moveTo (x + 30, y + 12)
        context.lineTo (x + 55, y)
        context.lineTo (x + 57, y + 5)
        context.lineTo (x + 32, y + 17)
        context.closePath ()
        context.stroke ()
        // 绘制最后的小横线
        context.beginPath ()
        context.moveTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制描边
        context.beginPath ()
        context.moveTo (x, y)
        context.lineTo (x + 80, y)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'drawFuseSwitchOff',
      funcName: 'drawFuseSwitchOff',
      draggable: true,
      isSwitch: true,
    }
  }

  /**
   * @description 绘制熔断器开关闭合状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawFuseSwitchOn() {

    const _y = this.y;
    const _x = this.x
    return {
      // 设置自定义变压器图形
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        //绘制闭合小线条
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制中间的矩形
        context.beginPath ()
        context.moveTo (x + 20, y - 6)
        context.lineTo (x + 60, y - 6)
        context.lineTo (x + 60, y + 6)
        context.lineTo (x + 20, y + 6)
        context.closePath ()
        context.stroke ()
        // 绘制描边
        context.beginPath ()
        context.moveTo (x, y - 6)
        context.lineTo (x + 80, y - 6)
        context.lineTo (x + 80, y + 6)
        context.lineTo (x, y + 6)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawFuseSwitchOn',
      name: 'drawFuseSwitchOn',
      draggable: true,
      isSwitch: true,
    }
  }

  /**
   * @description 绘制接触器断点开关断开状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawContactorPointOff() {

    const _y = this.y;
    const _x = this.x

    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一根小线条
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制第一根小线条末尾小半圆
        context.beginPath ()
        context.arc (x + 15, y, 5, 0, Math.PI)
        context.stroke ()
        // 绘制倾斜小线条
        context.beginPath ()
        context.moveTo (x + 15, y + 20)
        context.lineTo (x + 60, y)
        // 绘制最后的短横线
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y)
        context.lineTo (x + 80, y)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawContactorPointOff',
      name: 'drawContactorPointOff',
      draggable: true,
      isSwitch: true,
    }
  }

  /**
   * @description 绘制接触器断点开关闭合状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawContactorPointOn() {

    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一根小线条
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制第一根小线条末尾小半圆
        context.beginPath ()
        context.arc (x + 15, y, 5, 0, Math.PI)
        context.stroke ()
        // 绘制横线
        context.beginPath ()
        context.moveTo (x + 15, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawContactorPointOn',
      name: 'drawContactorPointOn',
      draggable: true,
      isSwitch: true,
    }
  }

  /**
   * @description 绘制负荷隔离开关断开状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawLoadIsoSwitchOff() {

    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一根小线条
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 10, y)
        context.stroke ()
        // 绘制小竖线
        context.beginPath ()
        context.moveTo (x + 10, y - 5)
        context.lineTo (x + 10, y + 5)
        context.stroke ()
        // 绘制小圆圈
        context.beginPath ()
        context.arc (x + 15, y, 5, 0, Math.PI * 2)
        context.stroke ()
        // 绘制小斜线
        context.beginPath ()
        context.moveTo (x + 12, y + 20)
        context.lineTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 5)
        context.lineTo (x + 80, y - 5)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawLoadIsoSwitchOff',
      name: 'drawLoadIsoSwitchOff',
      draggable: true,
      isSwitch: true,
    }
  }

  /**
   * @description 绘制负荷隔离开关闭合状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawLoadIsoSwitchOn() {

    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一根小线条
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制小竖线
        context.beginPath ()
        context.moveTo (x + 10, y - 5)
        context.lineTo (x + 10, y + 5)
        context.stroke ()
        // 绘制小圆圈
        context.beginPath ()
        context.arc (x + 15, y, 5, 0, Math.PI * 2)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      funcName: 'drawLoadIsoSwitchOn',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'drawLoadIsoSwitchOn',
      draggable: true,
      isSwitch: true,
    }
  }

  /**
   * @description 绘制隔离开关断开状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawIsoLateSwitchOff() {

    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一根小短线
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 10, y)
        context.stroke ();// 开始绘制
        //绘制小竖线
        context.beginPath ()
        context.moveTo (x + 10, y - 5)
        context.lineTo (x + 10, y + 5)
        context.stroke ()
        // 绘制小斜线
        context.beginPath ()
        context.moveTo (x + 12, y + 20)
        context.lineTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawIsoLateSwitchOff',
      name: 'drawIsoLateSwitchOff',
      draggable: true,
      isSwitch: true,

    }
  }

  /**
   * @description 绘制隔离开关闭合状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawIsoLateSwitchOn() {

    const _y = this.y;
    const _x = this.x

    return {
      sceneFunc: function (context, shape) {
        // 绘制第一根小短线
        const x = 0;
        const y = 0;
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 80, y)
        context.stroke ();// 开始绘制
        //绘制小竖线
        context.beginPath ()
        context.moveTo (x + 10, y - 5)
        context.lineTo (x + 10, y + 5)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawIsoLateSwitchOn',
      name: 'drawIsoLateSwitchOn',
      draggable: true,
      isSwitch: true,

    }
  }

  /**
   * @description 绘制漏电短路器开关断开状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawElecLeakSwitchOff() {
    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制小短横线
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制小×
        context.beginPath ()
        context.moveTo (x + 15, y - 5)
        context.lineTo (x + 25, y + 5)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 15, y + 5)
        context.lineTo (x + 25, y - 5)
        context.stroke ()
        // 绘制斜线
        context.beginPath ()
        context.moveTo (x + 15, y + 20)
        context.lineTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制斜线上面的小圆圈
        context.beginPath ()
        context.arc (x + 37.5, y + 10, 5, 0, Math.PI * 2)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: "drawElecLeakSwitchOff",
      name: 'drawElecLeakSwitchOff',
      draggable: true,
      isSwitch: true,

    }
  }

  /**
   * @description 绘制漏电短路器开关闭合状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawElecLeakSwitchOn() {
    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制小短横线
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制小×
        context.beginPath ()
        context.moveTo (x + 15, y - 5)
        context.lineTo (x + 25, y + 5)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 15, y + 5)
        context.lineTo (x + 25, y - 5)
        context.stroke ()
        // 绘制横向线上面的小圆圈
        context.beginPath ()
        context.arc (x + 37.5, y, 5, 0, Math.PI * 2)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawElecLeakSwitchOn',
      name: 'drawElecLeakSwitchOn',
      draggable: true,
      isSwitch: true,

    }
  }

  /**
   * @description 绘制断路器开关断开状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawCircuitBreakerSwitchOff() {
    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一根小线条
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制小×
        context.beginPath ()
        context.moveTo (x + 15, y - 5)
        context.lineTo (x + 25, y + 5)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 15, y + 5)
        context.lineTo (x + 25, y - 5)
        context.stroke ()
        // 绘制斜线
        context.beginPath ()
        context.moveTo (x + 15, y + 20)
        context.lineTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawCircuitBreakerSwitchOff',
      name: 'drawCircuitBreakerSwitchOff',
      draggable: true,
      isSwitch: true,

    }
  }

  /**
   * @description 绘制断路器开关闭合状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawCircuitBreakerSwitchOn() {
    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一根小线条
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制小×
        context.beginPath ()
        context.moveTo (x + 15, y - 5)
        context.lineTo (x + 25, y + 5)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 15, y + 5)
        context.lineTo (x + 25, y - 5)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawCircuitBreakerSwitchOn',
      name: 'drawCircuitBreakerSwitchOn',
      draggable: true,
      isSwitch: true,

    }
  }

  /**
   * @description 绘制互感器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawSelfTransformer() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        //绘制第一跟线条
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x + 10, y - 20)
        context.lineTo (x + 10, y + 20)
        context.stroke ()
        // 绘制圆
        context.beginPath ()
        context.arc (x + 10, y, 10, 0, Math.PI * 2)
        context.stroke ()
        // 绘制横线
        context.beginPath ()
        context.moveTo (x + 20, y)
        context.lineTo (x + 35, y)
        context.stroke ()
        // 绘制斜线
        context.beginPath ()
        context.moveTo (x + 30, y - 10)
        context.lineTo (x + 20, y + 10)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 35, y - 10)
        context.lineTo (x + 25, y + 10)
        context.stroke ()
        // 绘制外围描边
        context.beginPath ()
        context.moveTo (x, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 40,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawSelfTransformer',
      name: 'selfTransformer',
      draggable: true
    }
  }

  /**
   * @description 绘制电源开关
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawPower() {
    const _y = this.y;
    const _x = this.x;
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        //绘制短竖线
        context.beginPath ()
        context.moveTo (x + 20, y - 10)
        context.lineTo (x + 20, y + 10)
        context.stroke ();
        //绘制长竖线
        context.beginPath ()
        context.moveTo (x + 25, y - 20)
        context.lineTo (x + 25, y + 20)
        context.stroke ()
        // 绘制后面的横线
        context.beginPath ()
        context.moveTo (x + 25, y)
        context.lineTo (x + 45, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 20)
        context.lineTo (x + 45, y - 20)
        context.lineTo (x + 45, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 45,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawPower',
      name: 'power',
      draggable: true
    }
  }

  /**
   * @description 绘制电压表
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawVoltmeter() {
    const _y = this.y;
    const _x = this.x;
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        //绘制圆
        context.beginPath ()
        context.arc (x + 40, y, 20, 0, Math.PI * 2)
        context.stroke ()
        // 绘制文字
        context.fillText ('V', x + 37, y + 2)
        context.strokeText ('V', x + 35, y + 2)
        // 绘制后面的短横线
        context.beginPath ()
        context.moveTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawVoltmeter',
      name: 'Voltmeter',
      draggable: true
    }
  }

  /**
   * @description 绘制电容器函数
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawCapacitorConfig() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      // 设置自定义电容图形
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一条线
        context.beginPath ();
        context.strokeStyle = '#000'
        context.moveTo (x, y);
        context.lineTo (x + 20, y);
        context.stroke ()
        // 绘制第二条线
        context.beginPath ()
        context.moveTo (x + 20, y + 5)
        context.lineTo (x, y + 5)
        context.stroke ()
        // 绘制第三条线
        context.beginPath ()
        context.moveTo (x + 10, y + 5)
        context.lineTo (x + 10, y + 20)
        context.stroke ()
        // 绘制第四条线
        context.beginPath ()
        context.moveTo (x + 10, y)
        context.lineTo (x + 10, y - 15)
        context.stroke ()
        // 制作描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 20, y - 10)
        context.lineTo (x + 20, y + 15)
        context.lineTo (x, y + 15)
        context.closePath ()
        context.fillStrokeShape (shape);
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 20,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawCapacitorConfig',
      name: 'capacitor',
      // 添加拖拽效果
      draggable: true,
    }
  }

  /**
   * @description 绘制蜂鸣器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawBuzzer() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制上面的横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 40, y)
        context.stroke ()
        // 绘制上面的半圆
        context.beginPath ()
        context.arc (x + 20, y, 20, 0, Math.PI)
        context.stroke ()
        // 绘制下面的竖线
        context.beginPath ()
        context.moveTo (x + 10, y + Math.sqrt (300))
        context.lineTo (x + 10, y + 20 + Math.sqrt (300))
        context.stroke ()
        // 绘制右边的竖线
        context.beginPath ()
        context.moveTo (x + 30, y + Math.sqrt (300))
        context.lineTo (x + 30, y + 20 + Math.sqrt (300))
        context.stroke ()
        // 绘制外层的描边
        context.beginPath ()
        context.moveTo (x, y)
        context.lineTo (x + 40, y)
        context.lineTo (x + 40, y + 20 + Math.sqrt (300))
        context.lineTo (x, y + 20 + Math.sqrt (300))
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 40,
      height: 40,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawBuzzer',
      name: 'buzzer',
      // 添加拖拽效果
      draggable: true,
    }
  }

  /**
   * @description 绘制电流表
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawAmmeter() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        //绘制圆
        context.beginPath ()
        context.arc (x + 40, y, 20, 0, Math.PI * 2)
        context.stroke ()
        // 绘制文字
        context.strokeText ('A', x + 35, y + 2)
        // 绘制后面的短横线
        context.beginPath ()
        context.moveTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'ammeter',
      funcName: "drawAmmeter",
      draggable: true
    }
  }

  /**
   * @description 绘制双电源开关
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawDoublePowerSwitchAllOff() {

    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制中间的横线条
        context.beginPath ()
        context.strokeStyle = '#fff'
        context.moveTo (x, y)
        context.lineTo (x + 90, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.moveTo (x + 10, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x + 10, y + 20)
        context.closePath ()
        context.stroke ()
        // 绘制矩形上面的两条竖线
        context.beginPath ()
        context.moveTo (x + 20, y - 40)
        context.lineTo (x + 20, y - 10)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 70, y - 40)
        context.lineTo (x + 70, y - 10)
        context.stroke ()
        // 绘制矩形上面竖条末尾的矩形
        context.beginPath ()
        context.fillRect (x + 18, y - 12, 4, 4)
        context.fill ()
        // 绘制右半边竖线的末尾的矩形
        context.beginPath ()
        context.fillRect (x + 68, y - 12, 4, 4)
        context.fill ()
        // 绘制横线中间的倒三角形
        context.beginPath ()
        context.moveTo (x + 45, y + 4)
        context.lineTo (x + 48, y - 3)
        context.lineTo (x + 42, y - 3)
        context.closePath ()
        context.stroke ()
        // 绘制双开关部分
        context.beginPath ()
        context.moveTo (x + 15, y - 10)
        context.lineTo (x + 20, y + 10)
        context.lineTo (x + 20, y + 15)
        context.lineTo (x + 70, y + 15)
        context.lineTo (x + 70, y + 10)
        context.lineTo (x + 75, y - 10)
        context.stroke ()
        // 绘制下面的横线
        context.beginPath ()
        context.moveTo (x + 45, y + 15)
        context.lineTo (x + 45, y + 40)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 40)
        context.lineTo (x + 90, y - 40)
        context.lineTo (x + 90, y + 40)
        context.lineTo (x, y + 40)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 90,
      height: 40,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'doublePowerSwitchAllOff',
      draggable: true,
    }
  }

  /**
   * @description 绘制双电源开关
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawDoublePowerSwitchLeftOn() {
    const _x = this.x;
    const _y = this.y;
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制中间的横线条
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 90, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.moveTo (x + 10, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x + 10, y + 20)
        context.closePath ()
        context.stroke ()
        // 绘制矩形上面的两条竖线
        context.beginPath ()
        context.moveTo (x + 20, y - 40)
        context.lineTo (x + 20, y - 10)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 70, y - 40)
        context.lineTo (x + 70, y - 10)
        context.stroke ()
        // 绘制矩形上面竖条末尾的矩形
        context.beginPath ()
        context.fillRect (x + 18, y - 12, 4, 4)
        context.fill ()
        // 绘制右半边竖线的末尾的矩形
        context.beginPath ()
        context.fillRect (x + 68, y - 12, 4, 4)
        context.fill ()
        // 绘制横线中间的倒三角形
        context.beginPath ()
        context.moveTo (x + 45, y + 4)
        context.lineTo (x + 48, y - 3)
        context.lineTo (x + 42, y - 3)
        context.closePath ()
        context.stroke ()
        // 绘制双开关部分
        context.beginPath ()
        context.moveTo (x + 20, y - 10)
        context.lineTo (x + 20, y + 10)
        context.lineTo (x + 20, y + 15)
        context.lineTo (x + 70, y + 15)
        context.lineTo (x + 70, y + 10)
        context.lineTo (x + 75, y - 10)
        context.stroke ()
        // 绘制下面的横线
        context.beginPath ()
        context.moveTo (x + 45, y + 15)
        context.lineTo (x + 45, y + 40)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 40)
        context.lineTo (x + 90, y - 40)
        context.lineTo (x + 90, y + 40)
        context.lineTo (x, y + 40)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 90,
      height: 40,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'doublePowerSwitchLeftOn',
      draggable: true,
    }
  }

  /**
   * @description 绘制双电源开关
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawDoublePowerSwitchRightOn() {
    const x = this.x;
    const y = this.y;
    return {
      sceneFunc: function (context, shape) {
        // 绘制中间的横线条
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 90, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.moveTo (x + 10, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x + 10, y + 20)
        context.closePath ()
        context.stroke ()
        // 绘制矩形上面的两条竖线
        context.beginPath ()
        context.moveTo (x + 20, y - 40)
        context.lineTo (x + 20, y - 10)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 70, y - 40)
        context.lineTo (x + 70, y - 10)
        context.stroke ()
        // 绘制矩形上面竖条末尾的矩形
        context.beginPath ()
        context.fillRect (x + 18, y - 12, 4, 4)
        context.fill ()
        // 绘制右半边竖线的末尾的矩形
        context.beginPath ()
        context.fillRect (x + 68, y - 12, 4, 4)
        context.fill ()
        // 绘制横线中间的倒三角形
        context.beginPath ()
        context.moveTo (x + 45, y + 4)
        context.lineTo (x + 48, y - 3)
        context.lineTo (x + 42, y - 3)
        context.closePath ()
        context.stroke ()
        // 绘制双开关部分
        context.beginPath ()
        context.moveTo (x + 15, y - 10)
        context.lineTo (x + 20, y + 10)
        context.lineTo (x + 20, y + 15)
        context.lineTo (x + 70, y + 15)
        context.lineTo (x + 70, y + 10)
        context.lineTo (x + 70, y - 10)
        context.stroke ()
        // 绘制下面的横线
        context.beginPath ()
        context.moveTo (x + 45, y + 15)
        context.lineTo (x + 45, y + 40)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 40)
        context.lineTo (x + 90, y - 40)
        context.lineTo (x + 90, y + 40)
        context.lineTo (x, y + 40)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      // x: _x,
      // y: _y,
      width: 90,
      height: 40,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'doublePowerSwitchRightOn',
      draggable: true,
    }
  }

  /**
   * @description 绘制双电源开关
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawDoublePowerSwitchAllOn() {
    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制中间的横线条
        context.beginPath ()
        context.strokeStyle = '#f00'
        context.moveTo (x, y)
        context.lineTo (x + 90, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.moveTo (x + 10, y - 20)
        context.lineTo (x + 80, y - 20)
        context.lineTo (x + 80, y + 20)
        context.lineTo (x + 10, y + 20)
        context.closePath ()
        context.stroke ()
        // 绘制矩形上面的两条竖线
        context.beginPath ()
        context.moveTo (x + 20, y - 40)
        context.lineTo (x + 20, y - 10)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 70, y - 40)
        context.lineTo (x + 70, y - 10)
        context.stroke ()
        // 绘制矩形上面竖条末尾的矩形
        context.beginPath ()
        context.fillRect (x + 18, y - 12, 4, 4)
        context.fill ()
        // 绘制右半边竖线的末尾的矩形
        context.beginPath ()
        context.fillRect (x + 68, y - 12, 4, 4)
        context.fill ()
        // 绘制横线中间的倒三角形
        context.beginPath ()
        context.moveTo (x + 45, y + 4)
        context.lineTo (x + 48, y - 3)
        context.lineTo (x + 42, y - 3)
        context.closePath ()
        context.stroke ()
        // 绘制双开关部分
        context.beginPath ()
        context.moveTo (x + 20, y - 10)
        context.lineTo (x + 20, y + 15)
        context.lineTo (x + 70, y + 15)
        context.lineTo (x + 70, y - 10)
        context.stroke ()
        // 绘制下面的横线
        context.beginPath ()
        context.moveTo (x + 45, y + 15)
        context.lineTo (x + 45, y + 40)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 40)
        context.lineTo (x + 90, y - 40)
        context.lineTo (x + 90, y + 40)
        context.lineTo (x, y + 40)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 90,
      height: 40,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'doublePowerSwitchAllOn',
      draggable: true,
    }
  }

  /**
   * @description 绘制电阻
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawResistance() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 10, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.moveTo (x + 10, y - 5)
        context.lineTo (x + 50, y - 5)
        context.lineTo (x + 50, y + 5)
        context.lineTo (x + 10, y + 5)
        context.closePath ()
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (x + 50, y)
        context.lineTo (x + 60, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 5)
        context.lineTo (x + 60, y - 5)
        context.lineTo (x + 60, y + 5)
        context.lineTo (x, y + 5)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 60,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawResistance',
      name: 'resistance',
      draggable: true,
    }
  }

  /**
   * @description 绘制避雷器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawLightning() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制实心小箭头
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制实心小箭头的尖尖
        context.beginPath ()
        context.moveTo (x + 20, y - 5)
        context.lineTo (x + 35, y)
        context.lineTo (x + 20, y + 5)
        context.closePath ()
        context.fill ()
        context.stroke ()
        // 绘制小矩形
        context.beginPath ()
        context.moveTo (x + 15, y - 8)
        context.lineTo (x + 65, y - 8)
        context.lineTo (x + 65, y + 8)
        context.lineTo (x + 15, y + 8)
        context.closePath ()
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (x + 65, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 10)
        context.lineTo (x + 80, y - 10)
        context.lineTo (x + 80, y + 10)
        context.lineTo (x, y + 10)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawLightning',
      name: 'lightning',
      draggable: true,
    }
  }

  /**
   * @description 绘制地线
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawGroundWire() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        //绘制地线的竖线
        context.beginPath ()
        context.moveTo (x + 20, y - 20)
        context.lineTo (x + 20, y + 20)
        context.stroke ()
        // 绘制第二条竖线
        context.beginPath ()
        context.moveTo (x + 30, y - 15)
        context.lineTo (x + 30, y + 15)
        context.stroke ()
        // 绘制第三条竖线
        context.beginPath ()
        context.moveTo (x + 40, y - 10)
        context.lineTo (x + 40, y + 10)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 20)
        context.lineTo (x + 40, y + 20)
        context.lineTo (x + 40, y - 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 40,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawGroundWire',
      name: 'groundWire',
      draggable: true,
    }
  }

  /**
   * @description 绘制熔断器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawFuse() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 60, y)
        context.stroke ()
        // 绘制矩形
        context.beginPath ()
        context.moveTo (x + 10, y - 5)
        context.lineTo (x + 50, y - 5)
        context.lineTo (x + 50, y + 5)
        context.lineTo (x + 10, y + 5)
        context.closePath ()
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 5)
        context.lineTo (x + 60, y - 5)
        context.lineTo (x + 60, y + 5)
        context.lineTo (x, y + 5)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 60,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'fuse',
      funcName: 'drawFuse',
      draggable: true,
    }
  }

  /*
 高压元件符号
 */

  /**
   * @description 绘制电表
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fontSize: number, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawWatt_hourMeter() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制外部矩形区域
        context.beginPath ()
        context.moveTo (x + 20, y - 30)
        context.lineTo (x + 65, y - 30)
        context.lineTo (x + 65, y + 30)
        context.lineTo (x + 20, y + 30)
        context.closePath ()
        context.stroke ()
        // 绘制内部分割线条
        context.beginPath ()
        context.moveTo (x + 20, y - 15)
        context.lineTo (x + 65, y - 15)
        context.stroke ()
        // 绘制中间的kWh字体
        context.fillText ('kWh', x + 30, y + 10)
        context.strokeText ('kWh', x + 30, y + 10)
        // 绘制末尾的短横线
        context.beginPath ()
        context.moveTo (x + 65, y)
        context.lineTo (x + 85, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 30)
        context.lineTo (x + 85, y - 30)
        context.lineTo (x + 85, y + 30)
        context.lineTo (x, y + 30)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 85,
      height: 30,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'watt_hourMeter',
      funcName: 'drawWatt_hourMeter',
      fontSize: 30,
      draggable: true,
    }
  }

  /**
   * @description 绘制线圈
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawCoil() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制前面的横线
        context.beginPath ()
        context.strokeStyle = '#000'
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
      x: _x,
      y: _y,
      width: 72,
      height: 30,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      funcName: 'drawCoil',
      name: 'coil',
      draggable: true,
    }
  }
// { "color": "#fff", "offsetX": 0, "offsetY": 0, "x": 0, "y": 0, "width": 72, "height": 30, "fill": "transparent", "stroke": "transparent", "strokeWidth": 2, "funcName": "drawCoil", "name": "coil", "draggable": true }

  /**
   * @description 绘制电容器组
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawCapacitorBank() {
    const _y = this.y;
    const _x = this.x
    return {
      color: this.color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 50;
        // 绘制第一条残缺的边
        context.beginPath ()
        context.strokeStyle = this.color
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制下面横线的电容
        context.beginPath ()
        context.moveTo (x + 20, y - 8)
        context.lineTo (x + 20, y + 8)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 30, y - 8)
        context.lineTo (x + 30, y + 8)
        context.stroke ()
        // 绘制右下角的线条
        context.beginPath ()
        context.moveTo (x + 30, y)
        context.lineTo (x + 50, y)
        context.lineTo (x + 40, y - 10 * Math.sqrt (3))
        context.stroke ()
        // 绘制右边线条上的电容
        context.beginPath ()
        context.moveTo (x + 40 + 4 * Math.sqrt (3), y - 4 - 10 * Math.sqrt (3))
        context.lineTo (x + 40 - 4 * Math.sqrt (3), y + 4 - 10 * Math.sqrt (3))
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 35 + 4 * Math.sqrt (3), y - 4 - 15 * Math.sqrt (3))
        context.lineTo (x + 35 - 4 * Math.sqrt (3), y + 4 - 15 * Math.sqrt (3))
        context.stroke ()
        // 绘制右上角的线条
        context.beginPath ()
        context.moveTo (x + 35, y - 15 * Math.sqrt (3))
        context.lineTo (x + 25, y - 25 * Math.sqrt (3))
        context.lineTo (x + 15, y - 15 * Math.sqrt (3))
        context.stroke ()
        //绘制左线条上的电容
        context.beginPath ()
        context.moveTo (x + 15 + 4 * Math.sqrt (3), y + 4 - 15 * Math.sqrt (3))
        context.lineTo (x + 15 - 4 * Math.sqrt (3), y - 4 - 15 * Math.sqrt (3))
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 10 + 4 * Math.sqrt (3), y + 4 - 10 * Math.sqrt (3))
        context.lineTo (x + 10 - 4 * Math.sqrt (3), y - 4 - 10 * Math.sqrt (3))
        context.stroke ()
        context.beginPath ()
        // 绘制左下角的线条
        context.beginPath ()
        context.moveTo (x + 10, y - 10 * Math.sqrt (3))
        context.lineTo (x, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 100)
        context.lineTo (x + 100, y - 100)
        context.lineTo (x + 100, y + 100)
        context.lineTo (x, y + 100)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 50,
      height: 50,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'contactorBank',
      funcName: 'drawCapacitorBank',
      draggable: true,
    }
  }

  /**
   * @description 绘制抽屉式段路线断开状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawDrawerLineOff() {
    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一个小横线
        context.beginPath ()
        // context.strokeStyle = '#c7c90c'
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 10, y)
        context.stroke ()
        // 绘制小角
        context.beginPath ()
        // context.strokeStyle = '#00ff00'
        context.strokeStyle = '#00ff00'
        context.moveTo (x + 10 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 10, y)
        context.lineTo (x + 10 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 15 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 15, y)
        context.lineTo (x + 15 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        // context.strokeStyle = '#c7c90c'
        context.strokeStyle = '#000'
        context.moveTo (x + 15, y)
        // context.lineTo (x + 45, y)
        context.lineTo (x + 35, y)
        context.stroke ()
        // 绘制x号
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        context.moveTo (x + 31, y - 4)
        context.lineTo (x + 39, y + 4)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 39, y - 4)
        context.lineTo (x + 31, y + 4)
        context.stroke ()
        // 绘制斜线
        context.beginPath ()
        // context.moveTo (x + 45, y + 15)
        context.moveTo (x + 35, y + 15)
        context.lineTo (x + 55, y)
        context.stroke ()
        // 绘制斜线后面的短横线
        context.beginPath ()
        // context.strokeStyle = '#c7c90c'
        context.strokeStyle = '#000'
        context.moveTo (x + 55, y)
        context.lineTo (x + 75, y)
        context.stroke ()
        //绘制小箭头
        context.beginPath ()
        context.strokeStyle = '#00ff00'
        // context.moveTo (x + 95 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.moveTo (x + 75 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 75, y)
        // context.lineTo (x + 95 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.lineTo (x + 75 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        context.beginPath ()
        // context.moveTo (x + 100 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.moveTo (x + 80 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        // context.lineTo (x + 100, y)
        context.lineTo (x + 80, y)
        context.lineTo (x + 80 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        // 绘制最后的短横线
        context.beginPath ()
        // context.strokeStyle = '#c7c90c'
        context.strokeStyle = '#000`'
        context.moveTo (x + 80, y)
        context.lineTo (x + 90, y)
        context.stroke ()
        // 绘制外层的描边
        context.beginPath ()
        context.moveTo (x, y - 5 * Math.sqrt (2))
        context.lineTo (x + 170, y - 5 * Math.sqrt (2))
        context.lineTo (x + 170, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      // rotation: 90,
      width: 170,
      height: 20,
      x: _x,
      y: _y,
      offsetX: 0,
      offsetY: 0,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'drawDrawerLineOff',
      funcName: 'drawDrawerLineOff',
      draggable: true,
      isSwitch: true
    }
  }

  /**
   * @description 绘制抽屉式段路线闭合状态
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawDrawerLineOn() {

    const _y = this.y;
    const _x = this.x
    return {
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一个小横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        // context.lineTo (x + 30, y)
        context.lineTo (x + 10, y)
        context.stroke ()
        // 绘制小角
        context.beginPath ()
        // context.moveTo (x + 30 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.moveTo (x + 10 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        // context.lineTo (x + 30, y)
        context.lineTo (x + 10, y)
        // context.lineTo (x + 30 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.lineTo (x + 10 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        context.beginPath ()
        // context.moveTo (x + 35 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.moveTo (x + 15 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        // context.lineTo (x + 35, y)
        context.lineTo (x + 15, y)
        // context.lineTo (x + 35 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.lineTo (x + 15 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (x + 15, y)
        context.lineTo (x + 31, y)
        context.stroke ()
        // 绘制x号
        context.beginPath ()
        context.moveTo (x + 31, y - 4)
        context.lineTo (x + 39, y + 4)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 39, y - 4)
        context.lineTo (x + 31, y + 4)
        context.stroke ()
        // 绘制斜线
        context.beginPath ()
        // context.moveTo (x + 45, y)
        context.moveTo (x + 31, y)
        // context.lineTo (x + 55, y)
        context.lineTo (x + 55, y)
        context.stroke ()
        //绘制小箭头
        context.beginPath ()
        // context.moveTo (x + 115 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.moveTo (x + 55 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        // context.lineTo (x + 115, y)
        context.lineTo (x + 55, y)
        // context.lineTo (x + 115 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.lineTo (x + 55 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        context.beginPath ()
        // context.moveTo (x + 120 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.moveTo (x + 60 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        // context.lineTo (x + 120, y)
        context.lineTo (x + 60, y)
        // context.lineTo (x + 120 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.lineTo (x + 60 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        // 绘制最后的短横线
        context.beginPath ()
        context.moveTo (x + 60, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制外层的描边
        context.beginPath ()
        context.moveTo (x, y - 5 * Math.sqrt (2))
        context.lineTo (x + 170, y - 5 * Math.sqrt (2))
        context.lineTo (x + 170, y + 5 * Math.sqrt (2))
        context.lineTo (x, y + 5 * Math.sqrt (2))
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 170,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'drawDrawerLineOn',
      funcName: 'drawDrawerLineOn',
      draggable: true,
      isSwitch: true,
    }
  }

  /**
   * @description 绘制三向变压器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawThreeItemTransformer() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一条横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制中间的圆圈
        context.beginPath ()
        context.arc (x + 35, y, 15, 0, Math.PI * 2)
        context.stroke ()
        // 绘制圆圈中间的小三角
        context.beginPath ()
        context.moveTo (x + 28, y)
        context.lineTo (x + 38, y - 7.5)
        context.lineTo (x + 38, y + 7.5)
        context.closePath ()
        context.stroke ()
        // 绘制第二个圆圈
        context.beginPath ()
        context.arc (x + 60, y, 15, 0, Math.PI * 2)
        context.stroke ()
        // 绘制第二个圆圈中间的三条横线
        context.beginPath ()
        context.moveTo (x + 60 - 2, y - 4 * Math.sqrt (3))
        context.lineTo (x + 60, y)
        context.lineTo (x + 68, y)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 60 - 2, y + 4 * Math.sqrt (3))
        context.lineTo (x + 60, y)
        context.stroke ()
        // 绘制最后一条横线
        context.beginPath ()
        context.moveTo (x + 75, y)
        context.lineTo (x + 105, y)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 15)
        context.lineTo (x + 105, y - 15)
        context.lineTo (x + 105, y + 15)
        context.lineTo (x, y + 15)
        context.closePath ()

        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 105,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'threeItemTransformer',
      funcName: 'drawThreeItemTransformer',
      draggable: true,
    }
  }

  /**
   * @description 绘制电抗器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawReactance() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制半圆
        context.beginPath ()
        context.arc (x + 40, y, 20, 0, Math.PI)
        context.stroke ()
        // 绘制四分之一线条
        context.beginPath ()
        context.arc (x + 40, y, 20, 0, -Math.PI / 2, true)
        context.stroke ()
        // 绘制线条
        context.beginPath ()
        context.moveTo (x + 40, y - 20)
        context.lineTo (x + 40, y)
        context.lineTo (x + 90, y)
        context.stroke ()
        // 绘制外层描边
        context.moveTo (x, y - 20)
        context.lineTo (x + 90, y - 20)
        context.lineTo (x + 90, y + 20)
        context.lineTo (x, y + 20)
        context.closePath ()

        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 90,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'reactance',
      funcName: 'drawReactance',
      draggable: true,
    }
  }

  /**
   * @description 绘制带电显示
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawLiveShow() {
    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制第一个短横线
        context.beginPath ()
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 10, y)
        context.stroke ()
        // 绘制中间的电容
        context.beginPath ()
        context.moveTo (x + 10, y - 8)
        context.lineTo (x + 10, y + 8)
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 20, y - 8)
        context.lineTo (x + 20, y + 8)
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (x + 20, y)
        context.lineTo (x + 40, y)
        context.stroke ()
        // 绘制圆
        context.beginPath ()
        context.arc (x + 50, y, 10, 0, Math.PI * 2)
        context.stroke ()
        // 绘制圆的x号
        context.beginPath ()
        context.moveTo (x + 50 - 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 50 + 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        context.beginPath ()
        context.moveTo (x + 50 + 5 * Math.sqrt (2), y - 5 * Math.sqrt (2))
        context.lineTo (x + 50 - 5 * Math.sqrt (2), y + 5 * Math.sqrt (2))
        context.stroke ()
        // 绘制最后的地线
        // 绘制横线
        context.beginPath ()
        context.moveTo (x + 60, y)
        context.lineTo (x + 70, y)
        context.stroke ()
        //绘制短竖线
        context.beginPath ()
        context.moveTo (x + 70, y - 12)
        context.lineTo (x + 70, y + 12)
        context.stroke ();
        //绘制长竖线
        context.beginPath ()
        context.moveTo (x + 75, y - 8)
        context.lineTo (x + 75, y + 8)
        context.stroke ()
        // 绘制后面的横线
        context.beginPath ()
        context.moveTo (x + 80, y - 4)
        context.lineTo (x + 80, y + 4)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 12)
        context.lineTo (x + 80, y - 12)
        context.lineTo (x + 80, y + 12)
        context.lineTo (x, y - 12)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      funcName: 'drawLiveShow',
      strokeWidth: 2,
      name: 'liveShow',
      draggable: true,
    }
  }

  /**
   * @description 绘制避雷器
   * @returns {{strokeWidth: number, draggable: boolean, name: string, fill: string, sceneFunc: sceneFunc, stroke: string}}
   */
  drawLightningArrest() {

    const _y = this.y;
    const _x = this.x
    const color = this.color
    return {
      color: color,
      sceneFunc: function (context, shape) {
        const x = 0;
        const y = 0;
        // 绘制实心小箭头
        context.beginPath ()
        // context.strokeStyle = '#000'
        context.strokeStyle = '#000'
        context.moveTo (x, y)
        context.lineTo (x + 20, y)
        context.stroke ()
        // 绘制实心小箭头的尖尖
        context.beginPath ()
        context.moveTo (x + 20, y - 3)
        context.lineTo (x + 30, y)
        context.lineTo (x + 20, y + 3)
        context.closePath ()
        context.fill ()
        context.fillStyle = '#fff'
        context.stroke ()
        // 绘制小矩形
        context.beginPath ()
        context.moveTo (x + 15, y - 6)
        context.lineTo (x + 55, y - 6)
        context.lineTo (x + 55, y + 6)
        context.lineTo (x + 15, y + 6)
        context.closePath ()
        context.stroke ()
        // 绘制短横线
        context.beginPath ()
        context.moveTo (x + 55, y)
        context.lineTo (x + 80, y)
        context.stroke ()
        // 绘制后面的地线
        //绘制短竖线
        context.beginPath ()
        context.moveTo (x + 80, y - 12)
        context.lineTo (x + 80, y + 12)
        context.stroke ();
        //绘制长竖线
        context.beginPath ()
        context.moveTo (x + 85, y - 8)
        context.lineTo (x + 85, y + 8)
        context.stroke ()
        // 绘制后面的横线
        context.beginPath ()
        context.moveTo (x + 90, y - 4)
        context.lineTo (x + 90, y + 4)
        context.stroke ()
        // 绘制外层描边
        context.beginPath ()
        context.moveTo (x, y - 12)
        context.lineTo (x + 90, y - 12)
        context.lineTo (x + 90, y + 12)
        context.lineTo (x, y - 12)
        context.closePath ()
        context.fillStrokeShape (shape)
      },
      offsetX: 0,
      offsetY: 0,
      x: _x,
      y: _y,
      width: 80,
      height: 20,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 2,
      name: 'lightningArrest',
      funcName: 'drawLightningArrest',
      draggable: true,
    }
  }
}

const handlerClickClear = function (id) {
  // 点击之后清除这部分的画布
  const index = this.lineArr.findIndex (item => item.id === id)
  const shape = this.configShape[index]// 获取当前选中的文件配置信息
  const {x, y} = this.areaPos[index]
  if (shape.isSwitch) {
    // 元件的名字
    const name = shape.name;
    // 判断当前的开关属于断开还是闭合
    let flagName = name.indexOf ('Off') !== -1 ? name : name.replace (/On/, 'Off')
    // 如果有数组的话把数组给删除
    flagName = name.replace (/[0-9]/g, '');
    // 获取到该开关的下表
    const targetFlagIndex = this.switchFlag.findIndex (item => Object.keys (item)[0] === flagName)
    // 类的实例化
    const draw = new DrawCanvas (x, y)
    let config = ''// 切换后的配置项
    // this.switchFlag[targetFlagIndex]// 获取指定的元素，
    // this.switchFlag[targetFlagIndex][flagName]// 获取指定的元素的名字
    //第二个参数为空（‘’）。
    this.switchFlag[targetFlagIndex][flagName] = !this.switchFlag[targetFlagIndex][flagName]
    if (this.switchFlag[targetFlagIndex][flagName]) {
      // 显示开关闭合，删除之前的config，显示闭合的config
      // 拿到新的konva元素配置项，
      const name = flagName.replace (/Off/, 'On')
      switch (name) {
        case 'drawFuseSwitchOn':
          config = draw.drawFuseSwitchOn ()
          break
        case 'drawContactorPointOn':
          config = draw.drawContactorPointOn ()
          break
        case 'drawLoadIsoSwitchOn':
          config = draw.drawLoadIsoSwitchOn ()
          break
        case 'drawIsoLateSwitchOn':
          config = draw.drawIsoLateSwitchOn ()
          break
        case 'drawElecLeakSwitchOn':
          config = draw.drawElecLeakSwitchOn ()
          break
        case 'drawCircuitBreakerSwitchOn':
          config = draw.drawCircuitBreakerSwitchOn ()
          break
        case 'drawDrawerLineOn':
          config = draw.drawDrawerLineOn ()
          break
      }
      config.rotation = shape.rotation
      config.scaleX = shape.scaleX
      config.scaleY = shape.scaleY
      config.x = shape.x
      config.y = shape.y
      config.name = this.configShape[index].name
      config.draggable = false
      this.configShape.splice (index, 1, config)
      // this.switchFlag = false
    } else {
      // 显示开关断开
      // const newName = name.replace (/On/, 'Off')
      switch (flagName) {
        case 'drawFuseSwitchOff':
          config = draw.drawFuseSwitchOff ()
          break
        case 'drawContactorPointOff':
          config = draw.drawContactorPointOff ()
          break
        case 'drawLoadIsoSwitchOff':
          config = draw.drawLoadIsoSwitchOff ()
          break
        case 'drawIsoLateSwitchOff':
          config = draw.drawIsoLateSwitchOff ()
          break
        case 'drawElecLeakSwitchOff':
          config = draw.drawElecLeakSwitchOff ()
          break
        case 'drawCircuitBreakerSwitchOff':
          config = draw.drawCircuitBreakerSwitchOff ()
          break
        case 'drawDrawerLineOff':
          config = draw.drawDrawerLineOff ()
          break
      }
      config.rotation = shape.rotation
      config.scaleX = shape.scaleX
      config.scaleY = shape.scaleY
      config.x = shape.x
      config.y = shape.y
      config.draggable = false
      config.name = this.configShape[index].name
      this.configShape.splice (index, 1, config)
    }
  }
}

export {
  handlerClickClear,
  DrawCanvas
}
