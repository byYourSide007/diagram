<template>
    <div class="collapse_list">
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
        <div :class="['list_content', {'is_active_class': is_active}]">
            <v-stage :config="config">
                <v-layer ref="layer">
<!--                    <v-shape v-for="item in componentList"-->
<!--                            :config="item"/>-->
                    <div v-for="(item, index) in componentList" :key="index">
                        <v-shape :config="item"/>
                    </div>

<!--                    <v-shape :config="{-->
<!--                      // ...componentList[0],-->
<!--                      sceneFunc: componentListFun-->
<!--                    }"></v-shape>-->

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

        // 控制 konva 展示舞台的相关配置
        config: {
          width: 363,
          height: 100
        },
        // 控制列表内容的显示和隐藏，默认不显示
        is_active: false,
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
      // 函数数据
      componentListFun: {
        type: Function,
        required: true
      }
    },
    methods: {
      // 当点击列表项的标题所触发的函数
      titleClick() {
        this.is_active = !this.is_active;
      },
    },
    created() {
      // console.dir(this.componentList[0].sceneFunc);
      console.dir(this.componentListFun)
    },
  }
</script>

<style scoped lang="scss">
    .collapse_list {
        position: relative;
        /*width: 100%;*/
        width: 363px;
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