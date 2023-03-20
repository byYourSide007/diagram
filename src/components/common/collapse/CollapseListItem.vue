<template>
    <div class="collapse_list_item">
        <!-- 存储图片 -->
        <div class="item_img">
            <slot name="image"></slot>
        </div>
        <!-- 存储文本内容 -->
        <div class="item_text">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CollapseListItem",
    data() {
      return {
        // 图形展示舞台的相关配置属性
        configKonva: {// 设置的属性值需要是不带单位的数值
          width: 363,
          height: 100,
        },
        // 控制列表内容的显示和隐藏，默认不显示
        is_active: false,
        configCircle: { // 圆
          x: 15,
          y: 15,
          radius: 10,
          fill: "red",
          // stroke: "black",
          // strokeWidth: 4
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
    .collapse_list_item {
        /*position: relative;*/
        /*width: 363px;*/
        display: flex;
        flex-flow: column nowrap;
    }
</style>