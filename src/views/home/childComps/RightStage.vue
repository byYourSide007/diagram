<template>
    <div class="right_stage" ref="container">
        <div class="move-able-menu">
            <button
                    @click="save"
                    class="save_img">保存</button>
        </div>

        <!--  弹出的输入信息的卡片 -->
        <div class="alertInputCard" v-if="isSaving">
            <div class="alertInputCardItem">
                <span>文件名：</span>
                <input type="text" ref="fileName">
            </div>
            <div class="alertInputCardItem">
                <span>拓展名:</span>
                <select ref="fileExtension">
                    <option value="jpeg">jpg</option>
                    <option value="png">png</option>
                    <option value="webp">webp</option>
                </select>
            </div>
            <button class="ensureImgMsg" @click="ensureImgMsg">确定</button>
        </div>


<!--        右侧操作台-->
<div class="content" ref="content">
    <v-stage :config="stageConfig"
             ref="stage"
             @mousedown="handleStageMouseDown"
             @touchstart="handleStageMouseDown"
             @contextmenu="drawLines">
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
    </div>
</template>

<script>
    // import MoveAbleMenu from "@/views/home/childComps/MoveAbleMenu";
  import html2canvas from 'html2canvas'
  import Konva from 'konva';
  // import { sendStage } from '../../../request/home.js'
  export default {
    name: "RightStage",
    data() {
      return {
        isSaving: false,// 提示输入内容信息是否显示
        saveImgExtension: 'jpeg', // 保存的文件的拓展名
        saveImgName: 'save', //保存文件的文件名
        dataURL: '',
        line:[
          new Konva.Line({
            points: [0, 100, 0, 250],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [0, 100, 0, 250],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [0, 0, 100, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [0, 0, 100, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [0, 0, 100, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [100, 0, 220, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [100, 0, 220, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),          new Konva.Line({
            points: [100, 0, 220, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [100, 0, 300, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
          new Konva.Line({
            points: [100, 0, 300, 0],
            stroke: 'black',
            strokeWidth: 2,
            draggable: true,
          }),
        ],
        circleConfig: {
          x: 0,
          y: 0,
          radius: 1,
          fill: 'transparent'
        },
        stageConfig: {
          width: 1000,
          height: 1000,
          opacity: 1,
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
    components: {
      // MoveAbleMenu
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
      // 点击舞台
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
      // 切换 transform 节点
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
        let isLogin = JSON.parse(localStorage.getItem('isLogin'));

        if (!isLogin) {
          alert("你还未登录，请先登录！");
          this.$router.push('/login');
          return;
        }else {
          isLogin = isLogin.isLogin;
        }
        // 弹出输入框
        this.isSaving = true; // 显示输入框内容


        // 下一个进程中执行
        // this.$nextTick(() => {

        // })
      },
      // 点击弹出框之后，点击确定按钮
      ensureImgMsg() {
        new Promise(resolve => {
          // 验证数据是否符合要求
          if(this.checkMsg()) {
            resolve();
          }
        }).then(() => {
          // 获取信息（图片名称，图片格式）
          this.getImgMsg();
          // 将内容区域保存为图片
          this.saveContentToImg();
        })
      },
      // 检查输入信息的格式
      checkMsg() {
        const fileName = this.$refs.fileName.value;

        if (fileName === null || !fileName.trim()) {
          alert("文件名为空")
          return;
        }else {
          const regex = /^[^\\/?%*:|"<>]+(\.[^\\/?%*:|"<>]+)*$/;
          if (!regex.test(fileName)) {
            //文件名不能包含以下字符：反斜杠（\）、问号（?）、百分号（%）、冒号（:）、星号（*）、竖线（|）、左尖号（<）、右尖号（>）
            alert("文件名存在不合法字符，如反斜杠（\\）、问号（?）、百分号（%）、冒号（:）、星号（*）、竖线（|）、左尖号（<）、右尖号（>）")
          }else {
            return true;
          }
        }
      },

      // 获取图片信息
      getImgMsg() {
        const fileName = this.$refs.fileName.value;
        const extension =  this.$refs.fileExtension.value;
        this.saveImgExtension = extension;
        this.saveImgName = fileName;
      },
      // 保存图片
      saveContentToImg(){
        let target = this.$refs.content;
        console.log()
        html2canvas(target, { backgroundColor: '#fff' })
            .then(canvas => {
              // console.log(canvas)
              const dataURL = canvas.toDataURL(`image/${this.saveImgExtension}`)
              this.dataURL = dataURL;
              const creatDom = document.createElement('a')
              document.body.appendChild(creatDom)
              creatDom.href = dataURL
              creatDom.download = `${this.saveImgName}`
              creatDom.click()
            })
        // 弹窗消失
        this.isSaving = false;
      },


      // 绘制线条
      drawLines() {



        event.preventDefault(); // 阻止默认右键菜单的弹出
        document.addEventListener('mousemove', this.onMouseMove);

        // console.log(e)


        // // 获取要连接的两个元素
        // const element1 = document.getElementById('element1');
        // const element2 = document.getElementById('element2');
        //
        // // 获取元素的位置和大小
        // const rect1 = element1.getBoundingClientRect();
        // const rect2 = element2.getBoundingClientRect();
        //
        // // 计算元素的中心位置
        // const x1 = rect1.left + rect1.width / 2;
        // const y1 = rect1.top + rect1.height / 2;
        // const x2 = rect2.left + rect2.width / 2;
        // const y2 = rect2.top + rect2.height / 2;

        // // 在 Canvas 上绘制连线
        // ctx.beginPath();
        // // ctx.moveTo(x1, y1);
        // // ctx.lineTo(x2, y2);
        // ctx.stroke();
      },
      onMouseMove(e) {
        console.log(this.$refs.stage.getStage())
        const ctx = this.$refs.stage.getContext('2d');
        // console.log(ctx)

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(e.screenX, e.screenY);
        ctx.stroke();
      }

    },
  }
</script>

<style scoped lang="scss">
    .right_stage {
        position: relative;
      width: 100vw;
        height: calc(100% - 2px);
        background-color: #fff;
        border: 1px solid #eee;
        overflow: auto;/*生成滚动条*/
    }

    .move-able-menu {
        width: 100%;
        /*background-color: red;*/
        border-bottom: 1px solid #eee;

        .save_img {
            padding: 5px 12px;
            border-radius: 10px;
            margin: 5px 8px;
        }
    }
    /* 弹出输入框内容 */
    .alertInputCard {
        /*position: relative;*/
        /*position: absolute;*/
        background-color: #eee;
        border: 1px solid #4aaf51;
        box-shadow: 5px -5px rgba(0, 0, 0, 0.5);
        width: 50%;
        min-width: 500px;
        height: 50%;
        border-radius: 15px;
        padding: 8px 10px;
        margin: 0 auto;

        .alertInputCardItem {
            /*margin-top: 50px;*/
            width: 300px;
            margin: 50px auto 10px;
            span {
                color: #4aaf51;
                font-weight: 600;
            }
            input {
                margin-left: 30px;
            }
            select {
                margin-left: 30px;

            }

        }
        button {
                width: 100px;
                margin-left: 200px;
                margin-top: 30px;
                color: #e6e6e6;
                font-weight: 600;
                font-size: 18px;
                padding: 5px 12px;
                background-color: #669900;
        }
    }

</style>