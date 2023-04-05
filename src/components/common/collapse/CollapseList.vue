<template>
    <div class="collapse_list" >
        <!-- 列表项标题 -->
        <div class="list_title" @click="titleClick">
            <!-- 左侧显示列表展开或闭合的状态的图形 -->
            <div
              :class="{
              'triangle': !is_active,
              'triangle_active': is_active}"/>
            <span>{{title}}</span>
        </div>
        <!-- 内容区域 -->
        <div :class="['list_content', {'is_active_class': is_active}]" >
            <v-stage :config="config" ref="stage_box" >
                <v-layer ref="layer" >
<!--                    <div v-for="(item, index) in componentList" :key="index" >-->
                    <div v-for="(item, index) in componentListComputed" :key="index" >
                        <v-shape :config="item" @click="showIt"/>
                    </div>
                </v-layer>
            </v-stage>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CollapseList",
    data(){
      return {
        stage_height: 200, // 存放当前 canvas 图形的 stage 的高度
        // 控制 konva 展示舞台的相关配置
        config: {
          width: 363,
          height: this.height_stage, // 由父组件传递过来的内容
        },
        // 控制列表内容的显示和隐藏，默认不显示
        // is_active: false,
        is_active: true, // 测试用
      }
    },
    props: {
      // 当前列表项的标题
      title: {
        type: String,
        required: true,
      },
      // 电气元件列表
      componentList: {
        // type: Object,
        type: Array,
        required: true
      },
      // 当前列表所需要的高度
      height_stage: {
        type: Number,
        required: true,
      }
    },
    computed: {
      // 渲染数据的列表（将字符串转化为对象）
      componentListComputed() {
        return this.strToConfig(this.componentList)
      },
    },
    methods: {
      // 当点击列表项的标题所触发的函数
      titleClick() {
        this.is_active = !this.is_active;
        this.stage_height = this.$refs.stage_box.getStage().container().getBoundingClientRect().height;
        console.log(this.stage_height);
      },

      // 点击电气元件的事件
      showIt(e) {
        const target = e.target;
        console.log(target.attrs.funcName);
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

  }
</script>

<style scoped lang="scss">
    .collapse_list {
        position: relative;
        /* 标题 */
        .list_title {
            /* 自身定位 */
            display: flex;
            position: relative;
            height: 30px;
            padding: 8px 0 8px 4px;
            border: 1px solid #e5e5e5;
            /* 标题文本 */
            span {
                margin-left: 5px;
                line-height: 30px;
            }
        }
        /* 内容 */
        .list_content {
            max-height: 0; /* 如果使用 height ，则无法实现平滑滚动*/
            transition: 0.2s;
            overflow: hidden;
            background-color: #f7f7f7;
            /* 定位子元素 */
            display: flex;
            flex-flow: row wrap;
        }
        /***********
                        动态赋予标签的类
        */
        /* 当前列表项内容处于活跃状态时所展现的样式 */
        .is_active_class {
            max-height: 1024px;
            transition: 0.5s;
        }

        /* 标题中左侧三角形的动态转换 */
        .triangle { /* 当该标题项未处于活跃状态 */
            height: 10px;
            width: 10px;
            border: 10px solid ;
            /*border-color: #000 transparent ;*/
            border-radius: 50%;
            /*border-color: #06a43a deeppink yellowgreen rebeccapurple;*/
            border-color: deeppink rebeccapurple deeppink deeppink;
        }
        .triangle_active { /* 当该标题项处于活跃状态*/
            height: 10px;
            width: 10px;
            border: 10px solid ;
            border-radius: 50%;
            border-color: deeppink deeppink rebeccapurple deeppink;
        }
    }
</style>