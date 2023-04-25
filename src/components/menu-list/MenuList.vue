<template>
    <div class="menu-list">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "MenuList"
  }
</script>

<style scoped lang="scss">
    .menu-list {
        display: flex;
        max-width: 275px;
        height: 100%;
        flex-flow: column nowrap;
        overflow-y: hidden;
        border-right: 3px solid #fff;

        margin: 0;
        padding: 0;

    }
</style>